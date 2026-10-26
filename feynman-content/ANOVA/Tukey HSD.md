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

Here's a puzzle. Line up several groups that are really all the same, and look at the gap between the highest mean and the lowest. Is it zero? Never. Some group always comes out on top just by luck, and the more groups you have, the bigger that top-to-bottom gap gets. So if you compare every pair and pick out the biggest gap, it will look impressive even when nothing is there.

Tukey's idea is to be honest about that. After a significant [[One-Way ANOVA|ANOVA]], we compare every pair of means ([[Post Hoc Tests]]). Tukey widens each interval just enough that all of them together keep a 95% confidence level for the whole family. In other words, it judges each gap against how big the *biggest* gap would be by chance, not just any one gap ([[Family-Wise Type I Error]]). That's what the "honestly" means.

For each pair it gives the difference in means, a 95% confidence interval (CI) for that difference, and an adjusted p-value ("p adj"). It uses the pooled within-group mean square from the ANOVA as its [[Signal and Noise|noise]] [[Point Estimate|estimate]] ([[Sums of Squares and Mean Squares]]).

Reading the output is easier than it looks. Treat each row like a two-sample confidence interval ([[Confidence Interval]]):
- If the **CI crosses 0**, the pair is not significantly different, because 0 (no difference) is a believable value.
- If the **CI is entirely positive or entirely negative**, the pair is significantly different, in that direction.

The order of subtraction is shown in the row name, for example `English-business`. In the FAMuSS data, TT−CC = 9.19 with CI (0.69, 17.68) and p adj = 0.030, so TT is higher.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

Tukey's test controls the chance of any false positive across all the pairwise comparisons, while being less [[Conservative Tests|conservative]] than the [[Bonferroni Correction|Bonferroni correction]] when you compare all pairs.

For example, in the Halloween costume data, rows like `Superman-Hulk` show a positive difference, a CI entirely above 0 and a small p adj, so Superman's mean injury severity is higher than Hulk's. The rows comparing Hulk, Ninja Turtle and Spider-Man cross 0.

Here's the trap. R prints Tukey output whether or not the ANOVA was significant. The output being there doesn't mean you're allowed to read it, so check the ANOVA first.

Try it yourself. A Tukey row reads `B-A` with a CI from a negative number to a positive one. What do you conclude? The interval contains 0, so you can't tell B and A apart. And if both ends were negative? Then B is lower than A, because the row is B minus A.

See also: [[TukeyHSD()]], [[Compact Letter Display]].
