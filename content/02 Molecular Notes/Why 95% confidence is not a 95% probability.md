---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "confidence vs probability"
  - "interpreting a confidence interval"
status: seedling
---

> [!summary] In plain words
> The 95% describes the method: if we repeated the sampling many times, 95% of the intervals built this way would contain μ. Any one interval, once calculated, either contains μ or doesn't; μ is fixed, not random. So we say "95% confident" and avoid "95% probability that μ is in this interval".

## The question
What does "95% confident" mean, and why not say there is a 95% probability μ is in the interval?

## Built from
- [[Confidence Interval]]: how it is built.
- [[Sampling Distribution]]: 95% of sample means fall near μ.
- [[Parameter vs Statistic]]: μ is fixed, the interval is random.
- [[Classical vs Relative Frequency Probability]]: probability as long-run frequency.

## See it

![[Confidence intervals - coverage.png|700]]
*What to look at:* Many samples, many intervals: most catch the fixed μ, a few miss. You never know which kind yours is.

## The reasoning, step by step
1. μ is fixed. What varies from sample to sample is x̄, and so the interval built around it ([[Parameter vs Statistic]]).
2. 95% of sample means fall within about 2 [[Standard Error|standard errors]] of μ ([[Sampling Distribution]]). An interval of ± that much around x̄ catches μ exactly when x̄ is one of those 95%.
3. So in the long run 95% of such intervals contain μ: the probability belongs to the procedure, before the data ([[Classical vs Relative Frequency Probability]]).
4. After the data, a particular interval contains μ or it doesn't: its "probability" is 1 or 0, we just don't know which.
5. Hence "we are 95% confident μ lies between a and b": confident in the process, unable to vouch for this one interval ([[Confidence Interval]]).

## What would go wrong otherwise
Stating a probability for one interval overstates what one study knows and contradicts the fact that μ is fixed.

## Connections
- **Related:** [[Why an interval beats a single number, and why no interval is 100%]], [[Why the sampling distribution makes inference possible]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]]
