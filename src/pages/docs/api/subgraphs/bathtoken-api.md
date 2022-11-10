---
description: >-
  An overview of the BathToken subgraph's key entities, contract event handlers,
  and example queries for a variety of use cases.
---

# BathToken API

## **BathToken Key Entities**&#x20;

The BathToken subgraph contains a collection of entities that collect and store data related to liquidity provider activity and pool utilization for market-making on the protocol's order books. Below are key entities that we believe users will find most relevant to their data needs.&#x20;

### _**LiquidityProvider Entity (ID: Wallet Address)**_

```graphql
type LiquidityProvider @entity { 
    " <user adddress> "
    id: ID!
    " derived fields"
    positions: [PoolPosition!]! @derivedFrom(field: "liquidityProvider")
    deposits: [Deposit!]! @derivedFrom(field: "liquidityProvider")
    withdraws: [Withdraw!]! @derivedFrom(field: "liquidityProvider")
}
```

The LiquidityProvider entity acts as a single point of reference to collect all activity with Rubicon liquidity pools from a wallet's address. From within a LiquidityProvider entity, you can access the PoolPosition, Deposit, and Withdraw entities. The contract events that update these events are as follows:&#x20;

| Variable Updated                                                  | Function                                                                                                                                                                                                                                          | Event Emit                                                                                                                                                                                                                                                                                                             | Contract      |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| LiquidityProvider.positionsLiquidityProvider.deposits  | function deposit(   uint256 _amount) external returns (   uint256 shares) {    uint256 _pool = underlyingBalance();    uint256 _before = underlyingToken.balanceOf(address(this)); | event LogDeposit(    uint256 depositedAmt,   IERC20 asset,    uint256 sharesReceived,   address depositor,    uint256 underlyingBalance,   uint256 outstandingAmount,   uint256 totalSupply );                                                          | BathToken.sol |
| LiquidityProvider.positionsLiquidityProvider.withdraws | function withdraw(   uint256 _shares) external returns (   uint256 amountWithdrawn);                                                                                                                    | event LogWithdraw(    uint256 amountWithdrawn,   IERC20 asset,    uint256 sharesWithdrawn,    address withdrawer,    uint256 fee,    address feeTo,    uint256 underlyingBalance,    uint256 outstandingAmount,    uint256 totalSupply ); | BathToken.sol |

### _PoolPosition Entity (ID: \<user address>#\<pool underlying asset address>)_

```graphql
type PoolPosition @entity {
    " <user address>#<pool underlying asset address> "
    id: ID!
    " the liquidity provider is "
    liquidityProvider: LiquidityProvider!
    " the pool is "
    pool: Pool!
    " current bathToken balance "
    bathTokenAmount: BigInt!
    " total value of pool deposits "
    totalDeposited: BigInt!
    " total value of pool withdraws "
    totalWithdrawn: BigInt!
}
```

The PoolPosition entity represents the active state of a user's holdings in a Rubicon liquidity pool. To access the current state of the pool, including the total volume, outstanding amount, and bathToken price, the Pool entity can be accessed. All values are denominated in the integer value of the underlying ERC20 token that they represent. The contract events that update these entities are as follows:&#x20;

| Variable Updated                                                   | Function                                                                                                                                                                                                                             | Event Emit                                                                                                                                                                                                      | Contract      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| PoolPosition.bathTokenAmountPoolPosition.totalDeposited | function deposit(uint256 _amount) external returns(uint256 shares) { uint256 _pool = underlyingBalance(); uint256 _before = underlyingToken.balanceOf(address(this)); | event LogDeposit( uint256 depositedAmt, IERC20 asset, uint256 sharesReceived, address depositor, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply );                                   | BathToken.sol |
| PoolPosition.bathTokenAmountPoolPosition.totalWithdrawn | function withdraw(uint256 \_shares) external returns (uint256 amountWithdrawn)                                                                                                                                                       | event LogWithdraw( uint256 amountWithdrawn, IERC20 asset, uint256 sharesWithdrawn, address withdrawer, uint256 fee, address feeTo, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply ); | BathToken.sol |

### Pool Entity (ID: \<pool underlying asset address>)

```graphql
type Pool @entity { 
    " <pool underlying asset address> " 
    id: ID! 
    " derived from "
    bathHouse: BathHouse!
    " pool name "
    name: String!
    " pool asset address "
    underlyingToken: String!
    " creation time "
    createdAtTimestamp: BigInt!
    " block pool was created at "
    createdAtBlockNumber: BigInt!
    " address of bath token creator "
    bathTokenCreator: String!
    " pool underlying balance (amount in pool and on books) "
    underlyingBalance: BigInt!
    " amount of pool assets outstanding on the orderbook "
    outstandingAmount: BigInt!
    " shares outstanding (BathTokens) "
    tokenSupply: BigInt!
    " total value of pool deposits "
    totalDeposited: BigInt!
    " total value of pool withdraws "
    totalWithdrawn: BigInt!
    " BathToken Price: total suppply / underlying balance "
    price: BigDecimal!
    " total earned from market making activity "
    totalEarned: BigInt!
    " daily snapshots of pool data "
    poolDayData: [PoolDayData!]! @derivedFrom(field: "pool")
    " hourly snapshots of pool data "
    poolHourData: [PoolHourData!]! @derivedFrom(field: "pool")
    " derived fields "
    deposits: [Deposit!]! @derivedFrom(field: "pool")
    withdraws: [Withdraw!]! @derivedFrom(field: "pool")
    PoolBuffers: [PoolBuffer!]! @derivedFrom(field: "pool")
}
```

The Pool entity contains all relevant information regarding the current, and historical state, or a liquidity pool. The Pool entity maps to multiple other entities that is is associated with. The most relevant entities it maps are the PoolDayData, PoolHourData, and PoolBuffer entities. The totalEarned variable of the Pool entity is calculated as follows

$$
totalEarned = underlyingBalance - (totalDeposited - totalWithdrawn)
$$

Every Pool entity also has two associated entities that tracks pool statistics over a set period of time: PoolDayData & PoolHourData. The IDs for these pair are as follows:&#x20;

* PoolDayData(ID: \<pool underlying asset address>#\<timestamp rounded to current day by dividing by 86400>)
* PoolHourData(ID: \<pool underlying asset address>#_\<timestamp rounded to current hour by dividing by 3600>_)

All values are denominated in the integer value of the underlying ERC-20 token that they represent. The contract events that update these entities are as follows:&#x20;

| Variable Updated                                                                                                              | Function                                                                                                                                                                  | Event Emit                                                                                                                                                                                                      | Contract          |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Pool.underlyingBalancePool.tokenSupplyPool.tokensMintedPool.totalDepositedPool.pricePool.Deposits  | function deposit(uint256 \_amount) external returns (uint256 shares) { uint256 \_pool = underlyingBalance(); uint256 \_before = underlyingToken.balanceOf(address(this)); | event LogDeposit( uint256 depositedAmt, IERC20 asset, uint256 sharesReceived, address depositor, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply );                                   | BathToken.sol     |
| Pool.underlyingBalancePool.tokenSupplyPool.tokensBurnedPool.totalWithdrawnPool.pricePool.Withdraws | function withdraw(uint256 \_shares) external returns (uint256 amountWithdrawn)                                                                                            | event LogWithdraw( uint256 amountWithdrawn, IERC20 asset, uint256 sharesWithdrawn, address withdrawer, uint256 fee, address feeTo, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply ); | BathToken.sol     |
| Pool.underlyingBalancePool.outstandingAmountPool.totalEarnedPool.PoolBuffers                               | function rebalance( address destination, address filledAssetToRebalance, /\* sister or fill asset \*/ uint256 stratProportion, uint256 rebalAmt )                         | event LogRebalance( IERC20 pool\_asset, address destination, IERC20 transferAsset, uint256 rebalAmt, uint256 stratReward, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply );          | BathToken.sol     |
| Pool.underlyingBalancePool.outstandingAmountPool.totalEarnedPool.PoolBuffers                               | function placeOffer( uint256 pay\_amt, ERC20 pay\_gem, uint256 buy\_amt, ERC20 buy\_gem )                                                                                 | event LogPoolOffer( uint256 id, IERC20 pool\_asset, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply );                                                                                | BathToken.sol     |
| Pool.underlyingBalancePool.outstandingAmountPool.totalEarnedPool.PoolBuffers                               | function buy(uint256 id, uint256 quantity) public virtual can\_buy(id) synchronized returns (bool)                                                                        | event LogTake( bytes32 indexed id, bytes32 indexed pair, address maker, ERC20 pay\_gem, ERC20 buy\_gem, address indexed taker, uint128 take\_amt, uint128 give\_amt, uint64 timestamp );                        | RubiconMarket.sol |

### PoolBuffer Entity (ID: \<pool underlying asset address>#\<buffer asset address>)

```graphql
type PoolBuffer @entity {
    " <pool underlying asset address>#<buffer asset address> "
    id: ID!
    " the pool is"
    pool: Pool!
    " token address of asset in buffer "
    token: String!
    " name of asset in buffer "
    name: String!
    " amount of token in buffer "
    bufferAmount: BigInt!
}
```

The PoolBuffer entity corresponds to the amount of a sister pairs asset that is sitting on the liquidity pool waiting to be rebalanced. The visual below will help to explain this process and what the Pool Buffer amount corresponds to.&#x20;

TODO: \*insert visualization from above\*

Every PoolBuffer entity also has two associated entities that tracks PoolBuffer statistics over a set period of time: PoolDayData & PoolHourData. The IDs for these pair are as follows:&#x20;

* PoolBufferDay(ID: \<pool underlying asset address>#\<buffer asset address>#\<timestamp rounded to current day by dividing by 86400>)
* PoolBufferHour(ID: \<pool underlying asset address>#\<buffer asset address>#_\<timestamp rounded to current hour by dividing by 3600>_)

All values are denominated in the integer value of the underlying ERC-20 token that they represent. The contract events that update these entities are as follows:&#x20;

| Variable Updated        | Function                                                                                                                                          | Event Emit                                                                                                                                                                                             | Contract          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| PoolBuffer.bufferAmount | function rebalance( address destination, address filledAssetToRebalance, /\* sister or fill asset \*/ uint256 stratProportion, uint256 rebalAmt ) | event LogRebalance( IERC20 pool\_asset, address destination, IERC20 transferAsset, uint256 rebalAmt, uint256 stratReward, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply ); | BathToken.sol     |
| PoolBuffer.bufferAmount | function buy(uint256 id, uint256 quantity) public virtual can\_buy(id) synchronized returns (bool)                                                | event LogTake( bytes32 indexed id, bytes32 indexed pair, address maker, ERC20 pay\_gem, ERC20 buy\_gem, address indexed taker, uint128 take\_amt, uint128 give\_amt, uint64 timestamp );               | RubiconMarket.sol |

### Deposit Entity (ID: \<transaction hash>#\<user address>)

```graphql
type Deposit @entity {
    " <transaction hash>#<user address> "
    id: ID!
    " time of txn "
    timestamp: BigInt!
    " transaction details "
    transaction: Transaction!
    " pool to deposit in "
    pool: Pool!
    " amount deposited into pool "
    depositAmount: BigInt!
    " Bath Tokens received "
    bathTokenAmount: BigInt! 
    " BathToken Price: total suppply / underlying balance "
    price: BigDecimal!
    " liquidity provider "
    liquidityProvider: LiquidityProvider!
    " map to PoolDayData entity "
    poolDayData: PoolDayData!
    " map to PoolHourData entity "
    poolHourData: PoolHourData!
} 
```

The Deposit entity corresponds to any deposit placed by a liquidity provider into the Rubicon pools. The Deposit entity contains all relevant data regarding the deposit, such as deposit amount and shares received, along with mapping to other relevant entities. All values are denominated in the integer value of the underlying ERC20 token that they represent. The contract events that update these entities are as follows:&#x20;

| Variable Updated                                                                                                                         | Function                                                                                                                                                                  | Event Emit                                                                                                                                                                    | Contract      |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Deposit.timestampDeposit.transactionDeposit.poolDeposit.depositAmountDeposit.bathTokenAmountDeposit.price | function deposit(uint256 \_amount) external returns (uint256 shares) { uint256 \_pool = underlyingBalance(); uint256 \_before = underlyingToken.balanceOf(address(this)); | event LogDeposit( uint256 depositedAmt, IERC20 asset, uint256 sharesReceived, address depositor, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply ); | BathToken.sol |

### Withdraw Entity (ID: \<transaction hash>#\<user address>)

```graphql
type Withdraw @entity {
    " <transaction hash>#<user address> "
    id: ID!
    " time of txn "
    timestamp: BigInt!
    " transaction details "
    transaction: Transaction!
    " pool to withdraw from "
    pool: Pool!
    " amount withdrawn from the pool "
    withdrawAmount: BigInt!
    " Bath Tokens burned "
    bathTokenBurned: BigInt! 
    " BathToken Price: total suppply / underlying balance "
    price: BigDecimal!
    " liquidity provider "
    liquidityProvider: LiquidityProvider!
    " map to PoolDayData entity "
    poolDayData: PoolDayData!
    " map to PoolHourData entity "
    poolHourData: PoolHourData!
} 
```

The Withdraw entity corresponds to any deposit placed by a liquidity provider into the Rubicon pools. The Withdraw entity contains all relevant data regarding the deposit, such as withdraw amount and shares received, along with mapping to other relevant entities. All values are denominated in the integer value of the underlying ERC20 token that they represent. The contract events that update these entities are as follows: &#x20;

| Variable Updated                                                                                                                            | Function                                                                       | Event Emit                                                                                                                                                                                                      | Contract      |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Withdraw.timestampWithdraw.transactionWithdraw.poolWithdraw.withdrawAmountWithdraw.bathTokenBurnedWithdraw.price | function withdraw(uint256 \_shares) external returns (uint256 amountWithdrawn) | event LogWithdraw( uint256 amountWithdrawn, IERC20 asset, uint256 sharesWithdrawn, address withdrawer, uint256 fee, address feeTo, uint256 underlyingBalance, uint256 outstandingAmount, uint256 totalSupply ); | BathToken.sol |

## _**Example Queries**_

The following queries are some common use case scenarios for potential data needs relating to the BathToken subgraph.&#x20;

| Use Case                                               | Subgraph Studio Example                                                                                                                  |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Access a User's liquidity pool positions               | [Pool Positions](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/bathtoken?query=liquidityProviders)                      |
| Check on the current statistics of the liquidity pools | [Current Pool Statistics](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/bathtoken?query=Pools)                          |
| Load in the historical pools data                      | [Historical Pools Data](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/bathtoken?query=Pools%20Historical%20Performance) |
