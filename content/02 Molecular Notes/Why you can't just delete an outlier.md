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

Why is removing an outlier a decision you have to justify, rather than a routine step?

Whether a value counts as an outlier depends on the rule you use: the fences at 1.5 times the interquartile range (IQR), ±2 [[Standard Deviation|standard deviations]] (SD), which assumes [[Normality Checks|normality]], or ±3 SD for extreme values. A flagged value may be an error, or it may be the most interesting observation in the data. Removing it changes the results, so it needs a reason, a stated rule, and usually a discussion. With small samples, every point carries weight.

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree minimum (25.2 m) falls below the lower fence of 27.25 m and has z = −2.10, so both rules flag it.

1. There is no single definition. The IQR rule, which is based on order, flags values below Q1 − 1.5 IQR or above Q3 + 1.5 IQR. The [[Empirical Rule|empirical rule]] flags values with z beyond ±2 and assumes normality, and some people use ±3 for extreme values ([[Range and IQR]], [[Z-Score]]). Both are valid, but you must say which you used ([[Outliers]]).
2. A flagged value is either a mistake, such as a typing error or a broken instrument, or a real but unusual unit. Only a mistake is a reason to fix or remove it.
3. Outliers pull the mean and inflate the SD, so deleting one can turn a non-significant result into a significant one. Removing values without a rule invites [[Family-Wise Type I Error|picking whichever result looks best]].
4. With small samples, each value is a big share of the data: dropping 1 of 8 removes 12.5% of a group.
5. Better options are to check the original record, report the results with and without the value, or use methods that resist outliers, such as the [[Median|median]] or [[Nonparametric Alternatives|rank-based tests]].

Silently dropping outliers makes results look cleaner than the data are, and the same data can be made to say different things depending on which points disappear.

See also: [[Box Plot and Five-Number Summary]], [[Why the median beats the mean for skewed data]], [[Why visualize data before testing]], [[Why rank tests trade power for robustness, and why run both]].
