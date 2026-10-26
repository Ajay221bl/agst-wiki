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

The t-distribution is a bell curve like the normal, but with fatter tails. We use it when we had to estimate the spread from the sample itself, which is almost always. The fewer data you have, the fatter the tails.

Here's a puzzle. To know whether your sample mean is surprising, you divide the gap by the standard error, $\sigma/\sqrt{n}$. But wait: you don't know $\sigma$, the true spread of the population. Nobody does. So you use your sample's spread, $s$, instead ([[Standard Error]]). What could go wrong?

Let's think about it. $s$ is itself a guess, and it wobbles from sample to sample. Sometimes, by luck, you get a sample that's unusually bunched up, so $s$ comes out too small. Now look at the ratio, $(\bar{x} - \mu_0)/(s/\sqrt{n})$. A too-small number on the bottom makes the whole thing too big. So every now and then, the ratio shoots out much further than it would if you'd known the true $\sigma$. Extreme values become more common. The curve gets fatter tails ([[Test Statistic]], [[Point Estimate|estimate]], [[Variability]]).

That fattened bell is the t-distribution. If you *did* know $\sigma$, the ratio would follow the plain normal curve exactly ([[Normal Distribution]]). The t is the normal curve with a penalty for not knowing:
- it's [[Shape of a Distribution|symmetric]], bell-shaped and **centred at 0**;
- it has **fatter tails**, so its cut-offs are further out than $z^*$, which makes confidence intervals a bit wider and tests a bit more [[Conservative Tests|cautious]] ([[Critical Value]], [[Tails of a Distribution|tails]]);
- its shape depends on the **degrees of freedom** (df), $n - 1$ for one sample, because the df tell you how much data went into $s$, and so how wobbly it is ([[Degrees of Freedom]]).

![[t-distribution vs normal.png|700]]
With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

And here's the nice part. As you collect more data, $s$ gets closer and closer to the true $\sigma$, the extra wobble disappears, and the t curve turns into the normal curve. The penalty shrinks as you learn more. With df 14, $t^* = 2.145$ instead of 1.96 ([[Why t instead of z when sigma is unknown]]).

For example, $t^*$ for 95% with df = 23 (the 24 lizards) is about **2.07**, compared with 1.96 for z. In R this is `qt(0.975, 23)` ([[pnorm(), qnorm(), pt() and qt()]]). With df = 1000 it is about 1.96.

What if you ignored the penalty and used 1.96 with an estimated spread? Your intervals would be too narrow and your tests would cry wolf too often, especially with small samples.

Try it yourself. Should you use t only when n is below 30? No. Use t whenever the spread is estimated from the data. For big samples t and z are nearly the same anyway, so you lose nothing.

See also: [[Ratios and Fractions|denominator]], [[One-Sample t-Test]], [[Paired t-Test]], [[Two-Sample Independent t-Test]], [[Standard Deviation|standard deviation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.1, pp. 238–241).
