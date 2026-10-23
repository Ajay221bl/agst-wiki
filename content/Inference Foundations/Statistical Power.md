---
type: atomic
tags:
  - inference
aliases:
  - "power"
  - "power analysis"
  - "sample size calculation"
  - "underpowered"
status: seedling
---

Power is the probability that a test detects an effect that really exists. It equals $1 - \beta$, where β is the chance of missing the effect.

Suppose a new feed truly raises weight gain. Will your study notice? Power is that chance: the probability of rejecting $H_0$ when $H_0$ is false, which is 1 − β ([[Type I and Type II Errors]]). With low power, a real effect may come out "not significant".

A test notices an effect when the [[Test Statistic|test statistic]] is large, that is, when the signal is big compared with the noise ([[Signal and Noise]]). So power rises with anything that makes the signal bigger, makes the noise smaller, or lowers the bar. There are four ways to increase it:
1. **Raise α**, for example from 0.05 to 0.10. This lowers the bar and raises power, but most researchers don't want the higher risk of a Type I error.
2. **Increase $n$.** This shrinks the noise, because the standard error is $s/\sqrt{n}$ ([[Standard Error]]). It is the simplest fix, but not always practical because of cost or rare animals.
3. **Increase the effect size.** This makes the signal bigger ([[Effect Size]]). For a first study, design treatment levels that are very different from each other instead of six subtle ones, and refine them later with more funding.
4. **Reduce [[Variability|variability]]** (from the book). This shrinks the noise, through better measurement, [[Nuisance Variables and Confounding|blocking]] or paired designs ([[Why use a paired test for paired data]]).

Plan power before the study. After a non-significant result it is too late to tell a true null from a missed effect.

![[Type I and II errors and power.png|700]]
Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

![[Power vs sample size.png|700]]
For a medium effect at α = 0.05, power climbs with n and reaches the usual 80% target at about 64 per group.

Planning power before collecting data avoids wasting money and animals on a study too small to find anything. It also avoids a study so large that it flags trivial differences ([[References|Vu and Harrington 2020, Ch. 5]], pp. 259–260).

For example, in a blood-pressure trial in the book, with a [[Standard Deviation|standard deviation]] of 12 mmHg, 100 people per group and a true difference of 3 mmHg, power is about 0.42. About 251 per group gives 80% power, and 500 per group gives about 97.7%, more than needed.

The [[Sample Size|sample size]] per group for a two-sample test with equal group sizes is about
$$n \approx \frac{(z_{1-\alpha/2} + z_{1-\beta})^2(\sigma_1^2 + \sigma_2^2)}{\Delta^2}$$
For 80% power at α = 0.05, $(1.96 + 0.84)^2 = 7.84$. Targets are usually 80% or 90%.

A non-significant result doesn't mean there is no effect. It may mean the study had low power.

See also: [[Ratios and Fractions|ratio]], [[Statistical vs Practical Significance]], [[power.t.test()]], [[Statistical Conclusion Validity]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.4, pp. 257–262).
