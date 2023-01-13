---
title: Rubicon | Pools Growth Rates
pageTitle: Pools Growth Rates
description: Understanding the growth rates of Rubicon Pools
---

# Growth Rates

{% callout type="warning" title="Disclaimer" %}
Using Rubicon Pools has [**certain risks**](/docs/protocol/rubicon-pools/risks). Exercise caution and only deposit what you can afford to lose.
{% /callout %}


[Rubicon Pools](/docs/protocol/rubicon-pools/rubicon-pools) are the native liquidity pools for the Rubicon order books. Liquidity providers deposit tokens into a pool, where pool liquidity is used by active market makers (strategists) to provide liquidity on the order books. The yield from market-making activities goes to the liquidity providers, with a performance fee going to the strategist.

The performance of a pool (i.e. bathTokens, which represent an LP's share of the pool) is determined by the profitability of strategist market-making. Importantly, pool returns are _discrete and not continuous_ as they are generated when trades are filled.&#x20;

Pools utilize an open-source pool share model first implemented by yEarn vaults; for more details on how discrete returns are used to extrapolate an assumed APY and pool share structure, check out this great [explanation](https://docs.yearn.finance/getting-started/guides/how-to-understand-yvault-roi) by yEarn (our APR/APY estimations use the same approach).

A helpful concept to understand the performance of any given pool is the pool's virtual "price". This value is calculated based on the `underlyingBalance` / `totalSupply` for a pool; this represents the underlying assets vs. the number of shares. This value increasing represents realized yield for bathToken holders.

On the [Pools page](https://app.rubicon.finance/pools) in the web app, each liquidity pool has a corresponding estimated APR:

![](/assets/image(8).png) 

Hovering over this rate will show a tooltip with additional rates for each pool. The main rate is an estimated APY, which is calculated from _the better of trailing weekly or monthly performance for the pool._ Here is an overview of how these rates are calculated:

7-Day % Change - `Change in pool performance or share price in the last 7 days.`

30-Day % Change - `Change in pool performance or share price in the last 30 days.`

Gross APR - `The better of trailing 7d vs 30d change * (One year / sample size)`

Estimated APY - `The better of trailing 7d vs 30d change as a rate^(One year / sample size) -1`

Rewards APR - `Annualizes the rate at which rewards accrue and the current reward token price`
