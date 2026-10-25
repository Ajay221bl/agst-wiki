---
type: atomic
tags:
  - r-statistics
  - anova
aliases:
  - "aov"
  - "ANOVA in R"
  - "glm gaussian"
  - "lm()"
  - "glm()"
status: seedling
---

`aov(response ~ factor, data = d)` fits a one-way ANOVA, and `summary()` on the result prints the ANOVA table with F and p.

This one line fits the whole idea of comparing groups against noise. One-way ANOVA fits the model "response = group mean + error" ([[One-Way ANOVA]], [[Statistical Model]]). `aov()` fits it from a formula, `response ~ factor`. The data must be in long format and the group stored as a factor ([[Wide vs Long Format]], [[factor()]]). If the group were numeric, R would fit a straight line instead of separate means.

Store the fit, then ask for the table with `summary()` ([[ANOVA Table]]). Storing it matters because `TukeyHSD()`, `residuals()` and plots all need the fitted model. Check the degrees of freedom (df) first: $k - 1$ for the factor and $N - k$ for the [[Residuals|residuals]] ([[Why use degrees of freedom as a sanity check]]).

```r
frustration.aov <- aov(score ~ major, data = frust)   # response ~ factor
summary(frustration.aov)                               # check df: k - 1 = 3, N - k
# Same F and p from the GLM family (gaussian = normal):
frustration.glm <- glm(score ~ major, family = gaussian, data = frust)
anova(frustration.glm, test = "F")
```

The `glm` lines give the same result because ANOVA is a special case of a general linear model with normal errors, the family of models that regression also belongs to.

```mermaid
flowchart TD
  A["read.csv(file.choose())"] --> B["str(), summary()<br>check types, factors, NAs"]
  B --> C["stack() if the data are wide"]
  C --> D["describeBy(), ggpubr plots"]
  D --> E["shapiro.test() per group<br>leveneTest()"]
  E --> F["aov(y ~ group), summary()<br>check the df"]
  F --> G{"p ≤ α ?"}
  G -->|yes| H["TukeyHSD() or pairwise.t.test()<br>emmeans() + cld() for letters"]
  G -->|no| I["Report: no factor effect"]
```
The order of a typical ANOVA script, from reading the file to letters.

`aov()` runs the overall test. The data must be long, with the group as a factor ([[stack()]], [[str()]]).

For example:

```
             Df Sum Sq Mean Sq F value Pr(>F)
major         3   ...     ...    ...    <0.001
Residuals   116   ...     ...
```
A df of 3 means 4 majors, and 3 + 116 + 1 = 120 students. If the first df is 1, the factor was read as a number.

Fit first, then ask for the summary. `aov()` doesn't print the table itself; print it with `summary()`.

See also: [[TukeyHSD()]], [[pairwise.t.test()]], [[emmeans() and cld()]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (p. 269).
