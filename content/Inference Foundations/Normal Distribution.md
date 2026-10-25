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

The normal distribution is the symmetric, bell-shaped curve. It is written $N(\mu, \sigma)$: it is centred at its mean, and its standard deviation sets its spread.

Why does this one curve show up everywhere? Start with what you'd see. Many measurements pile up around a [[Median|middle value]] and thin out evenly on both sides: heights, weights, [[Random Error and Precision|measurement errors]]. A histogram of them looks like a hill ([[Histogram]]). Smooth the hill into a curve with total area 1, and the area over any interval is the probability of landing there ([[Probability Distribution]]).

The ideal version of that hill is the normal distribution. It is [[Types of Data|continuous]], has one peak, is symmetric and bell-shaped ([[Shape of a Distribution]]), and its [[Tails of a Distribution|tails]] drop off quickly. And it shows up so often for a deep reason: a value made of many small independent effects added together tends towards this shape. Your height is the sum of many genes and many meals. The ups and downs cancel, and most people end up near the middle. That is also why sample means are approximately normal ([[Central Limit Theorem]]).

Two numbers pin it down completely: the centre $\mu$ ([[Mean]]) and the spread $\sigma$ ([[Standard Deviation]]). If you know those two, you know every area under the curve. So one standard version is enough. Converting to z-scores moves any normal curve onto the **standard normal**, with $\mu = 0$ and $\sigma = 1$, so one table, or `pnorm()` in R ([[pnorm(), qnorm(), pt() and qt()]]), serves all of them ([[Z-Score]]). Its best-known areas are the [[Empirical Rule]].

![[Normal curves.png|700]]
The mean μ moves the whole bell left or right; σ decides how wide and flat it is. The total area under every curve is 1.

Many tests assume the data, or the [[Residuals|residuals]], come from roughly normal populations ([[Normality Checks]]). And even when the data are not normal, **sample means** are approximately normal for large $n$. That is why the normal curve sits under [[Confidence Interval|confidence intervals]] and tests.

For example, these [[Critical Value|critical values]] are used throughout ([[References|Vu and Harrington 2020, Ch. 4]]):

| Confidence | $z^*$ |
|---|---|
| 90% | 1.645 |
| 95% | 1.96 |
| 99% | 2.58 |

In R, `qnorm(0.975)` gives 1.96, and `pnorm(-1.96)` gives about 0.025.

Keep it in proportion. Real data are never exactly normal, only approximately, and not every bell shape is normal: the t-distribution is bell-shaped with fatter tails ([[t-Distribution]]). The normal curve is a model, a very good one. Its power isn't that the world is normal. It's that averages are.

See also: [[Random Variable]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3, p. 152).
