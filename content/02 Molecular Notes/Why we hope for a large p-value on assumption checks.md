---
type: molecular
tags:
  - molecular
  - assumptions
aliases:
  - "assumption test p-values"
  - "high p is good here"
status: seedling
---

Why is a large p-value good news for a Shapiro–Wilk test or Levene's test?

In a test of normality or of equal variances, H₀ says the [[Test Assumptions|assumption]] holds. A small p is evidence that it is broken, so here we hope for a large p. That is the reverse of the main test, where a small p is usually the result people hope for. The rule (small p, reject H₀) never changes; what H₀ says does.

![[Which p-value you hope for.png|700]]
Same [[Hypothesis Testing|decision rule]] on both sides; only the content of H₀ changes.

1. Every test sets up an H₀ and rejects it when p < α ([[Null and Alternative Hypotheses]], [[P-Value]]).
2. In a t-test or ANOVA, H₀ is "no effect", so a small p is evidence of an effect.
3. In a Shapiro–Wilk test, H₀ is "the data come from a normal population" ([[Normality Checks]]). In Levene's test, it is "the variances are equal" ([[Homogeneity of Variance]]).
4. So a small p on these tests is evidence that the assumption fails, and a large p means no evidence of a problem, which is what we want before trusting the main test.
5. A large p doesn't prove the assumption holds, because we never accept H₀. And with big samples, tiny departures still give a small p. So pair the test with a plot.

Reading every small p as good news would mean celebrating a broken assumption and trusting a test that shouldn't be trusted.

See also: [[Writing a Conclusion]], [[Why check assumptions before trusting a test]], [[Why we never accept the null hypothesis]], [[Why big samples make almost everything significant]].
