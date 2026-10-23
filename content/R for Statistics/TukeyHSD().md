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

`TukeyHSD(model)` gives every pairwise difference with a family-adjusted 95% CI and p-value, and `plot()` on it draws those CIs against a dashed line at 0.

1. **After a significant ANOVA, find which pairs differ** ([[Tukey HSD]], [[Why post hoc tests only after a significant ANOVA]]).
2. **`TukeyHSD()` takes the stored `aov` fit** ([[aov()]]). *Why the fit:* it reuses the ANOVA's pooled MSE as the [[Signal and Noise|noise]] [[Point Estimate|estimate]].

```r
TukeyHSD(frustration.aov, conf.level = 0.95)   # diff, lwr, upr, p adj for each pair
par(mar = c(5, 10, 4, 2))                       # widen the left margin for long labels
plot(TukeyHSD(frustration.aov), las = 1)        # CIs; those crossing 0 are not significant
```

3. **Read each row:** `diff` is first − second as named in the row, `lwr`/`upr` the adjusted CI, `p adj` the adjusted p-value. *Why a CI crossing 0 means "no difference":* 0 is a plausible value ([[Confidence Interval]]).
4. **Why `par(mar = ...)` and `las = 1`:** pair names are long; a wider margin and horizontal labels keep them readable.

![[Tukey intervals.png|700]]
Each row is one pair of groups with its adjusted 95% interval. Intervals that cross the dashed 0 line are not significant; red ones miss 0, so that pair differs.

A common default [[Post Hoc Tests|post hoc]], run **only after a significant ANOVA** ([[Why post hoc tests only after a significant ANOVA]]).

For example:

Row `psychology-English`: diff positive, lwr > 0 → psychology more frustrated than English.

Common mistakes:

- **"Output means significance."** R prints it whether or not the ANOVA was significant.

See also: [[emmeans() and cld()]].
