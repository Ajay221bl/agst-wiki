---
type: atomic
tags:
  - anova
aliases:
  - "CLD"
  - "letters"
  - "SAS-style letters"
  - "mean separation letters"
status: seedling
---

A compact letter display labels each group with letters. Groups that share a letter are not significantly different, and groups with no letter in common are.

The problem is a reading problem, not a maths problem. Post hoc tests give one result for each pair of groups ([[Post Hoc Tests]]). With many groups, a table of every pairwise p-value is hard to read, because it has $k(k-1)/2$ rows. Letters compress it: groups that are not significantly different get a shared letter ([[Tukey HSD]]).

| Group | Mean | Letters |
|---|---|---|
| A | 12.1 | a |
| B | 14.0 | ab |
| C | 15.9 | b |

Read it by asking "do they share a letter?" A and C differ, because they share no letter. B shares "a" with A and "b" with C, so it differs from neither. That isn't a contradiction: "not significantly different" doesn't mean "equal", so A ≈ B and B ≈ C don't force A ≈ C ([[Why we never accept the null hypothesis]]).

![[Compact letter display.png|700]]
The letters summarize the same Tukey results: groups that share a letter are not significantly different.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

Letters are the standard way agricultural fields, and fields that learned statistics in SAS, report which means differ, in tables and on [[Plots for Categorical Data|bar charts]].

For example, in the Halloween costume data, **Superman gets its own letter and the other three costumes share one**, which matches the Tukey result that only Superman differs.

Once you see letters as a summary of pairwise tests, the apparent paradoxes go away. Different letters don't mean very different means. They mean significantly different, which depends on n and [[Variability|variability]] too.

See also: [[emmeans() and cld()]].
