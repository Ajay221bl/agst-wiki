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

Between-group variability is how far apart the group averages are. Within-group variability is how spread out the values are inside each group. ANOVA works by comparing the two.

This is the idea that makes ANOVA work, so let's go slowly and use numbers small enough to see everything. Here are three groups, two different ways:

| | Group A | Group B | Group C |
|---|---|---|---|
| tight | 9.5, 10, 10.5 | 11.5, 12, 12.5 | 13.5, 14, 14.5 |
| spread | 2, 10, 18 | 4, 12, 20 | 6, 14, 22 |

Look at the top row. Group A sits around 10, B around 12, C around 14, and inside each group the values barely move. Would you say the groups differ? Obviously.

Now the bottom row. The averages are *exactly the same*, 10, 12 and 14. But inside each group the values sprawl all over. A's values overlap C's. Would you still say the groups clearly differ? Not so confidently.

So what changed? Not the averages. Only the spread *inside* the groups. That's the key: whether the averages "differ" can only be judged **against the spread inside the groups** ([[Signal and Noise]]).

![[Between vs within variability.png|700]]
The group means (black bars) are identical in both panels. On the left the points are tight, so the gaps between means stand out; on the right the same gaps are buried in noise. ANOVA's F is exactly this between-versus-within comparison.

Now let's put numbers on both kinds of spread.

**Between groups, the signal.** How spread out are the group averages around the overall average, the [[Grand Mean|grand mean]]? Measure it like a variance: squared distances of each group mean from the grand mean ([[Mean]], [[Variance]]). Each group counts once for each of its members, so it's weighted by $n_i$. That gives the sum of squares $SSG = \sum n_i(\bar{x}_i - \bar{x})^2$, and dividing by its degrees of freedom gives the mean square for groups, $MSG = SSG/(k-1)$.

**Within groups, the noise.** How spread out are the values around their *own* group's average? Square those distances and add them up across all groups, pooling the groups together ([[Pooled Variance]]): $SSE = \sum\sum (x_{ij} - \bar{x}_i)^2$, and $MSE = SSE/(N-k)$, the mean square error.

**Compare them.** Take the [[Ratios and Fractions|ratio]], $F = MSG/MSE$ ([[F-Distribution]]). Here's the beautiful part. If the groups really don't differ, then the group averages only wander apart by chance, and that chance wandering is driven by the same noise you see inside the groups. So both mean squares [[Point Estimate|estimate]] the same thing, and F should be around 1. If the groups really differ, MSG gets an extra push, and F grows ([[Why analysis of variance can compare means]], [[Sums of Squares and Mean Squares]]).

In the table, both rows have the same MSG, since their means are identical. But MSE is tiny for the top row and huge for the bottom, so F is big in the first case and small in the second. Same signal, different noise, different answer.

Try it yourself. A colleague says "the group means differ by a lot, so it must be significant." What do you ask? "Compared to what? How spread out are the values inside each group?" A difference is never big or small on its own, only big or small compared to the noise around it.

See also: [[Box Plot and Five-Number Summary]], [[ANOVA Table]], [[One-Way ANOVA|ANOVA]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 264–268).
