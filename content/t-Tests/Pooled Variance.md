---
type: atomic
tags:
  - t-tests
  - anova
aliases:
  - "pooled SD"
  - "equal-variance t-test"
  - "var.equal = TRUE"
  - "pooled t-test"
status: seedling
---

Pooled variance combines two groups' variances into one weighted [[Point Estimate|estimate]]. It is used when the groups can be assumed to share the same population variance.

The logic of pooling is the logic of any good estimate: if two sources measure the same thing, combine them. Suppose two groups really share one population variance $\sigma^2$. Then each sample variance estimates the same thing, and combining them gives a better estimate than either alone. To combine them fairly, add back the sums of squares, $(n - 1)s^2$ for each group, and divide by the total degrees of freedom ([[Variance]], [[Degrees of Freedom]]):
$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$
Each group's variance is weighted by its degrees of freedom, so larger groups, whose variances are more reliable, count more.

The pooled value is used in the [[Standard Error|standard error]] of the difference, $SE = s_p\sqrt{\dfrac{1}{n_1} + \dfrac{1}{n_2}}$, with $n_1 + n_2 - 2$ degrees of freedom ([[Two-Sample Independent t-Test]]).

If the variances really are equal, pooling uses all the data to estimate one shared spread. That makes the test **slightly more powerful** (lower p-values) and gives a **whole-number** degrees of freedom ([[Statistical Power|power]]). The risk is a wrong standard error if the variances differ, especially with unequal group sizes. That is why R uses Welch's test by default ([[Welch's t-Test]], [[Homogeneity of Variance]]).

It also leads straight to one-way ANOVA, which *assumes* equal variances and pools the within-group variance into the **mean square error** (MSE), the same idea for $k$ groups ([[ANOVA Table]], [[Sums of Squares and Mean Squares]]).

For example, group 1 has $n = 10$ and $s^2 = 4$, and group 2 has $n = 20$ and $s^2 = 6$. Then $s_p^2 = (9 \times 4 + 19 \times 6)/28 = (36 + 114)/28 \approx 5.36$. This is closer to group 2's value because group 2 is bigger.

So pooling is a bet that the variances are equal. Win the bet and you gain a little power. Lose it and your p-value can be wrong. Pooled isn't always better just because it is more powerful. If the variances differ, it gives misleading p-values, so Welch's test is the safe default.

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 256).
