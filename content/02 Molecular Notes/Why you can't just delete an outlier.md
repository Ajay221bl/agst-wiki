---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "outlier removal"
  - "outlier rules"
status: seedling
---

> [!summary] In plain words
> "Outlier" depends on the rule you use: the 1.5 × IQR fences, ±2 [[Standard Deviation|SD]] (which assumes [[Normality Checks|normality]]) or ±3 SD for extremes. A flagged value may be an error, or the most interesting observation in the data. Removing it changes the results, so it needs a reason, a stated rule, and usually a discussion; with small samples, every point carries weight.

## The question
Why is removing an outlier a decision to justify rather than a routine step?

## Built from
- [[Outliers]]: what makes a value unusual.
- [[Range and IQR]]: the fence rule.
- [[Z-Score]]: the SD rule.
- [[Box Plot and Five-Number Summary]]: where outliers are drawn.
- [[Median]]: a robust alternative to deleting.
- [[Nonparametric Alternatives]]: another.

## See it

![[Box plot anatomy - canopy trees.png|700]]
*What to look at:* The canopy-tree minimum (25.2 m) falls below the lower fence of 27.25 m and has z = −2.10, so both rules flag it.

## The reasoning, step by step
1. There is no single definition: the IQR rule flags values beyond Q1 − 1.5 IQR or Q3 + 1.5 IQR (rank-based), the [[Empirical Rule|empirical rule]] flags |z| > 2 and assumes normality, and some use |z| > 3 for extremes ([[Range and IQR]], [[Z-Score]]). Both are valid; you must say which you used ([[Outliers]]).
2. A flagged value is either a mistake (a typo, a broken instrument) or a real but unusual unit. Only the first is a reason to fix or remove it.
3. Outliers pull the mean and inflate the SD, so deleting one can turn a non-significant result into a significant one. Removal without a rule invites [[Family-Wise Type I Error|cherry-picking]].
4. With small samples each value is a big share of the data: dropping 1 of 8 removes 12.5% of a group.
5. Better options: check the record, report results with and without it, or use methods that resist outliers (the [[Median]], [[Nonparametric Alternatives]]).

## What would go wrong otherwise
Silently dropped outliers make results look cleaner than the data are, and the same data can be made to say different things depending on which points disappear.

## Connections
- **Related:** [[Why the median beats the mean for skewed data]], [[Why visualize data before testing]], [[Why rank tests trade power for robustness, and why run both]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Describing Data]]
