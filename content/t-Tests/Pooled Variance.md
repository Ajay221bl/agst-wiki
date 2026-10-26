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

Pooled variance combines two groups' spreads into one, weighting the bigger group more. It only makes sense if both groups really share the same spread.

Say two thermometers measure the same room, and you want the best estimate of how much the temperature fluctuates. Should you trust just one? No, you'd combine them, and if one took ten times as many readings, you'd trust it more. That's pooling.

Same idea with variances. Suppose two groups really share one population variance, $\sigma^2$. Then each group's sample variance is an estimate of the same thing, and combining them beats either alone ([[Point Estimate|estimate]]). How do you combine them fairly? You can't just average them, because a group of 20 gives a more reliable estimate than a group of 3. So add back each group's sum of squared deviations, $(n - 1)s^2$, and divide by the total degrees of freedom ([[Variance]], [[Degrees of Freedom]]):
$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$
Each group counts in proportion to how much information it carries.

For example, group 1 has $n = 10$ and $s^2 = 4$, and group 2 has $n = 20$ and $s^2 = 6$. Then $s_p^2 = (9 \times 4 + 19 \times 6)/28 = (36 + 114)/28 \approx 5.36$. It lands closer to 6 than to 4, because group 2 is bigger.

The pooled value then goes into the [[Standard Error|standard error]] of the difference, $SE = s_p\sqrt{\dfrac{1}{n_1} + \dfrac{1}{n_2}}$, with $n_1 + n_2 - 2$ degrees of freedom ([[Two-Sample Independent t-Test]]).

So what do you win? If the spreads really are equal, pooling uses all the data to estimate one shared spread, which makes the test **slightly more powerful** and gives a **whole-number** degrees of freedom ([[Statistical Power|power]]). And what do you risk? If the spreads aren't equal, especially with unequal group sizes, the standard error comes out wrong and so does the p-value. It's a bet. That's why R uses Welch's test by default ([[Welch's t-Test]], [[Homogeneity of Variance]]).

Here's where this goes next. One-way ANOVA *assumes* equal spreads and pools the within-group variance of all $k$ groups into one number, the **mean square error** (MSE). Same idea, more groups ([[ANOVA Table]], [[Sums of Squares and Mean Squares]]).

Try it yourself. Is pooled always better because it's more powerful? No. Power doesn't help if the p-value is wrong. Only pool when you have a reason to believe the spreads match.

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 256).
