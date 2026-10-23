---
type: atomic
tags:
  - inference
aliases:
  - "SE"
  - "standard error of the mean"
  - "SEM"
status: seedling
---

**In one line:** the standard error (SE) is the standard deviation of a sampling distribution: how much a [[Parameter vs Statistic|statistic]] would bounce around from sample to sample.

> [!info] Before this, it helps to know
> [[Standard Deviation]] (spread of individuals) · [[Sampling Distribution]] (spread of a statistic) · [[Squares and Square Roots]] (where the root of n comes from)

## Start from zero
1. **The SD describes how much individual values vary** ([[Standard Deviation]]).
2. **A statistic also varies,** from sample to sample ([[Sampling Distribution]]). The SD of that sampling distribution is the **standard error**.
3. **Averages vary less than individuals.** In a mean, high and low values partly cancel.
4. **How much less: the [[Variance|variance]] of a mean of $n$ independent values is $\sigma^2/n$.** *Why:* the variance of a sum of independent values is the sum of their variances ($n\sigma^2$), and dividing the sum by $n$ divides the variance by $n^2$.
5. **Take the square root to get back to an SD:** $SE = \sigma/\sqrt{n}$ ([[Squares and Square Roots]]). *Consequence:* to halve the SE you need four times the data ([[Why a bigger sample gives a narrower confidence interval]]).
6. **In practice $\sigma$ is unknown, so plug in $s$:** $s/\sqrt{n}$. That extra uncertainty is why the t-distribution replaces the normal ([[Why t instead of z when sigma is unknown]]).

| Statistic | SE |
|---|---|
| Mean, $\sigma$ known | $\sigma/\sqrt{n}$ |
| Mean, $\sigma$ unknown (usual) | $s/\sqrt{n}$ → use the [[t-Distribution]] |
| Difference of two independent means | $\sqrt{s_1^2/n_1 + s_2^2/n_2}$ (the variances add, step 4) |
| Mean of paired differences | $s_d/\sqrt{n}$ |
| [[Proportions and Percentages\|Proportion]] | $\sqrt{p(1-p)/n}$ |

## See it

![[Standard error vs sample size.png|700]]
*What to look at:* The SE drops fast at first and then slowly: going from 4 to 16 observations halves it, and halving it again needs 64.

## Why it exists
It is the yardstick of uncertainty. The **margin of error** of a CI is a [[Critical Value|critical value]] times the SE ([[Confidence Interval]]), and test statistics divide by it ([[Test Statistic]]).

## A tiny example
$s = 12$:
- $n = 9$: SE = 12/3 = 4
- $n = 36$: SE = 12/6 = 2
To **halve** the SE you need **4×** the [[Sample Size|sample size]].

## Common confusions
- **"Report the SE because it looks smaller."** Report what answers the question: SD to describe data, SE (or a CI) to describe the [[Random Error and Precision|precision]] of an [[Point Estimate|estimate]].
- **"SE measures the data's spread."** It measures the statistic's precision.

## Connections
- **Builds on:** [[Standard Deviation]], [[Sampling Distribution]], [[Squares and Square Roots]]
- **Leads to:** [[Confidence Interval]], [[Test Statistic]], [[t-Distribution]], [[Pooled Variance]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (§4.1)
