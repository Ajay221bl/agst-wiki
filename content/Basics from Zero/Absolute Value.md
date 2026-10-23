---
type: atomic
tags:
  - basics
aliases:
  - "|x|"
  - "absolute"
status: seedling
---

The absolute value of a number is its distance from 0. It is written $|x|$ and is never negative: $|-3| = |3| = 3$.

A number has two parts: a sign, which says which side of 0 it is on, and a size, which says how far away it is. Sometimes only the size matters. If you are 3 km from home, you are equally far whether you went east or west. The absolute value keeps the size and drops the sign: $|x| = x$ when $x \ge 0$, and $|x| = -x$ when $x < 0$.

Squaring is the other way to drop a sign ([[Squares and Square Roots]]). Squaring changes the units and makes big values even bigger, but it has tidy algebra, which is why the [[Variance]] uses squares rather than absolute values.

![[Absolute value - distance from zero.png|700]]
−3 and 3 sit on opposite sides of 0 but at the same distance, so both have absolute value 3.

Statistics often asks "how far is this from what we expected?", and a big gap counts whether it is above or below. A two-sided test therefore looks at $|t|$, the size of the test statistic, whatever its sign ([[One-Tailed vs Two-Tailed Tests]]). [[Effect Size|Effect sizes]] such as [[Cohen's d]] are often reported as absolute values too, because their sign only shows which group was subtracted from which.

For example, a test on mercury in fish gave $t = -11.96$. For a two-sided p-value, what matters is $|t| = 11.96$: how far out it sits, on either side ([[One-Sample t-Test]]).

Absolute value doesn't "flip" a number. A positive number stays exactly as it is. And $|a - b|$ is not the same as $a - b$: the first gives only the size of the gap, while the second also tells you which number is bigger.

See also: [[Greek Letters and Symbols]], [[Variable and Observation]], [[Deviations from the Mean]], [[Homogeneity of Variance]], [[Parameter vs Statistic]].
