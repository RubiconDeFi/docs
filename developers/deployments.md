---
description: Rubicon smart contract addresses
---

# 🔎 Deployments

## Optimism Mainnet (Rubicon v1.3)

Below is a list of Rubicon deployments on [Optimism](https://www.optimism.io/). Please note that we utilize the [transparent upgradeable proxy standard](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies); the contract addresses of all deployments are found below and each proxy's underlying implementation is viewable via [Etherscan](https://optimistic.etherscan.io/).

**Rubicon Market:** [0x7a512d3609211e719737E82c7bb7271eC05Da70d](https://optimistic.etherscan.io/address/0x7a512d3609211e719737E82c7bb7271eC05Da70d)

**Rubicon Router:** [0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf](https://optimistic.etherscan.io/address/0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf#readProxyContract)

**BathHouse:** [0x203328C161D23dCEee3E439DeEB25cA19e2c4984](https://optimistic.etherscan.io/address/0x203328C161D23dCEee3E439DeEB25cA19e2c4984#code)****\
**BathPair:** [0xF8780E00Ce8ed2e79aeC10908a169900eD1D4AFe](https://optimistic.etherscan.io/address/0xF8780E00Ce8ed2e79aeC10908a169900eD1D4AFe#code)

**bathETH:** [0xB0bE5d911E3BD4Ee2A8706cF1fAc8d767A550497](https://optimistic.etherscan.io/address/0xB0bE5d911E3BD4Ee2A8706cF1fAc8d767A550497)      \
**bathWBTC:** [0x7571CC9895D8E997853B1e0A1521eBd8481aa186](https://optimistic.etherscan.io/address/0x7571CC9895D8E997853B1e0A1521eBd8481aa186)****\
**bathUSDC:** [0xe0e112e8f33d3f437D1F895cbb1A456836125952](https://optimistic.etherscan.io/address/0xe0e112e8f33d3f437D1F895cbb1A456836125952) \
**bathDAI:** [0x60daEC2Fc9d2e0de0577A5C708BcaDBA1458A833](https://optimistic.etherscan.io/address/0x60daEC2Fc9d2e0de0577A5C708BcaDBA1458A833) \
**bathUSDT:** [0xfFBD695bf246c514110f5DAe3Fa88B8c2f42c411](https://optimistic.etherscan.io/address/0xfFBD695bf246c514110f5DAe3Fa88B8c2f42c411) \
**bathSNX:** [0xeb5F29AfaaA3f44eca8559c3e8173003060e919f](https://optimistic.etherscan.io/address/0xeb5F29AfaaA3f44eca8559c3e8173003060e919f#code)\
**bathOP:** [0x574a21fE5ea9666DbCA804C9d69d8Caf21d5322b](https://optimistic.etherscan.io/address/0x574a21fE5ea9666DbCA804C9d69d8Caf21d5322b)



_You can find the location of all BathToken liquidity pools and contracts by querying `getBathTokenFromAsset` on_ [_BathHouse_](https://optimistic.etherscan.io/address/0x203328C161D23dCEee3E439DeEB25cA19e2c4984#readProxyContract) _with the underlying ERC-20 token's address. Bath Tokens are unique to each ERC-20._

[View Rubicon contracts](https://optimistic.etherscan.io/accounts/label/rubicon) tagged & labeled on Etherscan

## Optimism Kovan (v1)

Please see below for live v1 deployments. All contracts are verified on Etherscan and everything but Bath Tokens (deployed natively via BathHouse) are proxy wrapped.\
\
**Please note, the below are proxy contracts whose live implementation can be found via Etherscan** (via Contract > Read as Proxy)

RubiconMarket: [0x15Db07A69F42a7c83e792fAc0776E710CdCD3F3f](https://kovan-optimistic.etherscan.io/address/0x15Db07A69F42a7c83e792fAc0776E710CdCD3F3f#readProxyContract)\
BathHouse: [0x68B5fBd7CEFEE3076e4101920b13C9Cc1A6cbF0e](https://kovan-optimistic.etherscan.io/address/0x68B5fBd7CEFEE3076e4101920b13C9Cc1A6cbF0e)\
BathPair: [0x45Da67AAAAa0164cC2f8789CE1B9EAcEABE70c51](https://kovan-optimistic.etherscan.io/address/0x45Da67AAAAa0164cC2f8789CE1B9EAcEABE70c51)

RubiconRouter: [0x8316F9a27e6F632a54D1E1F21aF347D4E0Cc38Dd](https://kovan-optimistic.etherscan.io/address/0x8316F9a27e6F632a54D1E1F21aF347D4E0Cc38Dd)

Note: any existing bathTokens are queried via [tokenToBathToken() on BathHouse](https://kovan-optimistic.etherscan.io/address/0x68B5fBd7CEFEE3076e4101920b13C9Cc1A6cbF0e#readProxyContract)

**Test ERC-20s with initialized bathTokens and built-in faucets to test** (excluding WETH)**:**

[TEST](https://kovan-optimistic.etherscan.io/address/0x12a20154664B585Ebf309dbFfc3A4F50Bd45A877); [WETH](https://kovan-optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006) (real Wrapped ETH); [WBTC](https://kovan-optimistic.etherscan.io/address/0xaBb0bd8f9BAFa670c8496AF9609BD42D3F75Bd15#code); [USDC](https://kovan-optimistic.etherscan.io/address/0x940578F6D9f9ffD9621F69dbB5B24Fd380799772); [USDT](https://kovan-optimistic.etherscan.io/address/0x655cb52BE3131713638AC812d6cC52256F32a3A5#code); [DAI](https://kovan-optimistic.etherscan.io/address/0x34ED3000Cb9953B83Fb8383f61262EF5B8Cb761F); [RPL](https://kovan-optimistic.etherscan.io/address/0xED5a7dd4382B388261998DF7a06473be1ea702e6);\
\
**Please note, to receive any of the above tokens for free for testing, simply call faucet().** This can be done by visiting the token in Etherscan > Write Contract > Connect Wallet (Verify on OP Kovan) > call faucet(). This will mint you 1000 tokens once every 5 days. Also, each of the above tokens will have at least 1000 tokens of liquidity in their respective bathToken from the admin deposited for testing purposes.

## Optimism Goerli (BETA)

Please see below for live v1 deployments. Contracts are not yet verified on Etherscan due to a lack of support for `chainId` `420` but this should be resolved soon. Please note these addreses could change if something is off but will be maintained here.\
\
**Please note, that the below are proxy contracts whose live implementation can be found via Etherscan** (via Contract > Read as Proxy \* as soon as verification is live which it is not yet)

RubiconMarket: `0x6cD8666aBB003073e45D69E5b3aa0b0Fe9CDBF91`\
BathHouse: `0x1229036F63679B61910CB1463e5BB57f68D19bb2`\
BathPair: `0x9dBf17d518f722B5Aae5573D808B94024b635529`

RubiconRouter: `0x6aaEd1985a0e011ca82BB5Df8ebd92063134fd7c`

StrategistUtility: `0xd282dB449cC64D136b9D9a4399E7e3F133472EaE`

MarketAid: `0x6d362d3F8A11D933b05A71085e4Aef1EE8A45371`

Note: any existing bathTokens are queried via tokenToBathToken() on BathHouse. Here is the readout with the implementations:

```
🎉 Got these final public contract addresses (state):  
Market 0x6cD8666aBB003073e45D69E5b3aa0b0Fe9CDBF91 
BathHouse 0x1229036F63679B61910CB1463e5BB57f68D19bb2 
BathPair 0x9dBf17d518f722B5Aae5573D808B94024b635529 
Router 0x6aaEd1985a0e011ca82BB5Df8ebd92063134fd7c 
StratUtility 0xd282dB449cC64D136b9D9a4399E7e3F133472EaE 
MarketAid 0x6d362d3F8A11D933b05A71085e4Aef1EE8A45371 

 👯‍♂️ based on these implementations: 
Market Implementation: 0xABaA853F972e6dcd1208B791c1629A7b04D79558 
BathHouse Implementation: 0x6D2995587F32Dc2feb68743c7Cb2C6faF063F86E 
BathPair Implementation: 0xd294EC89A6c00CD3c4dD0dFb60F3D505C7Ef91d1 
*BathToken Implementation:* 0x788b7ad4d4279c276807435EA5931A80C5ab2Ffe 
Router Implementation: 0x746750031Cc56Ccb386D9a6a0fcAb34C0A138BbD 
StratUtility Implementation: 0xC8ab2B3A419D844FB8CE817A577a40b59c4dEEb8 
MarketAid Implementation: 0xba8bFB9B22804Aa29ACdd157af932F396A158da4
```



**Test ERC-20s with initialized bathTokens and built-in faucets to test** (excluding WETH)**:**

! ERC-20s for testing and GUI soon!\
\
**Please note, to receive any of the above tokens for free for testing, simply call faucet().** This can be done by visiting the token in Etherscan > Write Contract > Connect Wallet (Verify on OP Kovan) > call faucet(). This will mint you 1000 tokens once every 5 days. Also, each of the above tokens will have at least 1000 tokens of liquidity in their respective bathToken from the admin deposited for testing purposes.

## Polygon - Mumbai (v1)

Please see below for live v1 _testnet_ deployments. All contracts are verified on Etherscan and are proxy wrapped.\
\
**Please note, the below are proxy contracts whose live implementation can be found via Etherscan** (via Contract > Read as Proxy)

RubiconMarket: [0xd2308b5a7165e672bbb27ee7BC12511eD6FD370A](https://mumbai.polygonscan.com/address/0xd2308b5a7165e672bbb27ee7BC12511eD6FD370A#readProxyContract)\
BathHouse: [0x7b2D97D357506c168724C7Dd5E33242b751A31bA](https://mumbai.polygonscan.com/address/0x7b2D97D357506c168724C7Dd5E33242b751A31bA#readProxyContract)\
BathPair: [0x824fB3237f622a785e0Bb57c5E1694D005831297](https://mumbai.polygonscan.com/address/0x824fB3237f622a785e0Bb57c5E1694D005831297#readProxyContract)

RubiconRouter: [0x2A0210CBe53E13a44D00799BaB6b3C36Dfd8B8e7](https://mumbai.polygonscan.com/address/0x2A0210CBe53E13a44D00799BaB6b3C36Dfd8B8e7#readProxyContract)

Note: any existing bathTokens are queried via tokenToBathToken() on BathHouse

**Test ERC-20s with initialized bathTokens and built-in faucets to test** (excluding WETH)**:**\
\
**Please note, to receive any of the above tokens for free for testing, simply call faucet().** This can be done by visiting the token in Etherscan > Write Contract > Connect Wallet (Verify on OP Kovan) > call faucet(). This will mint you 1000 tokens once every 5 days.

## Optimism Mainnet (v0 - DEPRECATED)

Please see below for a list of Rubicon deployments on Optimism Mainnet. Please note, we utilize the [transparent upgradeable proxy standard](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies) to remain nimble and iterative; the contract addresses of all of our deployments as well as their current implementations are found below.

**Rubicon Market:** [0x7a512d3609211e719737E82c7bb7271eC05Da70d](https://optimistic.etherscan.io/address/0x7a512d3609211e719737E82c7bb7271eC05Da70d) - [_Logic_](https://optimistic.etherscan.io/address/0x66ef90859982df25b6ab627f044910b04a60afc0#code)__

**Rubicon Router:** [0x45969104EF4561cEe269B334d8CB7a99206a09e5](https://optimistic.etherscan.io/address/0x45969104EF4561cEe269B334d8CB7a99206a09e5#code)

**BathHouse:** [0x2F536756636ABf29e860717a10867860802AECe7](https://optimistic.etherscan.io/address/0x2F536756636ABf29e860717a10867860802AECe7) - [_Logic_](https://optimistic.etherscan.io/address/0xF7adf6A1dF921B1aED77Ca4Bb17C5CE78c29C773#code)__

**bathETH:** [0xB0bE5d911E3BD4Ee2A8706cF1fAc8d767A550497](https://optimistic.etherscan.io/address/0xB0bE5d911E3BD4Ee2A8706cF1fAc8d767A550497) _-_ [_Logic_](https://optimistic.etherscan.io/address/0x98fe79124697774f96433690bab80c3b5044efb4#code)****\
**bathWBTC:** [0x7571CC9895D8E997853B1e0A1521eBd8481aa186](https://optimistic.etherscan.io/address/0x7571CC9895D8E997853B1e0A1521eBd8481aa186) - ''\
**bathUSDC:** [0xe0e112e8f33d3f437D1F895cbb1A456836125952](https://optimistic.etherscan.io/address/0xe0e112e8f33d3f437D1F895cbb1A456836125952) - ''\
**bathDAI:** [0x60daEC2Fc9d2e0de0577A5C708BcaDBA1458A833](https://optimistic.etherscan.io/address/0x60daEC2Fc9d2e0de0577A5C708BcaDBA1458A833) - ''\
**bathUSDT:** [0xfFBD695bf246c514110f5DAe3Fa88B8c2f42c411](https://optimistic.etherscan.io/address/0xfFBD695bf246c514110f5DAe3Fa88B8c2f42c411) - ''

_Please note you can find the location of all BathPair contracts by calling `getBathPair` on BathHouse._
