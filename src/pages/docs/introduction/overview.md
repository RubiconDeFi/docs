---
title: Rubicon | Overview
pageTitle: Overview
description: Documentation & User Guides for Rubicon
---

Rubicon Documentation and User Guides {% .lead %}

{% quick-links %}

{% quick-link title="FAQ" icon="installation" href="/docs/introduction/faq" description="New here? Visit the Frequently Asked Questions" /%}

{% quick-link title="Guides" icon="presets" href="/docs/guides/trade/trade" description="Learn how to Trade, Swap, Bridge, and provide liquidity on the Rubicon App!" /%}

{% quick-link title="RubiconMarket" icon="plugins" href="/docs/protocol/rubicon-market/rubicon-market" description="Docs for the order book contract." /%}

{% quick-link title="APIs" icon="theming" href="/docs/api/subgraphs/subgraphs" description="Documentation for Rubicon subgraphs and SDKs" /%}

{% /quick-links %}

## What is Rubicon?

Rubicon is an order book protocol for trading [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) tokens.

The protocol is built on a low-cost and lightning-fast Ethereum [Layer 2](https://ethereum.org/en/layer-2/) chains. Rubicon is live on [Optimism](https://www.optimism.io/).

## Protocol Overview

RubiconMarket is a [limit order book](https://en.wikipedia.org/wiki/Central_limit_order_book) smart contract. It implements a matching engine and order books for peer-to-peer trading of ERC-20 tokens.

Rubicon Pools is a system of smart contracts that enables passive liquidity providers (LPs) to deposit tokens in a pool, where active market makers (strategists) use the pool assets on the order books. Yield from market-making goes to LPs, and strategists earn a performance fee.

![Rubicon v1 Architecture](/assets/Rubicon_v1_RubiconMarket.png)
