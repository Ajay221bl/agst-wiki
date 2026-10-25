---
type: atomic
tags:
  - inference
aliases:
  - "robust"
  - "robust method"
status: seedling
---

A method is robust when it still gives nearly the right answer even though one of its assumptions is somewhat broken.

Every test makes a promise: "if $H_0$ is true, I'll wrongly reject it only α of the time" ([[Significance Level]]). That promise is calculated from a model with assumptions, such as normal data ([[Why check assumptions before trusting a test]]). But real data never meet assumptions exactly. Nothing in nature is perfectly normal. So if "assumptions must hold" meant "hold perfectly", no test could ever be used. The useful question isn't "is it normal?" but "is it close enough that the promise still roughly holds?"

Robustness answers that question. A robust method's real error rate stays near α when assumptions are moderately broken. t-tests are fairly robust to non-normal data because they work with means, and the [[Central Limit Theorem|central limit theorem]] makes means close to normal once n is moderate.

Robustness has limits. Small samples from strongly skewed populations, or very unequal variances combined with [[Balanced Design|unequal group sizes]], can break the promise. That is when to switch methods, such as Welch's test or a rank-based test, or to report with caution ([[Welch's t-Test]], [[Nonparametric Alternatives]]).

"Robust" also describes statistics. The median and the interquartile range ([[Range and IQR|IQR]]) are robust to [[Outliers|outliers]], because they depend on the order of the values, not how far apart they are ([[Median]], [[Ranks]]).

![[Robustness - t-test with skewed data.png|700]]
With normal data the t-test rejects a true $H_0$ 5% of the time, as promised. With strongly skewed data it rejects about 12% at n = 5, but the rate falls towards 5% as n grows: that's the CLT rescuing it.

Robustness replaces an impossible standard, perfect assumptions, with a workable one: close enough. That's how good judgment works everywhere. You don't need a perfect map, just one that's accurate where you're going. It also tells you when "close enough" stops being true.

For example, in a [[Simulation|simulation]] with 20,000 samples for each n, a two-sided 5% [[One-Sample t-Test|one-sample t-test]] on a strongly right-skewed (exponential) population wrongly rejected 11.9% of the time at n = 5, 7.2% at n = 30 and 5.8% at n = 100.

Robust doesn't mean assumptions don't matter. It means small breaks don't matter much; big ones still do. And a large n doesn't fix everything. It helps with normality, but not with observations that depend on each other or with a biased sample ([[Sampling Bias]]).

See also: [[Null Distribution]], [[Type I and Type II Errors]], [[ANOVA Assumptions]], [[Normality Checks]].
