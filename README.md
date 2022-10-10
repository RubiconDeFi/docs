---
description: Rubicon guides and documentation
---

# 🗺 Start Here

## Welcome :wave:

New to Rubicon? Visit our Frequently Asked Questions:

{% content-ref url="faq.md" %}
[faq.md](faq.md)
{% endcontent-ref %}

### **Traders:**

Use the Rubicon protocol to trade ERC-20 tokens with Limit and Market Orders. Visit the guides for the Swap and Trade interfaces on the [Rubicon App](https://app.rubicon.finance/):

{% content-ref url="swap.md" %}
[swap.md](swap.md)
{% endcontent-ref %}

{% content-ref url="trade/" %}
[trade](trade/)
{% endcontent-ref %}

For support, join the [Rubicon Discord](https://discord.com/invite/E7pS24J) server and send a message in the **#support** channel.

### **Developers:**

The best way to understand the Rubicon protocol is to [read the code](https://github.com/RubiconDeFi/rubicon-protocol-v1) on GitHub!

Documentation for the order book contract:

{% content-ref url="developers/rubicon-market/" %}
[rubicon-market](developers/rubicon-market/)
{% endcontent-ref %}

Documentation for the liquidity pool contract(s):

{% content-ref url="developers/rubicon-pools/" %}
[rubicon-pools](developers/rubicon-pools/)
{% endcontent-ref %}

APIs for querying market and liquidity pool data:

{% content-ref url="api/subgraphs/" %}
[subgraphs](api/subgraphs/)
{% endcontent-ref %}

List of smart contract addresses and protocol deployments:

{% content-ref url="contracts/kovan-deployments.md" %}
[kovan-deployments.md](contracts/kovan-deployments.md)
{% endcontent-ref %}

Security audit reports:

{% content-ref url="developers/audits.md" %}
[audits.md](developers/audits.md)
{% endcontent-ref %}

## What is Rubicon?

Rubicon is an order book protocol for Ethereum, built on layer 2 (L2) networks. Token swaps, order books, and liquidity pools are available on the [Rubicon App](https://app.rubicon.finance/trade) :arrow\_left:

Rubicon is built on [Optimism](https://optimism.io/), a low-cost and lightning-fast Ethereum L2 chain.

### Protocol Overview

The cornerstone of the protocol is the [RubiconMarket](https://docs.rubicon.finance/rubicon-docs/contracts/rubicon-market) contract, which implements order books for the peer-to-peer trading of ERC-20 tokens.

Rubicon Pools are the native liquidity pools of the Rubicon order books. It is a system of smart contracts that enables passive liquidity providers (LPs) to deposit tokens in a pool, where active market makers (strategists) use the pool assets on the order books. Yield from market-making goes to LPs, and strategists earn a performance fee.

![Rubicon v1 Architecture](<.gitbook/assets/Rubicon v1\_ RubiconMarket (1).png>)

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

