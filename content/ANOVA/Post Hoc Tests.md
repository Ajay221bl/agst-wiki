---
type: atomic
tags:
  - anova
aliases:
  - "post hoc"
  - "pairwise comparisons"
  - "mean separation"
  - "multiple comparison procedures"
  - "pairwise test"
  - "pairwise tests"
status: seedling
---

Post hoc tests compare every pair of group means after a significant ANOVA, with p-values adjusted so the overall Type I error rate stays controlled.

1. **A significant ANOVA says "at least one mean differs" but not which** ([[One-Way ANOVA]]).
2. **Post hocs (pairwise comparisons, "mean separation") find out.** Each one is like a two-sided two-sample test, $H_0: \mu_i = \mu_j$, run for all $k(k-1)/2$ pairs ([[Two-Sample Independent t-Test]]).
3. **Their p-values are adjusted.** *Why:* many comparisons at α each would inflate the family-wise error ([[Family-Wise Type I Error]], [[Bonferroni Correction]], [[Tukey HSD]]).
4. **When? Only after a significant omnibus ANOVA.** The ANOVA is the **gatekeeper**: [[Why we never accept the null hypothesis|fail to reject]] and the gate shuts, even if software prints Tukey results by default ([[Why post hoc tests only after a significant ANOVA]]). *Why:* the overall test protects the whole family; skipping it reopens the multiple-testing problem.
5. **Summarize the results with letters** when there are many groups ([[Compact Letter Display]]).

```mermaid
flowchart TD
  A["Check assumptions:<br>independence, normality per group, equal variances"] --> B["Run the one-way ANOVA<br>one omnibus F test at α"]
  B --> C{"Reject H₀?"}
  C -->|"no: no evidence of a factor effect"| D["Stop. Do not read<br>the pairwise output"]
  C -->|"yes: at least one mean differs"| E["Post hoc tests<br>Tukey HSD or Bonferroni"]
  E --> F["Which pairs differ?<br>report with letters (cld)"]
```
The ANOVA is a gate. Pairwise tests only run once the gate opens, which is what keeps the overall [[Type I and Type II Errors|false-positive]] rate at α.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

Adjustment is still needed *after* a significant ANOVA; you can't switch to plain t-tests just because you cleared the omnibus hurdle.

Common methods ("no wrong way"; your advisor or field may have a default):
- [[Tukey HSD]]: a common default.
- [[Bonferroni Correction]]: simplest, most [[Conservative Tests|conservative]].
- Fisher's LSD, Holm, Scheffé, Dunnett (each vs a control).
- Results summarized as SAS-style letters ([[Compact Letter Display]]).

For example:

**Frustration by major** (Tukey): English − business, math − business and psychology − business all positive with all-positive CIs → business has the lowest frustration. Psychology − English positive → psychology more frustrated than English. English vs math and math vs psychology not significant.

**Costumes:** only Superman differs (higher than Hulk, Ninja Turtle, Spider-Man).

Common mistakes:

- **"Read the post hocs whatever the ANOVA says."** Only after a significant ANOVA.

See also: [[TukeyHSD()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.5.3).
