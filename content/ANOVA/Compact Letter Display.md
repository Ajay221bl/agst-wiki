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

**In one line:** a compact letter display labels each group with letters so that groups sharing a letter are not significantly different and groups with no letter in common are.

> [!info] Before this, it helps to know
> [[Post Hoc Tests]] (what is being summarized) · [[Tukey HSD]] (the usual source)

## Start from zero
1. **Post hocs give one result per pair** ([[Post Hoc Tests]]). With many groups, a table of every pairwise p-value is hard to read: $k(k-1)/2$ rows.
2. **Letters compress it.** Give groups that are not significantly different a shared letter ([[Tukey HSD]]):

| Group | Mean | Letters |
|---|---|---|
| A | 12.1 | a |
| B | 14.0 | ab |
| C | 15.9 | b |

3. **Read it by asking "do they share a letter?"** A and C differ (no shared letter). B shares "a" with A and "b" with C, so it differs from neither. *Why that isn't a contradiction:* "not significantly different" is not "equal", so A ≈ B and B ≈ C don't force A ≈ C ([[Why we never accept the null hypothesis]]).

## See it

![[Compact letter display.png|700]]
*What to look at:* The letters summarize the same Tukey results: groups that share a letter are not significantly different.

![[Tukey intervals.png|700]]
*What to look at:* Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

## Why it exists
It is the standard way agricultural and SAS-trained fields report mean separation on tables and [[Plots for Categorical Data|bar charts]].

## A tiny example
Costume data: **Superman gets its own letter; the other three costumes share one**, matching the Tukey result that only Superman differs.

## Common confusions
- **"Different letters mean very different means."** They mean significantly different, which depends on n and [[Variability|variability]] too.

## Connections
- **Builds on:** [[Post Hoc Tests]], [[Tukey HSD]]
- **Leads to:** [[emmeans() and cld()]]
- **Part of:** [[MOC - ANOVA]]
