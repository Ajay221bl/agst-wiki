---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "Welch default"
  - "pooled vs Welch"
status: seedling
---

Why does [[t.test()|t.test]]() default to Welch's version, and when would you use the pooled test?

The pooled two-sample t-test assumes both populations have the same [[Variance|variance]]. It is slightly more powerful when that holds, but can mislead when the variances and group sizes differ. Welch's test drops the [[Test Assumptions|assumption]] and loses very little when variances are equal, so R uses it by default. Use the pooled test only with a reason.

![[Pooled variance weighting.png|700]]
Pooling averages the two variances weighted by df, so it leans towards the bigger group. If the variances really differ, one number misstates at least one group. Illustrative values.

1. The pooled test estimates one common variance from both groups ([[Pooled Variance]]). That is only right if the population variances really are equal ([[Homogeneity of Variance]]).
2. When they are equal, pooling uses more information, so the test is slightly more powerful.
3. When they differ, especially with [[Balanced Design|unequal group sizes]], the pooled [[Standard Error|standard error]] is wrong and the p-value can be too small or too large.
4. Welch's test keeps each group's own variance and adjusts the degrees of freedom, which is why R prints fractional df ([[Welch's t-Test]], [[Degrees of Freedom]]).
5. Its cost when variances are equal is small; its protection when they are not is large. That asymmetry makes it the safe default.

Defaulting to the pooled test would give misleading p-values in exactly the unbalanced, unequal-spread data that field studies often produce.

See also: [[Two-Sample Independent t-Test]], [[Why check assumptions before trusting a test]], [[Why a two-group ANOVA gives F equal to t squared]].
