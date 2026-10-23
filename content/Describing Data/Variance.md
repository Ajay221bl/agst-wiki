---
type: atomic
tags:
  - describing-data
aliases:
  - "sample variance"
  - "s squared"
  - "s^2"
status: seedling
---

**In one line:** the variance is the average squared distance of the data from their mean (dividing by $n - 1$ for a sample).

> [!info] Before this, it helps to know
> [[Deviations from the Mean]] (the raw material) · [[Squares and Square Roots]] (why the distances are squared) · [[Summation Notation]] (how it is written)

## Start from zero
1. **Spread means how far values sit from the centre.** For each value, that's its deviation from the mean, $x_i - \bar{x}$ ([[Deviations from the Mean]]).
2. **Averaging the deviations fails:** they **always sum to zero**, because the mean is the balancing point.
3. **So square them first.** Squaring removes the signs, and it weights big distances more ([[Squares and Square Roots]]). *Why squares rather than [[Absolute Value|absolute values]]:* variances of independent quantities add, which makes standard errors possible ([[Standard Error]]).
4. **Add the squares: the [[Sums of Squares and Mean Squares|sum of squares]]**, $\sum (x_i - \bar{x})^2$ ([[Summation Notation]]).
5. **Divide by $n - 1$ to get an average squared distance:**
$$s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}$$
   *Why $n - 1$ and not $n$:* the deviations are measured from $\bar{x}$, which was fitted to these same data, so they come out a little too small; dividing by $n - 1$ corrects that on average ([[Why we divide by n minus 1]], [[Degrees of Freedom]]).
6. **The result is in squared units** ("worms²"). Its square root brings the units back: the standard deviation ([[Standard Deviation]]).

## See it

![[Deviations from the mean.png|700]]
*What to look at:* Each line is one value's distance from the mean. Square them, add them (32), divide by n − 1 (7) and you have the variance; the square root gives the SD back in the original units.

## Why it exists
Variance is the mathematical workhorse of spread. Variances of independent quantities add, which is how standard errors for differences are built ([[Standard Error]]), and ANOVA literally analyzes it: it splits the total variance into between-group and within-group parts ([[Between- and Within-Group Variability]]).

Dividing by $n - 1$ instead of $n$ makes $s^2$ an **unbiased** estimator of $\sigma^2$ ([[Why we divide by n minus 1]]).

## A tiny example
Data 1, 2, 3, 6, 3 (mean 3). Deviations: −2, −1, 0, 3, 0 (sum 0). Squared: 4, 1, 0, 9, 0 (sum 14).
$s^2 = 14/4 = 3.5$.

## Common confusions
- **"Variance and SD are different measures of different things."** The SD is just the square root of the variance.
- **"Divide by n."** That is the population formula; for a sample, $n - 1$.

## Connections
- **Builds on:** [[Mean]], [[Squares and Square Roots]], [[Summation Notation]], [[Deviations from the Mean]]
- **Leads to:** [[Standard Deviation]], [[Pooled Variance]], [[Between- and Within-Group Variability]], [[Unbiased Estimator]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4)
