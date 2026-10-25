---
type: atomic
tags:
  - t-tests
aliases:
  - "Cohen d"
  - "standardized mean difference"
status: seedling
---

Cohen's d is the difference between two means divided by a standard deviation (SD), so the effect is measured in SD units. As a rough guide, about 0.2 is small, 0.5 medium and 0.8 large.

Say one study finds a feed adds 2 kg and another finds a drug lowers blood pressure by 5 mmHg. Which effect is bigger? You can't say, because they're in different units. A raw difference in means depends on the units (grams or kilograms), so it can't be compared across studies ([[Effect Size]]). Cohen's d measures the difference in SDs instead, as a z-score does ([[Z-Score]], [[Standard Deviation]]):
$$d = \frac{\bar{x}_1 - \bar{x}_2}{s_{pooled}} \qquad\text{one-sample: } \frac{\bar{x} - \mu_0}{s} \qquad\text{paired: } \frac{\bar{d}}{s_d}$$

The key choice is the denominator. It divides by the SD, not the [[Standard Error|standard error]], because the SD describes individuals. So d says how far apart the groups are, not how precisely we measured the gap. Unlike t, d has no $\sqrt{n}$ in it, so it doesn't grow just because the sample grows.

Cohen's benchmarks for the size of d, ignoring its sign, give a rough reading ([[Absolute Value]]):

| |d| | Label |
|---|---|
| < 0.2 | negligible |
| ≈ 0.2 | small |
| ≈ 0.5 | medium |
| ≈ 0.8 | large |

![[Cohens d overlap.png|700]]
D measures how far apart two group means are in SD units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

Cohen's d puts every study's difference on a common scale without units, and it stays honest when $n$ is huge ([[Why report an effect size with the p-value]]).

For example, two diets give mean weights of 52 and 50 kg, with a [[Pooled Variance|pooled SD]] of 4. Then d = 2/4 = 0.5, a medium effect. With 10 or 10,000 animals per group, d stays about 0.5, while the p-value would change enormously.

Treat the benchmarks as a starting point for judgment, not a replacement for it. A d of 0.2 isn't automatically unimportant. The benchmarks are rules of thumb, and a small effect can matter in context, such as for a vaccine or a cheap feed additive.

See also: [[cohensD()]], [[Statistical vs Practical Significance]].
