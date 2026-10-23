---
type: moc
tags:
  - moc
  - t-tests
status: growing
---

Tests for one mean or two, when σ has to be estimated.

*Reading:* [[References|Vu and Harrington 2020, Ch. 5]].

## 1. Why t
- [[t-Distribution]]: fatter tails for an estimated SD

## 2. The three tests
- [[One-Sample t-Test]]: one mean against a value
- [[Independent vs Paired Samples]]: the design question that picks the test
- [[Paired t-Test]]: a one-sample test on the differences
- [[Two-Sample Independent t-Test]]: two separate groups, Welch by default
- [[Welch's t-Test]]: separate variances and a fractional df
- [[Pooled Variance]]: the equal-variance version, and when it's justified

## 3. Checking and backing up
- [[Normality Checks]]: Shapiro plus pictures
- [[Q-Q Plot]]: sorted data against normal quantiles; a straight line means normal
- [[Ranks]]: replace values by their order, the basis of rank-based tests
- [[Nonparametric Alternatives]]: rank-based confirmation when normality is doubtful

## 4. How big is it
- [[Effect Size]]: magnitude, independent of n
- [[Cohen's d]]: the mean difference in SD units

## Related molecular notes
- [[Why t instead of z when sigma is unknown]]
- [[Why use a paired test for paired data]]
- [[Why report an effect size with the p-value]]
- [[Why check assumptions before trusting a test]]
- [[Why go with the confidence interval when the hypothesis is weak]]
- [[Why R uses Welch's t-test by default]]
- [[Why rank tests trade power for robustness, and why run both]]
- [[Why normality is checked on residuals or differences]]
- [[Why we hope for a large p-value on assumption checks]]
- [[Why a 95% CI and a two-sided 0.05 test always agree]]

## Related MOCs
[[MOC - Inference Foundations]] · [[MOC - ANOVA]] · [[MOC - R for Statistics]] · [[Test Choice Guide]] · [[index|Home]]
