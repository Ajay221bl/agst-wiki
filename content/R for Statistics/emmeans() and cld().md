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

`emmeans()` estimates each group's mean from the model, with a [[Confidence Interval|confidence interval]] (CI). `multcomp::cld()` then assigns letters, so that groups sharing a letter are not significantly different.

When the table of comparisons gets too long to read, compress it. Many pairwise results are easier to read as letters ([[Compact Letter Display]]). There are three steps:
1. Get each group's estimated mean and CI from the fitted model with `emmeans()` ([[aov()]]).
2. Compare them with a Tukey adjustment and turn the results into letters with `cld()`. Tukey's adjustment controls the chance of any false positive across all the pairs ([[Tukey HSD]]).
3. Plot the means, CIs and letters together ([[ggpubr Plots]]), so a reader sees size, [[Random Error and Precision|precision]] and significance in one picture.

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

Letters on a plot are a compact way to report which means differ ([[Post Hoc Tests|mean separation]]).

For example, in the Halloween costume data, Superman's point gets a letter of its own, while Hulk, Ninja Turtle and Spider-Man share one.

Letters are a summary of tests, not a statement about truth. A shared letter doesn't mean equal means. It means not significantly different.

Try it yourself. `cld()` gives groups the letters a, ab and b. Which pair differs? The "a" group and the "b" group, because they share no letter. The "ab" group can't be told apart from either.

See also: [[Writing a Conclusion]].
