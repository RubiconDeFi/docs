---
title: Rubicon | Fees
pageTitle: Fees
description: Fee Schedule
---

## Network Fees

Rubicon is an **onchain** order book protocol, all trades and transactions must pay network fees or "gas". On the [Arbitrum](https://arbitrum.io/) and [Optimism](https://www.optimism.io/) networks these fees are paid in ETH.

## Fee Schedule

Rubicon uses a maker-taker fee model. Trades that "take" liquidity from the order book pay a rebate to the liquidity provider or "maker" that placed orders on the book.

| Type       | Amount   | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| Taker Fee  | 0.01%    | Orders that take liquidity pay a 0.01% fee in the ERC-20 token that is sent |
| Maker Fee  | 0.00%    | Orders that make liquidity pay no fees other than gas |
| Maker Rebate | 0.01%  | Orders that make liquidity earn a 0.01% rebate if/when they are filled |

All traders pay the same fees on Rubicon. There are no volume tiers or VIP discounts.