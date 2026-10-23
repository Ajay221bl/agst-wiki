---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "emmeans"
  - "cld"
  - "multcomp"
  - "letters in R"
status: seedling
---

`emmeans()` estimates each group's mean from the model with a [[Confidence Interval|CI]], and `multcomp::cld()` assigns SAS-style letters so groups sharing a letter are not significantly different.

1. **Many pairwise results are easier to read as letters** ([[Compact Letter Display]]).
2. **Step 1: get each group's estimated mean and CI from the fitted model** with `emmeans()` ([[aov()]]).
3. **Step 2: compare them with a Tukey adjustment and turn the results into letters** with `cld()`. *Why Tukey:* it controls the family-wise error for all pairs ([[Tukey HSD]]).
4. **Step 3: plot means, CIs and letters together** ([[ggpubr Plots]]). *Why:* a reader sees size, [[Random Error and Precision|precision]] and significance in one picture.

```r
library(emmeans); library(multcomp)
marginal <- emmeans(frustration.aov, ~ major)
letters_df <- cld(marginal, adjust = "tukey", Letters = letters)   # emmeans may switch to "sidak"
ggplot(letters_df, aes(x = major, y = emmean, label = .group)) +
  geom_point() +
  geom_errorbar(aes(ymin = lower.CL, ymax = upper.CL), width = 0.2) +
  geom_text(nudge_y = 1) +
  labs(title = "Frustration score by major")
```

![[Compact letter display.png|700]]
The letters summarize the same Tukey results: groups that share a letter are not significantly different.

Letters on a plot are the compact way to report [[Post Hoc Tests|mean separation]] ([[Compact Letter Display]]).

For example:

Costumes: Superman's point gets a letter of its own; Hulk, Ninja Turtle and Spider-Man share one.

Common mistakes:

- **"Shared letter means equal means."** It means not significantly different.

See also: [[Writing a Conclusion]].
