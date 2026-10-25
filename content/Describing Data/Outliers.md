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

An outlier is a value unusually far from the rest of the data. It is usually flagged by one of two rules: the box-plot fences, based on the interquartile range, or a z-score beyond ±2.

An unusual value is either a mistake or a discovery, and you can't tell which by deleting it. "Far" needs a rule. The first rule uses the interquartile range (IQR): a value is an outlier if it lies below $Q_1 - 1.5 \times IQR$ or above $Q_3 + 1.5 \times IQR$ ([[Range and IQR]]). This rule is built from quartiles, which the outliers themselves can't move, and it doesn't assume the data are [[Normality Checks|normal]]. The second rule uses the [[Z-Score|z-score]], $z = (x - \bar{x})/s$: a value is unusual if $z$ is below −2 or above 2, outside the middle 95% ([[Empirical Rule]]). Some people use ±3 to flag only extreme outliers. This rule assumes the data are roughly bell-shaped, because "95% within 2 [[Standard Deviation|standard deviations]]" is a property of the bell shape.

Both rules are fine; just say which one you used. When they disagree, the data are often skewed, and the interquartile range rule is safer.

Flagging a value is not the same as deleting it. First ask why it is extreme: a typo, a different kind of unit, or real but rare. Outliers drag the [[Mean|mean]] and inflate the standard deviation and the range, while the [[Median|median]] and the interquartile range resist them. One wild value can change the result of a test, which is why robust summaries and [[Nonparametric Alternatives|rank-based tests]] exist ([[Robustness]], [[Ranks]]).

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree numbers: the box is the middle half (Q1 to Q3), the line inside is the median, whiskers stop at the last values inside the fences, and anything beyond a fence (here 25.2 m) is drawn as a separate point.

For example, the canopy trees have a minimum of 25.2 m, a mean of 37.41 and a standard deviation of 5.82.
- z-score rule: $(25.2 - 37.41)/5.82 = -2.098$, so it is an outlier.
- Interquartile range rule: it is below the lower fence of 27.25, so it is an outlier.

Both rules agree here.

So treat an outlier as a question to answer, not a nuisance to remove. Many outliers are real and informative, so delete one only with a documented reason. And the z-score rule doesn't suit every data set: for skewed data, use the interquartile range rule.

See also: [[Box Plot and Five-Number Summary]], [[Why the median beats the mean for skewed data]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
