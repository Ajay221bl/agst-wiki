---
type: atomic
tags:
  - anova
aliases:
  - "HOV"
  - "equal variances"
  - "homoscedasticity"
  - "Levene's test"
  - "Levene test"
status: seedling
---

Homogeneity of variance (also called homoscedasticity) means every group has the same population variance. Levene's test checks it, and you want the test not to reject.

Ask why this assumption exists and it explains itself. ANOVA pools the spreads of all the groups into one within-group variance, the mean square error (MSE) ([[Pooled Variance]], [[Sums of Squares and Mean Squares]]). That only makes sense if the groups share one spread. If one group is ten times more variable, its [[Signal and Noise|noise]] dominates the pooled [[Point Estimate|estimate]] and the [[One-Way ANOVA|F-test]] is distorted. The pooled value would be wrong for every group, so F's [[Null Distribution|null distribution]] no longer applies.

You don't need a formal test to start. A first screen is to compare the group standard deviations ([[Standard Deviation]]). A common rule of thumb is that the largest should be less than about twice the smallest.

Levene's test makes the check formal. It measures each value's distance from its group centre, $|x_{ij} - \text{centre}_i|$ ([[Absolute Value]]), and runs an ANOVA on those distances. This works because a group with a bigger spread has bigger average distances. Its hypotheses are $H_0$: all variances are equal, against $H_A$: at least one differs. **You want to fail to reject** ([[Null and Alternative Hypotheses]]).

Other tests include Bartlett's, Brown–Forsythe and Fligner's. When equal variances fail for two groups, Welch's t-test avoids pooling ([[Welch's t-Test]]).

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

Equal variances protect the pooled within-group variance, and therefore the F-test and the [[Post Hoc Tests|post hoc tests]] that use it ([[ANOVA Assumptions]]).

For example, with group standard deviations of 4.1, 4.8, 5.2 and 3.9, the [[Ratios and Fractions|ratio]] of the largest to the smallest variance is $5.2^2/3.9^2 \approx 1.8$, well under the 9:1 rule of thumb for variances. Equal variances look fine.

So this isn't a box to tick. It's a question about whether one yardstick can fairly measure every group. [[Balanced Design|Equal sample sizes]] don't mean equal variances; they are separate things. But balanced designs do make ANOVA more robust to unequal variances.

See also: [[Variance]], [[Why we never accept the null hypothesis|fail to reject]], [[leveneTest()]], [[Sample Size]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 265).
