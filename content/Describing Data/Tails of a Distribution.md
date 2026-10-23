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

The tails are the far ends of a distribution, where values are rare; a long tail on one side means skew, and areas in the tails are where p-values and α live.

1. **A histogram or curve is tall where values are common and low where they are rare** ([[Histogram]], [[Probability Distribution]]).
2. **The low ends on the left and right are the tails.** Values out there are unusual.
3. **Tails describe shape.** A long tail to the right is right skew; to the left, left skew ([[Shape of a Distribution]]). Heavy tails mean more extreme values than a normal curve has; a Q-Q plot shows them as points bending away at both ends ([[Q-Q Plot]]).
4. **Area in a tail is a probability.** The area beyond a value is the chance of being that far out ([[Probability Distribution]]).
5. **That is what a p-value is**: the tail area beyond the observed [[Test Statistic|test statistic]], under $H_0$ ([[P-Value]]). α is the tail area beyond the critical value ([[Critical Value]], [[Significance Level]]).
6. **Which tails count depends on $H_A$.** One-tailed tests use one tail; two-tailed tests split α between both ([[One-Tailed vs Two-Tailed Tests]]). F and χ² tests use only the right tail, because the [[Parameter vs Statistic|statistic]] can't be negative ([[F-Distribution]], [[Chi-Square Test]]).

![[Tails of a distribution.png|700]]
Left, a long right tail (shape); right, the two 2.5% tails of the [[Normal Distribution|standard normal]] beyond ±1.96 (probability).

"Rare" needs a definition. The tails give one: far enough out that the area beyond is small ([[Rare Event Rule]]).

For example:

Standard normal: the area beyond 1.96 is 0.025 on each side, 0.05 in total. That is why 1.96 is the 95% critical value (R: `2 * pnorm(-1.96)` = 0.04999; [[pnorm(), qnorm(), pt() and qt()]]).

Common mistakes:

- **"Tail = outlier."** A tail is a region of the distribution; an outlier is one value ([[Outliers]]).
- **"A two-tailed test uses 0.05 in each tail."** It uses α/2 in each.
