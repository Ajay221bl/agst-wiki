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

**In one line:** power is the probability that a test detects an effect that really exists: $1 - \beta$.

> [!info] Before this, it helps to know
> [[Type I and Type II Errors]] (power is 1 − β) · [[Standard Error]] (noise shrinks with n) · [[Signal and Noise]] (power grows with the [[Ratios and Fractions|ratio]]) · [[Effect Size]] (the signal)

## Start from zero
1. **If a new feed truly raises weight gain, will my study notice?** Power is that chance: P(reject $H_0$ | $H_0$ false) = 1 − β ([[Type I and Type II Errors]]). Low power means a real effect may come out "not significant".
2. **The test notices when the [[Test Statistic|test statistic]] is large,** that is, when signal is big compared with noise ([[Signal and Noise]]). So power rises with anything that grows the signal, shrinks the noise or lowers the bar.
3. **Ways to increase power** (from class), each through one of those routes:
   1. **Increase α** (0.05 → 0.10): lowers the bar. Raises power, but most researchers don't want the higher Type I risk.
   2. **Increase $n$:** shrinks the noise, because the SE is $s/\sqrt{n}$ ([[Standard Error]]). The simplest fix, not always practical (cost, rare animals).
   3. **Increase the effect size:** grows the signal ([[Effect Size]]). For a preliminary study, design **vastly different** treatment levels instead of six subtle ones; refine later with more funding.
   4. (Book) **Reduce [[Variability|variability]]:** shrinks the noise. Better measurement, [[Nuisance Variables and Confounding|blocking]], paired designs ([[Why use a paired test for paired data]]).
4. **Plan power before the study.** *Why:* after a non-significant result it's too late to tell a real null from a missed effect.

## See it

![[Type I and II errors and power.png|700]]
*What to look at:* Blue is the world where H₀ is true, orange the world with a real effect. Red (α) is a false alarm, gray (β) a missed effect, green is power. Moving the dashed [[Critical Value|cut-off]] right shrinks red but grows gray.

![[Power vs sample size.png|700]]
*What to look at:* For a medium effect at α = 0.05, power climbs with n and reaches the usual 80% target at about 64 per group.

## Why it exists
Planning power **before** collecting data avoids wasting money and animals on an underpowered study, and avoids an overpowered one that flags trivial differences ([[References|Vu and Harrington 2020, Ch. 5]], pp. 259–260).

## A tiny example
Book blood-pressure trial: [[Standard Deviation|SD]] 12 mmHg, 100 per group, true difference 3 mmHg → power ≈ **0.42**. About **251 per group** gives 80% power; 500 per group gives about 97.7%, more than needed.

[[Sample Size|Sample size]] per group (two-sample, equal $n$):
$$n \approx \frac{(z_{1-\alpha/2} + z_{1-\beta})^2(\sigma_1^2 + \sigma_2^2)}{\Delta^2}$$
For 80% power at α = 0.05: $(1.96 + 0.84)^2 = 7.84$. Targets are usually **80% or 90%**.

## Common confusions
- **"A non-significant result means no effect."** It may mean low power.

## Connections
- **Builds on:** [[Type I and Type II Errors]], [[Standard Error]], [[Effect Size]], [[Signal and Noise]]
- **Leads to:** [[Statistical vs Practical Significance]], [[power.t.test()]], [[Statistical Conclusion Validity]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (§5.4, pp. 257–262)
