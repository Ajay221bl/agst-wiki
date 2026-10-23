---
type: atomic
tags:
  - r-statistics
  - t-tests
aliases:
  - "t.test"
status: seedling
---

**In one line:** `t.test()` runs one-sample, paired and two-sample t-tests; its defaults are two-sided, `mu = 0`, 95% confidence and Welch (unequal variances).

> [!info] Before this, it helps to know
> [[One-Sample t-Test]] · [[Paired t-Test]] · [[Two-Sample Independent t-Test]] · [[Functions and Arguments]]

## Start from zero
1. **One function runs all three t-tests;** the arguments say which one ([[Functions and Arguments]], [[One-Sample t-Test]], [[Paired t-Test]], [[Two-Sample Independent t-Test]]).
2. **One-sample: give the data and the [[Null and Alternative Hypotheses|null value]] `mu`.** *Why `mu`:* the default is 0, which is rarely the claim being tested.
3. **Set `alternative` to match $H_A$** ([[One-Tailed vs Two-Tailed Tests]]), and `conf.level` if not 95%.
4. **Paired: give both columns and `paired = TRUE`.** The order sets the subtraction, first − second. *Why put post first:* then positive means an increase.
5. **Two-sample: two vectors, or a formula `response ~ group`.** With a formula, levels are alphabetical, so the subtraction is first level − second level ([[factor()]]). Welch is the default; `var.equal = TRUE` pools, and needs a reason ([[Welch's t-Test]], [[Pooled Variance]]).

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

## Why it exists
One function covers all three t-tests; the arguments decide which test and which hypothesis.

## A tiny example
Reading the output: it lists **t, df, p-value, the [[Confidence Interval|CI]], and the sample mean(s)**. Check:
- **df = n − 1** after NAs are removed ([[Degrees of Freedom]]).
- `p-value < 2.2e-16` is scientific notation; report p < 0.001 ([[Scientific Notation]]).
- A one-tailed test gives a **one-sided CI** (−Inf to an upper bound). Re-run without `alternative` for a two-sided interval ([[One-Tailed vs Two-Tailed Tests]]).

## Common confusions
- **"The default tests my hypothesis."** It tests μ = 0 unless `mu =` is set.
- **"The order of subtraction doesn't matter."** It sets the sign of t and the CI, and which `alternative` is correct.

## Connections
- **Builds on:** [[One-Sample t-Test]], [[Paired t-Test]], [[Two-Sample Independent t-Test]]
- **Leads to:** [[cohensD()]], [[shapiro.test()]], [[report()]]
- **Part of:** [[MOC - R for Statistics]], [[MOC - t-Tests]]
