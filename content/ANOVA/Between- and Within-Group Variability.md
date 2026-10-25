---
type: atomic
tags:
  - anova
aliases:
  - "between-group variability"
  - "within-group variability"
  - "signal and noise"
  - "MSG"
  - "MSE"
status: seedling
---

Between-group variability is how far the group means sit from each other. Within-group variability is how spread out the values are inside each group. [[One-Way ANOVA|ANOVA]] compares the two.

This is the idea that makes ANOVA work, so go slowly. Picture three groups with means 10, 12 and 14. If each group is tight, with values within ±0.5 of their mean, the groups clearly differ. If each group sprawls from 0 to 25, the same means are lost in the noise. The means didn't change; only the spread within the groups did. So "do the means differ?" can only be answered **relative to the spread inside the groups** ([[Signal and Noise]]).

ANOVA measures how different the group means are as a variance of the means around the grand mean ([[Mean]], [[Variance]]). Each group counts once for each of its members, so it is weighted by $n_i$. This is the **between** part, the signal, called the mean square for groups: $MSG = SSG/(k-1)$, with the sum of squares $SSG = \sum n_i(\bar{x}_i - \bar{x})^2$.

It measures the noise as the variance of the values around their own group mean, pooled over the groups ([[Pooled Variance]]). This is the **within** part, called the mean square error: $MSE = SSE/(N-k)$, with $SSE = \sum\sum (x_{ij} - \bar{x}_i)^2$.

Then it compares them as a [[Ratios and Fractions|ratio]], $F = MSG/MSE$ ([[F-Distribution]]). If $H_0$ is true, both [[Point Estimate|estimate]] the same $\sigma^2$, so F should be near 1; real differences push MSG up. This ratio is the whole idea of ANOVA ([[Why analysis of variance can compare means]], [[Sums of Squares and Mean Squares]]).

![[Between vs within variability.png|700]]
The group means (black bars) are identical in both panels. On the left the points are tight, so the gaps between means stand out; on the right the same gaps are buried in noise. ANOVA's F is exactly this between-versus-within comparison.

For example:

| | Group A | Group B | Group C |
|---|---|---|---|
| tight | 9.5, 10, 10.5 | 11.5, 12, 12.5 | 13.5, 14, 14.5 |
| spread | 2, 10, 18 | 4, 12, 20 | 6, 14, 22 |

Both rows have the same means (10, 12, 14) and so the same MSG. But MSE is tiny for the tight row and huge for the spread row, so F is large in the first case and small in the second.

So a difference is never big or small on its own. It's big or small compared to the noise around it. Big differences in means aren't always significant. They are only significant if they are big compared with the noise within the groups.

See also: [[Grand Mean|grand mean]], [[Box Plot and Five-Number Summary]], [[ANOVA Table]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 264–268).
