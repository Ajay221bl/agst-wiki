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

> [!summary] In plain words
> In a normality or equal-variance test, H₀ is that the [[Test Assumptions|assumption]] holds. A small p means evidence it is violated, so here we hope for a large p, the reverse of the main test where a small p is usually the hoped-for result. The rule (small p, reject H₀) never changes; what H₀ says does.

## The question
Why is a large p-value good news for Shapiro-Wilk or Levene's test?

## Built from
- [[Null and Alternative Hypotheses]]: what H₀ claims in each test.
- [[Normality Checks]]: Shapiro-Wilk's H₀ is normality.
- [[Homogeneity of Variance]]: Levene's H₀ is equal variances.
- [[P-Value]]: small p, reject H₀.
- [[Writing a Conclusion]]: putting the result in words.

## See it

![[Which p-value you hope for.png|700]]
*What to look at:* Same [[Hypothesis Testing|decision rule]] on both sides; only the content of H₀ changes.

## The reasoning, step by step
1. Every test sets up an H₀ and rejects it when p < α ([[Null and Alternative Hypotheses]], [[P-Value]]).
2. In a t-test or ANOVA, H₀ is "no effect", so a small p is evidence of an effect.
3. In Shapiro-Wilk, H₀ is "the data come from a normal population" ([[Normality Checks]]); in Levene's test, "the variances are equal" ([[Homogeneity of Variance]]).
4. So a small p on these is evidence the assumption fails, and a large p means no evidence of a problem, which is what we want before trusting the main test.
5. A large p does not prove the assumption holds (we never accept H₀), and with big samples tiny departures still give small p. Pair the test with a plot.

## What would go wrong otherwise
Reading every small p as good news would mean celebrating a violated assumption and trusting a test that shouldn't be trusted.

## Connections
- **Related:** [[Why check assumptions before trusting a test]], [[Why we never accept the null hypothesis]], [[Why big samples make almost everything significant]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - t-Tests]], [[MOC - ANOVA]]
