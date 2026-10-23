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

What does "95% confident" mean, and why don't we say there is a 95% probability that μ is in the interval?

The 95% describes the method. If we repeated the sampling many times, 95% of the intervals built this way would contain μ. But any one interval, once it is calculated, either contains μ or doesn't, because μ is fixed, not random. So we say "95% confident" and avoid saying "there is a 95% probability that μ is in this interval".

![[Confidence intervals - coverage.png|700]]
Many samples, many intervals: most catch the fixed μ, a few miss. You never know which kind yours is.

1. μ is fixed. What varies from sample to sample is x̄, and so does the interval built around it ([[Parameter vs Statistic]]).
2. 95% of sample means fall within about 2 [[Standard Error|standard errors]] of μ ([[Sampling Distribution]]). An interval of that width on each side of x̄ catches μ exactly when x̄ is one of those 95%.
3. So in the long run, 95% of such intervals contain μ. The probability belongs to the method, before the data are collected ([[Classical vs Relative Frequency Probability]]).
4. After the data are in, a particular interval either contains μ or it doesn't. Its "probability" is 1 or 0; we just don't know which.
5. So we say "we are 95% confident that μ lies between a and b". We trust the method, but we can't vouch for this one interval ([[Confidence Interval]]).

Giving a probability for one interval overstates what a single study knows, and it contradicts the fact that μ is fixed.

See also: [[Why an interval beats a single number, and why no interval is 100%]], [[Why the sampling distribution makes inference possible]].
