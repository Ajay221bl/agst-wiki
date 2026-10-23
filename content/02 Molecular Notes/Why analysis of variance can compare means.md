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

Whether group means "really" differ depends on how much the values inside each group scatter. [[One-Way ANOVA|ANOVA]] measures how spread out the group means are (between-group variance) and compares that with the typical scatter inside groups (within-group variance). If the means are much more spread out than noise alone would make them, F is large and the means differ.

![[Between vs within variability.png|700]]
The group means (black bars) are identical in both panels. On the left the points are tight, so the gaps between means stand out; on the right the same gaps are buried in noise. ANOVA's F is exactly this between-versus-within comparison.

1. If all population means are equal, the sample means still differ a little by chance ([[Sampling Distribution]]).
2. How much they should differ by chance depends on the within-group spread ([[Between- and Within-Group Variability]]).
3. MSE estimates that within-group variance, pooled across groups ([[Pooled Variance]]).
4. MSG measures how spread out the group means actually are, scaled to the same units.
5. Under $H_0$ both [[Point Estimate|estimate]] the same variance, so $F = MSG/MSE \approx 1$. If the means truly differ, MSG is inflated and $F \gg 1$ ([[F-Distribution]]).
6. F is a ratio of two variances, and variances can't be negative, so F ≥ 0. Only a **large** F is evidence against $H_0$ (means farther apart than chance allows), so the test is always [[One-Tailed vs Two-Tailed Tests|right-tailed]], even though $H_a$ ("at least one mean differs") has no direction ([[F-Distribution]]).
7. Same means, different spreads → different F. The classic picture shows [[Box Plot and Five-Number Summary|box plots]] with identical mean markers and different spreads to make exactly this point.

Comparing means without reference to spread would call noisy differences real and miss consistent ones.

See also: [[Variance]], [[Ratios and Fractions|ratio]], [[ANOVA Table]], [[Sums of Squares and Mean Squares]], [[Statistical Model]], [[Mean|mean]], [[Signal and Noise]], [[Why ANOVA instead of many t-tests]], [[Why report both center and spread]].
