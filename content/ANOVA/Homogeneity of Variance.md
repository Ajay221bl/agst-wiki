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

Homogeneity of variance (HOV, later "homoscedasticity") means every group has the same population variance; Levene's test checks it, and you want it not to reject.

1. **ANOVA pools all groups' spreads into one MSE** ([[Pooled Variance]], [[Sums of Squares and Mean Squares]]).
2. **That only makes sense if the groups share one spread.** If one group is ten times more variable, its [[Signal and Noise|noise]] dominates the pooled [[Point Estimate|estimate]] and the [[One-Way ANOVA|F-test]] is distorted. *Why:* the MSE would be wrong for every group, so F's [[Null Distribution|null distribution]] no longer applies.
3. **First screen: compare the group SDs** ([[Standard Deviation]]). A common rule of thumb is that the largest should be less than about twice the smallest.
4. **Levene's test makes it formal.** It measures each value's distance from its group centre, $|x_{ij} - \text{centre}_i|$ ([[Absolute Value]]), and runs an ANOVA on those distances. *Why that works:* a group with bigger spread has bigger average distances.
   - $H_0$: all variances equal (HOV holds) vs $H_A$: at least one differs. **You want to fail to reject** ([[Null and Alternative Hypotheses]]).
5. **Alternatives include Bartlett, Brown–Forsythe and Fligner.** "HOV" here does not mean high-occupancy vehicle. When HOV fails for two groups, Welch's t-test avoids pooling ([[Welch's t-Test]]).

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

It protects the pooled MSE, and therefore the F-test and the [[Post Hoc Tests|post hocs]] that use it ([[ANOVA Assumptions]]).

For example:

Group SDs 4.1, 4.8, 5.2, 3.9: [[Ratios and Fractions|ratio]] of largest to smallest variance is $5.2^2/3.9^2 \approx 1.8$, well under the 9:1 rule of thumb. HOV looks fine.

Common mistakes:

- **"[[Balanced Design|Equal sample sizes]] means equal variances."** They are separate; balanced designs do make ANOVA more robust to unequal variances.

See also: [[Variance]], [[Why we never accept the null hypothesis|fail to reject]], [[leveneTest()]], [[Sample Size]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 265).
