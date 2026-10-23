---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "CI and hypothesis test agree"
  - "confidence interval as a test"
status: seedling
---

> [!summary] In plain words
> A 95% confidence interval is the set of [[Null and Alternative Hypotheses|null values]] a two-sided test at α = 0.05 would not reject. So if μ₀ lies inside the interval, p > 0.05; if it lies outside, p < 0.05. The critical-value method and the p-value method agree for the same reason. A one-sided test does not match a two-sided interval.

## The question
Why can a confidence interval be used to test a claim, and when does that fail?

## Built from
- [[Confidence Interval]]: the interval's construction.
- [[Critical Value]]: the cut-off both use.
- [[Significance Level]]: α = 1 minus confidence level.
- [[One-Tailed vs Two-Tailed Tests]]: why one-sided tests don't match.
- [[Hypothesis Testing]]: the decision rule.

## See it

![[CI and test agree - wetsuit.png|700]]
*What to look at:* The four null values tested against the same 12 swimmers: the one inside the 95% CI is the only one not rejected. Book swim data, verified in R.

## The reasoning, step by step
1. A 95% CI is the [[Point Estimate|estimate]] plus or minus a critical value times the [[Standard Error|SE]], with 2.5% cut from each [[Tails of a Distribution|tail]] ([[Confidence Interval]], [[Critical Value]]).
2. A two-sided test at α = 0.05 rejects when the estimate is more than that same number of SEs from μ₀.
3. "Estimate within that distance of μ₀" and "μ₀ within that distance of the estimate" are the same statement, so the two always agree.
4. The critical-value method (is the [[Parameter vs Statistic|statistic]] in the rejection region?) and the p-value method (is p < α?) are the same comparison read two ways.
5. A one-tailed test puts all of α in one tail, so its cut-off differs from the two-sided interval's; R then reports a one-sided interval running to infinity ([[One-Tailed vs Two-Tailed Tests]]).
6. For a difference between two means, the null value is 0: an interval wholly above or below 0 means a significant difference, and its sign gives the direction.

## What would go wrong otherwise
Treating the interval and the test as unrelated leads to contradictory write-ups, and using a two-sided CI to judge a one-sided test gets the cut-off wrong.

## Connections
- **Related:** [[Why go with the confidence interval when the hypothesis is weak]], [[Why choose alpha and tails before seeing the data]], [[Why an interval beats a single number, and why no interval is 100%]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]], [[MOC - t-Tests]]
