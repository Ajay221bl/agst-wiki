---
type: atomic
tags:
  - describing-data
aliases:
  - "outlier"
  - "IQR rule"
  - "fences"
status: seedling
---

**In one line:** an outlier is a value unusually far from the rest of the data, flagged either by the box-plot fences (IQR rule) or by a z-score beyond ±2.

> [!info] Before this, it helps to know
> [[Range and IQR]] (the fences) · [[Z-Score]] (the other rule) · [[Empirical Rule]] (where ±2 comes from)

## Start from zero
1. **An outlier is a value far from the rest.** To flag one, "far" needs a rule.
2. **Rule 1, the IQR fences (rank-based, no [[Normality Checks|normality]] assumed):** outside $Q_1 - 1.5 \times IQR$ or $Q_3 + 1.5 \times IQR$ ([[Range and IQR]]). *Why IQR-based:* the fences are built from quartiles, which the outliers themselves can't move.
3. **Rule 2, the z-score (assumes approximate normality):** $z = (x - \bar{x})/s$; unusual if $z < -2$ or $z > 2$, outside the middle 95% ([[Z-Score]], [[Empirical Rule]]). Some use ±3 to flag only *extreme* outliers. *Why it needs normality:* "95% within 2 [[Standard Deviation|SD]]" is a property of the bell shape.
4. **Both are valid; just state which one you used.** When they disagree, the data are often skewed, where the IQR rule is safer.
5. **Flagging is not deleting.** First ask why the value is extreme: a typo, a different kind of unit, or real but rare. Outliers inflate the mean and SD, which is why robust summaries and [[Nonparametric Alternatives|rank-based tests]] exist ([[Robustness]], [[Ranks]]).

## See it

![[Box plot anatomy - canopy trees.png|700]]
*What to look at:* The canopy-tree numbers: the box is the middle half (Q1 to Q3), the line inside is the [[Median|median]], whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

## Why it exists
Outliers drag the [[Mean]] and inflate the SD and range, while the median and IQR resist them. One wild value can change a test's result, so they must be found and dealt with deliberately.

## A tiny example
Canopy trees: min 25.2 m, mean 37.41, SD 5.82.
- Z rule: $(25.2 - 37.41)/5.82 = -2.098$ → outlier.
- IQR rule: below the lower fence of 27.25 → outlier.
Both rules agree here.

## Common confusions
- **"Outliers are mistakes; delete them."** Many are real and informative. Delete only with a documented reason.
- **"The z rule works for any data."** It assumes approximate normality; for skewed data use the IQR rule.

## Connections
- **Builds on:** [[Range and IQR]], [[Z-Score]], [[Empirical Rule]]
- **Leads to:** [[Box Plot and Five-Number Summary]], [[Why the median beats the mean for skewed data]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4)
