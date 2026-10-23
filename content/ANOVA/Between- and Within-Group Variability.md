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

**In one line:** between-group variability is how far the group means sit from each other; within-group variability is how spread out the values are inside each group; [[One-Way ANOVA|ANOVA]] compares the two.

> [!info] Before this, it helps to know
> [[Variance]] (both are variances) · [[Mean]] (group means and the [[Grand Mean|grand mean]]) · [[Signal and Noise]] (between is signal, within is noise) · [[Box Plot and Five-Number Summary]] (how it looks)

## Start from zero
1. **Picture three groups with means 10, 12 and 14.**
   - If each group is tight (values within ±0.5 of their mean), the groups clearly differ.
   - If each group sprawls from 0 to 25, the same means are lost in the noise.
2. **The means did not change; only the within-group spread did.** So "do the means differ?" can only be answered **relative to the spread inside the groups** ([[Signal and Noise]]). The class slide showed exactly this: box plots with identical mean markers but different spreads.
3. **Measure "how different the group means are" as a variance of the means** around the grand mean ([[Mean]], [[Variance]]). Each group counts once per member, so weight by $n_i$:
   - **Between** (signal): $MSG = SSG/(k-1)$, with $SSG = \sum n_i(\bar{x}_i - \bar{x})^2$.
4. **Measure the noise as the variance of values around their own group mean,** pooled over groups ([[Pooled Variance]]):
   - **Within** (noise): $MSE = SSE/(N-k)$, with $SSE = \sum\sum (x_{ij} - \bar{x}_i)^2$.
5. **Compare them as a [[Ratios and Fractions|ratio]]:** $F = MSG/MSE$ ([[F-Distribution]]). *Why a ratio:* if $H_0$ is true both [[Point Estimate|estimate]] the same $\sigma^2$, so F should be near 1; real differences push MSG up ([[Why analysis of variance can compare means]], [[Sums of Squares and Mean Squares]]).

## See it

![[Between vs within variability.png|700]]
*What to look at:* The group means (black bars) are identical in both panels. On the left the points are tight, so the gaps between means stand out; on the right the same gaps are buried in noise. ANOVA's F is exactly this between-versus-within comparison.

## Why it exists
This ratio, $F = MSG/MSE$, is the whole idea of ANOVA ([[Why analysis of variance can compare means]]).

## A tiny example
| | Group A | Group B | Group C |
|---|---|---|---|
| tight | 9.5, 10, 10.5 | 11.5, 12, 12.5 | 13.5, 14, 14.5 |
| spread | 2, 10, 18 | 4, 12, 20 | 6, 14, 22 |
Same means (10, 12, 14), same MSG. MSE is tiny for the tight rows and huge for the spread rows, so F is large in the first case and small in the second.

## Common confusions
- **"Big differences in means are always significant."** Only if they are big compared with the within-group noise.

## Connections
- **Builds on:** [[Variance]], [[Mean]], [[Signal and Noise]], [[Box Plot and Five-Number Summary]]
- **Leads to:** [[F-Distribution]], [[ANOVA Table]], [[Why analysis of variance can compare means]]
- **Part of:** [[MOC - ANOVA]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (pp. 264–268)
