---
description: Information on the liquidity management strategy
---

# Current Pools Strategy

Rubicon strategists currently use a pure market-making strategy. This means they maintain a spread around the current market price, and their filled orders can be instantly derisked so the liquidity pools can realize yield.

Liquidity pools can rebalance internally between themselves, or use an external venue such as an AMM.

## Internal Rebalance

Filled orders can be rebalanced internally between pools. Internal rebalancing is always the target because it is cheaper, but the pool takes on some amount of inventory risk.

![](</assets/Rubicon v1\_ Internal Rebalancing - Option 1.png>)

## External Rebalance

Filled orders can also be rebalanced on an external liquidity venue, typically an AMM. External rebalances are more expensive because they pay gas fees and the AMM fee, but they allow pools to instantly derisk and realize yield.

![](</assets/Rubicon v1\_ Internal Rebalancing - Option 2 (1).png>)

For more questions about liquidity management or to get involved, visit the #marketmakers channel in the Rubicon Discord
