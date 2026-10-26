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

A test statistic turns the gap between what you observed and what the null hypothesis predicts into a number without units, scaled by how much that gap would vary by chance.

Start by comparing what you saw with what $H_0$ predicts: observed minus expected ([[Null and Alternative Hypotheses]]). A raw difference has no scale. Is a difference of 3 big? It depends on how much the [[Parameter vs Statistic|statistic]] bounces around from sample to sample. So divide by the standard error, just as a z-score divides by the [[Standard Deviation|standard deviation]] ([[Z-Score]], [[Standard Error]]):
$$\text{test statistic} = \frac{\text{observed} - \text{expected under } H_0}{\text{standard error}}$$
The result counts how many standard errors away from the null the data are: signal over noise ([[Signal and Noise]]).

Every test follows this template:
- One-sample z: $z = \dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$
- One-sample t: $t = \dfrac{\bar{x} - \mu_0}{s/\sqrt{n}}$
- [[Paired t-Test|Paired t]]: $t = \dfrac{\bar{d} - 0}{s_d/\sqrt{n}}$
- ANOVA: $F = \dfrac{MSG}{MSE}$, the ratio of the between-group to the [[Between- and Within-Group Variability|within-group variability]], each measured as a mean square ([[F-Distribution]])

Because each statistic has a known null distribution (z, t or F), we can ask how rare our value is. That gives the [[P-Value|p-value]] ([[Null Distribution]]).

![[P-value as tail area.png|700]]
Assume H₀ is true and draw the curve of test statistics it would produce. The p-value is the red area at least as far out as what was observed (both [[Tails of a Distribution|tails]] for a [[One-Tailed vs Two-Tailed Tests|two-sided test]]).

A raw difference, such as 0.4 °F or 3 mmHg, means nothing without knowing how much it would vary by chance and how big the sample is. The test statistic accounts for both.

For example, for salmonella in ice cream ($n = 9$, $\mu_0 = 0.3$), R gave $t \approx 2.2$ with 8 degrees of freedom. The sample mean was about 2.2 standard errors above 0.3 ([[One-Sample t-Test]]).

A big test statistic doesn't mean a big effect: it can come from a small effect with a huge $n$ ([[Statistical vs Practical Significance]]). And the sign matters. It shows the direction, and it depends on the order of subtraction ([[Two-Sample Independent t-Test]]).

See also: [[Ratios and Fractions|denominator]], [[Expected Value|expected value]], [[t-Distribution]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
