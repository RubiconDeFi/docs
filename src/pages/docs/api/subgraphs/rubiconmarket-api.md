---
description: >-
  An overview the RubiconMarket subgraph's key entities, contract event
  handlers, and example queries for a variety of use cases.
---

# RubiconMarket API

## **RubiconMarket Key Entities**&#x20;

The RubiconMarket subgraph contains a collection of entities that collect and store data related to trading activity on the protocol's order books. Below are key entities that we believe user's will find most relevant to their data needs.&#x20;

### _**User Entity (ID: Wallet Address)**_

```graphql
type User @entity { 
    " <user address> "
    id: ID!
    " derived values "
    swaps: [Swap!]! @derivedFrom(field: "user")
    openOffers: [OpenOffer!]! @derivedFrom(field: "user")
    offers: [Offer!]! @derivedFrom(field: "user")
    takers: [Taker!]! @derivedFrom(field: "user")
}
```

The user entity acts as a single point of reference to collect all trading activity related to a wallet's address. From within a user entity you can access the Swap, OpenOffer, Offer, and Taker entities.&#x20;

### _Offer & OpenOffer Entities (ID: Offer ID Hash)_&#x20;

```graphql
type Offer @entity { 
    " <offer id hash> "
    id: ID!
    " time of transaction "
    timestamp: BigInt!
    " track to User entity "
    user: User!
    " track to Transaction entity "
    transaction: Transaction!
    " track to Pair entity "
    pair: Pair!
    " track to DayPair entity "
    dayPair: DayPair!
    " track to HourPair entity "
    hourPair: HourPair!
    " asset the taker is paying in "
    takeAsset: Token!
    " asset the maker is selling "
    makeAsset: Token!
    " amout of takeAsset for makeAsset "
    takeAmount: BigInt!
    " amount of makeAsset for takeAsset "
    makeAmount: BigInt!
    " price of takeAmount in ETH "
    priceTakeAssetETH: HistoricalAssetPriceETH!
    " price of makeAmount in ETH "
    priceMakeAssetETH: HistoricalAssetPriceETH!
    " price of takeAmount in ETH "
    priceTakeAssetUSD: HistoricalAssetPriceUSD!
    " price of makeAmount in ETH "
    priceMakeAssetUSD: HistoricalAssetPriceUSD!
    " amount received of takeAsset "
    receivedTakeAmount: BigInt!
    " amount of partial fill on makeAsset "
    partialFillMakeAmount: BigInt!
    " variable for if offer is killed "
    killed: Boolean!
    " when the order is killed or filled "
    timeKilled: BigInt!
}
```

The Offer entity represents all maker trades that a user has made on the Rubicon order books. The Offer entity maps to multiple other entities that it is associated with. For most use cases, the most relevant entities are the Transaction entity, which contains all transaction details (time, block number, gas cost) about the offer, and the "HistoricalAssetPriceETH/USD" entities, which contains details about the last trade of an Asset to either ETH or USD on RubiconMarket (this allows the user to track the historical performance of their trade quoted in ETH & USD). All values are denominated in the integer value of the underlying ERC-20 token that they represent.&#x20;

```graphql
type OpenOffer @entity { 
    " <offer id hash> "
    id: ID!
    " time of transaction "
    timestamp: BigInt!
    " track to User entity "
    user: User!
    " track to Transaction entity "
    transaction: Transaction!
    " track to Pair entity "
    pair: Pair!
    " track to DayPair entity "
    dayPair: DayPair!
    " track to HourPair entity "
    hourPair: HourPair!
    " asset the taker is paying in "
    takeAsset: Token!
    " asset the maker is selling "
    makeAsset: Token!
    " amout of takeAsset for makeAsset "
    takeAmount: BigInt!
    " amount of makeAsset for takeAsset "
    makeAmount: BigInt!
    " price of takeAmount in ETH "
    priceTakeAssetETH: HistoricalAssetPriceETH!
    " price of makeAmount in ETH "
    priceMakeAssetETH: HistoricalAssetPriceETH!
    " price of takeAmount in ETH "
    priceTakeAssetUSD: HistoricalAssetPriceUSD!
    " price of makeAmount in ETH "
    priceMakeAssetUSD: HistoricalAssetPriceUSD!
    " amount received of takeAsset "
    receivedTakeAmount: BigInt!
    " amount of partial fill on makeAsset "
    partialFillMakeAmount: BigInt!
} 
```

The OpenOffer entity is a copy of the Offer entity with two caveats: 1) when an offer is either filled or removed from the book the associated OpenOffer entity is removed from the subgraph (these removed entities can still be accessed through a [time travel query](https://thegraph.com/docs/en/developer/graphql-api/#time-travel-queries)), and 2) the OpenOffer entity does not contain the variable fields "killed" (false if offer is filled or on the book and true if an offer is canceled) or "timeKilled" (zero if offer is still on the book, updated to the time the offer is taken off the book).&#x20;

### _Taker Entity (ID: Transaction Hash)_

```graphql
type Taker @entity { 
    " <transaction hash> "
    id: ID!
    " time of transaction "
    timestamp: BigInt!
    " track to User entity "
    user: User!
    " track to Transaction entity "
    transaction: Transaction!
    " track to Pair entity "
    pair: Pair!
    " track to DayPair entity "
    dayPair: DayPair!
    " track to HourPair entity "
    hourPair: HourPair!
    " asset the taker is paying in "
    takeAsset: Token!
    " asset the maker is selling "
    makeAsset: Token!
    " amout of takeAsset for makeAsset "
    takeAmount: BigInt!
    " amount of makeAsset for takeAsset "
    makeAmount: BigInt!
    " price of takeAmount in ETH "
    priceTakeAssetETH: HistoricalAssetPriceETH!
    " price of makeAmount in ETH "
    priceMakeAssetETH: HistoricalAssetPriceETH!
    " price of takeAmount in ETH "
    priceTakeAssetUSD: HistoricalAssetPriceUSD!
    " price of makeAmount in ETH "
    priceMakeAssetUSD: HistoricalAssetPriceUSD!
    " fee for the taker "
    takerFee: BigInt!
    " maker entity of the trade "
    maker: Offer!
}
```

The Taker entity represents all taker trades that have occurred on the Rubicon order books. The Taker entity maps to multiple other entities that it is associated with. The most relevant entities it maps to for most use cases is the Transaction entity, containing all transaction details (time, block number, gas cost) about the trade, the "HistoricalAssetPriceETH/USD" entities, containing details about the last trade of an Asset to either ETH or USD on the Rubicon Market (this allows the user to track the historical performance of their trade quoted in ETH & USD), and the Offer entity, the offer that the trade is taking off the book. All values are denominated in the integer value of the underlying ERC-20 token that they represent.&#x20; 

### _Swap Entity (ID: Transaction Hash)_

```graphql
type Swap @entity { 
    " <transaction hash> "
    id: ID!
    " time of transaction "
    timestamp: BigInt!
    " track to User entity "
    user: User!
    " track to Transaction entity "
    transaction: Transaction!
    " track to Pair entity "
    pair: Pair!
    " track to DayPair entity "
    dayPair: DayPair!
    " track to HourPair entity "
    hourPair: HourPair!
    " asset the taker is paying in "
    takeAsset: Token!
    " asset the maker is selling "
    makeAsset: Token!
    " amout of takeAsset for makeAsset "
    takeAmount: BigInt!
    " amount of makeAsset for takeAsset "
    makeAmount: BigInt!
    " price of takeAmount in ETH "
    priceTakeAssetETH: HistoricalAssetPriceETH!
    " price of makeAmount in ETH "
    priceMakeAssetETH: HistoricalAssetPriceETH!
    " price of takeAmount in ETH "
    priceTakeAssetUSD: HistoricalAssetPriceUSD!
    " price of makeAmount in ETH "
    priceMakeAssetUSD: HistoricalAssetPriceUSD!
    " fee for the taker "
    takerFee: BigInt!
} 
```

The Swap entity represents all swap trades that a user has made on the Rubicon order books. The Swap entity maps to multiple other entities that it is associated with. The most relevant entities it maps to for most use cases is the Transaction entity, containing all transaction details (time, block number, gas cost) about the swap, and the "HistoricalAssetPriceETH/USD" entities, containing details about the last trade of an Asset to either ETH or USD on the Rubicon Market (this allows the user to track the historical performance of their trade quoted in ETH & USD). All values are denominated in the integer value of the underlying ERC-20 token that they represent.&#x20;

### _AssetPriceETH/USD (ID: \<asset>#\<ETH/USD>) & HistoricalAssetPriceETH/USD Entities (ID: \<asset>#\<ETH/USD>#\<timestamp>)_

```graphql
type AssetPriceETH @entity {
    " <asset>#<ETH> "
    id: ID!
    " time of last price update "
    timestamp: BigInt!
    " asset "
    asset: Token!
    " price of asset in ETH "
    assetPriceETH: BigDecimal!
    " most recent price of asset in ETH "
    lastPriceETH: HistoricalAssetPriceETH!
}

type AssetPriceUSD @entity {
    " <asset>#<ETH> "
    id: ID!
    " time of last price update "
    timestamp: BigInt!
    " asset "
    asset: Token!
    " price of asset in ETH "
    assetPriceUSD: BigDecimal!
    " most recent price of asset in USD "
    lastPriceUSD: HistoricalAssetPriceUSD!
}
```

The AssetPriceETH/USD entity represents the price that an asset most recently traded at on the Rubicon order book against either ETH or a stablecoin. The AssetPriceUSD entity contains the stablecoin that most recently traded against the asset to get the USD price, this informs how many decimal places should be accounted for in the price calculation. The AssetPrice entity maps to the most recent traded price through the HistoricalAssetPriceETH/USD entity:&#x20;

```graphql
type HistoricalAssetPriceETH @entity {
    " <asset>#<ETH>#<timestamp> "
    id: ID!
    " time of last price update "
    timestamp: BigInt!
    " asset "
    asset: Token!
    " asset amount "
    assetAmount: BigInt!
    " eth amount "
    ethAmount: BigInt!
    " price of asset in ETH "
    historicalAssetPriceETH: BigDecimal!
}

type HistoricalAssetPriceUSD @entity {
    " <asset>#<ETH>#<timestamp> "
    id: ID!
    " time of last price update "
    timestamp: BigInt!
    " asset "
    asset: Token!
    " usd asset "
    usdAsset: Token
    " asset amount "
    assetAmount: BigInt!
    " usd amount "
    usdAmount: BigInt!
    " price of asset in USD "
    historicalAssetPriceUSD: BigDecimal!
}
```

All values are denominated in the integer value of the underlying ERC-20 token that they represent.&#x20; 

### _FullPair (ID: \<token0 address>#\<token1 address>) & Pair Entities (ID: \<pay\_token address>#\<buy\_token address>)_

```graphql
type FullPair @entity {
    " <token0 address>#<token1 address> "
    id: ID!
    " <pay_token = token0>#<buy_token = token1> "
    pair0: Pair
    " <pay_token = token1>#<buy_token = token0> "
    pair1: Pair
    " last trade across the pair "
    lastTrade: Trade
    " map to all trades across the pair "
    trades: [Trade!]! @derivedFrom(field: "fullPair")
}
```

The FullPair entity represents any ERC20-ERC20 pair that has traded on the Rubicon's order books. This entity maps to two pair entities, they differ from each other in which ERC20 of the pair is the pay/buy token respectively. This represents both directions of trades between an ERC20-ERC20 pair. The lastTrade variable represents the last trade of this pair, regardless of direction, and can be used to access the most recent price data (ERC20 to ERC20, ERC20 to ETH, ERC20 and to USD) of the pair.&#x20;

```graphql
type Pair @entity { 
    " <pay_token address>#<buy_token address> "
    id: ID!
    " market entity "
    market: RubiconMarket!
    " first started trading at "
    startAtTimestamp: BigInt!
    " block in which pair first started trading "
    startBlockNumber: BigInt!
    " pay_token "
    pay_token: Token!
    " buy_token "
    buy_token: Token!
    " pay_token price - most recent trade price derived from buy_token "
    pricePayToken: BigDecimal!
    " buy_token price - most recent trade price derived from pay_token "
    priceBuyToken: BigDecimal!
    " volume in pay_token "
    volumePayToken: BigInt!
    " volume in buy_token "
    volumeBuyToken: BigInt!
    " total number of trades of that pair "
    txCount: BigInt!
    " total fees collected of pay_token for this pair "
    payTokenFees: BigInt!
    " total fees collected of buy_token for this pair "
    buyTokenFees: BigInt!
    " token metrics on that day "
    dayPairs: [DayPair!]! @derivedFrom(field: "pair")
    " token metrics for that hour "
    hourPairs:  [HourPair!]! @derivedFrom(field: "pair")
    " derived values "
    swaps: [Swap!]! @derivedFrom(field: "pair")
    openOffers: [OpenOffer!]! @derivedFrom(field: "pair")
    offers: [Offer!]! @derivedFrom(field: "pair")
    takers: [Taker!]! @derivedFrom(field: "pair")
    trades: [Trade!]! @derivedFrom(field: "pair")
} 
```

The Pair entity represents any directional trade across an ERC20-ERC20 pair. The direction corresponds to which ERC20 of the pair is the pay\_token (take asset) and which is the buy\_token (make asset). Every pair also has an associated pair entity that tracks pair statistics over a set period of time: 1) MonthPair, 2) WeekPair, 3) DayPair, and 4) HourPair. The IDs for these pair are as follows:&#x20;

* MonthPair(ID: \<pay\_token address>#\<buy\_token address>#\<timestamp rounded to current day by dividing by 2629743>)
* WeekPair(ID: \<pay\__token address>#\<buy_\__token address>#\<timestamp rounded to current day by dividing by 604800>_)
* DayPair(ID: \<pay\_token address>#\<buy\_token address>#\<timestamp rounded to current day by dividing by 86400>)
* HourPair(ID: \<pay\_token address>#\<buy\_token address>#\<timestamp rounded to current day by dividing by 3600>)

All values are denominated in the integer value of the underlying ERC20 token that they represent.&#x20; 

### _Token Entity (ID: Token Address)_

```graphql
type Token @entity { 
    " <token address> "
    id: ID!
    " market entity "
    market: RubiconMarket!
    " first started trading at "
    startAtTimestamp: BigInt!
    " block in which token first started trading "
    startBlockNumber: BigInt!
    " token symbol "
    symbol: String!
    " token name "
    name: String!
    " token decimals "
    decimals: Int!
    " volume in token units "
    volume: BigInt!
    " total number of transactions involving that token "
    txCount: BigInt!
    " total fees collected for this token "
    tokenFees: BigInt!
    " token metrics on that day "
    dayTokens: [DayToken!]! @derivedFrom(field: "token")
    " token metrics for that hour "
    hourTokens:  [HourToken!]! @derivedFrom(field: "token")
} 
```

The Token entity tracks data related to the activity of an ERC20 token on the Rubicon order books.  Every Token also has an associated Token entity that tracks token statistics over a set period of time: DayToken and HourToken. The IDs for these Token entities is as follows:&#x20;

* DayToken(ID: \<token address>#\<timestamp rounded to current day by dividing by 86400>)
* HourToken(ID: \<token address>#\<timestamp rounded to current day by dividing by 86400>

All values are denominated in the integer value of the underlying ERC20 token that they represent.&#x20;

## _**Example Queries**_

The following queries are some common use case scenarios for potential data needs relating to the RubiconMarket subgraph.&#x20;

| Use Case                                                | Subgraph Studio Example                                                                                                          |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Access a User's trade history                           | [User Trade History](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/rubiconmarket?query=User%20Trade%20Activity) |
| Access a User's open offers                             | [User Open Offer](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/rubiconmarket?query=User%20Open%20Offer)        |
| Check the status of the entire order book               | [All Order Books](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/rubiconmarket?query=ORDERBOOK)                  |
| Historical trading stats for tokens by day              | [Day Trading Stats](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/rubiconmarket?query=Day%20Token%20Stats)      |
| Last trade and entire trade history of a pair of assets | [Pair Trade History](https://thegraph.com/hosted-service/subgraph/denverbaumgartner/rubiconmarket?query=FullPairs)               |
