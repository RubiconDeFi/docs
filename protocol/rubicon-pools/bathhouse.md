---
description: The admin contract for Rubicon Pools
---

# Bath House

The [BathHouse contract](https://github.com/RubiconDeFi/rubicon\_protocol/blob/master/contracts/rubiconPools/BathHouse.sol) acts as the admin for the Rubicon Pools system while providing key, high-level functions to the system. The most important functions of the BathHouse are to initialize new BathPairs, approve strategies, and manage liquidity pool organization and routing.

### Key Functions

* `initBathPair`- this function initializes a BathPair. In practice, this allows new liquidity pools to be formed across a new pair of Rubicon while integrating said pair with an existing quote liquidity pool (e.g. bathUSDC) if it does not already exist.&#x20;
* `getBathPair` - a getter function to allow the caller to easily determine the BathPair address for a given combination of `(address asset, address quote)`.
* **Strategy Management**
  * This contract manages which "strategies" are supported by Rubicon Pools. Presently, the only strategy permitted in v0 is the PairsTrade - in which a strategist makes a single pairs trade per function call.
  * `isApprovedStrat` - function to verify if a given caller or address is an approved strategy.
  * `approveStrategy` - admin function to add a new strategy to Rubicon Pools.
* **Parameter Management**
  * This contract controls a few system-level parameters which are relevant to strategists and LPs alike.
  * `setCancelTimeDelay`- this function sets the `timeDelay` on BathPair.sol after which unfilled orders are canceled in the order books.
  * `setMaxOutstandingPairCount` - this function sets the `maxOutstandingPairCount` value for a given BathPair. This value defines how many orders can be outstanding in the order book for a given trading pair.
* `onlyAdmin` - the BathHouse is presently run by the Rubicon team and has the ability to be administered by any address including, for example, a DAO multi-sig.&#x20;
