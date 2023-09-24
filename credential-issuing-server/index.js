const express = require('express');
const axios = require('axios');
const cors = require('cors');
const btoa = require('btoa');

const PID_API_URL = 'http://127.0.0.1:3001/v1/';
const username = 'user-issuer';
const password = 'password-issuer';

const app = express();

const issuerDID = 'did:polygonid:polygon:mumbai:2qP76XCvaobqBWSP5UC9c7MiAbo1Va2jSH2qS9cihe';
app.use(cors({ origin: 'http://localhost:3000' })); // Set CORS headers using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const paths = {
    identities: 'identities',
    publishOnChain: (did) => `${did}/state/publish`,
    createClaim: (did) => `${did}/claims`,
    claimQrCode: (did, claimId) => `${did}/claims/${claimId}/qrcode`,
};

const headersConfig = {
    Authorization: 'Basic ' + btoa(username + ':' + password),
    'Content-Type': 'application/json',
};

const createIdentity = async (body) =>
    await axios({
        method: 'POST',
        url: `${PID_API_URL}${paths.identities}`,
        data: body,
        headers: headersConfig,
    });

const createClaim = async (userDID, isNotUsed) => {
    const body = {
        credentialSchema: 'https://raw.githubusercontent.com/gendev1/zk-subs/main/schema/maskd.json',
        type: 'usersubscription',
        credentialSubject: {
            id: userDID,
            isnotused: isNotUsed,
        },
        expiration: 1680532130,
    };

    return await axios({
        method: 'POST',
        url: `${PID_API_URL}${paths.createClaim(issuerDID)}`,
        data: body,
        headers: headersConfig,
    });
};

const claimQrCode = async (did, claimId) =>
    await axios({
        method: 'GET',
        url: `${PID_API_URL}${paths.claimQrCode(did, claimId)}`,
        headers: headersConfig,
    });

app.post('/identity', async (req, res) => {
    try {
        const { data } = await createIdentity(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.post('/claim', async (req, res) => {
    try {
        const { data } = await createClaim(req.body.issuerDID, req.body.userDID, req.body.lensID, req.body.lensfollowers);

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

app.get('/claim/:did/:claimId', async (req, res) => {
    try {
        const { data } = await claimQrCode(req.params.did, req.params.claimId);

        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

app.listen(4000, () => console.log('Server running on port 4000'));
