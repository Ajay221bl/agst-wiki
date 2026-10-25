---
type: atomic
tags:
  - t-tests
aliases:
  - "Student's t"
  - "t distribution"
  - "Gosset"
status: seedling
---

The t-distribution is a bell curve like the standard normal but with fatter [[Tails of a Distribution|tails]]. It is used when the [[Standard Deviation|standard deviation]] (SD) in the standard error has to be estimated from the sample. Its shape depends on the degrees of freedom (df).

The t-distribution exists because of one honest admission: we don't know the true spread. If $\sigma$ were known, $z = (\bar{x} - \mu_0)/(\sigma/\sqrt{n})$ would follow the standard normal exactly ([[Normal Distribution]], [[Test Statistic]]). But we almost never know $\sigma$, so the standard error uses $s$ instead: $s/\sqrt{n}$ ([[Standard Error]]). That is an [[Point Estimate|estimate]] inside another estimate, which adds extra [[Variability|variability]]: when $s$ happens to come out small, the ratio comes out big. So the ratio has more extreme values than the normal. The t-distribution is the distribution of that ratio:
- it is [[Shape of a Distribution|symmetric]], bell-shaped and **centred at 0**;
- it has **fatter tails** than the normal, so its critical values are larger than $z^*$, which gives wider confidence intervals and more [[Conservative Tests|cautious]] tests ([[Critical Value]]);
- its shape is set by the **df** ($n - 1$ for one sample), because the df say how much data went into $s$, and so how wobbly it is ([[Degrees of Freedom]]).

As the df grow, the t-distribution approaches the standard normal, because with lots of data $s$ is very close to $\sigma$ and the extra wobble disappears. With df 14, $t^* = 2.145$ instead of 1.96 ([[Why t instead of z when sigma is unknown]]).

![[t-distribution vs normal.png|700]]
With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

So t is the normal curve with a penalty for not knowing, and the penalty shrinks as you learn more. Using $z^*$ with an estimated SD would make intervals too narrow and make tests reject too often, especially for small samples.

For example, $t^*$ for 95% with df = 23 (the 24 lizards) is about **2.07**, compared with 1.96 for z. In R this is `qt(0.975, 23)` ([[pnorm(), qnorm(), pt() and qt()]]). With df = 1000 it is about 1.96.

Don't use t only when n is below 30. Use t whenever σ is estimated; for a large n it nearly equals z anyway.

See also: [[Ratios and Fractions|denominator]], [[One-Sample t-Test]], [[Paired t-Test]], [[Two-Sample Independent t-Test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.1, pp. 238–241).
