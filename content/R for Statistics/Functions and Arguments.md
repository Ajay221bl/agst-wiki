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

**In one line:** a function is a named action like `mean()` or `t.test()`; the arguments inside the parentheses tell it what to act on and how, and any argument left out takes its default.

> [!info] Before this, it helps to know
> [[R Objects and Assignment]]

## Start from zero
1. **A function is a named recipe: give it inputs, it returns a result** ([[R Objects and Assignment]]).
2. **The inputs are arguments, written in brackets:** `t.test(x, mu = 10, alternative = "less", conf.level = 0.90)`
   - `t.test` is the function.
   - `x` is the data (the first argument, matched by position).
   - `mu =`, `alternative =`, `conf.level =` are **named arguments**. *Why name them:* order doesn't matter and the code reads like the [[Null and Alternative Hypotheses|hypotheses]].
3. **Left-out arguments use defaults:** for `t.test`, `mu = 0`, `alternative = "two.sided"`, `conf.level = 0.95`, `var.equal = FALSE`. *Why know them:* a default you forgot about is a hypothesis you didn't mean to test.
4. **Many modeling functions take a formula:** `response ~ group`, read "response explained by group", plus `data =` naming the data frame. *Why a formula:* it matches the model, response = group effect + error ([[Statistical Model]]), and needs long-format data ([[Wide vs Long Format]]).
5. **`?t.test` opens the help page** listing every argument and default.

## Why it exists
Defaults are convenient but dangerous: R's default `t.test(x)` tests μ = 0, which for lizard tail lengths was "garbage in, garbage out" ([[One-Sample t-Test]]). Knowing the defaults is knowing what you actually tested.

## A tiny example
```r
sd(d$MHSAS_sum)                 # NA if any value is missing
sd(d$MHSAS_sum, na.rm = TRUE)   # skip missing values
```

## Common confusions
- **"Argument order never matters."** Unnamed arguments are matched by position; name them when in doubt.

## Connections
- **Builds on:** [[R Objects and Assignment]]
- **Leads to:** [[t.test()]], [[aov()]], [[mean() and sd()]]
- **Part of:** [[MOC - R for Statistics]]
