---
type: atomic
tags:
  - r-statistics
aliases:
  - "function"
  - "arguments"
  - "defaults"
status: seedling
---

A function is a named action, such as `mean()` or `t.test()`. The arguments inside the brackets tell it what to act on and how. Any argument you leave out takes its default value.

Once you understand how one function works, you understand how all of them work. A function is a named recipe: give it inputs, and it returns a result ([[R Objects and Assignment]]). The inputs are arguments, written in brackets: `t.test(x, mu = 10, alternative = "less", conf.level = 0.90)`.
- `t.test` is the function.
- `x` is the data, the first argument, matched by its position.
- `mu =`, `alternative =` and `conf.level =` are **named arguments**. Naming them means their order doesn't matter, and the code reads like the [[Null and Alternative Hypotheses|hypotheses]].

Arguments you leave out use their defaults. For `t.test`, these are `mu = 0`, `alternative = "two.sided"`, `conf.level = 0.95` and `var.equal = FALSE`. It is worth knowing them, because a default you forgot about is a hypothesis you didn't mean to test.

Many modelling functions take a formula, `response ~ group`, read as "response explained by group", plus `data =` naming the data frame. The formula matches the model, response = group effect + error ([[Statistical Model]]), and it needs data in long format ([[Wide vs Long Format]]). Typing `?t.test` opens the help page, which lists every argument and its default.

Defaults are convenient but risky. R's default `t.test(x)` tests μ = 0, which for lizard tail lengths gives a meaningless answer ([[One-Sample t-Test]]). Knowing the defaults means knowing what you actually tested.

For example:

```r
sd(d$MHSAS_sum)                 # NA if any value is missing
sd(d$MHSAS_sum, na.rm = TRUE)   # skip missing values
```

Names make code readable to the computer and to the future you. Argument order does matter for unnamed arguments, which are matched by position. Name them when in doubt.

See also: [[t.test()]], [[aov()]], [[mean() and sd()]].
