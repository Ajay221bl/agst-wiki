---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "center and spread"
status: seedling
---

Why report a measure of centre **and** a measure of spread, every time?

Because a centre tells you where the data sit, and nothing about how much to trust that location. Two groups can share a mean and be completely different. And spread isn't just decoration. It's what every test divides by, so without it you can't even judge whether a difference in means is large or small.

![[Same mean different spread.png|700]]
Both groups have a mean of 50, so the centre alone says they're identical. Only a measure of spread shows how different they are.

Imagine a description of a bank robber: "white male, 18–27, 170 lb". That's a centre. It describes millions of people. Now add "7'3"" and the picture changes completely. The unusual detail, how far from typical, is often the most informative thing you can say.

Numbers work the same way. The groups 49, 50, 51 and 20, 50, 80 share a mean of 50. But their standard deviations (SD) are 1 and 30 ([[Standard Deviation]]). In the first group, the mean describes everyone. In the second, it describes no one.

Measuring spread takes one bit of care. You'd think you could just average how far each value is from the mean. But raw deviations from the mean always add up to zero, because the mean is the balance point. So a measure of spread squares them first, giving the variance, and then takes a [[Squares and Square Roots|square root]] to return to the original units, giving the standard deviation ([[Variance]]).

Here's the part most people miss. Spread is the yardstick for "big". [[Z-Score|z-scores]], t statistics and [[F-Distribution|F ratios]] all divide a difference by a spread ([[Test Statistic]]). A difference of 3 is enormous if values barely vary, and nothing if they vary by 30. Without the spread, the centre can't be interpreted at all.

So pair them sensibly. For roughly [[Shape of a Distribution|symmetric]] data, report the mean with the standard deviation. For skewed data or data with [[Outliers|outliers]], report the median with the interquartile range (IQR) or the range.

Leave the spread out and readers can't tell whether a difference is huge or trivial. You also hide unequal spreads between groups, which break an ANOVA [[Test Assumptions|assumption]] ([[Homogeneity of Variance]]). A centre is half a description. The spread is the other half.

Try it yourself. Two dart players both average dead centre. One lands every dart close; the other scatters them all over the board. Does "average: dead centre" describe both players fairly? No. You need the spread to tell them apart, and a test needs it too, to judge whether a difference in averages is big.

See also: [[Mean]], [[Median]], [[Range and IQR]], [[Summation Notation]], [[Between- and Within-Group Variability]], [[Deviations from the Mean]], [[Why the median beats the mean for skewed data]], [[Coefficient of Variation]].
