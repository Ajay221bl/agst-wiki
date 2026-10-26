---
type: atomic
tags:
  - inference
aliases:
  - "conservative"
  - "conservative test"
  - "liberal"
  - "liberal test"
  - "conservative adjustment"
status: seedling
---

A **conservative** test or adjustment rejects the null hypothesis less often than its stated α allows. It gives fewer false positives but has less power. A **liberal** one rejects more often than α allows.

A test promises a Type I error rate α when $H_0$ is true ([[Significance Level]]). The real rate can differ from that promise: [[Test Assumptions|assumptions]], approximations or adjustments can push it up or down ([[Robustness]]).

If the real rate is below α, the test is conservative. It plays safe, so false positives are rarer than promised. The price is power: fewer rejections [[Grand Mean|overall]] mean more missed real effects ([[Type I and Type II Errors]], [[Statistical Power]]). This trade can't be avoided, because making it harder to reject works the same way whether the null is true or false. If the real rate is above α, the test is liberal: more power, but more false positives than promised.

Methods for multiple comparisons sit on this scale. The Bonferroni correction is the most conservative common choice; Tukey's method is less so ([[Tukey HSD]]); and making no adjustment at all is very liberal for the family of tests ([[Bonferroni Correction]], [[Family-Wise Type I Error]]).

![[Conservative - Bonferroni error rate.png|700]]
Exact calculation for independent tests with every null true. Without correction the chance of a false positive climbs to 0.64 at 20 tests; Bonferroni keeps it just under 0.05.

Naming the direction a method errs in lets you pick one that matches which mistake is worse for your question.

For example, with 10 independent tests, all with true nulls, each at 0.05, the chance of at least one false positive is $1 - 0.95^{10} = 0.40$. With the Bonferroni correction (each test at 0.005) it is 0.049.

More conservative isn't always safer. It is safer against false positives, but more likely to miss real effects. And conservative doesn't mean the [[P-Value|p-values]] are wrong. They are valid, just cautious: the real error rate is at most α.

See also: [[Post Hoc Tests]], [[Why a significant ANOVA can have no significant post hocs]].
