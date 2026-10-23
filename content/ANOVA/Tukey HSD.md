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

**In one line:** Tukey's honestly significant difference (HSD) test compares every pair of group means with confidence intervals and p-values adjusted for all the comparisons at once; it is the class default post hoc.

> [!info] Before this, it helps to know
> [[Post Hoc Tests]] (what it is one of) · [[Confidence Interval]] (how to read it) · [[Family-Wise Type I Error]] (what it controls)

## Start from zero
1. **After a significant [[One-Way ANOVA|ANOVA]] we compare every pair of means** ([[Post Hoc Tests]]).
2. **Tukey's method widens each interval just enough** that all of them together keep a 95% family-wise confidence level. *Why:* it accounts for the fact that we're looking at the biggest of many differences ([[Family-Wise Type I Error]]).
3. **For each pair it gives the difference in means, a 95% CI for that difference, and an adjusted p-value ("p adj").** It uses the pooled MSE from the ANOVA as its [[Signal and Noise|noise]] [[Point Estimate|estimate]] ([[Sums of Squares and Mean Squares]]).
4. **Read it like a two-sample CI** ([[Confidence Interval]]):
   - **CI crosses 0** → not significantly different. *Why:* 0 (no difference) is a plausible value.
   - **CI entirely positive or negative** → significantly different, in that direction.
5. **The order of subtraction is shown in the row name** (e.g. `English-business`). In FAMuSS, TT−CC = 9.19 with CI (0.69, 17.68), p adj = 0.030: TT is higher.

## See it

![[Tukey intervals.png|700]]
*What to look at:* Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

## Why it exists
It controls the family-wise error rate across all pairwise comparisons while being less [[Conservative Tests|conservative]] than [[Bonferroni Correction|Bonferroni]] when you compare all pairs.

## A tiny example
Costume data rows like `Superman-Hulk`: positive difference, CI entirely above 0, small p adj → Superman's mean injury severity is higher than Hulk's. Rows comparing Hulk, Ninja Turtle and Spider-Man cross 0.

## Common confusions
- **"Tukey output means the ANOVA was significant."** R prints it regardless; check the ANOVA first.

## Connections
- **Builds on:** [[Post Hoc Tests]], [[Confidence Interval]], [[Family-Wise Type I Error]]
- **Leads to:** [[TukeyHSD()]], [[Compact Letter Display]]
- **Part of:** [[MOC - ANOVA]]
