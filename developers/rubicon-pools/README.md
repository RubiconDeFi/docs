---
description: Automated yield for users and liquidity for the Rubicon Market
---

# 🌊 Rubicon Pools

Rubicon Pools is a system of smart contracts that allow users to capture passive yield from active market making. Users deposit assets into a liquidity pool, in return, they receive a liquid LP token denoted by the prefix "bath" (ex. bathETH, bathUSDC). These bath tokens signify the user's proportional ownership of the underlying liquidity pool as well as their proportional claim on future yield from the pool. The assets in the liquidity pools are used by strategists to provide liquidity on the Rubicon open order books; strategists can use custom market-making strategies that pass all the security requirements from the protocol. In the end, the yield from market-making is split between the strategist and the users providing liquidity (LPs).

The Rubicon order book protocol has liquidity pools. Liquidity providers (LPs) deposit tokens into a single asset pool and receive bathTokens, which represent shares of the underlying pool. \
(Ex. LP deposits ETH, receives bathETH)\
\
BathTokens adhere to the [ERC-4626 standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-4626/) for tokenized yield-bearing vaults.

### Architecture

The core structure of this product revolves around _single-asset_ liquidity pools. Users who want passive market-making yield on their assets can deposit into these liquidity pools. From there, these pools are then utilized by strategists, on a pair basis, to perform high-frequency market making for the given pair (asset/quote). Please see below for a diagram of how the core pieces of Rubicon Pools interact with the Rubicon Market.

![Rubicon Smart Contract Infrastructure](<../../.gitbook/assets/image (40).png>)

Rubicon Pools is comprised of four smart contracts that are detailed in these docs:

* **Bath House** - a contract to admin the Rubicon Pools system and permission new pairs.
* **Bath Pair** - a contract to manage pair-specific risk parameters, liquidity, inventory management, security, and strategists.
* **Bath Token** - an ERC-20 "bath" token (e.g. "bathUSDC" is the LP token for contributed USDC) that represents asset-specific liquidity that earns passive yield from market-making.
* **Pairs Trade** - a strategy contract that takes a pair's trade (ask and bid) from a strategist for a given pair and deploys bathToken liquidity according to its internal strategy. The first version of PairsTrade.sol places a pairs trade (ask and bid) with user liquidity according to strategist parameters through `executeStrategy` on BathPair.sol.

### Constraints and Risk Parameters

A key security feature of Rubicon Pools is that supplied liquidity must be placed into the order book as orders, strategists cannot use these assets for anything other than placing orders on Rubicon. Unlike an AMM or constant-function market maker, this strategy must allow for time to pass between the placing of orders, their execution, and (in turn) their for-profit yield being passed through to LPs and strategists. Please see as follows for an overview of key constraints and risk parameters that are controlled by Rubicon:

* **reserveRatio** - to ensure that market-making yield is being correctly passed through to users while allowing for time to pass between the placing (and canceling) of orders, a minimum reserve ratio must be preserved so all user liquidity is not at risk in the order book at a given time.
* **maxOutstandingPairCount** - the maximum quantity of orders (which cannot exceed dynamic order sizing limits) that a pair can have in the order book at a given time.
* **getMaxOrderSize()** - this function returns the largest possible order size that is allowed by Rubicon Pools for a given asset and its liquidity pool.
  * **maxOrderSizeProportion** - the size in percentage points (0<100) that the maximum order for a given liquidity pool can be. This is enforced on every Pools trade.
  *   **Dynamic Sizing:** should the pair relationship of a quote and asset liquidity pool be over-weighted one of the assets, this function will reduce the size of orders on the lacking side of the liquidity pool.

      * For example, assume the price of ETH is $100 and bathETH contains 5 ETH while bathUSDC contains 400 USDC. _The target asset-to-quote ratio for all pairs is the current price of the asset._ In this case, the pool is overweight ETH because (400 USDC / 5 ETH) = 80 != 100 (target ratio and price) so getMaxOrderSize() will return a value that reduces the maximum order size of ETH according to the following:



      * Shape parameter = -0.005 and qt represents the delta between the target ratio and the actual asset/quote ratio that exists across the liquidity pools.

![Optimal High-Frequency Market Making; Fushimi et. al 2018](<../../.gitbook/assets/image (52).png>)

### Key Security Considerations

* **onlyApprovedStrategy** - a modifier that ensures user liquidity can only be utilized by a strategy that has been approved by the BathHouse.
* **onlyPair** - a modifier that ensures user liquidity or a function can only be utilized by a registered BathPair that has been initialized by the BathHouse.
* **enforceReserveRatio** - ensures the reserve ratio of the liquidity pool's underlying asset balance to its amount of deposits is observed and enforced.
* **enforceSpread** - ensures that a strategist pairs trade has both a spread (ask price > non-zero spread > bid price) and that the ask/bid is an actual ask/bid (greater than/less than the middle of the order book price).
* **enforceNoAutoFills** - ensures that pairs trades placed by strategists are truly market-making orders and do not match with an order resulting in the offer being auto-filled as a taker trade.
