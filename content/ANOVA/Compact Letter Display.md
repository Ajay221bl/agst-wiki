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

Suppose you have many groups and a post hoc test for every pair ([[Post Hoc Tests]]). That's $k(k-1)/2$ results, a long table nobody wants to read. Can we squeeze it into something you can take in at a glance? Yes: give each group some letters, so that groups which are not significantly different share a letter ([[Tukey HSD]]).

| Group | Mean | Letters |
|---|---|---|
| A | 12.1 | a |
| B | 14.0 | ab |
| C | 15.9 | b |

To read it, ask just one question about any two groups: "do they share a letter?" A and C share none, so they differ. A and B share "a", so they don't. B and C share "b", so they don't either.

Wait a minute. A is like B, and B is like C, but A is not like C? That sounds like a contradiction. It isn't, and seeing why is the key to the whole thing. "Not significantly different" doesn't mean "equal". It means "we can't tell them apart with this much data". B sits in the middle, close enough to each neighbour that we can't separate them, while the two ends are far enough apart that we can. Think of three people standing in a line, each a small step from the next: you might not notice the step between neighbours, but you'd notice the two ends are apart ([[Why we never accept the null hypothesis]]).

![[Compact letter display.png|700]]
The letters summarize the same Tukey results: groups that share a letter are not significantly different.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

Letters are the standard way agricultural fields, and fields that learned statistics in SAS, report which means differ, in tables and on [[Plots for Categorical Data|bar charts]].

For example, in the Halloween costume data, **Superman gets its own letter and the other three costumes share one**, which matches the Tukey result that only Superman differs.

One more trap. Different letters don't mean the means are *very* different. They mean *significantly* different, which depends on the sample size and the [[Variability|variability]] too, not just the gap.

Try it yourself. Groups get letters a, a, ab and b. Which pairs differ? Only the ones with no letter in common: each of the two "a" groups against the "b" group. The "ab" group differs from nobody.

See also: [[emmeans() and cld()]].
