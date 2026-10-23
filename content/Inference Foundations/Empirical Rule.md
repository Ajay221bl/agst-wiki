---
type: atomic
tags:
  - inference
  - describing-data
aliases:
  - "68-95-99.7 rule"
status: seedling
---

**In one line:** for roughly normal data, about 68% of values fall within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (the rule is about its areas) · [[Standard Deviation]] (the ruler)

## Start from zero
1. **For a normal curve, the share of values within a given distance of the mean depends only on that distance in SDs.** *Why:* the curve is fixed by $\mu$ and $\sigma$ alone, so measuring in SDs makes every normal curve look the same ([[Normal Distribution]]).
2. **So the SD works like a ruler** for bell-shaped data ([[Standard Deviation]]):
   - **68%** within $\bar{x} \pm 1s$
   - **95%** within $\bar{x} \pm 2s$ (more precisely 1.96)
   - **99.7%** within $\bar{x} \pm 3s$
3. **As areas:** the area under the standard normal between $z = -1$ and $1$ is about 0.68; between $-2$ and $2$, about 0.95 ([[Probability Distribution]]).
4. **This is where "unusual" comes from.** Only about 5% of values lie beyond ±2 SD, so a value there is called unusual ([[Z-Score]], [[Outliers]]), and 1.96 is the 95% critical value ([[Critical Value]]).
5. **It only holds for roughly bell-shaped data.** *Why:* for skewed data the [[Tails of a Distribution|tails]] hold different shares, so the percentages are wrong.

## See it

![[Empirical rule - dog heights.png|700]]
*What to look at:* With the class dog heights (mean 394 mm, SD 147), each band adds one SD on each side. Note that −3 SD is a negative height: the normal model is only an approximation.

## Why it exists
It gives a quick sense of "usual" vs "unusual" without software:
- Flagging outliers beyond ±2 SD (±3 for extreme ones) ([[Outliers]]).
- Defining "unusual" z-scores ([[Z-Score]]).
- The basis of confidence intervals: 95% of sample means fall within about 2 [[Standard Error|SE]] of $\mu$ ([[Confidence Interval]]).

## A tiny example
Dog heights, mean 394 mm, SD 147:
- 68%: 394 ± 147 = 247 to 541
- 95%: 394 ± 294 = 100 to 688
- 99.7%: 394 ± 441 = −47 to 835 (impossible below 0: the normal is only approximate)

Chick-fil-A fillets: 68% between 144 and 231 g; 95% between 100.4 and 274.8 g.

## Common confusions
- **"It works for any data."** Only for roughly normal ([[Shape of a Distribution|symmetric]], unimodal) data. For skewed data, use the IQR rule.

## Connections
- **Builds on:** [[Normal Distribution]], [[Standard Deviation]]
- **Leads to:** [[Z-Score]], [[Outliers]], [[Confidence Interval]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 3]] (§3.3)
