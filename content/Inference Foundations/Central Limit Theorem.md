---
type: atomic
tags:
  - inference
aliases:
  - "CLT"
status: seedling
---

**In one line:** for large enough samples, sample means are approximately normally distributed, centered at the population mean, with spread $\sigma/\sqrt{n}$, whatever the shape of the population.

> [!info] Before this, it helps to know
> [[Sampling Distribution]] (what the theorem describes) · [[Normal Distribution]] (the shape it promises) · [[Standard Error]] (its spread) · [[Law of Large Numbers]] (the simpler cousin)

## Start from zero
1. **We need the sampling distribution of $\bar{x}$,** but we only have one sample ([[Sampling Distribution]]).
2. **The CLT says we can know it anyway.** For a random sample with a reasonably large $n$, the distribution of $\bar{x}$ has three properties:
   1. **Shape:** approximately **normal**, *whatever the shape of the population*. *Why:* a mean adds up many independent pieces, and sums of many small independent pieces tend towards a bell ([[Normal Distribution]]).
   2. **Center:** $\mu_{\bar{x}} = \mu$. *Why:* $\bar{x}$ is unbiased ([[Unbiased Estimator]]).
   3. **Spread:** $\sigma_{\bar{x}} = \sigma/\sqrt{n}$, the **standard error of the mean** ([[Standard Error]]).
3. **"Reasonably large" depends on the population.** Close to normal already: small $n$ is fine. Strongly skewed: you need more (the usual rule of thumb is about 30).
4. **Because $\sqrt{n}$ is in the [[Ratios and Fractions|denominator]], the distribution collapses toward $\mu$ as $n$ grows:** the law of large numbers again ([[Law of Large Numbers]]).
5. **This is what makes tests and intervals possible.** Knowing the shape, centre and spread means we can say how rare an observed $\bar{x}$ would be if $\mu$ had some value ([[Why the sampling distribution makes inference possible]]). It is also why t-tests are robust to non-normal data with large samples ([[Robustness]]).

## See it

![[Central limit theorem.png|700]]
*What to look at:* The population (left) is strongly skewed, yet the means of samples pile up into a bell around μ = 10 and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

## Why it exists
Most data are not normal, yet t-tests and CIs work. The CLT is why: they rely on the *means* being normal, and means become normal fast. It is the justification for running a t-test when Shapiro–Wilk rejects normality but $n$ is large ([[Normality Checks]]).

**When can you use it?**
- The population is normal (any $n$), **or**
- $n$ is large: traditionally **> 30** (some texts say 35). The book: at least 30 independent observations and data not strongly skewed; with extreme [[Outliers|outliers]] or strong [[Shape of a Distribution|skew]], more is needed ([[References|Vu and Harrington 2020, Ch. 4]], p. 202).

## A tiny example
A classic demonstration: populations that were normal, uniform, skewed or asymmetric-bimodal all produced approximately normal sampling distributions of $\bar{x}$ by $n = 30$.

SE for $\sigma = 20$: $n = 4$ → 10; $n = 16$ → 5; $n = 100$ → 2.

## Common confusions
- **"The CLT makes my data normal."** It makes the distribution of *sample means* normal; your data keep their shape.
- **"n > 30 always suffices."** Strong skew or outliers need more.

## Connections
- **Builds on:** [[Sampling Distribution]], [[Normal Distribution]], [[Law of Large Numbers]], [[Standard Error]]
- **Leads to:** [[Standard Error]], [[Confidence Interval]], [[One-Sample t-Test]], [[Normality Checks]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (pp. 201–203)
