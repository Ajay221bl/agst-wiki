---
type: atomic
tags:
  - anova
aliases:
  - "F statistic"
  - "F ratio"
  - "Fisher"
status: seedling
---

The F-distribution is the curve that tells you how big the ANOVA ratio, F, tends to get by luck alone. It's never negative, leans to the right, and depends on two numbers of degrees of freedom. ANOVA's p-value is the area in its right-hand tail.

Every test works the same way: compute a number, then ask "how surprising would this be if nothing were going on?" ANOVA's number is $F = MSG/MSE$, the spread between groups divided by the spread within them ([[Between- and Within-Group Variability]], [[Test Statistic]]). To know whether your F is surprising, you need to know what F looks like when nothing is going on ([[Null Distribution]]). That's the F-distribution, named after Sir R. A. Fisher.

You don't need to memorize its shape. You can figure it out just by thinking about what F is:
- **Can F be negative?** It's one variance divided by another. Variances are built from squares, so they're never negative. So F is never negative. The curve starts at 0.
- **Where's the middle?** If nothing's going on, both variances estimate the same noise, so their ratio should hover around 1 ([[Point Estimate|estimate]]).
- **Is it symmetric?** It can't go below 0, but by luck it can sometimes come out quite big. So it has a long tail to the right ([[Shape of a Distribution|symmetric]]).
- **Why two degrees of freedom?** Because each variance estimate has its own: $df_1 = k - 1$ for the top, $df_2 = N - k$ for the bottom. They change the exact shape ([[Degrees of Freedom]], [[Variance]]).

![[F-distribution.png|700]]
F can't be negative and has a long right tail; its exact shape depends on its two df. The book's example (F = 3.23 on 2 and 592 df) gives p ≈ 0.04, the small red tail.

Now, which tail counts as "surprising"? Only the right one. Think about it: if the groups really differ, that pushes the group means apart, which makes the top of the ratio *bigger*. It can never make it smaller. So evidence against $H_0$ only ever shows up as a large F ([[P-Value]], [[Tails of a Distribution|tail]]).

How to read F:
- **F near 1:** the group means are about as spread out as the [[Signal and Noise|noise]] would make them. Consistent with $H_0$.
- **F much bigger than 1:** the group means are further apart than noise explains. Evidence against $H_0$.

For example, in the book's FAMuSS data, F = 3.23 on 2 and 592 df gives p ≈ 0.04 ([[References|Vu and Harrington 2020, Ch. 5]], p. 268). F(2, 592) = 3.231 is beyond the critical value 3.01, so p = 0.040 < 0.05 ([[Critical Value]]). All of this holds as long as the test's [[Test Assumptions|assumptions]] do.

Try it yourself. In a two-group ANOVA, group 1 has the smaller mean. Will F come out negative? No. F is a ratio of two things that can't be negative, so it can't be either. The order of the groups doesn't matter to F at all.

See also: [[Probability Distribution]], [[ANOVA Table]], [[One-Way ANOVA]], [[Ratios and Fractions|ratio]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 268).
