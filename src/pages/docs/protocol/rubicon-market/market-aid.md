---
description: on-chain high-frequency market making
---

## MarketAid

`MarketAid.sol` is a helper contract that allows the owner to send batches of limit orders and cancel orders on `RubiconMarket.sol`. It makes it easy for active traders and market-makers to place and cancel many outstanding orders in a single transaction! You can think of MarketAid as a convenient middle-layer contract that allows traders to make larger, more efficient, and more complex transactions on the Rubicon order books.

After creating an instance of MarketAid, a trader can use powerful batch functions that extend the low-level 'RubiconMarket.sol' functions `offer` and `cancel` as well as combinations of the two. Send a large batch of limit orders with `batchMarketMakingTrades()`, cancel a batch of open orders and replace them with `batchRequoteOffers()`, or cancel lots of open orders with `scrubStrategistTrades()`. Keep reading for a quick start tutorial and overview of the MarketAid functions. If you have any questions or trouble with MarketAid, join our [Discord server](https://discord.com/invite/E7pS24J), our team is happy to help you get started with automated trading on Rubicon!

### Risk Disclaimer

MarketAid is in beta and for sophisticated traders and developers only. Our team uses this code, but it is unaudited so use at your own risk.

### Deployments

Optimism Mainnet:

- [Factory](https://optimistic.etherscan.io/address/0x267D94C6e67e4436EFfE092b08d040cFF36B2DA7)
- [MarketAid Instance Example](https://optimistic.etherscan.io/address/0x40e20121f46237Ae5d6822fd75847CedD17c449F)

Optimism Goerli:

- [Factory](https://goerli-optimism.etherscan.io/address/0x6838dd21aa01Bde8E600d499A95f9AE02f2bB376)
- [MarketAid Instance](https://goerli-optimism.etherscan.io/address/0xd3757c79df77cfac54501b5dadf7ec47a38e1a65)

### Quick Start

Get started with 'MarketAid.sol` by creating a personal instance, funding the contract with ERC-20 tokens, and sending your first batch of orders to `RubiconMarket.sol`! You can use `ethers.js` to integrate this into an existing bot, and we are working on tutorials to make it even easier! Let's get started:

1. Create a new instance of the `MarketAid` contract
    1. Deploy a `MarketAid` instance by calling `createMarketAidInstance()` on the `MarketAidFactory` contract.  This will spawn a new instance of `MarketAid` that is permissioned to the caller of `createMarketAidInstance()` and automatically approve them as a strategist with access to the contract.
     
2. Fund your MarketAid instance with the ERC-20s you want to trade (WETH,USDC, DAI, etc.)
    1. Your MarketAid instance can be queried via `getUserMarketAid()` on `MarketAidFactory` or by reading the event emitted from the `createMarketAidInstance()` call.
    2. Verify you control the contract first via Etherscan by checking the `admin` variable is your address and that you are also an `approvedStrategist`.
    3. Verify you are sending funds to the right address!

3. Send batches of Rubicon orders from your MarketAid contract using the below functions

Note: The owner of a `MarketAid` instance can approve additional addresses to use and access the contract (multiple addresses can clear the `onlyApprovedStrategist` check)

## Troubleshooting

Make sure to check the following:

- Where is my MarketAid instance?
    - Query with `getUserMarketAid()` -> returns an array of all instances you have created
- Your MarketAid instance has approved the contracts you want to interact with
    - Otherwise, transactions will. Using `placeMarketMakingTrades()` will automatically approve the `RubiconMarket` contract
- You are the admin of your Market Aid instance
    - Query with `admin()` on your instance -> returns the EOA that owns the instance
- Any EOA you are trying to manage an ERC20 pair with, via MarketAid is *an approved strategist*
    - Main security check in the contract, admin is auto-approved as a strategist.

## Functions (In Progress)
- placeMarketMakingTrades
- batchMarketMakingTrades
- getOutstandingStrategistTrades *view*
- getStrategistTotalLiquidity *view*
- requote
- batchRequoteOffers
- batchRequoteAllOffers
- scrubStrategistTrade
- scrubStrategistTrades
- adminPullAllFunds
- strategistRebalanceFunds
