---
title: Overview
pageTitle: Overview
description: Welcome to Rubicon guides and developer documentation
---

Welcome to Rubicon guides and developer documentation {% .lead %}

{% quick-links %}

{% quick-link title="New to Rubicon?" icon="installation" href="/" description="Visit our Frequently Asked Questions" /%}

{% quick-link title="Traders" icon="presets" href="/" description="Use the Rubicon protocol to trade ERC-20 tokens with Limit and Market Orders. Visit the guides for the Swap and Trade interfaces" /%}

{% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%}

{% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app's visual design to fit your brand." /%}

{% /quick-links %}

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste.

---

## Quick start

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

## What is Rubicon?

Rubicon is an order book protocol for Ethereum, built on layer 2 (L2) networks. Token swaps, order books, and liquidity pools are available on the [Rubicon App](https://app.rubicon.finance/trade) :arrow\_left:

Rubicon is built on [Optimism](https://optimism.io/), a low-cost and lightning-fast Ethereum L2 chain.

### Protocol Overview

The cornerstone of the protocol is the [RubiconMarket](https://docs.rubicon.finance/rubicon-docs/contracts/rubicon-market) contract, which implements order books for the peer-to-peer trading of ERC-20 tokens.

Rubicon Pools are the native liquidity pools of the Rubicon order books. It is a system of smart contracts that enables passive liquidity providers (LPs) to deposit tokens in a pool, where active market makers (strategists) use the pool assets on the order books. Yield from market-making goes to LPs, and strategists earn a performance fee.

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

