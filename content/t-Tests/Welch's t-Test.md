---
type: atomic
tags:
  - t-tests
aliases:
  - "Welch"
  - "Welch test"
  - "unequal variances t-test"
  - "Welch-Satterthwaite"
status: seedling
---

Welch's t-test compares two independent means without assuming that the groups have equal variances. It is R's default two-sample test.

The **signal** is the difference in sample means, $\bar{x}_1 - \bar{x}_2$ ([[Signal and Noise]]). The **noise** is how much that difference would vary by chance. Each mean has its own standard error (SE), $s_i/\sqrt{n_i}$. Variances of independent quantities add, so $SE = \sqrt{s_1^2/n_1 + s_2^2/n_2}$ ([[Standard Error]]). It is the variances that add, not the standard errors or standard deviations.

Each group keeps its own [[Variance|variance]]; nothing is pooled. If the spreads really differ, pooling would give one group's noise the wrong weight ([[Pooled Variance]], [[Homogeneity of Variance]]). As for every t-test, $t = (\bar{x}_1 - \bar{x}_2)/SE$.

The degrees of freedom come from the Welch–Satterthwaite formula, which blends the two [[Sample Size|sample sizes]] and variances. The result usually isn't a whole number. By hand, the safe shortcut is the smaller of $n_1 - 1$ and $n_2 - 1$. Fewer degrees of freedom mean a bigger critical value, so you are less likely to reject by mistake ([[Degrees of Freedom]], [[Critical Value]]).

When the variances really are equal, Welch's test loses almost nothing compared with the pooled test. When they differ, it protects the error rate. That is why it is the default ([[Robustness]]). The pooled t-test needs equal variances, a strong [[Test Assumptions|assumption]] that needs a reason; Welch's test removes that need.

![[Worked example - two-sample t-test.png|700]]
The two groups have quite different spreads ([[Standard Deviation|SD]] 2.76 and 5.17). Welch uses each one as it is.

For example, for the stem-cell sheep, SE = √(5.17²/9 + 2.76²/9) = 1.95 and t = 7.83/1.95 = 4.01. R's Welch degrees of freedom are 12.2, between the hand shortcut (8) and the pooled value (16) ([[Two-Sample Independent t-Test]]).

A decimal degrees of freedom isn't an error; it is normal for Welch's test. And Welch's test isn't only for when the variances fail Levene's test. It is the default either way.

See also: [[t.test()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.3).
