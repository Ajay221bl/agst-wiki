---
type: moc
tags:
  - moc
  - t-tests
status: growing
---

Tests for one mean or two means, when the population standard deviation σ has to be estimated from the data.

A t-test is the simplest complete version of the idea behind every test: take the difference you saw, divide it by how much it would wobble by chance, and ask whether the result is surprising. The only twist is that you don't know the true spread, so you estimate it, and the t-distribution charges you a little extra for that uncertainty. The big practical question isn't the formula. It's the design: are your two sets of numbers independent, or do they come in pairs?

*Reading:* [[References|Vu and Harrington 2020, Ch. 5]].

## 1. Why t
- [[t-Distribution]]: a curve with fatter tails, because the standard deviation is estimated

## 2. The three tests
- [[One-Sample t-Test]]: compares one mean with a fixed value
- [[Independent vs Paired Samples]]: the design question that decides which test to use
- [[Paired t-Test]]: a one-sample test on the differences within each pair
- [[Two-Sample Independent t-Test]]: two separate groups, using Welch's version by default
- [[Welch's t-Test]]: lets the two groups have different variances, so the degrees of freedom need not be a whole number
- [[Pooled Variance]]: the version that assumes equal variances, and when that is justified

## 3. Checking and backing up
- [[Normality Checks]]: the Shapiro-Wilk test plus pictures
- [[Q-Q Plot]]: the sorted data plotted against what a normal curve predicts, where a straight line means the data look normal
- [[Ranks]]: replacing values with their order, the basis of rank-based tests
- [[Nonparametric Alternatives]]: tests based on ranks, to confirm a result when normality is in doubt

## 4. How big is it
- [[Effect Size]]: how big the effect is, whatever the sample size
- [[Cohen's d]]: the difference in means measured in standard deviations

## Why notes on this topic
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

## Other maps
[[MOC - Inference Foundations]] · [[MOC - ANOVA]] · [[MOC - R for Statistics]] · [[Test Choice Guide]] · [[index|Home]]
