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

Because power comes from a large ratio of signal to noise, and these three all attack the noise. You can't always make the effect bigger. But you can make the noise smaller: compare each unit with itself (pairing), compare like with like (blocking), and measure reliably. All three shrink the [[Ratios and Fractions|denominator]] of the [[Test Statistic|test statistic]], so the same effect becomes easier to detect, without recruiting a single extra subject.

![[Paired vs independent view.png|700]]
Seen as two groups, the units overlap widely. Seen as differences, the spread between units is gone and every unit went up. [[Simulation|Simulated data]].

Start from the one thing every test statistic is: signal over noise ([[Signal and Noise]]). Power, the chance of detecting a real effect, rises with that ratio ([[Statistical Power]]).

The usual advice for more power is a larger α, a larger n, or a larger effect. But a larger α means more false alarms, a larger n costs money, and the effect is whatever nature gave you. There's a fourth lever people forget, and it's often the cheapest: a smaller noise term.

**Pairing** makes each unit its own control. Differences between units, which are often the biggest source of noise, cancel out. In the swim data, speeds vary between swimmers with a [[Standard Deviation|standard deviation]] of about 0.14 m/s. But the wetsuit differences vary with a standard deviation of only 0.022 m/s ([[Paired t-Test]]). Same swimmers, same effect, far less noise.

**Blocking** does the same thing for groups of units. Put similar units together, the same field, pen or day, and assign the treatments within each group. That source of variation is then taken out of the comparison ([[Nuisance Variables and Confounding]]).

**Measurement** is the quiet one. An unreliable rater or instrument adds its own scatter to every value, which inflates the noise for no reason at all ([[Statistical Conclusion Validity]]).

Put them together: the same effect with less noise gives a bigger test statistic, a smaller p, and a need for fewer subjects.

The mistake to avoid is leaving known noise in. Ignore a pairing or a known nuisance variable, and its variation stays in the [[Residuals|error term]], hiding real effects. Clear thinking about where the noise comes from beats brute force. A cleverly designed small study can see what a careless big one misses.

Try it yourself. You can't make a drug work any better, but you want a more powerful study without recruiting more people. Name one thing you could change. Measure each person before and after (pairing), group similar people and compare within groups (blocking), or use a more precise measuring device. Each one shrinks the noise in the denominator, so the same signal stands out more.

See also: [[Variability|variation]], [[Why use a paired test for paired data]], [[Why every test statistic is signal over noise]], [[Why a bigger sample gives a narrower confidence interval]].
