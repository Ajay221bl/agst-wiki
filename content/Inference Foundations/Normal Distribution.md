---
type: atomic
tags:
  - inference
  - probability
aliases:
  - "normal"
  - "bell curve"
  - "Gaussian"
  - "standard normal"
status: seedling
---

The normal distribution is the symmetric, bell-shaped curve, written $N(\mu, \sigma)$, centered at its mean with spread set by its SD.

1. **Many measurements pile up around a [[Median|middle value]] and thin out symmetrically on both sides** (heights, weights, [[Random Error and Precision|measurement errors]]). A histogram of them looks like a hill ([[Histogram]]).
2. **Smooth the hill into a curve with total area 1.** Then the area over any interval is the probability of landing there ([[Probability Distribution]]).
3. **The idealized version of that hill is the normal distribution:** [[Types of Data|continuous]], unimodal, symmetric, bell-shaped ([[Shape of a Distribution]]). Its [[Tails of a Distribution|tails]] "go down fast". *Why it shows up so often:* a value made of many small independent effects added together tends towards this shape, which is also why sample means are approximately normal ([[Central Limit Theorem]]).
4. **Two numbers pin it down completely:** the centre $\mu$ ([[Mean]]) and the spread $\sigma$ ([[Standard Deviation]]). *Consequence:* if you know those two, you know every area under the curve.
5. **One standard version is enough.** Converting to z-scores moves any normal curve onto the **standard normal**, with $\mu = 0$, $\sigma = 1$, so one table (or `pnorm()` ([[pnorm(), qnorm(), pt() and qt()]])) serves all of them ([[Z-Score]]). Its best-known areas are the [[Empirical Rule]].

![[Normal curves.png|700]]
Μ moves the whole bell left or right; σ decides how wide and flat it is. The total area under every curve is 1.

1. Many tests assume the data (or the [[Residuals|residuals]]) come from roughly normal populations ([[Normality Checks]]).
2. Even when data are not normal, **sample means** are approximately normal for large $n$ ([[Central Limit Theorem]]). That is why the normal sits under [[Confidence Interval|confidence intervals]] and tests.

For example:

[[Critical Value|Critical values]] used throughout ([[References|Vu and Harrington 2020, Ch. 4]]):
| Confidence | $z^*$ |
|---|---|
| 90% | 1.645 |
| 95% | 1.96 |
| 99% | 2.58 |
In R: `qnorm(0.975)` gives 1.96; `pnorm(-1.96)` gives about 0.025.

Common mistakes:

- **"Real data are normal."** Real data are at best approximately normal.
- **"Any bell shape is normal."** The t-distribution is bell-shaped with fatter tails ([[t-Distribution]]).

See also: [[Random Variable]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3, p. 152).
