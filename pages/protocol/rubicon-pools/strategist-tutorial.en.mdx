---
title: Rubicon | Strategist Tutorial
pageTitle: Strategist Tutorial
description: An overview of how to be a strategist for Rubicon Pools
---

## Strategist

Strategists have the ability to place a bid and/or an ask using BathToken liquidity for the purposes of market-making on the Rubicon order book. They utilize off-chain strategies to place trades within the bounds of the Pools system and win rewards.

### Strategist Entry Points and Levers

The strategist in the Pools system has three key functions that they can utilize to market make on Rubicon. The strategist enjoys the benefit of winning a proportion of all fills they create while market-making (see `strategistBootyClaim`) with `bathToken` funds. The three main functions are as follows:

* `executeStrategy` - this is the core function a strategist utilizes to place trades within the closed-loop system. It allows for the placing of a bid and/or an ask in the order book while logging the strategist and key data so they can be rewarded for NPV-positive market-making behavior
* `bathScrub` - this function is the mandatory "cleaning" function that must be performed on Rubicon Pools for it to operate efficiently. This function parses through outstanding orders on a given `BathPair`. This ensures that after "time expiry" any orders still in the order book are logged for yield and liquidity is returned to the pool. Moreover, this function must be called to reduce the outstanding quantity of orders for a given pair to adhere to `maxOutstandingPairCount`
* `removeLiquidity` - this function allows a strategist to go "risk-off" and remove liquidity from the order book that they placed with Pools liquidity.

### Key Ideas

Strategists have a core entry point in order to utilize user funds and market-make on the Rubicon Market: the `executeStrategy` function on BathPair.sol. The role of a strategist is to find exact offers to make with user funds that are automatically, and exclusively, placed in the Rubicon order book; Pools allows for a bid or ask to be placed in the Rubicon order book.

This function has a number of inputs __ that map directly into the `offer` function on RubiconMarket.sol:

```
function executeStrategy(
        address targetStrategy, //address of the strategy to use - PairsTrade in v0
        uint256 askNumerator, // *Asset Amt* / Quote Amt
        uint256 askDenominator, // Asset Amt / *Quote Amt*
        uint256 bidNumerator, // *Quote Amt* / Asset Amt
        uint256 bidDenominator // Quote Amt / *Asset Amt*
    )
```

* `targetStrategy` - the address of the contract executing a market-making strategy with the given inputs. In the current version of Pools the [_only approved strategy is the Pairs Trade_](/docs/protocol/rubicon-pools/bathpair).
* `askNumerator` - the exact numerator ([pay\_am](/docs/protocol/rubicon-market/key-functions#offer)[t](https://www.youtube.com/watch?v=dQw4w9WgXcQ)) that will be used to make a trade with LP funds in an asset quantity (e.g. WBTC).
* `askDenominator` - the exact denominator ([buy\_amt](/docs/protocol/rubicon-market/key-functions#offer)) that will be used to make a trade with LP funds in a quote asset amount (e.g. USDC).
* `bidNumerator` - the exact numerator ([pay\_am](/docs/protocol/rubicon-market/key-functions#offer)[t](https://www.youtube.com/watch?v=dQw4w9WgXcQ)) that will be used to make a trade with LP funds in a quote asset amount (e.g. USDC).
* `bidDenominator` - the exact denominator ([buy\_amt](/docs/protocol/rubicon-market/key-functions#offer)) that will be used to make this bid in an asset amount (e.g. WETH).

The strategist should determine off-chain the best bids and asks to make based on market conditions for user funds in order to receive a payout for successful fills.