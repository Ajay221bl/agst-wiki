---
type: atomic
tags:
  - anova
aliases:
  - "sum of squares"
  - "SS"
  - "SST"
  - "SSG"
  - "SSE"
  - "mean square"
  - "MSG"
  - "MSE"
status: seedling
---

A sum of squares adds up squared distances. ANOVA uses them to split all the variation in the data into two piles: the part explained by the groups and the part left over. Divide each pile by its degrees of freedom and you get a mean square, which is a variance.

Think of it as accounting. The plants in an experiment don't all have the same height. There's a total amount of "differentness". Where did it come from? Some of it is because the plants got different fertilizers. Some of it is just plants being plants. Can we split the total into those two parts and see how big each is? Yes, and it works out exactly.

Start with the total. Measure every plant from the overall average, the [[Grand Mean|grand mean]], square each distance, and add them up: $SST = \sum\sum (x_{ij} - \bar{x})^2$. (Why square? Because plain distances above and below the mean cancel out to zero ([[Deviations from the Mean]]).)

Now here's the trick. Any plant's distance from the grand mean can be split into two steps: from the grand mean to its group's mean, then from its group's mean to the plant itself:
$$x_{ij} - \bar{x} = (\bar{x}_i - \bar{x}) + (x_{ij} - \bar{x}_i)$$
The first step is the group's effect. The second is the plant's own quirk, its residual ([[Residuals]], [[Mean]]). Square and add everything up, and something lovely happens: the cross terms vanish, because inside each group the residuals add to zero. So the total splits perfectly, $SST = SSG + SSE$:
- $SSG = \sum n_i(\bar{x}_i - \bar{x})^2$, the sum of squares between groups: the signal
- $SSE = \sum\sum (x_{ij} - \bar{x}_i)^2$, the sum of squares within groups: the noise

![[Sums of squares - sheep.png|700]]
The total bar equals the two pieces laid end to end: 276.1 + 275.1 = 551.2.

That split is literally what "[[One-Way ANOVA|analysis of variance]]" means ([[Why analysis of variance can compare means]], [[Variability]]).

But you can't compare the two piles directly. Why not? Because a sum gets bigger just by adding more pieces. SSE adds up one piece per plant; SSG only one per group. So turn each into a fair average by dividing by its degrees of freedom, the number of independent pieces it really contains: $MSG = SSG/(k-1)$ and $MSE = SSE/(N-k)$. These are the mean squares, and each one estimates a variance ([[Degrees of Freedom]], [[Why we divide by n minus 1]], [[Point Estimate|estimate]]).

Then compare. If the groups don't really differ, both mean squares estimate the same noise, so $F = MSG/MSE$ should be near 1. If they do differ, MSG gets an extra boost and F grows ([[F-Distribution]], [[Signal and Noise]]).

For example, the stem-cell sheep (2 groups, N = 18) have SSG = 276.1, SSE = 275.1 and SST = 551.2. Then MSG = 276.1/1 = 276.1, MSE = 275.1/16 = 17.2, and F = 16.06. Here's a neat check: with two groups, F is the pooled t squared, 4.007² = 16.06 ([[Two-Sample Independent t-Test]]).

Try it yourself. Is the "error" in mean square error a mistake somebody made? No. It's just the leftover variation inside the groups, the plant-to-plant differences the groups don't explain. So the whole machine is: split the variation, make each part a fair average, then compare.

See also: [[Variance]], [[ANOVA Table]], [[Between- and Within-Group Variability]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 266–267).
