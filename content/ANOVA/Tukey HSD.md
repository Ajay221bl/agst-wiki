---
type: atomic
tags:
  - anova
aliases:
  - "Tukey"
  - "honestly significant difference"
  - "Tukey's test"
status: seedling
---

Tukey's honestly significant difference (HSD) test compares every pair of group means. Its confidence intervals and p-values are adjusted for all the comparisons at once. It is a common default post hoc test.

The danger in comparing every pair is that you'll always find a biggest gap, and the biggest of many gaps looks impressive even when nothing is there. After a significant [[One-Way ANOVA|ANOVA]], we compare every pair of means ([[Post Hoc Tests]]). Tukey's method widens each interval just enough that all of them together keep a 95% confidence level for the whole family. This accounts for the fact that we are looking at the biggest of many differences ([[Family-Wise Type I Error]]).

For each pair it gives the difference in means, a 95% confidence interval (CI) for that difference, and an adjusted p-value ("p adj"). It uses the pooled within-group mean square from the ANOVA as its [[Signal and Noise|noise]] [[Point Estimate|estimate]] ([[Sums of Squares and Mean Squares]]).

The output is easier than it looks. Read it like a two-sample confidence interval ([[Confidence Interval]]):
- If the **CI crosses 0**, the pair is not significantly different, because 0 (no difference) is a believable value.
- If the **CI is entirely positive or entirely negative**, the pair is significantly different, in that direction.

The order of subtraction is shown in the row name, for example `English-business`. In the FAMuSS data, TT−CC = 9.19 with CI (0.69, 17.68) and p adj = 0.030, so TT is higher.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

Tukey's test controls the chance of any false positive across all the pairwise comparisons, while being less [[Conservative Tests|conservative]] than the [[Bonferroni Correction|Bonferroni correction]] when you compare all pairs.

For example, in the Halloween costume data, rows like `Superman-Hulk` show a positive difference, a CI entirely above 0 and a small p adj, so Superman's mean injury severity is higher than Hulk's. The rows comparing Hulk, Ninja Turtle and Spider-Man cross 0.

It's honest because it prices in how hard you looked. Tukey output doesn't mean the ANOVA was significant. R prints it regardless, so check the ANOVA first.

See also: [[TukeyHSD()]], [[Compact Letter Display]].
