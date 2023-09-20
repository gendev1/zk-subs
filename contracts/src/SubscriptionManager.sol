// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SubscriptionManager {
    // struct to store provider details
    struct Provider {
        uint256 id;
        string name;
        string url;
        uint256 feePerMonth;
    }

    struct Subscription {
        uint256 id;
        uint256 startDate;
        uint256 endDate;
        uint256 amountPaid;
    }

    address private owner;
    uint256 public providerCount = 0;
    uint256 public subscriptionCount = 0;
    // mapping to store provider details
    mapping(address => Provider) public providers;
    mapping(address => mapping(uint256 => Subscription)) public subscriptions;

    constructor() {
        owner = msg.sender;
    }

    // provider is subscription provider
    // provider details are stored in a struct
    // payable since to stop people from spamming
    // creating subscription costs 0.001 ETH
    function registerProvider(
        string memory _name,
        string memory _url,
        uint256 _feePerMonth
    ) public payable {
        require(msg.value == 0.001 ether, "Not enough ETH sent");
        require(providers[msg.sender].id == 0, "Provider already registered");

        providerCount++;

        providers[msg.sender] = Provider({
            id: providerCount,
            name: _name,
            url: _url,
            feePerMonth: _feePerMonth
        });

        emit ProviderRegistered(providerCount, _name, _feePerMonth);
    }

    function updateProviderFee(uint256 _feePerMonth) public {
        require(providers[msg.sender].id != 0, "Provider not registered");

        providers[msg.sender].feePerMonth = _feePerMonth;
        emit ProviderFeeUpdated(providers[msg.sender].id, _feePerMonth);
    }

    // create subscription
    // subscription details are stored in a struct
    // payable
    // subscription cost depends on fee per month set for provider
    function createSubscription(address _provider) public payable {
        require(providers[_provider].id != 0, "Provider not registered");
        require(
            msg.value == providers[_provider].feePerMonth,
            "Not enough ETH sent"
        );

        uint256 subscriptionId = subscriptions[msg.sender][
            providers[_provider].id
        ].id;

        require(subscriptionId == 0, "Subscription already exists");

        subscriptionId++;

        subscriptions[msg.sender][providers[_provider].id] = Subscription({
            id: subscriptionId,
            startDate: block.timestamp,
            endDate: block.timestamp + 30 days,
            amountPaid: msg.value
        });
    }

    // cancel subscription
    // subscription details are stored in a struct
    // not payable
    function cancelSubscription(address _provider) public {
        require(providers[_provider].id != 0, "Provider not registered");

        uint256 subscriptionId = subscriptions[msg.sender][
            providers[_provider].id
        ].id;

        require(subscriptionId != 0, "Subscription does not exist");

        delete subscriptions[msg.sender][providers[_provider].id];
    }

    event ProviderRegistered(uint256 id, string name, uint256 feePerMonth);
    event ProviderFeeUpdated(uint256 id, uint256 feePerMonth);
}
