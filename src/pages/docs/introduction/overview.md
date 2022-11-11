---
title: Overview
pageTitle: Overview
description: Welcome to Rubicon guides and developer documentation
---

Welcome to Rubicon guides and developer documentation {% .lead %}

{% quick-links %}

{% quick-link title="FAQ" icon="installation" href="/docs/introduction/faq" description="New to Rubicon? Visit our Frequently Asked Questions" /%}

{% quick-link title="Guides" icon="presets" href="/docs/guides/trade/trade" description="Learn how to Trade, Swap, Bridge, and provide liquidity on the Rubicon App!" /%}

{% quick-link title="RubiconMarket" icon="plugins" href="/docs/api/subgraphs/rubiconmarket-api" description="Documentation for the order book contract." /%}

{% quick-link title="APIs" icon="theming" href="/docs/api/subgraphs/subgraphs" description="Query market data with Subgraphs or interact with Rubicon using Python and Rust SDKs" /%}

{% /quick-links %}

What is Rubicon?
Rubicon is an order book protocol for Ethereum. Use it to trade ERC-20 tokens with Swaps, Limit Orders, and Market Orders or provide liquidity in Pools.

Rubicon is built on Optimism, a low-cost and lightning-fast Ethereum L2 chain.

Protocol Overview
RubiconMarket.sol is the limit order book smart contract. It implements a matching engine and order books for peer-to-peer trading of ERC-20 tokens.

Rubicon Pools is a system of smart contracts that enables passive liquidity providers (LPs) to deposit tokens in a pool, where active market makers (strategists) use the pool assets on the order books. Yield from market-making goes to LPs, and strategists earn a performance fee.

![Rubicon v1 Architecture](/assets/Rubicon_v1_RubiconMarket.png)

## Developers: Start Rubicon Protocol Locally

```bash
$ git clone https://www.github.com/RubiconDeFi/rubicon_protocol.git   
$ cd rubicon_protocol && npm i
$ npm i --save-dev openzeppelin-solidity@2.5.1
$ truffle init
$ 'n' for overwriting contracts
$ 'n' for overwriting migrations
$ (in separate terminal) ganache-cli
```

Also make sure that you comment out the lines in truffle-config.js that say 'development: ' and include localhost under networks so that you can connect to Ganache.&#x20;

```bash
$ truffle migrate -- deploys contracts to development network, i.e. localhost
$ truffle test -- run the set of tests provided in the test folder of repo
```

