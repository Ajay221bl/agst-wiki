---
type: atomic
tags:
  - describing-data
aliases:
  - "tail"
  - "tails"
  - "long tail"
  - "tail area"
  - "heavy tails"
  - "left tail"
  - "right tail"
status: seedling
---

The tails are the far ends of a distribution, where values are rare. A long tail on one side means the data are skewed, and the areas in the tails are where p-values and the significance level live.

A histogram or a distribution curve is tall where values are common and low where they are rare ([[Histogram]], [[Probability Distribution]]). The low parts at the left and right ends are the tails, and values out there are unusual.

Tails describe shape. A long tail to the right means right skew, and a long tail to the left means left skew ([[Shape of a Distribution]]). "Heavy" tails mean more extreme values than a normal curve would have; on a [[Q-Q Plot|Q-Q plot]] they show up as points bending away at both ends.

The area in a tail is a probability: the area beyond a value is the chance of landing that far out. That is exactly what a p-value is: the tail area beyond the [[Test Statistic|test statistic]] you observed, assuming the null hypothesis is true ([[P-Value]]). The significance level α is the tail area beyond the [[Critical Value|critical value]] ([[Significance Level]]).

Which tails count depends on the alternative hypothesis. A one-tailed test uses one tail, and a two-tailed test splits α between both tails ([[One-Tailed vs Two-Tailed Tests]]). F and chi-square tests use only the right tail, because their [[Parameter vs Statistic|statistic]] can't be negative ([[F-Distribution]], [[Chi-Square Test]]).

![[Tails of a distribution.png|700]]
Left, a long right tail (shape); right, the two 2.5% tails of the [[Normal Distribution|standard normal]] beyond ±1.96 (probability).

"Rare" needs a definition, and the tails give one: far enough out that the area beyond is small ([[Rare Event Rule]]).

For example, on the standard normal curve the area beyond 1.96 is 0.025 on each side, 0.05 in total. That is why 1.96 is the critical value for 95%. In R, `2 * pnorm(-1.96)` gives 0.04999 ([[pnorm(), qnorm(), pt() and qt()]]).

A tail is a region of the distribution, while an outlier is a single value ([[Outliers]]). And a two-tailed test at α = 0.05 puts 0.025 (α/2) in each tail, not 0.05.
