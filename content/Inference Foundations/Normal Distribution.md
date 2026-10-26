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

The normal distribution is the famous bell curve: symmetric, one hump in the middle, thinning out evenly on both sides. Its centre is the mean and its width is set by the standard deviation.

Measure the heights of a thousand adults and make a [[Histogram|histogram]]. You'll see a hill: lots of people near the middle, fewer and fewer as you go taller or shorter, about the same on both sides. Do the same with errors when people measure the same thing, or with weights of eggs, and you get the same kind of hill again ([[Random Error and Precision|measurement errors]]). Why does nature keep drawing the same shape?

Here's the reason, and it's a lovely one. Your height isn't decided by one thing. It's the sum of many small nudges: lots of genes, lots of meals, a bit of luck. Some nudge you up, some down. For you to be extremely tall, nearly *all* of them would have to push the same way, which is rare. Usually they partly cancel, so most people land near the middle. Whenever something is the sum of many small independent bits, you get this bell. That's also exactly why averages of samples come out bell-shaped ([[Central Limit Theorem]]).

Smooth that hill into a curve with total area 1, and the area over any stretch is the probability of landing there ([[Probability Distribution]]). The idealized version is the normal distribution: [[Types of Data|continuous]], one peak, symmetric, and with [[Tails of a Distribution|tails]] that drop off fast ([[Shape of a Distribution]]).

![[Normal curves.png|700]]
The mean μ moves the whole bell left or right; σ decides how wide and flat it is. The total area under every curve is 1.

Here's the remarkable part: just two numbers pin it down completely. Where it's centred, $\mu$ ([[Mean]]), and how wide it is, $\sigma$ ([[Standard Deviation]]). We write $N(\mu, \sigma)$. Know those two and you know every area under the curve. That means all normal curves are really the same curve, just slid and stretched. Measure distances in standard deviations, which is what a z-score does, and they all become the **standard normal**, with $\mu = 0$ and $\sigma = 1$ ([[Z-Score]]). So one table, or `pnorm()` in R, works for all of them ([[pnorm(), qnorm(), pt() and qt()]]). The most famous areas are the [[Empirical Rule|empirical rule]].

Many tests assume the data, or the [[Residuals|residuals]], come from roughly normal populations ([[Normality Checks]]). And even when the data aren't normal, *sample means* are approximately normal for large $n$. That's why this curve sits underneath [[Confidence Interval|confidence intervals]] and tests.

For example, these [[Critical Value|critical values]] are used everywhere ([[References|Vu and Harrington 2020, Ch. 4]]):

| Confidence | $z^*$ |
|---|---|
| 90% | 1.645 |
| 95% | 1.96 |
| 99% | 2.58 |

In R, `qnorm(0.975)` gives 1.96, and `pnorm(-1.96)` gives about 0.025.

Now a word of honesty. Real data are never *exactly* normal; it's a model, a very good one. And not every bell is normal: the t-distribution is a bell with fatter tails ([[t-Distribution]]). The deep reason the normal curve matters isn't that the world is normal. It's that averages are.

Try it yourself. Two normal curves have the same mean but one has twice the standard deviation. What does it look like? Same centre, but wider and flatter, because the total area must still be 1.

See also: [[Random Variable]], [[Median|middle value]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (§3.3, p. 152).
