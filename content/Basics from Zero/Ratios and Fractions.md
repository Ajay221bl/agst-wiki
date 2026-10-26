---
type: atomic
tags:
  - basics
aliases:
  - "ratio"
  - "ratios"
  - "fraction"
  - "numerator"
  - "denominator"
status: seedling
---

A ratio compares two amounts by dividing one by the other. The answer says how many times the bottom number fits into the top one.

12 ÷ 3 = 4 means 12 holds four 3s. Written as a fraction, $\frac{12}{3}$, the top number is the **numerator** and the bottom number is the **denominator**. A bigger numerator gives a bigger ratio, and a bigger denominator gives a smaller one. When both numbers have the same units, the units cancel, and the ratio can be compared across studies ([[Coefficient of Variation]]). A part divided by its whole is a special ratio called a proportion, which always lies between 0 and 1 ([[Proportions and Percentages]]). Other ratios can be any size.

The most important ratio in statistics is signal divided by noise. A test statistic puts the effect you saw on top and its [[Standard Error|standard error]] (SE), which measures how much that effect would wobble by chance, underneath ([[Signal and Noise]], [[Test Statistic]]). The F statistic is a ratio of two variances ([[F-Distribution]]). "Is this effect big?" only has an answer compared with that wobble.

![[Ratio - numerator and denominator.png|700]]
The same shape three times. The wetsuit test statistic is 0.0775 ÷ 0.0063 ≈ 12.3: the effect is about twelve standard errors big.

For example, in the book's swimming data, wetsuits added 0.0775 m/s to swimmers' speed on average, with an SE of 0.0063 m/s. So $t = 0.0775 / 0.0063 \approx 12.3$ (R gives 12.32 because it doesn't round first; [[Paired t-Test]]). On its own, a 0.08 m/s difference means little. Next to an SE of 0.006 it is huge.

Two common slips: a bigger denominator makes the result smaller, not bigger, which is why more noise hides an effect. And a ratio of 2 means "twice as much", not "2 more".

See also: [[Variable and Observation]], [[Odds and Odds Ratio]].
