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

A test is only as good as the question you put to it. A hypothesis test checks the data against one [[Null and Alternative Hypotheses|null value]], and if that value is silly, the answer is meaningless. A confidence interval (CI) needs no null value. It shows the whole range of believable values for the [[Parameter vs Statistic|parameter]], and so it shows how big the effect might be. When you're not sure what to test, the interval is the safe choice.

Compare the three ways of reporting the same data, and see what each one hides.

**A single best guess hides its uncertainty.** One value is either exactly right or wrong, and it's most likely wrong. A range with a confidence level is far more useful. It's like guessing someone's age: a range is much safer than one number ([[Point Estimate]]).

**A test hides everything except one yes or no.** It needs a hypothesis chosen in advance, and R's default tests μ = 0. For lizard tails, that test came out "significant", which was useless, because nobody thought lizards had no tails. The 95% confidence interval of 8.29 to 9.50 cm was the meaningful result ([[One-Sample t-Test]]). The test answered a question nobody asked. The interval answered the one everybody had.

**An interval shows size.** An interval for a difference that sits far from 0 shows a large effect. One hugging 0 shows a small one ([[Statistical vs Practical Significance]]). That's information a p-value simply doesn't carry.

And you lose nothing by choosing the interval. It still answers the two-tailed test: if $\mu_0$ is outside the 95% CI, reject at 0.05 ([[Confidence Interval]]).

So the interval contains the test, and more. When the question is weak, or you're not sure what it should be, report the range and let the reader see what the data actually support. Otherwise reports fill up with p-values against meaningless null values, and no sense of how large anything is.

See also: [[Hypothesis Testing]], [[Why report an effect size with the p-value]], [[Why a bigger sample gives a narrower confidence interval]].
