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

A statistic describes a sample and can be calculated; a parameter describes a population and is unknown. "Mind your P's and S's."

1. **The same summary (a mean, an [[Standard Deviation|SD]]) can be computed for the population or for the sample** ([[Population and Sample]]).
2. **Give them different names.** **S**ample → **S**tatistic. **P**opulation → **P**arameter.
3. **And different symbols:** Greek (or capital) for parameters, Roman for statistics ([[Greek Letters and Symbols]]).

| | Sample (statistic, known, blue) | Population (parameter, unknown, red) |
|---|---|---|
| Mean | $\bar{x}$ | $\mu$ |
| SD | $s$ | $\sigma$ |
| [[Variance]] | $s^2$ | $\sigma^2$ |
| [[Proportions and Percentages\|Proportion]] | $\hat{p}$ | $p$ |
| [[Median]] | $\tilde{x}$ | population median |
| Size | $n$ | $N$ |

4. **The parameter is treated as fixed:** "one capital-T truth". **Statistics vary** from sample to sample. *Why this split matters:* hypotheses are about parameters, and the [[Variability|variation]] of statistics is what the [[Sampling Distribution]] describes.
5. **A statistic is our estimate of the matching parameter** ([[Point Estimate]]).

It tells you what can be calculated and what must be estimated. Every CI and every [[Hypothesis Testing|hypothesis test]] is about an **unknown population parameter**.

For example:

24 lizards have a mean tail length of 8.958 cm. That is $\bar{x}$, a statistic, known exactly. The mean tail length of all lizards of that species, $\mu$, is unknown; the 95% CI of 8.29 to 9.50 cm estimates it ([[One-Sample t-Test]]).

Common mistakes:

- **"The population mean changes with each sample."** The population mean is fixed; the *sample* mean changes.
- **"$H_0: \bar{x} = 10$."** Hypotheses use parameters ($\mu$), never statistics.

See also: [[Confidence Interval]], [[Null and Alternative Hypotheses]], [[Unbiased Estimator]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]].
