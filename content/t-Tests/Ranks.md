---
type: atomic
tags:
  - t-tests
aliases:
  - "rank"
  - "ranking"
  - "rank transform"
  - "ties"
status: seedling
---

**In one line:** to rank data, sort it and replace each value by its position (1 for the smallest); ties share the average of the positions they occupy.

> [!info] Before this, it helps to know
> [[Percentiles and Quantiles]] (order, not distance) · [[Outliers]]

## Start from zero
1. **A value carries two kinds of information:** its order (bigger or smaller than the others) and its distance (how much bigger).
2. **Distances are where outliers and [[Shape of a Distribution|skew]] do damage.** One huge value drags the mean and inflates the [[Standard Deviation|SD]] ([[Outliers]], [[Mean]]).
3. **Keep only the order.** Sort and number the values 1, 2, 3... *Why this tames outliers:* the largest value becomes rank n whether it's 9 or 9 trillion.
4. **Ties share.** If two values tie for positions 3 and 4, both get 3.5. *Why the average:* it keeps the total of the ranks the same, $1 + 2 + \dots + n$.
5. **Ranks have a known behaviour under $H_0$.** If the groups don't differ, every arrangement of the ranks is equally likely, so the null distribution of a rank sum can be worked out without assuming [[Normality Checks|normality]]. That's how rank-based tests work ([[Nonparametric Alternatives]], [[Null Distribution]]).

## See it

![[Ranks tame outliers.png|700]]
*What to look at:* on the raw scale one value is far away; as ranks, it is just one step above the next.

![[Worked example - rank-based test.png|700]]
*What to look at:* the stem-cell sheep with 14.25 becomes rank 18, one step above the next sheep.

## Why it exists
It lets tests compare groups using only order, so they don't depend on normality or on how extreme a few values are.

## A tiny example
Data 1, 2, 3, 4, 100 → ranks 1, 2, 3, 4, 5. Data 3, 5, 5, 9 → ranks 1, 2.5, 2.5, 4.

## Common confusions
- **"Ranking throws away all the information."** It keeps the order, which is often what the question is about.
- **"Ties get the same lower rank."** They get the average of the positions they fill.

## Connections
- **Builds on:** [[Percentiles and Quantiles]], [[Outliers]]
- **Leads to:** [[Nonparametric Alternatives]], [[Robustness]], [[Median]]
- **Part of:** [[MOC - t-Tests]]
