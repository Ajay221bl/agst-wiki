---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "significant ANOVA, no pairwise differences"
status: seedling
---

"Can a one-way ANOVA be significant while none of the pairwise comparisons are? Why?"

Yes, it can happen. Post hoc tests are adjusted to be [[Conservative Tests|conservative]], each one uses only two groups' data so it has less power than the [[One-Way ANOVA|omnibus test]], the real difference may be a combination (one group vs the average of the others) that no single pair captures, and violated [[Test Assumptions|assumptions]] make post hocs behave unpredictably.

1. **Conservative adjustment.** Each pairwise p-value is penalized for the number of comparisons, sometimes overly so ([[Bonferroni Correction]]).
2. **Power.** The omnibus test uses the whole sample; each pairwise test has less power, especially with [[Balanced Design|unequal group sizes]] ([[Statistical Power]]).
3. **Complex contrasts.** Group A may differ from the *average* of B, C and D. The omnibus test catches it, but no single pair shows it ([[Post Hoc Tests]]).
4. **Violated assumptions.** Non-normality or unequal variances make post hocs behave unpredictably; check assumptions and consider nonparametric tests with nonparametric post hocs ([[ANOVA Assumptions]], [[Nonparametric Alternatives]]).

Without this, a researcher might think the software is broken, or drop the significant ANOVA result.

See also: [[Tukey HSD]], [[Why post hoc tests only after a significant ANOVA]], [[Why check assumptions before trusting a test]].
