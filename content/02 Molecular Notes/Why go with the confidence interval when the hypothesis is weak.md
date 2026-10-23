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

What are the benefits of a confidence interval, compared with a single best guess and with a hypothesis test?

A hypothesis test is only as good as the [[Null and Alternative Hypotheses|null value]] you test against; pick a silly one and the result is meaningless. A confidence interval (CI) needs no null value. It shows the range of believable values for the [[Parameter vs Statistic|parameter]], and so it shows how big the effect might be. When you are unsure what to test, a confidence interval is the safe choice.

1. **Compared with a single best guess:** one value is either exactly right or wrong, and it is most likely wrong. A range with a confidence level is far more useful, just as guessing someone's age as a range is safer than guessing one number ([[Point Estimate]]).
2. **Compared with a test:** a test needs a hypothesis chosen in advance, and R's default tests μ = 0. For lizard tails, that test was "significant" and useless, while the 95% confidence interval of 8.29 to 9.50 cm was meaningful ([[One-Sample t-Test]]).
3. A confidence interval also shows **size**. An interval for a difference that sits far from 0 shows a large effect; one hugging 0 shows a small one ([[Statistical vs Practical Significance]]).
4. A confidence interval still answers the two-tailed test: if $\mu_0$ is outside the 95% CI, reject at 0.05 ([[Confidence Interval]]).

Otherwise reports would carry p-values against meaningless null values, with no sense of how large the effect is.

See also: [[Hypothesis Testing]], [[Why report an effect size with the p-value]], [[Why a bigger sample gives a narrower confidence interval]].
