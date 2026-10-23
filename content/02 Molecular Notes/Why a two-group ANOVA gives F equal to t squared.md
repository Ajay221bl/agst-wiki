---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "F = t squared"
  - "t-test as a two-group ANOVA"
status: seedling
---

How are the two-sample t-test and one-way ANOVA related?

With only two groups, a one-way ANOVA and the pooled (equal-variance) two-sample t-test are the same test. F is exactly t², the p-values are identical, and no post hoc test is needed because there is only one pair. The t-test is the two-level case of ANOVA.

![[F equals t squared - sheep.png|700]]
Same data, same p-value: 4.007² = 16.06. Book stem-cell sheep data, verified in R.

1. Both tests ask whether group means differ more than chance allows, using the spread within groups as the [[Signal and Noise|noise]].
2. With two groups, MS between has $k-1 = 1$ degree of freedom and MS within is the pooled variance ([[Pooled Variance]]).
3. Algebraically $F = t^2$ for the pooled t-test, and an F with 1 numerator df has the same [[Tails of a Distribution|tail]] probability as a two-sided t.
4. Sheep data: pooled $t = 4.007$ with 16 df; ANOVA $F = 16.06$ with 1 and 16 df; both $p = 0.0010$.
5. With two levels a significant F already says which pair differs, so post hocs add nothing ([[Post Hoc Tests]]).
6. The match is with the pooled t-test. R's default Welch t-test gives a slightly different p ([[Welch's t-Test]]).

Without seeing the link, ANOVA looks like a new idea to memorise instead of the t-test extended, and people run post hocs on two groups.

See also: [[Two-Sample Independent t-Test]], [[One-Way ANOVA]], [[F-Distribution]], [[Ratios and Fractions|numerator]], [[Why ANOVA instead of many t-tests]], [[Why analysis of variance can compare means]], [[Why R uses Welch's t-test by default]].
