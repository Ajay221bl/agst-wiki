---
type: moc
tags:
  - moc
  - inference
status: growing
---

> [!tip] New to this?
> Read [[Why the sampling distribution makes inference possible]] before anything else here. Every interval and every test is built on it.

How one sample can tell you something about a whole population, and how sure you can be.

This is the heart of the subject, and it rests on one surprising fact. You never see the population, and you only get one sample. Yet you can know, in advance, how sample means behave across all the samples you could have drawn. That knowledge turns a single number into evidence. Confidence intervals and hypothesis tests are just two ways of using it: one asks "where is the truth likely to be?", the other asks "is this claim believable?". Learn the sampling distribution properly and everything in this map follows from it.

*Reading:* [[References|Vu and Harrington 2020, Ch. 3]], [[References|Vu and Harrington 2020, Ch. 4]].

## 1. The normal curve
- [[Normal Distribution]]: the bell-shaped curve, written $N(\mu, \sigma)$
- [[Empirical Rule]]: about 68%, 95% and 99.7% of values fall within 1, 2 and 3 standard deviations of the mean
- [[Z-Score]]: how many standard deviations a value sits from the mean

## 2. From one sample to all samples
- [[Sampling Distribution]]: how a statistic changes from one sample to the next
- [[Central Limit Theorem]]: sample means follow a roughly normal curve when the sample is large
- [[Standard Error]]: the standard deviation of that sampling distribution
- [[Sample Size]]: what n, $n_i$ and N each mean, and what each one changes
- [[Unbiased Estimator]]: an estimate that is right on average
- [[Random Error and Precision]]: chance scatter versus a steady push in one direction
- [[Degrees of Freedom]]: the number of independent pieces of information

## 3. Estimating
- [[Point Estimate]]: a single best guess
- [[Confidence Interval]]: a range of plausible values, at a stated level of confidence

## 4. Testing
- [[Hypothesis Testing]]: assume nothing is going on, then check whether the data are surprising
- [[Null and Alternative Hypotheses]]: the two competing claims, where the null hypothesis always holds the equals sign
- [[Test Statistic]]: the gap between the data and the null hypothesis, measured in standard errors
- [[Signal and Noise]]: why every test statistic is a ratio
- [[Null Distribution]]: how the test statistic behaves when the null hypothesis $H_0$ is true
- [[P-Value]]: how surprising the data are, assuming $H_0$ is true
- [[Significance Level]]: the cutoff for "surprising", chosen in advance
- [[Critical Value]]: the edge of the rejection region, and the multiplier in a confidence interval
- [[One-Tailed vs Two-Tailed Tests]]: whether you look for a difference in one direction or in both, decided in advance
- [[Writing a Conclusion]]: the decision, what it means, the numbers and the context

## 5. What can go wrong, and what matters
- [[Type I and Type II Errors]]: a false positive and a false negative
- [[Statistical Power]]: the chance of detecting an effect that is really there
- [[Statistical vs Practical Significance]]: probably real versus big enough to matter
- [[Test Assumptions]]: the conditions every p-value depends on
- [[Robustness]]: which broken assumptions still give p-values you can trust
- [[Simulation]]: made-up data with a known truth, used to watch a method work
- [[Conservative Tests]]: tests that lean toward fewer false positives

## Why notes on this topic
- [[Why the sampling distribution makes inference possible]]
- [[Why a bigger sample gives a narrower confidence interval]]
- [[Why we never accept the null hypothesis]]
- [[Why a p-value is not always meaningful]]
- [[Why choose alpha and tails before seeing the data]]
- [[Why go with the confidence interval when the hypothesis is weak]]
- [[Why use degrees of freedom as a sanity check]]
- [[Why every test statistic is signal over noise]]
- [[Why a p-value is not the probability the null is true]]
- [[Why a 95% CI and a two-sided 0.05 test always agree]]
- [[Why big samples make almost everything significant]]
- [[Why hypotheses are about parameters, and the null holds the equals sign]]
- [[Why an interval beats a single number, and why no interval is 100%]]
- [[Why 95% confidence is not a 95% probability]]

## Other maps
[[MOC - Probability]] · [[MOC - t-Tests]] · [[MOC - ANOVA]] · [[index|Home]]
