---
description: Overview of RubiconMarket.sol and its key functionalities
---

# 📊 Rubicon Market

The core exchange logic of Rubicon lives in the [RubiconMarket](https://github.com/RubiconDeFi/rubicon\_protocol/blob/master/contracts/RubiconMarket.sol)smart contract - the central order book of Rubicon. It is useful to think of this smart contract as a middle layer that facilitates the peer-to-peer exchange of digital assets through an order book.

On-chain, all entities that are trading peer-to-peer through Rubicon call functions that exist on this smart contract. Detailed documentation as to the key functions, interactions, and interfaces of this contract can be found below.

## Key Concepts

#### The Order Book

The central feature of the Rubicon Market is an [order book](https://www.investopedia.com/terms/o/order-book.asp) of both buy and sell offers for any given **ERC-20 / ERC-20 pair** **of tokens**. Importantly, the Rubicon Market presently only supports the transacting of ERC-20 / ERC-20 pairs. At its core, the order book on the Rubicon Market works like popular order book exchanges in the traditional financial system like the NYSE, NASDAQ, or even Coinbase.

#### Order Matching

A feature of the Rubicon Market is its ability to _optionally_ match offers in the order book. The most important variable for matching is the **matchingEnabled** parameter which is determined at the protocol level. When matching is enabled, offers can optionally be automatically matched with offers that are close to existing offers in the order book (+-1 at the 17th integer of the wad) by way of price. If a user does not want their order to be eligible for matching, they should call the _offer_ function with the four core parameters, otherwise providing the _pos_ or _matching_ parameter will allow the order to match. A user can choose to place an offer that has matching functionality into the order book by using the optional parameters of the offer function.

###
