---
description: The main entry points and functions of the Rubicon Market contract
---

# Key Functions

#### Offer

```
    function offer(uint pay_amt, ERC20 pay_gem, uint buy_amt, ERC20 buy_gem, uint pos) 
        public returns (uint)
```

The **offer** function is the primary function to place a new limit buy or limit sell order on the Rubicon market. This function takes a user's funds for a given _ERC-20 pair_ and places them into the order book of the smart contract. When another user chooses to buy the order or the order is matched with another order, the offer will be filled and the trade executed by the Rubicon Market.

| Parameter                 | Use                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| uint pay\_amt             | The quantity of the asset that the user is _offering in wad_                                                                                 |
| ERC20 pay\_gem            | The ERC-20 asset that the user is _offering_                                                                                                 |
| uint buy\_amt             | The quantity of the asset that the user is hoping to _exchange for in wad_                                                                   |
| ERC20 buy\_gem            | The asset the user is hoping to _exchange for_                                                                                               |
| uint pos                  | The position in the _sorted order book_ to place the order. Set this to 0 unless you know the exact position (closest id) to place the order |
| \[Optional] bool matching | Optional boolean that dictates _whether or not the offer should be automatically matched_ if possible                                        |

It is important to note that the offer function has a few representations in the Rubicon market. _Optionally,_ a user can add a _pos_ or _matching_ parameter. These allow the user to choose where in the sorted order book the offer should live and whether or not the offer should be subject to potential automatic matching of the order.

#### Buy

```
    function buy(uint id, uint amount) public can_buy(id) 
        returns (bool)
```

| Parameter   | Use                                                          |
| ----------- | ------------------------------------------------------------ |
| uint id     | The id of the order the user wants to buy                    |
| uint amount | The wad quantity/portion of the order the user wants to buy  |

The buy function allows a user to buy a given order in the order book and ultimately calls super.buy() in the RubiconMarket.sol contract. Furthermore, the buy function will also result in the caller paying the trade fee (see fees).

#### Cancel

```
    function cancel(uint id)
        public
        can_cancel(id)
        returns (bool success)
```

| Parameter | Use                                          |
| --------- | -------------------------------------------- |
| uint id   | The id of the order the user wants to cancel |

This function allows a user to cancel an offer and returns funds to the user. The modifier **can\_cancel** checks to make sure that the caller owns the offer and the offer is active. Alternatively, the user can also use the **kill** routing function to achieve the same result and cancel their order at a given id.

### Routing Functions

#### BuyAllAmount

```
     function buyAllAmount(
        ERC20 buy_gem,
        uint256 buy_amt,
        ERC20 pay_gem,
        uint256 max_fill_amount
    ) external returns (uint256 fill_amt)
```

| Parameter | Use                                          |
| --------- | -------------------------------------------- |
| uint id   | The id of the order the user wants to cancel |

This function allows a user to buy any amount of an asset (buy\_gem) through multiple orders in the book. The function will keep buying through orders until the desired buy-amt is acquired.

#### Take

```
    function take(bytes32 id, uint128 maxTakeAmount) public
```

| Parameter          | Use                                                          |
| ------------------ | ------------------------------------------------------------ |
| uint id            | The id of the order the user wants to buy                    |
| uint maxTakeAmount | The wad quantity/portion of the order the user wants to buy  |

This is simply a routing function that allows a user to easily take an offer through the **take** entry point. This will route a user to then _buy the offer._
