---
description: Overview and documentation for Rubicon's order book contract
---

# 📊 RubiconMarket

## Overview

The RubiconMarket smart contract implements on-chain order books and a matching engine for peer-to-peer trading of ERC-20 tokens.

An order book is a list of buy and sell orders for an asset, sorted by price. This contract implements each ERC20/ERC20 order book as two double-linked sorted lists, one for the Buy-side and one for the Sell-side of the given market.

The contract uses an escrow model for liquidity; when a limit order is placed on the book, those tokens are sent to the contract. If/when the order is filled, the contract matches the traders directly and the tokens are sent. An order can be canceled and the contract will return the tokens to the sender.

RubiconMarket is a derivative work of MakerDAO's [OasisDEX](https://oasisdex.com/) and inherits the open-source AGPL-3.0 license.


## Trading Functions

#### offer()

```
    function offer(uint pay_amt, ERC20 pay_gem, uint buy_amt, ERC20 buy_gem, uint pos) 
        public returns (uint)
```

| Parameter Name         | Type        | Description                                                                                                                       |
| ---------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| pay\_amt               | uint256     | Quantity of ERC-20 tokens the maker is selling                                                                                    |
| pay\_gem               | address     | ERC-20 token the maker is selling                                                                                                 |
| uint buy\_amt          | uint256     | Quantity of ERC-20 tokens the maker is buying                                                                                     |
| ERC20 buy\_gem         | address     | ERC-20 token the maker is buying                                                                                                  |
| uint pos               | uint256     | Position in the sorted list to place the order. Set this to 0 unless you know the exact position (closest ID) to insert the order |
| \[Optional] matching   | bool        | Optional boolean that dictates whether or not the offer should be automatically matched if possible                               |

This is the primary function for placing limit orders on Rubicon. The 'pay_amt' quantity of the 'pay_gem' token will be sent to the order book contract, sitting in escrow until it's filled or canceled. Always set pos to 0 unless you know the exact position to insert your order.

#### cancel()

```
    function cancel(uint id)
        public
        can_cancel(id)
        returns (bool success)
```

| Parameter Name         | Type        | Description                                    |
| ---------------------- | ----------- | ---------------------------------------------- |
| id                     | uint256     | The id of the order the user wants to cancel   |

This function cancels an offer on the order book and returns the tokens to the sender's address. The **can\_cancel** modifier checks that the target order is active and is owned by the caller. Alternatively, you can also use the **kill()** routing function to achieve the same result and cancel an offer.

#### buy()

```
    function buy(uint id, uint amount) public can_buy(id) 
        returns (bool)
```

| Parameter Name         | Type        | Description                                    |
| ---------------------- | ----------- | ---------------------------------------------- |
| id                     | uint256     | The id of the target order                     |
| amount                 | uint256     | Quantity of the target order to buy            |

This function is used to fill or "cherry pick" a specific order in the book. The caller will pay the taker fee. Alternatively, you can also use the **take()** routing function to achieve the same result and fill a specific offer.

#### buyAllAmount()

```
     function buyAllAmount(
        ERC20 buy_gem,
        uint256 buy_amt,
        ERC20 pay_gem,
        uint256 max_fill_amount
    ) external returns (uint256 fill_amt)
```

| Parameter Name         | Type        | Description                                    |
| ---------------------- | ----------- | ---------------------------------------------- |
| buy\_gem               | address     | ERC-20 token the taker is buying               |
| buy\_amt               | uint256     | Quantity of tokens the taker is buying         |
| pay\_gem               | address     | ERC-20 token the taker is selling              |
| max\_fill\_amount      | uint256     | Maximum amount of pay tokens sold              |

Attempts to trade `buy\_amt` quantity of `buy\_gem` tokens for at most the `max\_fill\_amount` quantity of `pay\_gem` tokens. Transaction will revert if the trader would spend more than the specified maximum amount. This is a "Fill-or-Kill" buy order.

Example: 
A trader wants to buy exactly 10 WETH with USDC. They use the WETH address for `buy\_gem`, `10000000000000000000` for `buy\_amt`, and the USDC address for `pay\_gem`. At most they will pay 15000 USDC for 10 WETH, using `15000000000` for `pay\_gem`. They may end up paying less USDC than this, but the transaction will revert if they would receive less than 10 WETH for 15000 USDC.

#### sellAllAmount()

```
     function sellAllAmount(
        ERC20 pay_gem,
        uint256 pay_amt,
        ERC20 buy_gem,
        uint256 min_fill_amount
    ) external returns (uint256 fill_amt)
```

| Parameter Name         | Type        | Description                                    |
| ---------------------- | ----------- | ---------------------------------------------- |
| pay\_gem               | address     | ERC-20 token the taker is selling              |
| pay\_amt               | uint256     | Quantity of tokens the taker is selling        |
| buy\_gem               | address     | ERC-20 token the taker is buying               |
| min\_fill\_amount      | uint256     | Minimum amount of buy tokens received          |

Attempts to trade sell\_amt quantity of sell\_gem tokens for at least the min\_fill\_amount quantity of pay\_gem tokens. Transaction will revert if the trader would receive less than the specified minimum amount. This is a "Fill-or-Kill" sell order.

Example: 
A trader wants to sell exactly 10 WETH for USDC. They use the WETH address for `pay\_gem`, `10000000000000000000` for `pay\_amt`, and the USDC address for `buy\_gem`. At least they will receive 15000 USDC for 10 WETH, using `15000000000` for `buy\_gem`. They may end up receiving more USDC than this, but the transaction will revert if they would receive less than 15000 USDC for 10 WETH.

## View Functions

#### getBestOffer()

```
function getBestOffer(ERC20 pay_gem, ERC20 buy_gem)
    public
    view
    returns (uint256)
```

Returns the ID of the offer at the top of the order book.

Ex. Calling this function with WETH as pay_gem and USDC as buy_gem will return the best ask on WETH/USDC. Switching the tokens will return the best bid.

#### getWorseOffer

```
function getWorseOffer(uint256 id) 
    public 
    view 
    returns (uint256)
```

Returns the next worse offer in the sorted list. The worse offer is the higher one if the target order is an ask, and a lower one if it's a bid. In both cases, it will return a newer one if they are equal.

#### getOfferCount()

```
function getOfferCount(ERC20 sell_gem, ERC20 buy_gem)
        public
        view
        returns (uint256)
```

Returns the number of offers in the order book for a specified pair.

#### getFeeBPS()

```
function getFeeBPS() 
    public 
    view 
    returns (uint256)
```

Returns the protocol taker fee, in basis points.

