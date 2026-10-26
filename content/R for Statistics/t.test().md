---
type: atomic
tags:
  - r-statistics
  - t-tests
aliases:
  - "t.test"
status: seedling
---

`t.test()` runs one-sample, paired and two-sample t-tests. Its defaults are a two-sided test, `mu = 0`, 95% confidence, and Welch's version, which allows unequal variances.

One function, three tests. The arguments are how you tell it which question you're asking. One function runs all three t-tests, and the arguments say which one ([[Functions and Arguments]], [[One-Sample t-Test]], [[Paired t-Test]], [[Two-Sample Independent t-Test]]):
- **One-sample:** give the data and the [[Null and Alternative Hypotheses|null value]] `mu`. Always set `mu`, because the default is 0, which is rarely the claim being tested.
- **Paired:** give both columns and `paired = TRUE`. The order sets the subtraction, first − second. Put the "after" column first, so a positive result means an increase.
- **Two-sample:** give two vectors, or a formula, `response ~ group`. With a formula, levels are in alphabetical order, so the subtraction is first level − second level ([[factor()]]). Welch's test is the default; `var.equal = TRUE` pools the variances, which needs a reason ([[Welch's t-Test]], [[Pooled Variance]]).

Set `alternative` to match $H_A$ ([[One-Tailed vs Two-Tailed Tests]]), and `conf.level` if you want something other than 95%.

```r
# One-sample
t.test(lizard$tail)                                       # tests mu = 0 by default
t.test(temp$body, mu = 98.6)
t.test(salmonella, mu = 0.3, alternative = "greater")
t.test(COVID$distress, mu = 10, alternative = "less", conf.level = 0.90)

# Paired: order = first - second (post - pre)
t.test(COVIDtime$April, COVIDtime$March, paired = TRUE)

# Two-sample independent
t.test(mpg_auto, mpg_manual)                              # order = auto - manual
t.test(March ~ child12, data = COVIDkids)                 # formula: levels alphabetical (No - Yes)
t.test(March ~ child12, data = COVIDkids, var.equal = TRUE)   # pooled, needs a justification
```

For example, the output lists **t, the degrees of freedom (df), the p-value, the [[Confidence Interval|confidence interval]] (CI), and the sample mean or means**. Check that:
- **df = n − 1** after missing values are removed ([[Degrees of Freedom]]).
- `p-value < 2.2e-16` is in [[Scientific Notation|scientific notation]]; report it as a very small p-value.
- A one-tailed test gives a **one-sided CI** (−Inf to an upper bound). Run it again without `alternative` to get a two-sided interval.

Defaults answer someone's question. Make sure it's yours. The default doesn't test your hypothesis; it tests μ = 0 unless `mu =` is set. And the order of subtraction matters: it sets the sign of t and the CI, and which `alternative` is correct.

Try it yourself. You run `t.test(after, before, paired = TRUE)` and get a positive mean difference. Did the values go up or down? Up: R subtracts in the order you gave, after minus before.

See also: [[cohensD()]], [[shapiro.test()]], [[report()]].
