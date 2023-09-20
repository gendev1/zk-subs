# zk-subs

## TODO

- [ ] Create keypairs for the user
- [ ] User payment to Broker
- [ ] Create ZKP for the user
- [ ] Verify Contract 
- [ ] Payment Withdraw for Provider
  



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



