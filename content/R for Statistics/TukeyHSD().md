---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "TukeyHSD"
  - "Tukey in R"
status: seedling
---

`TukeyHSD(model)` gives every pairwise difference between groups, with a 95% confidence interval (CI) and p-value adjusted for the whole family of comparisons. `plot()` on the result draws those intervals against a dashed line at 0.

After a significant ANOVA, you need to find which pairs of groups differ ([[Tukey HSD]], [[Why post hoc tests only after a significant ANOVA]]). `TukeyHSD()` takes the stored `aov` fit ([[aov()]]), because it reuses the ANOVA's pooled within-group mean square as its [[Signal and Noise|noise]] [[Point Estimate|estimate]].

```r
TukeyHSD(frustration.aov, conf.level = 0.95)   # diff, lwr, upr, p adj for each pair
par(mar = c(5, 10, 4, 2))                       # widen the left margin for long labels
plot(TukeyHSD(frustration.aov), las = 1)        # CIs; those crossing 0 are not significant
```

Read each row like this: `diff` is the first group minus the second, as named in the row; `lwr` and `upr` are the ends of the adjusted CI; and `p adj` is the adjusted p-value. A CI that crosses 0 means "no significant difference", because 0 is a believable value ([[Confidence Interval]]). The `par(mar = ...)` and `las = 1` settings are there because pair names are long; a wider margin and horizontal labels keep them readable.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

Tukey's test is a common default [[Post Hoc Tests|post hoc test]], run **only after a significant ANOVA**.

For example, in the row `psychology-English`, the difference is positive and `lwr` is above 0, so psychology students are more frustrated than English students.

Output doesn't mean significance. R prints it whether or not the ANOVA was significant.

See also: [[emmeans() and cld()]].
