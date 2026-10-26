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

The F-distribution is the distribution of a [[Ratios and Fractions|ratio]] of two variances. It leans to the right, is never negative, and has two degrees of freedom (df). ANOVA's p-value is the area in its upper [[Tails of a Distribution|tail]].

ANOVA's [[Test Statistic|test statistic]] is a ratio of two variances: $F = MSG/MSE$, the mean square between groups over the mean square within groups ([[Between- and Within-Group Variability]]). It is the first common test statistic that is a ratio of two variances. To get a p-value we need its distribution when $H_0$ is true ([[Null Distribution]]). That distribution is the **F-distribution**, named after **Sir R. A. Fisher**.

Its shape follows from what it is:
- **It isn't [[Shape of a Distribution|symmetric]].** It is usually skewed to the right and can't be negative, because variances are never negative, so neither is their ratio.
- **It is centred near 1 when $H_0$ is true,** because both mean squares [[Point Estimate|estimate]] the same $\sigma^2$.
- **It has two df:** the numerator $df_1 = k - 1$ and the denominator $df_2 = N - k$. They change its shape. There are two because each [[Variance|variance]] estimate has its own df ([[Degrees of Freedom]]).

The p-value is the upper-tail area beyond the observed F. Only the upper tail counts, because differences between means can only make the between-group mean square bigger, never smaller ([[P-Value]]). In the FAMuSS data, F(2, 592) = 3.231 is beyond the critical value 3.01, so p = 0.040 < 0.05 ([[Critical Value]]).

![[F-distribution.png|700]]
F can't be negative and has a long right tail; its exact shape depends on its two df. The book's example (F = 3.23 on 2 and 592 df) gives p ≈ 0.04, the small red tail.

If $H_0$ is true and the [[Test Assumptions|assumptions]] hold, the two mean squares estimate the same variance and their ratio follows an F-distribution. That is what turns an F value into a p-value.

For example:
- **F near 1:** the variability between groups looks like [[Signal and Noise|noise]], which is consistent with $H_0$.
- **F much bigger than 1:** the group means are further apart than noise explains, which is evidence against $H_0$.

In the book's FAMuSS data, F = 3.23 on 2 and 592 df gives p ≈ 0.04 ([[References|Vu and Harrington 2020, Ch. 5]], p. 268).

F can't be negative, even if group 1 is smaller: it is a ratio of quantities that are never negative. And an ANOVA p-value doesn't use both tails, only the upper one.

See also: [[Probability Distribution]], [[ANOVA Table]], [[One-Way ANOVA]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 268).
