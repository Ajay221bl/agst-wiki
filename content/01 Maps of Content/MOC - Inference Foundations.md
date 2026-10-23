---
type: moc
tags:
  - moc
  - inference
status: growing
---

> [!tip] New to this?
> Read [[Why the sampling distribution makes inference possible]] before anything else in this map. Every interval and test is built on it.

How one sample can say something about a whole population, and how sure I can be.

*Reading:* [[References|Vu and Harrington 2020, Ch. 3]], [[References|Vu and Harrington 2020, Ch. 4]].

## 1. The normal curve
- [[Normal Distribution]]: the bell, $N(\mu, \sigma)$
- [[Empirical Rule]]: 68 / 95 / 99.7
- [[Z-Score]]: distance from the mean in SDs

## 2. From one sample to all samples
- [[Sampling Distribution]]: how a statistic varies over samples
- [[Central Limit Theorem]]: sample means are roughly normal for large n
- [[Standard Error]]: the SD of that sampling distribution
- [[Sample Size]]: n, n_i and N, and what each changes
- [[Unbiased Estimator]]: centred on the truth on average
- [[Random Error and Precision]]: chance scatter vs a systematic tilt
- [[Degrees of Freedom]]: the count of independent pieces of information

## 3. Estimating
- [[Point Estimate]]: one best guess
- [[Confidence Interval]]: a range at a stated confidence

## 4. Testing
- [[Hypothesis Testing]]: assume the null, check for surprise
- [[Null and Alternative Hypotheses]]: "equality for H-O's"
- [[Test Statistic]]: the gap in standard-error units
- [[Signal and Noise]]: why every test statistic is a ratio
- [[Null Distribution]]: what the statistic looks like when $H_0$ is true
- [[P-Value]]: how surprising, assuming $H_0$
- [[Significance Level]]: the cutoff chosen in advance
- [[Critical Value]]: the edge of the rejection region, and the multiplier in a CI
- [[One-Tailed vs Two-Tailed Tests]]: direction, decided in advance
- [[Writing a Conclusion]]: decision, meaning, numbers, context

## 5. What can go wrong, and what matters
- [[Type I and Type II Errors]]: false positive, false negative
- [[Statistical Power]]: the chance of catching a real effect
- [[Statistical vs Practical Significance]]: probably real vs big enough to matter
- [[Test Assumptions]]: the small print behind every p-value
- [[Robustness]]: which broken assumptions still give trustworthy p-values
- [[Simulation]]: made-up data with a known truth, to watch a method work
- [[Conservative Tests]]: erring towards fewer false positives

## 6. Going further
- [[Chi-Square Test]]: observed vs expected counts
- [[Regression]]: a line through a quantitative predictor

## Related molecular notes
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

## Related MOCs
[[MOC - Probability]] · [[MOC - t-Tests]] · [[MOC - ANOVA]] · [[index|Home]]
