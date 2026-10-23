---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "proportion"
  - "percentage"
  - "relative frequency"
status: seedling
---

**In one line:** a proportion is a part divided by the whole (a number from 0 to 1); a percentage is the same number times 100.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (what is being counted)

## Start from zero
1. **Count the observations with some feature.** 202 of 1,010 surveyed adults smoke.
2. **A raw count can't be compared across studies of different sizes.** 202 smokers means something different out of 1,010 than out of 300. So divide by the whole.
3. **Part ÷ whole is the proportion**: 202 / 1,010 = 0.20. It always lies between 0 and 1. *Why 0 to 1:* the part can't be less than nothing or more than the whole.
4. **Multiply by 100 for a percentage**: 20%. Same information, two formats.
5. **A proportion is secretly a mean.** Code each smoker as 1 and each non-smoker as 0. The average of all those 0s and 1s is exactly the proportion of 1s ([[Mean]]). *Why that matters later:* anything true of means, such as the [[Central Limit Theorem]], also applies to proportions.
6. **Probabilities are proportions too**: the long-run share of times an event happens ([[Classical vs Relative Frequency Probability]]).

## Why it exists
Counts alone cannot be compared across groups of different sizes. 44 positive tests out of 50 users and 90 out of 950 non-users are very different rates (0.88 vs 0.095), even though 90 is the bigger count. Proportions put groups on the same scale.

## A tiny example
Ten people, four like a new feed and six do not. Coded 1 = like, 0 = not:

1, 1, 1, 1, 0, 0, 0, 0, 0, 0 → sum = 4 → average = 4/10 = **0.4** = the proportion who like it.

## Common confusions
- **"0.05 and 5 are the same."** 0.05 is 5%. Writing "p = 5" is an error, and a p-value can never exceed 1.
- **"A bigger count means a bigger rate."** Only if the wholes are the same size.

## Connections
- **Builds on:** [[Variable and Observation]]
- **Leads to:** [[Classical vs Relative Frequency Probability]], [[Contingency Table]], [[Sampling Distribution]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.5 [[Types of Data|categorical]] data)
