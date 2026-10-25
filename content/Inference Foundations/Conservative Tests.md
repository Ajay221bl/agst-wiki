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

A **conservative** test or adjustment rejects the null hypothesis less often than its stated α allows. It gives fewer false positives, but has less power. A **liberal** one rejects more often than α allows.

Every test makes a promise. It says: if $H_0$ is true, I'll raise a false alarm only α of the time ([[Significance Level]]). But promises and reality can drift apart. [[Test Assumptions|Assumptions]], approximations or adjustments can push the real rate up or down ([[Robustness]]). Conservative and liberal are the words for which way it drifted.

If the real rate is below α, the test is conservative. It plays safe, so false positives are rarer than promised. But nothing comes free. The price is power: fewer rejections [[Grand Mean|overall]] mean more missed real effects ([[Type I and Type II Errors]], [[Statistical Power]]). And you can't escape the trade, because making it harder to reject works the same way whether the null is true or false. A stricter judge convicts fewer innocent people and lets more guilty ones go. If the real rate is above α, the test is liberal: more power, but more false positives than promised.

Methods for multiple comparisons sit along this scale. The Bonferroni correction is the most conservative common choice. Tukey's method is less so ([[Tukey HSD]]). And making no adjustment at all is very liberal for the family of tests ([[Bonferroni Correction]], [[Family-Wise Type I Error]]).

![[Conservative - Bonferroni error rate.png|700]]
Exact calculation for independent tests with every null true. Without correction, the chance of a false positive climbs to 0.64 at 20 tests. Bonferroni keeps it just under 0.05.

Naming the direction a method errs in is useful, because it lets you pick one that matches which mistake is worse for your question.

For example, with 10 independent tests, all with true nulls and each at 0.05, the chance of at least one false positive is $1 - 0.95^{10} = 0.40$. With the Bonferroni correction, each test at 0.005, it is 0.049.

So "more conservative" doesn't simply mean "safer". It's safer against false positives and more likely to miss real effects. And conservative doesn't mean the [[P-Value|p-values]] are wrong. They're valid, just cautious: the real error rate is at most α. Every method leans one way. Know which way, and choose on purpose.

See also: [[Post Hoc Tests]], [[Why a significant ANOVA can have no significant post hocs]].
