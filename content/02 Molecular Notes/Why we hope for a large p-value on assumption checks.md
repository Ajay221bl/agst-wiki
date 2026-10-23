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

Why is a large p-value good news for Shapiro-Wilk or Levene's test?

In a normality or equal-variance test, H₀ is that the [[Test Assumptions|assumption]] holds. A small p means evidence it is violated, so here we hope for a large p, the reverse of the main test where a small p is usually the hoped-for result. The rule (small p, reject H₀) never changes; what H₀ says does.

![[Which p-value you hope for.png|700]]
Same [[Hypothesis Testing|decision rule]] on both sides; only the content of H₀ changes.

1. Every test sets up an H₀ and rejects it when p < α ([[Null and Alternative Hypotheses]], [[P-Value]]).
2. In a t-test or ANOVA, H₀ is "no effect", so a small p is evidence of an effect.
3. In Shapiro-Wilk, H₀ is "the data come from a normal population" ([[Normality Checks]]); in Levene's test, "the variances are equal" ([[Homogeneity of Variance]]).
4. So a small p on these is evidence the assumption fails, and a large p means no evidence of a problem, which is what we want before trusting the main test.
5. A large p does not prove the assumption holds (we never accept H₀), and with big samples tiny departures still give small p. Pair the test with a plot.

Reading every small p as good news would mean celebrating a violated assumption and trusting a test that shouldn't be trusted.

See also: [[Writing a Conclusion]], [[Why check assumptions before trusting a test]], [[Why we never accept the null hypothesis]], [[Why big samples make almost everything significant]].
