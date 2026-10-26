---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "why the t-distribution"
status: seedling
---

Why switch from z to t once σ has to be estimated?

Because an estimate carries its own uncertainty, and an honest method has to pay for it. The z formula needs the population [[Standard Deviation|standard deviation]] (SD), σ, which we almost never know. Plug in the sample's standard deviation instead and you add extra uncertainty, so [[Test Statistic|test statistics]] land in the [[Tails of a Distribution|tails]] more often than the normal curve predicts. The t-distribution has fatter tails to allow for that, and it turns into the normal curve as the sample grows.

![[t-distribution vs normal.png|700]]
With few degrees of freedom, the t curve is lower in the middle and fatter in the tails, so the cut-offs sit further out. By df = 30 it's almost the normal curve.

The simplest intervals and tests use $\sigma/\sqrt{n}$, with σ known ([[Confidence Interval]]). That's a nice textbook world. In real research, nobody hands you σ.

So you replace σ with $s$, the sample's standard deviation. Now the standard error is itself an estimate: an [[Point Estimate|estimate]] sitting inside another estimate ([[Standard Error]]). You're measuring with a ruler you also had to guess.

And guesses can be off. With small samples, $s$ can come out too small just by chance. When it does, the denominator shrinks and t comes out large. So extreme values happen more often than z allows. If you used the normal curve's cut-offs anyway, you'd be surprised too often, and reject too often.

The t-distribution builds that extra doubt in. Its tails are fatter, so its critical values are bigger: 2.07 at 23 degrees of freedom (df), against 1.96 for z ([[t-Distribution]]). You need a bit more evidence, because you know a bit less.

And the penalty fades as you learn more. As the degrees of freedom grow, $s$ becomes a reliable estimate of σ, and t approaches z ([[Degrees of Freedom]]). With plenty of data, the guess is nearly as good as knowing.

Using z with an estimated standard deviation gives intervals that are too narrow and tests that reject too often, especially with small samples. The t-distribution is just the normal curve, made honest about what you don't know.

Try it yourself. With only 3 observations, would you rather use a z critical value or a t critical value for a confidence interval? The t value. With so few values, the sample standard deviation could easily be far off, and t's fatter tails widen the interval to pay for that. As n grows, the two become nearly the same.

See also: [[Normal Distribution]], [[Critical Value]], [[One-Sample t-Test]], [[Why the sampling distribution makes inference possible]].
