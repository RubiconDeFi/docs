---
title: Rubicon | Order Types
pageTitle: Order Types
description: Supported order types on the Rubicon order book protocol
---


## Market Orders

Market Orders specify a **quantity** and are filled instantly at the market price, the best possible price on the order book. Swaps are effectively Market orders. These orders pay the [taker fee](/docs/guides/trade/fees).

## Limit Orders

Limit Orders specify a **price and a quantity** and are filled if the market price crosses the limit price. There is no [maker fee](/docs/guides/trade/fees) on Rubicon, so a Limit Order that `makes` liquidity on the book pays no fees other than gas.

You can manage and cancel outstanding orders under the **Open Orders** tab on [Trade](https://app.rubicon.finance/trade) in the App.



More order types are currently under development, join our [**Discord**](https://discord.com/invite/E7pS24J) and let us know what types you want to see!
