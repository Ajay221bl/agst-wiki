---
type: atomic
tags:
  - t-tests
aliases:
  - "Cohen d"
  - "standardized mean difference"
status: seedling
---

**In one line:** Cohen's d is the difference between two means divided by a standard deviation, so the effect is expressed in SD units; about 0.2 is small, 0.5 medium and 0.8 large.

> [!info] Before this, it helps to know
> [[Effect Size]] (the idea) · [[Standard Deviation]] (the unit) · [[Z-Score]] (the same "in SD units" idea)

## Start from zero
1. **A raw difference in means depends on the units** (grams vs kilograms), so it can't be compared across studies ([[Effect Size]]).
2. **Measure it in SDs, as a z-score does** ([[Z-Score]], [[Standard Deviation]]):
$$d = \frac{\bar{x}_1 - \bar{x}_2}{s_{pooled}} \qquad\text{one-sample: } \frac{\bar{x} - \mu_0}{s} \qquad\text{paired: } \frac{\bar{d}}{s_d}$$
   *Why the SD and not the [[Standard Error|SE]]:* the SD describes individuals, so d says how far apart the groups are, not how precisely we measured it.
3. **Unlike t, d has no $\sqrt{n}$ in it,** so it does not grow just because the sample grows.
4. **Cohen's benchmarks on |d|** give a rough reading ([[Absolute Value]]):

| |d| | Label |
|---|---|
| < 0.2 | negligible |
| ≈ 0.2 | small |
| ≈ 0.5 | medium |
| ≈ 0.8 | large |

## See it

![[Cohens d overlap.png|700]]
*What to look at:* d measures how far apart two group means are in SD units. Even a large effect (d = 0.8) leaves the two groups overlapping heavily.

## Why it exists
It puts every study's difference on a common, unitless scale and stays honest when $n$ is huge ([[Why report an effect size with the p-value]]).

## A tiny example
Two diets: means 52 and 50 kg, [[Pooled Variance|pooled SD]] 4 → d = 2/4 = 0.5, a medium effect. With 10 or 10,000 animals per group, d stays about 0.5; the p-value would change enormously.

## Common confusions
- **"d = 0.2 is unimportant."** Benchmarks are rules of thumb; a small effect can matter in context (a vaccine, a cheap feed additive).

## Connections
- **Builds on:** [[Effect Size]], [[Standard Deviation]], [[Z-Score]]
- **Leads to:** [[cohensD()]], [[Statistical vs Practical Significance]]
- **Part of:** [[MOC - t-Tests]]
