---
type: atomic
tags:
  - inference
aliases:
  - "test statistics"
  - "t statistic"
  - "z statistic"
  - "observed minus expected"
status: seedling
---

A test statistic measures how far your result is from what the boring story predicts, counted in units of "how much this would wobble by chance anyway". Big means surprising.

Suppose a new diet lowers blood pressure by 3 points. Is that a lot? You can't say yet. If blood pressure readings in a group normally bounce around by half a point, 3 is enormous. If they bounce around by dozens of points, 3 is nothing. A raw difference has no scale.

So what do we do? We measure the difference with a ruler made of chance. First, the gap: what you saw minus what the boring story, $H_0$, says you should see ([[Null and Alternative Hypotheses]]). Then divide by how much that gap would wobble from sample to sample just by luck. That wobble has a name, the standard error ([[Standard Error]]). It's exactly what a z-score does with single values, dividing by the [[Standard Deviation|standard deviation]] ([[Z-Score]]):
$$\text{test statistic} = \frac{\text{observed} - \text{expected under } H_0}{\text{standard error}}$$
Read it out loud: "how many wobbles away from the boring prediction am I?" Signal over noise ([[Signal and Noise]]). The units cancel, so it works for blood pressure, chickens or ice cream.

Once you see the template, every test looks the same:
- One-sample z: $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$
- One-sample t: $t = \dfrac{\bar{x} - \mu_0}{s/\sqrt{n}}$
- [[Paired t-Test|Paired t]]: $t = \dfrac{\bar{d} - 0}{s_d/\sqrt{n}}$
- ANOVA: $F = \dfrac{MSG}{MSE}$, the spread *between* the groups over the spread *within* them ([[Between- and Within-Group Variability]], [[F-Distribution]])

And because we know how each of these behaves when nothing is going on (that's the [[Null Distribution|null distribution]]), we can ask how rare our value is. That's the [[P-Value|p-value]].

![[P-value as tail area.png|700]]
Assume H₀ is true and draw the curve of test statistics it would produce. The p-value is the red area at least as far out as what was observed (both [[Tails of a Distribution|tails]] for a [[One-Tailed vs Two-Tailed Tests|two-sided test]]).

Notice the $\sqrt{n}$ hiding in the bottom. More data makes the wobble smaller, so the same gap counts as more wobbles. That's why big studies can detect small differences.

For example, for salmonella in ice cream ($n = 9$, $\mu_0 = 0.3$), R gave $t \approx 2.2$ with 8 degrees of freedom: the sample mean sat about 2.2 wobbles above 0.3 ([[One-Sample t-Test]]).

Now the trap. A big test statistic does not mean a big effect. Because of that $\sqrt{n}$, a tiny effect with a huge sample can give a huge t ([[Statistical vs Practical Significance]]). The test statistic says "surprising", not "important". Also, its sign just tells you the direction, and that depends on which group you subtracted from which ([[Two-Sample Independent t-Test]]).

Try it yourself. Two studies find the same 3-point drop. One has a much bigger sample. Which gets the bigger t? The bigger study, because its standard error is smaller, so 3 points is more wobbles away from zero.

See also: [[Ratios and Fractions|denominator]], [[Expected Value|expected value]], [[t-Distribution]], [[Parameter vs Statistic|statistic]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
