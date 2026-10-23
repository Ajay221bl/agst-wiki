---
type: atomic
tags:
  - inference
aliases:
  - "point estimates"
  - "interval estimate"
  - "best guess"
  - "estimate"
status: seedling
---

**In one line:** a point estimate is a single number used as the best guess for an unknown parameter, like $\bar{x}$ for $\mu$.

> [!info] Before this, it helps to know
> [[Parameter vs Statistic]] (the estimate is a statistic) · [[Unbiased Estimator]] (why these statistics are used)

## Start from zero
1. **We want a parameter** (like $\mu$) but can only compute statistics from a sample ([[Parameter vs Statistic]]).
2. **The natural guess is the matching sample statistic.** $\bar{x}$ estimates $\mu$, $\hat{p}$ estimates $p$, $s^2$ estimates $\sigma^2$. *Why these:* they are unbiased, so on average they hit the target ([[Unbiased Estimator]]).
3. **A single number is a point estimate,** and it is almost certainly a little wrong. An illustration: guessing someone's age as one number. A single guess is "either right or absolutely wrong", and most likely wrong. "That's like gambling."
4. **Adding a range buys confidence.** Given a range ("20 to 50") instead, the guesser can be much more confident. That range is an **interval estimate**: point estimate ± margin of error ([[Confidence Interval]]). *Why the margin can be computed at all:* the [[Standard Error]] says how far point estimates typically miss.

## Why it exists
A point estimate is the center of every interval and the [[Ratios and Fractions|numerator]] of every test statistic. On its own it hides how uncertain it is, which is why intervals are preferred for reporting ([[Why go with the confidence interval when the hypothesis is weak]]).

## A tiny example
Lizards: point estimate $\bar{x} = 8.958$ cm. Interval estimate: 8.29 to 9.50 cm (95%). The point estimate sits in the middle of the interval.

## Common confusions
- **"A point estimate is the parameter."** It is a guess at it.

## Connections
- **Builds on:** [[Parameter vs Statistic]], [[Unbiased Estimator]]
- **Leads to:** [[Confidence Interval]], [[Test Statistic]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (§4.1)
