---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "why ANOVA uses variances"
status: seedling
---

Why is a test of means called analysis of *variance*?

Because you can't tell whether means really differ without knowing how much the values scatter. [[One-Way ANOVA|ANOVA]] measures how spread out the group means are, the between-group variance, and compares it with the typical scatter inside the groups, the within-group variance. If the means are much more spread out than noise alone would make them, F is large and the means differ.

![[Between vs within variability.png|700]]
The group means, shown as black bars, are identical in both panels. On the left the points are tight, so the gaps between the means stand out. On the right the same gaps are buried in noise. ANOVA's F is exactly this between-versus-within comparison.

The name sounds backwards, so go back to the root. What would it look like if the groups really had different means?

Start with the boring world, where every population mean is equal. Even there, the sample means won't line up perfectly. Each one wobbles a bit by chance ([[Sampling Distribution]]). So some gap between sample means is guaranteed. The question is whether the gap is bigger than the wobble.

And how big is the wobble? That depends on how much the values scatter inside each group ([[Between- and Within-Group Variability]]). Tight groups, small wobble. Loose groups, big wobble.

So ANOVA measures both. The mean square error (MSE) estimates the within-group variance, pooled across the groups: the noise ([[Pooled Variance]]). The mean square for groups (MSG) measures how spread out the group means actually are, scaled to the same units: the signal.

Now compare them. If $H_0$ is true, both [[Point Estimate|estimate]] the same variance, so $F = MSG/MSE \approx 1$. If the means truly differ, MSG is inflated by the real differences, and F is much bigger than 1 ([[F-Distribution]]).

A couple of things fall out of this. F is a ratio of two variances, and variances can't be negative, so F is never negative. Only a **large** F is evidence against $H_0$, since only means further apart than chance allows count. So the test uses only the [[One-Tailed vs Two-Tailed Tests|right tail]], even though $H_a$, "at least one mean differs", has no direction. And the same means with different spreads give different F values, which is the whole point of the picture above. The usual textbook version shows [[Box Plot and Five-Number Summary|box plots]] with identical means and different spreads to make exactly this case.

So "analysis of variance" is the right name. A difference only means something compared to the noise around it. Compare means without looking at the spread, and you'll call noisy differences real and miss consistent ones.

See also: [[Variance]], [[Ratios and Fractions|ratio]], [[ANOVA Table]], [[Sums of Squares and Mean Squares]], [[Statistical Model]], [[Mean|mean]], [[Signal and Noise]], [[Why ANOVA instead of many t-tests]], [[Why report both center and spread]].
