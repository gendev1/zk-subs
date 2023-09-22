# zk-subs

## TODO

- [ ] Create keypairs for the user
- [ ] User payment to Broker
- [ ] Create ZKP for the user
- [ ] Verify Contract 
- [ ] Payment Withdraw for Provider
- [ ] Integrate payment for Subscriber / Ideally connect Superfluid

### UI

**Provider**

- [ ] Create Provider Components
- [ ] Wallet Connection (**use ThirdWeb or any other**)
- [ ] Provider Form (name, id (auto), wallet address))
- [ ] Connect Provider Contract 

**Subscriber**

- [ ] Create Subscriber Components
- [ ] Wallet Connection (**use ThirdWeb or any other**) for payments
- [ ] Create Key Pairs using (ThirdWeb or any other)
- [ ] Subscriber Form (created public key, sub-id(auto))
- [ ] Make payment to Broker
- [ ] Send transaction hash, public_key, sub-id to **Broker Backend**
- [ ] **Broker Backend** Verify the transaction hash and create ZKP
- [ ] **Broker Backend** Send ZKP to **Broker Frontend**
- [ ] Download button for ZKP

**Provider Auth Page**

- [ ] Create component or lirary for Provider Auth
- [ ] Button (Auth with ZK-Subs)
- [ ] OnClick open a model with option to upload ZKP
- [ ] Upload ZKP and verify using Verification Contract
- [ ] **Provider** should also be able to verify the transaction hash using **Broker Backend**
- [ ] If verified, show the service to the user


** Nice To Haves **
- [ ] Integrate bridge to allow streams on any chain, Can be a project seperately altogether
- [ ] Deploy to starknet

### Provider -> Broker Registration
```javascript
//Sample data
{
    id,
    name,
    address  
}
```

### User -> Broker Payments
```javascript
//User makes a payment
// ZKP is generated using our backend
{
    providerId,
    subscriberId,
    address,
    uniqueId
}

// Along with above details, a unique is passed to ZKP generator so that no one can tamper the data

// User then gets a proof where it can be submitted to Provider
```

### Provider -> Broker Verification
```javascript
// Provider sends the proof to Broker to verify the payment
{
    proof
}

// ONce verified, Provider provides the service to the user

// Provider will be able to verify using Brokers library
```



