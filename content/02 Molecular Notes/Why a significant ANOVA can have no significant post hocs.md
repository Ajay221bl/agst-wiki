---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "significant ANOVA, no pairwise differences"
status: seedling
---

Can a one-way ANOVA be significant while none of the pairwise comparisons are? Why?

Yes, it can happen, for four reasons. Post hoc tests are adjusted to be [[Conservative Tests|conservative]]. Each one uses only two groups' data, so it has less power than the [[One-Way ANOVA|overall test]]. The real difference may be a combination, such as one group against the average of the others, that no single pair captures. And broken [[Test Assumptions|assumptions]] make post hoc tests behave unpredictably.

1. **Conservative adjustment.** Each pairwise p-value is penalized for the number of comparisons, sometimes too heavily ([[Bonferroni Correction]]).
2. **Power.** The overall test uses the whole sample; each pairwise test has less power, especially with [[Balanced Design|unequal group sizes]] ([[Statistical Power]]).
3. **Combinations.** Group A may differ from the *average* of B, C and D. The overall test catches it, but no single pair shows it ([[Post Hoc Tests]]).
4. **Broken assumptions.** Non-normal data or unequal variances make post hoc tests behave unpredictably. Check the assumptions, and consider nonparametric tests with nonparametric post hoc tests ([[ANOVA Assumptions]], [[Nonparametric Alternatives]]).

Without knowing this, a researcher might think the software is broken, or throw away the significant ANOVA result.

See also: [[Tukey HSD]], [[Why post hoc tests only after a significant ANOVA]], [[Why check assumptions before trusting a test]].
