---
type: molecular
tags:
  - molecular
  - study-design
aliases:
  - "reduce noise to gain power"
  - "noise reduction in design"
status: seedling
---

Why do pairing, blocking and careful measurement all make a study more powerful?

Power comes from a large signal-to-noise ratio. You can't always make the effect bigger, but you can make the noise smaller: compare each unit with itself (pairing), compare like with like (blocking), and measure reliably. All three shrink the [[Ratios and Fractions|denominator]] of the [[Test Statistic|test statistic]], so the same effect becomes easier to detect without more subjects.

![[Paired vs independent view.png|700]]
Seen as two groups, the units overlap widely; seen as differences, the unit-to-unit spread is gone and every unit went up. [[Simulation|Simulated data]].

1. A test statistic is signal over noise ([[Signal and Noise]]); power rises with the ratio ([[Statistical Power]]).
2. The usual levers are a larger α, a larger n or a larger effect. A fourth is a smaller noise term.
3. **Pairing:** each unit is its own control, so unit-to-unit differences cancel. Swim data: velocities vary between swimmers with [[Standard Deviation|SD]] about 0.14 m/s, but the wetsuit differences only with SD 0.022 m/s ([[Paired t-Test]]).
4. **Blocking:** group similar units (same field, pen, day) and assign treatments within each group, so that source of variation is taken out ([[Nuisance Variables and Confounding]]).
5. **Measurement:** an unreliable rater or instrument adds its own scatter to every value, inflating the noise ([[Statistical Conclusion Validity]]).
6. Same effect, smaller noise: bigger test statistic, smaller p, fewer subjects needed.

Ignoring a pairing or a known nuisance variable leaves its variation in the [[Residuals|error term]], and real effects go undetected for lack of power.

See also: [[Variability|variation]], [[Why use a paired test for paired data]], [[Why every test statistic is signal over noise]], [[Why a bigger sample gives a narrower confidence interval]].
