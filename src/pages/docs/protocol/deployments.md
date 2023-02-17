---
title: Rubicon | Deployments
pageTitle: Deployments
description: Active Rubicon Smart Contract Deployments
---

## Optimism Mainnet (Rubicon v1.3)

Below is a list of Rubicon deployments on [Optimism](https://www.optimism.io/). Please note that we utilize the [transparent upgradeable proxy standard](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies); the contract addresses of all deployments are found below and each proxy's underlying implementation is viewable via [Etherscan](https://optimistic.etherscan.io/).

[**Rubicon Market:**](https://optimistic.etherscan.io/address/0x7a512d3609211e719737E82c7bb7271eC05Da70d) 0x7a512d3609211e719737E82c7bb7271eC05Da70d\
[**Rubicon Router:**](https://optimistic.etherscan.io/address/0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf) 0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf\
[**BathHouse:**](https://optimistic.etherscan.io/address/0x203328C161D23dCEee3E439DeEB25cA19e2c4984) 0x203328C161D23dCEee3E439DeEB25cA19e2c4984\
[**BathPair:**](https://optimistic.etherscan.io/address/0xF8780E00Ce8ed2e79aeC10908a169900eD1D4AFe) 0xF8780E00Ce8ed2e79aeC10908a169900eD1D4AFe\
[**MarketAidFactory:**](https://optimistic.etherscan.io/address/0x267D94C6e67e4436EFfE092b08d040cFF36B2DA7) 0x267D94C6e67e4436EFfE092b08d040cFF36B2DA7

[**bathETH:**](https://optimistic.etherscan.io/address/0xB0bE5d911E3BD4Ee2A8706cF1fAc8d767A550497) 0xB0bE5d911E3BD4Ee2A8706cF1fAc8d767A550497\
[**bathWBTC:**](https://optimistic.etherscan.io/address/0x7571CC9895D8E997853B1e0A1521eBd8481aa186) 0x7571CC9895D8E997853B1e0A1521eBd8481aa186\
[**bathUSDC:**](https://optimistic.etherscan.io/address/0xe0e112e8f33d3f437D1F895cbb1A456836125952) 0xe0e112e8f33d3f437D1F895cbb1A456836125952\
[**bathDAI:**](https://optimistic.etherscan.io/address/0x60daEC2Fc9d2e0de0577A5C708BcaDBA1458A833) 0x60daEC2Fc9d2e0de0577A5C708BcaDBA1458A833\
[**bathUSDT:**](https://optimistic.etherscan.io/address/0xfFBD695bf246c514110f5DAe3Fa88B8c2f42c411) 0xfFBD695bf246c514110f5DAe3Fa88B8c2f42c411\
[**bathSNX:**](https://optimistic.etherscan.io/address/0xeb5F29AfaaA3f44eca8559c3e8173003060e919f#) 0xeb5F29AfaaA3f44eca8559c3e8173003060e919f\
[**bathOP:**](https://optimistic.etherscan.io/address/0x574a21fE5ea9666DbCA804C9d69d8Caf21d5322b) 0x574a21fE5ea9666DbCA804C9d69d8Caf21d5322b

_You can find the location of all BathToken liquidity pools and contracts by querying `getBathTokenFromAsset` on_ [_BathHouse_](https://optimistic.etherscan.io/address/0x203328C161D23dCEee3E439DeEB25cA19e2c4984#readProxyContract) _with the underlying ERC-20 token's address. Bath Tokens are unique to each ERC-20._

[View Rubicon contracts](https://optimistic.etherscan.io/accounts/label/rubicon) tagged & labeled on Etherscan

## Optimism Goerli

Please see below for live v1 deployments. Contracts are not yet verified on Etherscan due to a lack of support for `chainId` `420` but this should be resolved soon. Please note these addresses could change if something is off but will be maintained here.\
\
**Please note, that the below are proxy contracts whose live implementation can be found via Etherscan** (via Contract > Read as Proxy \* as soon as verification is live which it is not yet)

[**Rubicon Market:**](https://goerli-optimism.etherscan.io/address/0x6cD8666aBB003073e45D69E5b3aa0b0Fe9CDBF91) 0x6cD8666aBB003073e45D69E5b3aa0b0Fe9CDBF91\
[**Rubicon Router:**](https://goerli-optimistic.etherscan.io/address/0x6aaEd1985a0e011ca82BB5Df8ebd92063134fd7c) 0x6aaEd1985a0e011ca82BB5Df8ebd92063134fd7c\
[**BathHouse:**](https://goerli-optimistic.etherscan.io/address/0x1229036F63679B61910CB1463e5BB57f68D19bb2) 0x1229036F63679B61910CB1463e5BB57f68D19bb2\
[**BathPair:**](https://goerli-optimistic.etherscan.io/address/0x9dBf17d518f722B5Aae5573D808B94024b635529) 0x9dBf17d518f722B5Aae5573D808B94024b635529\
[**MarketAidFactory:**](https://goerli-optimism.etherscan.io/address/0x1215007738491710913359b5A733c8A87624f8d3) 0x1215007738491710913359b5A733c8A87624f8d3

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

[Test OP Coin](https://goerli-optimism.etherscan.io/address/0xCeE7148028Ff1B08163343794E85883174a61393)\
[Test USDC Coin](https://goerli-optimism.etherscan.io/address/0x708394f89acd3e0644f774ea6c876bface70e600)

**Please note, to receive any of the above tokens for free for testing, simply call faucet().** This can be done by visiting the token in Etherscan > Write Contract > Connect Wallet (Verify on OP Kovan) > call faucet(). This will mint you 1000 tokens once every 5 days. Also, each of the above tokens will have at least 1000 tokens of liquidity in their respective bathToken from the admin deposited for testing purposes.