---
title: Rubicon | Bath Token
pageTitle: Bath Token
description: An ERC-20 token that represents user liquidity in Rubicon Pools
---

## BathToken

The [Bath Token contract](https://github.com/RubiconDeFi/rubicon\_protocol/blob/master/contracts/rubiconPools/BathToken.sol) represents a single asset pool of liquidity within Rubicon Pools. These pools are named by adding the prefix "bath" to the name of the underlying token (e.g. bathUSDC).&#x20;

When a liquidity provider (LP) deposits tokens into a Rubicon pool, they receive a corresponding amount of bathTokens. Ex: an LP depositing USDC will receive bathUSDC.&#x20;

BathTokens are essentially a share of the underlying pool.

LPs earn market-making yields while strategists use pool assets to provide liquidity on the Rubicon order books.&#x20;

![](</assets/Rubicon v1\_ BathTokens.png>)

### Key Functions

* `deposit` - this function allows a user to deposit an ERC-20 asset and receive bathTokens at a ratio of `totalSupply` / `underlyingBalance()` with their deposit. This means that a user will receive shares in the pool that are proportional to the performance of shares in the pool already; this ensures there is no way to game the system and upside is correctly shared across all participants. A `bathToken` represents a share of the underlying liquidity and has a claim on future yield.
  * Input Parameter: uint `amount` - the quantity of the ERC-20 asset to deposit.
* `withdraw` - this function withdraws provided liquidity and any accrued yield that the user has (via the burning of BathTokens) earned back to their wallet.
  * Input Parameter: uint `shares` - the quantity of `bathTokens` (shares in the underlying pool) to withdraw in exchange for the underlying ERC-20 asset.
