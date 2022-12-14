---
title: Rubicon | Fees
pageTitle: Fees
description: Fees on Rubicon
---




## Network Fees 

Rubicon order books are on-chain, all transactions require network fees (gas) that are paid in ETH. Gas fees on [Optimism](https://www.optimism.io/) are 50-100x cheaper than Ethereum Mainnet, you can monitor them on this [public dashboard](https://public-grafana.optimism.io/d/9hkhMxn7z/public-dashboard?orgId=1\&refresh=5m).

### Trading Fees

{% callout title="Taker Fee: 0.01%" %}
Paid by Swaps, Market Orders, and orders that 'take' liquidity from the order book
{% /callout %}

{% callout title="Maker Fee: 0%" %}
Limit Orders that 'make' liquidity on the order book do not pay fees other than gas
{% /callout %}


### Liquidity Pool Fees

{% callout type="warning" title="Withdrawal Fee: 0.03%" %}
A withdrawal fee is paid back into the pool, effectively rewarding remaining liquidity providers. Stops pool spam.
(These are variable protocol parameters and could change)
{% /callout %}
