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

They're the same test. With only two groups, a one-way ANOVA and the pooled (equal-variance) two-sample t-test give exactly the same answer: F is t², the p-values are identical, and no post hoc test is needed because there's only one pair to compare. The t-test isn't a separate idea from ANOVA. It's ANOVA with two groups.

![[F equals t squared - sheep.png|700]]
Same data, same p-value: 4.007² = 16.06. Book stem-cell sheep data, verified in R.

Most courses teach these as two chapters, so they feel like two things to memorize. Go to what each one is actually doing, and the wall between them disappears.

Both ask the same question: do the group means differ more than chance allows? And both answer it the same way, by comparing the gap between means with the spread within groups, the [[Signal and Noise|noise]].

Now set k = 2 in the ANOVA. The mean square between groups has $k-1 = 1$ degree of freedom. The mean square within groups is just the pooled variance, the same number the t-test uses ([[Pooled Variance]]). With a bit of algebra, $F = t^2$ for the pooled t-test. And an F with 1 numerator degree of freedom has the same [[Tails of a Distribution|tail]] probability as a two-sided t. Squaring t throws away its sign, which is exactly why F has no direction.

The sheep data show it in numbers. The pooled $t = 4.007$ with 16 degrees of freedom. The ANOVA gives $F = 16.06$ with 1 and 16 degrees of freedom. Both give $p = 0.0010$.

Two consequences follow. First, with two groups a significant F already tells you which pair differs, since there's only one, so post hoc tests add nothing ([[Post Hoc Tests]]). Second, the match is with the pooled t-test specifically. R's default, Welch's t-test, doesn't assume equal variances, so it gives a slightly different p ([[Welch's t-Test]]).

This is what understanding feels like: fewer things to remember, because you've seen they were one thing all along. ANOVA is the t-test, extended to as many groups as you like.

Try it yourself. A pooled two-sample t-test gives t = −3. If you ran a one-way ANOVA on the same two groups, what F would you get, and would the p-value change? F = 9, because squaring removes the sign, and the p-value would be exactly the same.

See also: [[Two-Sample Independent t-Test]], [[One-Way ANOVA]], [[F-Distribution]], [[Ratios and Fractions|numerator]], [[Why ANOVA instead of many t-tests]], [[Why analysis of variance can compare means]], [[Why R uses Welch's t-test by default]].
