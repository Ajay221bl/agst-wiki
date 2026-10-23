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

Power comes from a large ratio of signal to noise. You can't always make the effect bigger, but you can make the noise smaller: compare each unit with itself (pairing), compare like with like (blocking), and measure reliably. All three shrink the [[Ratios and Fractions|denominator]] of the [[Test Statistic|test statistic]], so the same effect becomes easier to detect without more subjects.

![[Paired vs independent view.png|700]]
Seen as two groups, the units overlap widely; seen as differences, the unit-to-unit spread is gone and every unit went up. [[Simulation|Simulated data]].

1. A test statistic is signal over noise ([[Signal and Noise]]), and power rises with that ratio ([[Statistical Power]]).
2. The usual ways to raise power are a larger α, a larger n or a larger effect. A fourth is a smaller noise term.
3. **Pairing:** each unit is its own control, so differences between units cancel out. In the swim data, speeds vary between swimmers with a [[Standard Deviation|standard deviation]] of about 0.14 m/s, but the wetsuit differences vary with a standard deviation of only 0.022 m/s ([[Paired t-Test]]).
4. **Blocking:** group similar units (the same field, pen or day) and assign the treatments within each group, so that source of variation is taken out ([[Nuisance Variables and Confounding]]).
5. **Measurement:** an unreliable rater or instrument adds its own scatter to every value, which inflates the noise ([[Statistical Conclusion Validity]]).
6. The same effect with less noise gives a bigger test statistic, a smaller p, and a need for fewer subjects.

Ignoring a pairing or a known nuisance variable leaves its variation in the [[Residuals|error term]], and real effects go undetected for lack of power.

See also: [[Variability|variation]], [[Why use a paired test for paired data]], [[Why every test statistic is signal over noise]], [[Why a bigger sample gives a narrower confidence interval]].
