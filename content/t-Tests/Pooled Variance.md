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

Pooled variance combines two groups' variances into one weighted [[Point Estimate|estimate]], used when the groups can be assumed to share the same population variance.

1. **Suppose two groups really share one population variance $\sigma^2$.**
2. **Then each sample variance is an estimate of the same thing,** and combining them gives a better estimate than either alone.
3. **Combine them fairly:** add back the sums of squares, $(n - 1)s^2$ for each group, and divide by the total df ([[Variance]], [[Degrees of Freedom]]):
$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$
   *Why weight by df:* each group's variance is weighted by its df, so larger groups, whose variances are more reliable, count more.
4. **Use it in the [[Standard Error|SE]] of the difference:** $SE = s_p\sqrt{\dfrac{1}{n_1} + \dfrac{1}{n_2}}$, $df = n_1 + n_2 - 2$ ([[Two-Sample Independent t-Test]]).
5. **The gain is more df (more [[Statistical Power|power]]); the risk is a wrong SE if the variances differ,** especially with unequal $n$. That's why R defaults to Welch ([[Welch's t-Test]], [[Homogeneity of Variance]]). The ANOVA MSE is the same idea for $k$ groups ([[Sums of Squares and Mean Squares]]).

If the variances really are equal, pooling uses all the data to estimate one shared spread, which makes the test **slightly more powerful** (lower p-values) and gives a **whole-number df**.

**Why it matters:** it leads straight to one-way ANOVA, which *assumes* equal variances and pools the within-group variance into the **MSE** ([[ANOVA Table]], [[Homogeneity of Variance]]).

For example:

Group 1: $n = 10$, $s^2 = 4$. Group 2: $n = 20$, $s^2 = 6$.
$s_p^2 = (9 \times 4 + 19 \times 6)/28 = (36 + 114)/28 \approx 5.36$, closer to group 2's value because group 2 is bigger.

Common mistakes:

- **"Pooled is always better because it's more powerful."** If variances differ, it gives misleading p-values; Welch is the safe default.

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 256).
