---
title: Rubicon | Bath Pair
pageTitle: BathPair
description: Pair-specific market-making and strategy execution
---

## Bath Pair

The [BathPair contract](https://github.com/RubiconDeFi/rubicon\_protocol/blob/master/contracts/rubiconPools/BathPair.sol) represents the heart of Rubicon Pools by allowing strategists, user liquidity, and key security considerations the ability to come together for a given trading pair. This contract allows strategists to deploy user liquidity in order to market make on the Rubicon Market. Moreover, this contract ensures that user funds are safe from potentially malicious actors and stay within the closed-loop system that is Rubicon Pools.

### Key Functions

* `initializePair` - this function is called when the Bath House initializes this contract. This function creates new Bath Tokens if they do not exist for the given Bath Pair instance and points the Pair to an existing quote Bath Token if it already exists.
* `executeStrategy` - this is the core function of BathPair.sol. In version zero of Rubicon Pools, it allows a strategist to place a pairs trade (ask and bid) with the underlying bathToken liquidity that is managed by this Pair. _This function is the entry point for strategists to market make and leverage user liquidity._
  *   The parameters provided by the strategist when calling this function are:&#x20;

      ```
          address targetStrategy,
          uint256 askNumerator, // *Asset Amt* / Quote Amt
          uint256 askDenominator, // Asset Amt / *Quote Amt*
          uint256 bidNumerator, // *Quote Amt* / Asset Amt
          uint256 bidDenominator // Quote Amt / *Asset Amt*
      ```
* `getMaxOrderSize` - this function returns the largest order size for a bid or an ask that a strategist can place with user funds. Moreover, this function ensures that relative order sizing and dynamic [inventory management](/docs/protocol/rubicon-pools/rubicon-pools#constraints-and-risk-parameters) are enforced.
* `strategistBootyClaim` - this function is called by strategists to automatically return earned yield to them that may have been earned with successful market-making. The key calculation for claiming yield is (Quantity of order fills as a result of this strategist) / (Total quantity of order fills for the given asset) \* (Underlying amount of yield).

### Key Security Parameters and Execution Flow

There are a number of security parameters that are in place to ensure that malicious actors or poor market makers cannot ineffectively deploy user capital on the Rubicon Market. All of these functions and parameters play a role in the single function call made by the strategist: `executeStrategy`. Please see them below in the order in which they occur throughout the execution of the function call.

* `onlyApprovedStrategy` - the target strategy of this function call must be approved by the Bath House.
* `enforceReserveRatio` - this modifier ensures that the `reserveRatio` for each of the underlying liquidity pools (asset and quote bathTokens) is observed _before and after function execution_.
* `getMaxOrderSize` - this function is used here to ensure that the numerator (what is being used from the liquidity pools) of the bid and ask adhere to the pairs dynamic inventory management constraints.
* `enforceSpread` - this function ensures that (a) there is a spread on the orders submitted for a pairs trade and (b) that the pairs trade has an ask/bid price that is on the correct half of the order book (ask/bid is a valid ask/bid >/< midpoint price of the order book). A price oracle will be implemented in future versions to further ensure that midpoint of the order book is respected as a valid point of reference.
* `IPairsTrade(targetStrategy).execute` - the strategy is then called and a pairs trade is placed. See PairsTrade.sol.
* `cancelPartialFills` - this crucial function parses through the outstanding orders for this pair in the order book and (a) cancels any orders whose counterparts (the bid to an ask) of the pairs trade have been filled. This represents a yield event in which a pair's trade was partially filled. (b) Any orders that have exceeded the `timeDelay` for this pair are canceled to ensure no liquidity is locked in old orders.
* `rebalancePair` - this simple function sends any filled orders that send ERC-20 assets to a Bath Token's sister pool (Asset <-> Quote) back to the correct liquidity pool so yield can be realized.&#x20;
