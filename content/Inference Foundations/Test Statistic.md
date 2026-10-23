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

**In one line:** a test statistic turns the gap between what you observed and what $H_0$ predicts into a unitless number, scaled by how much that gap would vary by chance.

> [!info] Before this, it helps to know
> [[Z-Score]] (the template) · [[Standard Error]] (the [[Ratios and Fractions|denominator]]) · [[Null and Alternative Hypotheses]] (the [[Expected Value|expected value]] comes from the null) · [[Signal and Noise]] (how to read the ratio)

## Start from zero
1. **Compare what we saw with what $H_0$ predicts:** observed − expected under $H_0$ ([[Null and Alternative Hypotheses]]).
2. **A raw difference has no scale.** Is a difference of 3 big? It depends how much the [[Parameter vs Statistic|statistic]] bounces around from sample to sample.
3. **So divide by the standard error**, just as a z-score divides by the [[Standard Deviation|SD]] ([[Z-Score]], [[Standard Error]]):
$$\text{test statistic} = \frac{\text{observed} - \text{expected under } H_0}{\text{standard error}}$$
   *Why this works:* the result counts "how many standard errors away from the null" the data are: signal over noise ([[Signal and Noise]]).
4. **Every test in the course follows this template:**
   - One-sample z: $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$
   - One-sample t: $t = \dfrac{\bar{x} - \mu_0}{s/\sqrt{n}}$
   - [[Paired t-Test|Paired t]]: $t = \dfrac{\bar{d} - 0}{s_d/\sqrt{n}}$
   - ANOVA: $F = \dfrac{MSG}{MSE}$, a ratio of between- to [[Between- and Within-Group Variability|within-group variability]] ([[F-Distribution]])
5. **Its known distribution under $H_0$ turns it into a probability.** Because the statistic has a known null distribution (z, t, F), we can ask how rare our value is: the [[P-Value]] ([[Null Distribution]]).

## See it

![[P-value as tail area.png|700]]
*What to look at:* Assume H₀ is true and draw the curve of test statistics it would produce. The p-value is the red area at least as far out as what was observed (both [[Tails of a Distribution|tails]] for a [[One-Tailed vs Two-Tailed Tests|two-sided test]]).

## Why it exists
A raw difference (0.4 °F, 3 mmHg) means nothing without knowing how much it would vary by chance and how big the sample is. The test statistic accounts for both, and its known distribution under $H_0$ gives the p-value ([[P-Value]]).

## A tiny example
Salmonella in ice cream ($n = 9$, $\mu_0 = 0.3$): the class output gave $t \approx 2.2$ with df = 8. The sample mean was about 2.2 standard errors above 0.3 ([[One-Sample t-Test]]).

## Common confusions
- **"A big test statistic means a big effect."** It can come from a small effect with a huge $n$ ([[Statistical vs Practical Significance]]).
- **"The sign doesn't matter."** It shows the direction, and it depends on the order of subtraction ([[Two-Sample Independent t-Test]]).

## Connections
- **Builds on:** [[Z-Score]], [[Standard Error]], [[Null and Alternative Hypotheses]], [[Signal and Noise]]
- **Leads to:** [[P-Value]], [[t-Distribution]], [[F-Distribution]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (§4.3)
