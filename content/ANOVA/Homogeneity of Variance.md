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

Imagine you're judging a darts contest between three teams, and to decide whether one team is better you need some idea of how much a throw normally wobbles. One way: pool everyone's throws and work out a single "typical wobble". That's fine if all three teams wobble about the same amount. But suppose one team is wildly erratic. Now your single number is too big for the steady teams and too small for the wild one. It's wrong for everybody.

That's exactly the situation in ANOVA. It pools the spreads of all the groups into one within-group variance, the mean square error (MSE) ([[Pooled Variance]], [[Sums of Squares and Mean Squares]]). That only makes sense if the groups share one spread. If one group is ten times more variable, its [[Signal and Noise|noise]] dominates the pooled [[Point Estimate|estimate]], and the [[One-Way ANOVA|F-test]] is distorted, because F's [[Null Distribution|null distribution]] no longer applies.

How do you check? You don't need a formal test to start. Just compare the group standard deviations ([[Standard Deviation]]). A common rule of thumb is that the largest should be less than about twice the smallest.

Levene's test makes the check formal, and it's clever. It measures each value's distance from its group centre, $|x_{ij} - \text{centre}_i|$ ([[Absolute Value]]), and runs an ANOVA on those distances. Why does that work? Because a group with a bigger spread has bigger distances on average, so "do the spreads differ?" becomes "do the average distances differ?", which ANOVA already knows how to answer. Its hypotheses are $H_0$: all variances are equal, against $H_A$: at least one differs. **You want to fail to reject** ([[Null and Alternative Hypotheses]]).

Other tests include Hartley's F-max, which is simply the largest group variance divided by the smallest, as well as Bartlett's, Brown–Forsythe and Fligner's. Each suits different situations; Bartlett's, for example, is sensitive to non-normal data, which Levene's and Brown–Forsythe handle better. When equal variances fail for two groups, Welch's t-test avoids pooling ([[Welch's t-Test]]).

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

Equal variances protect the pooled within-group variance, and therefore the F-test and the [[Post Hoc Tests|post hoc tests]] that use it ([[ANOVA Assumptions]]).

For example, with group standard deviations of 4.1, 4.8, 5.2 and 3.9, the [[Ratios and Fractions|ratio]] of the largest to the smallest variance is $5.2^2/3.9^2 \approx 1.8$, well under the 9:1 rule of thumb for variances. Equal variances look fine.

Here's a trap. [[Balanced Design|Equal sample sizes]] don't mean equal variances; they are separate things. Three groups of the same size can have very different spreads. What balance does buy you is that ANOVA becomes more robust to unequal variances.

Try it yourself. Levene's test gives a p-value well below 5%. Good news or bad? Bad. A small p means you reject "all variances are equal", so the one pooled yardstick doesn't fit every group.

See also: [[Variance]], [[Why we never accept the null hypothesis|fail to reject]], [[leveneTest()]], [[Sample Size]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 265).
