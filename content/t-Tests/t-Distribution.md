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

The t-distribution is a bell curve like the standard normal but with fatter [[Tails of a Distribution|tails]], used when the [[Standard Deviation|SD]] in the standard error has to be estimated from the sample; its shape depends on the degrees of freedom.

1. **If $\sigma$ were known,** $z = (\bar{x} - \mu_0)/(\sigma/\sqrt{n})$ would follow the standard normal exactly ([[Normal Distribution]], [[Test Statistic]]).
2. **We almost never know $\sigma$, so the SE uses $s$ instead:** $s/\sqrt{n}$ ([[Standard Error]]). That is an [[Point Estimate|estimate]] inside another estimate, which adds extra [[Variability|variability]]: when $s$ happens to come out small, the ratio comes out big.
3. **So the ratio's distribution has more extreme values than the normal.** The t-distribution is that distribution:
   - [[Shape of a Distribution|symmetric]], bell-shaped, **centered at 0**;
   - **fatter tails** than the normal, so critical values are larger than $z^*$ (wider CIs, more [[Conservative Tests|conservative]] tests) ([[Critical Value]]);
   - shape set by **df** ($n - 1$ for one sample) ([[Degrees of Freedom]]). *Why df:* df says how much data went into $s$, so how wobbly it is.
4. **As df grows, it approaches the standard normal.** *Why:* with lots of data $s$ is very close to $\sigma$, so the extra wobble disappears. With df 14, $t^* = 2.145$ instead of 1.96 ([[Why t instead of z when sigma is unknown]]).

![[t-distribution vs normal.png|700]]
With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

Using $z^*$ with an estimated SD would make intervals too narrow and tests reject too often, especially for small samples ([[Why t instead of z when sigma is unknown]]).

For example:

$t^*$ for 95% with df = 23 (the 24 lizards) is about **2.07**, compared with 1.96 for z. In R: `qt(0.975, 23)` ([[pnorm(), qnorm(), pt() and qt()]]). With df = 1000 it is about 1.96.

Common mistakes:

- **"Use t only when n < 30."** Use t whenever σ is estimated; for large n it nearly equals z anyway.

See also: [[Ratios and Fractions|denominator]], [[One-Sample t-Test]], [[Paired t-Test]], [[Two-Sample Independent t-Test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.1, pp. 238–241).
