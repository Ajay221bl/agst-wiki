---
type: atomic
tags:
  - inference
aliases:
  - "df"
  - "degrees of freedom"
status: seedling
---

Degrees of freedom (df) count how many of your numbers are still free to wander once you've used the data to pin some things down. Roughly: the sample size minus the number of things you estimated from it.

Let's play a game. I tell you: "Pick three numbers, any you like, but they must average 10." Go ahead. Pick the first: say 8. Pick the second: say 15. Now pick the third. Can you? No! It's forced. The three must add to 30, so the third has to be 7. You had three numbers but only two choices. Fixing the average used up one freedom.

That's all degrees of freedom are. Each time you calculate something from the data and then hold it fixed, you lose one free choice.

Why does this matter? Look at deviations from the mean, $x - \bar{x}$. They always add up to zero ([[Deviations from the Mean]]). So once you know all but one of them, the last one is forced, just like the third number in the game. That means the [[Sums of Squares and Mean Squares|sum of squared deviations]] only contains $n - 1$ genuinely independent pieces of information. And that's exactly why the sample variance divides by $n - 1$ instead of $n$ ([[Variance]], [[Why we divide by n minus 1]]).

So here's the general rule: every [[Parameter vs Statistic|parameter]] you estimate from the data costs one degree of freedom. Think of your data as a budget of information. Estimating things spends some of it, and what's left is what you have for judging how noisy things are. The textbook definition, "the number of sample values that can vary after certain restrictions have been imposed", says the same thing in a vaguer way. In practice, df depends on the **sample size and the number of parameters estimated**.

And the leftover budget matters, because it decides how much you can trust your [[Point Estimate|estimate]] of the noise. Less budget, shakier estimate, so the t and F curves get fatter [[Tails of a Distribution|tails]] and the [[Critical Value|cut-offs]] move further out ([[t-Distribution]], [[F-Distribution]]).

![[t-distribution vs normal.png|700]]
With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

Now you can work out every df in the course by counting what was estimated. You don't have to memorize this table; you can rebuild it:

| Setting | df | Why |
|---|---|---|
| [[One-Sample t-Test\|One-sample t]] | $n - 1$ | one mean estimated |
| [[Paired t-Test\|Paired t]] | $n_{pairs} - 1$ | one mean of the differences |
| Two-sample, Welch (R default) | messy formula, often not a whole number; book shortcut $\min(n_1 - 1, n_2 - 1)$ | two variances estimated separately ([[Welch's t-Test]]) |
| Two-sample, pooled | $n_1 + n_2 - 2$ | two means estimated |
| One-way ANOVA between (numerator) | $k - 1$ | $k$ group means, minus the grand mean |
| One-way ANOVA within (denominator) | $N - k$ | $N$ values, minus $k$ group means |
| ANOVA total | $N - 1$ | $N$ values, minus the grand mean |

And here's a practical trick: df is the best quick check on any R output, because it tells you how many observations R actually used ([[Why use degrees of freedom as a sanity check]]).

For example:
- A COVID survey had 1,000 rows, but `na.omit` left 939, so **df = 938** ([[Missing Data]]).
- A salmonella sample with $n = 9$ has df = 8, as expected.
- ANOVA df of 2 and 12 means $k = 3$ groups and $N = 15$ observations. A soy study with $N = 80$ and $k = 4$ gives 3 and 76 ([[ANOVA Table]]).
- A [[Ratios and Fractions|numerator]] df of 1 with 4 treatments means R read the treatment codes as numbers ([[Factors and Levels]]).

Try it yourself. A one-way ANOVA compares 4 groups with 2 animals in each. What are the two df? Between groups: 4 group means, minus the [[Grand Mean|grand mean]], so 3. Within groups: 8 animals minus 4 group means, so 4. If R shows anything else, something went wrong with the data. (And a decimal df isn't an error: Welch's df is often fractional.)

See also: [[Sample Size|sample size]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]].
