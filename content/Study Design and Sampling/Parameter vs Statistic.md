---
type: atomic
tags:
  - study-design
  - inference
aliases:
  - "parameter"
  - "statistic"
  - "SS and PP"
  - "population parameter"
  - "population parameters"
  - "sample statistic"
status: seedling
---

A statistic describes a sample and can be calculated. A parameter describes a whole population and is unknown. An easy way to remember it: **S**ample goes with **S**tatistic, and **P**opulation goes with **P**arameter.

Everything in inference rests on keeping two things apart: what is true, and what you happened to see. The same kind of summary, such as a mean or a [[Standard Deviation|standard deviation]] (SD), can be worked out for the population or for the sample ([[Population and Sample]]). They get different names and different symbols: Greek (or capital) letters for parameters, ordinary letters for statistics ([[Greek Letters and Symbols]]).

| | Sample (statistic, known) | Population (parameter, unknown) |
|---|---|---|
| Mean | $\bar{x}$ | $\mu$ |
| SD | $s$ | $\sigma$ |
| [[Variance]] | $s^2$ | $\sigma^2$ |
| [[Proportions and Percentages\|Proportion]] | $\hat{p}$ | $p$ |
| [[Median]] | $\tilde{x}$ | population median |
| Size | $n$ | $N$ |

A parameter is treated as one fixed true value. Statistics change from sample to sample. This split matters: hypotheses are always about parameters, and how much statistics vary is what the [[Sampling Distribution|sampling distribution]] describes ([[Variability]]). A statistic is our estimate of the matching parameter ([[Point Estimate]], [[Unbiased Estimator]]). So the split tells you what can be calculated and what must be estimated. Every confidence interval and every [[Hypothesis Testing|hypothesis test]] is about an unknown population parameter.

For example, 24 lizards have a mean tail length of 8.958 cm. That is $\bar{x}$, a statistic, and it is known exactly. The mean tail length of all lizards of that species, $\mu$, is unknown. The 95% [[Confidence Interval|confidence interval]] of 8.29 to 9.50 cm estimates it ([[One-Sample t-Test]]).

Get this straight and half of the confusing notation in statistics stops being confusing. The population mean doesn't change with each sample; it is fixed, and it is the sample mean that changes. And hypotheses use parameters, never statistics: write $H_0: \mu = 10$, not $H_0: \bar{x} = 10$ ([[Null and Alternative Hypotheses]]).

Further reading: [[References|Vu and Harrington 2020, Ch. 1]].
