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

Because in these tests, H₀ is the thing you want to keep. In a test of normality or of equal variances, H₀ says the [[Test Assumptions|assumption]] holds. A small p is evidence that it's broken, so here you hope for a large p. That's the reverse of the main test, where a small p is usually what people hope for. The rule, small p means reject H₀, never changes. What changes is what H₀ says.

![[Which p-value you hope for.png|700]]
Same [[Hypothesis Testing|decision rule]] on both sides. Only the content of H₀ changes.

This trips people up because they've learned "small p is good" as a reflex. It was never true. It just happened to be true for the tests they'd seen. So go back to what a test does.

Every test sets up an H₀ and rejects it when p < α ([[Null and Alternative Hypotheses]], [[P-Value]]). Whether that's good news depends entirely on what H₀ claimed.

In a t-test or ANOVA, H₀ is "no effect". So a small p is evidence of an effect, and that's usually what you were looking for.

In a Shapiro–Wilk test, H₀ is "the data come from a normal population" ([[Normality Checks]]). In Levene's test, it's "the variances are equal" ([[Homogeneity of Variance]]). Here H₀ is the assumption your main test needs. So a small p is evidence that the assumption fails, and a large p means no evidence of a problem. That's what you want before trusting the main test.

Two cautions keep this honest. A large p doesn't prove the assumption holds, because we never accept H₀. It only means you found no evidence against it. And with big samples, tiny, harmless departures still give a small p. So always pair the test with a plot.

The lesson is bigger than these two tests. Never read a p-value without first asking: what was the null hypothesis? Read every small p as good news and you'll end up celebrating a broken assumption and trusting a test that shouldn't be trusted.

Try it yourself. Levene's test gives a large p-value, well above α. Good or bad for your ANOVA? Good. H₀ in Levene's test is "the variances are equal", and a large p means no evidence against it. A small p here would be the warning sign.

See also: [[Writing a Conclusion]], [[Why check assumptions before trusting a test]], [[Why we never accept the null hypothesis]], [[Why big samples make almost everything significant]].
