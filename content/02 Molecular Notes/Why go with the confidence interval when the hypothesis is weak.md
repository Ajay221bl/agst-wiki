---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "benefits of a confidence interval"
  - "go with the CI"
status: seedling
---

"What are the benefits of a confidence interval?" (vs a point estimate, and vs a hypothesis test).

A hypothesis test is only as good as the [[Null and Alternative Hypotheses|null value]] you test against; pick a silly one and the result is meaningless. A confidence interval needs no null value: it shows the range of plausible values for the [[Parameter vs Statistic|parameter]] and, in doing so, how big the effect might be. "If you don't know what to do, go with the CI."

1. **vs a point estimate:** one value is "either right or absolutely wrong", and most likely wrong; a range with a confidence level is far more useful (the age-guessing example) ([[Point Estimate]]).
2. **vs a test:** a test needs a pre-specified hypothesis. R's default tests μ = 0. For lizard tails that was "significant" and useless; the 95% CI of 8.29 to 9.50 cm was meaningful ([[One-Sample t-Test]]).
3. A CI also shows **size**: an interval for a difference far from 0 shows a large effect; one hugging 0 shows a small one ([[Statistical vs Practical Significance]]).
4. A CI still answers the two-tailed test: if $\mu_0$ is outside the 95% CI, reject at 0.05 ([[Confidence Interval]]).

Reports would carry p-values against meaningless nulls and no sense of how large the effect is.

See also: [[Hypothesis Testing]], [[Why report an effect size with the p-value]], [[Why a bigger sample gives a narrower confidence interval]].
