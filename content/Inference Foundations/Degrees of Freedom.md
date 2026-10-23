---
type: atomic
tags:
  - inference
aliases:
  - "df"
  - "degrees of freedom"
status: seedling
---

**In one line:** degrees of freedom (df) count how many values are free to vary once the quantities you estimated are fixed; in practice they track the [[Sample Size|sample size]] minus the number of estimated parameters.

> [!info] Before this, it helps to know
> [[Deviations from the Mean]] (the constraint that costs a df) · [[Variance]] (where $n - 1$ first appears) · [[t-Distribution]] (whose shape df sets)

## Start from zero
1. **Three numbers must average 10.** Pick the first two freely (say 8 and 15); the third is forced (7). Once the mean is fixed, only $n - 1 = 2$ values are free.
2. **The same thing happens to deviations.** Deviations from $\bar{x}$ must sum to zero, so once $n - 1$ are known the last one is forced ([[Deviations from the Mean]]). *Consequence:* the [[Sums of Squares and Mean Squares|sum of squares]] only holds $n - 1$ independent pieces of information, which is why the sample variance divides by $n - 1$ ([[Variance]], [[Why we divide by n minus 1]]).
3. **The general rule: each [[Parameter vs Statistic|parameter]] estimated from the data costs one df.** The textbook definition, "the number of sample values that can vary after certain restrictions have been imposed", is vague. In practice, df is tied to the **sample size and the number of parameters estimated**.
4. **df sets how much to trust the spread [[Point Estimate|estimate]],** and so the shape of the t and F distributions: fewer df, heavier [[Tails of a Distribution|tails]], larger critical values ([[t-Distribution]], [[F-Distribution]], [[Critical Value]]).
5. **Apply the rule to each test:**

| Setting | df | Why |
|---|---|---|
| [[One-Sample t-Test\|One-sample t]] | $n - 1$ | one mean estimated |
| [[Paired t-Test\|Paired t]] | $n_{pairs} - 1$ | one mean of the differences |
| Two-sample, Welch (R default) | messy formula, often not a whole number; book shortcut $\min(n_1 - 1, n_2 - 1)$ | two variances estimated separately ([[Welch's t-Test]]) |
| Two-sample, pooled | $n_1 + n_2 - 2$ | two means estimated |
| One-way ANOVA between (numerator) | $k - 1$ | $k$ group means, minus the grand mean |
| One-way ANOVA within (denominator) | $N - k$ | $N$ values, minus $k$ group means |
| ANOVA total | $N - 1$ | $N$ values, minus the grand mean |

6. **Use it as a check.** The df in R's output tells you how many observations R actually used ([[Why use degrees of freedom as a sanity check]]).

## See it

![[t-distribution vs normal.png|700]]
*What to look at:* With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

## Why it exists
df sets the shape of the t and F distributions ([[t-Distribution]], [[F-Distribution]]). And it is the best **sanity check** in any output ([[Why use degrees of freedom as a sanity check]]).

## A tiny example
- COVID: 1,000 rows, but `na.omit` left 939 → **df = 938** ([[Missing Data]]).
- Salmonella: $n = 9$ → df = 8 ✓.
- ANOVA df of 2 and 12 → $k = 3$ groups, $N = 15$ observations. Soy: $N = 80$, $k = 4$ → 3 and 76 ([[ANOVA Table]]).
- [[Ratios and Fractions|Numerator]] df of 1 with 4 treatments → R read the treatment codes as numbers ([[Factors and Levels]]).

## Common confusions
- **"df is just n."** It is n minus the number of estimated quantities.
- **"A decimal df is an error."** Welch's df is often fractional; that's normal.

## Connections
- **Builds on:** [[Variance]], [[Deviations from the Mean]], [[t-Distribution]]
- **Leads to:** [[t-Distribution]], [[F-Distribution]], [[ANOVA Table]], [[Why use degrees of freedom as a sanity check]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]]
- **Terms used:** [[Grand Mean]]
