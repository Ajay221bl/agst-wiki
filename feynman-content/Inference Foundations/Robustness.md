---
type: atomic
tags:
  - inference
aliases:
  - "robust"
  - "robust method"
status: seedling
---

A method is robust if it still gives nearly the right answer when its assumptions are a bit off. Real data are never perfect, so robustness is what makes tests usable at all.

Think of a road map. It's a simplification: roads drawn as lines, buildings left out. It's not perfectly true. Does that make it useless? No, it gets you where you're going. A map only fails you if it's wrong in the place that matters, like a bridge that isn't there.

Tests are like that. Every test makes a promise: "if $H_0$ is true, I'll wrongly reject it only α of the time" ([[Significance Level]]). That promise is worked out from a model with assumptions, like "the data are normal" ([[Why check assumptions before trusting a test]]). But nothing in nature is *perfectly* normal. If "the assumptions must hold" meant "hold perfectly", no test could ever be used. So the real question isn't "is it normal?" It's "is it close enough that the promise still roughly holds?"

A robust method is one where the answer is usually yes. Its real false-alarm rate stays near α even when assumptions are moderately broken. t-tests are fairly robust to non-normal data, and here's why: they work with *means*, and the [[Central Limit Theorem|central limit theorem]] makes means close to normal once $n$ is moderate.

![[Robustness - t-test with skewed data.png|700]]
With normal data the t-test rejects a true $H_0$ 5% of the time, as promised. With strongly skewed data it rejects about 12% at n = 5, but the rate falls towards 5% as n grows: that's the CLT rescuing it.

For example, in a [[Simulation|simulation]] with 20,000 samples for each n, a two-sided 5% [[One-Sample t-Test|one-sample t-test]] on a strongly right-skewed (exponential) population wrongly rejected 11.9% of the time at n = 5, 7.2% at n = 30 and 5.8% at n = 100. Small samples from skewed data broke the promise badly; bigger samples nearly kept it.

So robustness has limits. Small samples from strongly skewed populations, or very unequal variances combined with [[Balanced Design|unequal group sizes]], can break the promise. That's when to switch to something sturdier, like Welch's test or a rank-based test, or to report with caution ([[Welch's t-Test]], [[Nonparametric Alternatives]]).

"Robust" also describes summary numbers. The median and the interquartile range ([[Range and IQR|IQR]]) are robust to [[Outliers|outliers]], because they only care about the *order* of the values, not how far out the extreme ones are ([[Median]], [[Ranks]]).

The trap: robust doesn't mean assumptions don't matter. It means *small* breaks don't matter much; big ones still do. And a big $n$ helps with normality but does nothing for data that depend on each other or for a biased sample ([[Sampling Bias]]).

Try it yourself. You have 5 measurements from a very lopsided distribution. Should you trust a t-test? Be careful: that's exactly the case in the simulation where the false-alarm rate more than doubled. A rank-based test would be safer.

See also: [[Null Distribution]], [[Type I and Type II Errors]], [[ANOVA Assumptions]], [[Normality Checks]].
