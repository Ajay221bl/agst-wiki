---
type: atomic
tags:
  - inference
aliases:
  - "df"
  - "degrees of freedom"
status: seedling
---

Degrees of freedom (df) count how many values are free to vary once the quantities you estimated are fixed. In practice, they are the [[Sample Size|sample size]] minus the number of quantities estimated from the data.

The name sounds abstract, but the idea is simple once you play with it. Suppose three numbers must average 10. You can pick the first two freely, say 8 and 15, but then the third is forced to be 7. Once the mean is fixed, only $n - 1 = 2$ values are free. You spent one degree of freedom when you fixed the mean.

The same thing happens to deviations. Deviations from $\bar{x}$ must add up to zero, so once $n - 1$ of them are known, the last one is forced ([[Deviations from the Mean]]). So the [[Sums of Squares and Mean Squares|sum of squares]] holds only $n - 1$ independent pieces of information, which is why the sample variance divides by $n - 1$ ([[Variance]], [[Why we divide by n minus 1]]).

That gives the general rule: each [[Parameter vs Statistic|parameter]] you estimate from the data costs one degree of freedom. Think of your data as a budget of information. Every quantity you estimate spends some of it, and the degrees of freedom are what's left over for judging the noise. The textbook definition, "the number of sample values that can vary after certain restrictions have been imposed", is vague. In practice, df depends on the **sample size and the number of parameters estimated**.

Why care? Because the leftover budget tells you how much to trust the [[Point Estimate|estimate]] of spread, and so they set the shape of the t and F distributions. Fewer df means heavier [[Tails of a Distribution|tails]] and larger critical values ([[t-Distribution]], [[F-Distribution]], [[Critical Value]]).

Applying the rule to each test:

| Setting | df | Why |
|---|---|---|
| [[One-Sample t-Test\|One-sample t]] | $n - 1$ | one mean estimated |
| [[Paired t-Test\|Paired t]] | $n_{pairs} - 1$ | one mean of the differences |
| Two-sample, Welch (R default) | messy formula, often not a whole number; book shortcut $\min(n_1 - 1, n_2 - 1)$ | two variances estimated separately ([[Welch's t-Test]]) |
| Two-sample, pooled | $n_1 + n_2 - 2$ | two means estimated |
| One-way ANOVA between (numerator) | $k - 1$ | $k$ group means, minus the grand mean |
| One-way ANOVA within (denominator) | $N - k$ | $N$ values, minus $k$ group means |
| ANOVA total | $N - 1$ | $N$ values, minus the grand mean |

The df in R's output is also the best quick check in any output. It tells you how many observations R actually used ([[Why use degrees of freedom as a sanity check]]).

![[t-distribution vs normal.png|700]]
With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

For example:
- A COVID survey had 1,000 rows, but `na.omit` left 939, so **df = 938** ([[Missing Data]]).
- A salmonella sample with $n = 9$ has df = 8, as expected.
- ANOVA df of 2 and 12 means $k = 3$ groups and $N = 15$ observations. A soy study with $N = 80$ and $k = 4$ gives 3 and 76 ([[ANOVA Table]]).
- A [[Ratios and Fractions|numerator]] df of 1 with 4 treatments means R read the treatment codes as numbers ([[Factors and Levels]]).

So degrees of freedom aren't just n. They're n minus what you spent estimating things. And a decimal df isn't an error: Welch's df is often fractional, which is normal. Once you see them as a budget, the formulas in the table stop being things to memorize. You can work each one out by counting what was estimated.

See also: [[Grand Mean]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]].
