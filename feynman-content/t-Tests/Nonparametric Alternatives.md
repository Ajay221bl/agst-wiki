---
type: atomic
tags:
  - t-tests
  - anova
aliases:
  - "nonparametric tests"
  - "Wilcoxon"
  - "Mann-Whitney"
  - "Kruskal-Wallis"
  - "rank-based tests"
  - "parametric test"
  - "parametric tests"
  - "nonparametrics"
status: seedling
---

Nonparametric tests are back-up versions of the t-tests and ANOVA that work on ranks instead of raw values, so they don't need the data to be normal. Use them to check that a result holds up when normality is doubtful.

Say you're comparing two groups of sheep, and one sheep has a wildly high value, way above everyone else. That one sheep drags its group's mean up and inflates the spread. Your t-test might come out "significant" mostly because of one animal. How would you know whether to trust it?

Ask the question a different way, a way that one wild sheep can't distort. Instead of "how big are the values?", ask "who's on top?" Replace every value by its rank: smallest is 1, next is 2, and so on ([[Ranks]]). Now that wild sheep is just "the biggest", one step above the next, no matter how far out it really was. Skew and [[Outliers|outliers]] lose their grip ([[Robustness]]).

Then compare the ranks between groups. If one group's ranks are mostly high, its values tend to be bigger. And here's the beautiful part: no normality needed. If the groups really don't differ, every shuffle of the ranks is equally likely, so the null distribution can be counted exactly ([[Null Distribution]], [[Normality Checks]]).

Each standard test has a rank-based partner:

| Parametric | Nonparametric | R |
|---|---|---|
| [[One-Sample t-Test\|one-sample t]] / [[Paired t-Test\|paired t]] | Wilcoxon signed-rank | `wilcox.test(x, mu = )`, `wilcox.test(x, y, paired = TRUE)` |
| [[Two-Sample Independent t-Test\|two-sample t]] | Wilcoxon rank-sum / Mann–Whitney U | `wilcox.test(y ~ group)` |
| one-way ANOVA | Kruskal–Wallis (+ Dunn [[Post Hoc Tests\|post hoc]]) | `kruskal.test(y ~ group)` |

Nothing is free, of course. When the data really are normal, rank tests have a bit less [[Statistical Power|power]]. And their [[Null and Alternative Hypotheses|hypotheses]] are about typical values and ranks, not means ([[Median]]). Bootstrapping is another option for small samples.

So when do you reach for them? When normality is doubtful: small samples from clearly non-normal populations, [[Likert Scale|Likert-type survey scores]], heavy outliers. A sensible rule is to **say so, and run a nonparametric test to confirm the result holds up**.

For example, the data 1, 2, 3, 4, 100 become the ranks 1, 2, 3, 4, 5. The 100 counts the same as any largest value would, so it can't dominate the test.

![[Worked example - rank-based test.png|700]]
Top, the raw changes, with one stem-cell sheep far out at 14.25. Bottom, the same sheep as ranks: the outlier is just rank 18, one step above the next sheep.

Here are the standard steps, run on the same book data as the t-test and ANOVA worked examples, so you can compare the answers directly.

1. **Pick the test.** The design question is the same as for the t-tests (one sample or paired, two independent groups, 3 or more groups), but you want a check that doesn't rely on normality. With small or skewed samples, the t and F p-values may be wrong ([[Robustness]]).

2. **Hypotheses.** These are about the distributions rather than the means. $H_0$: the groups have the same distribution (same location). $H_A$: one tends to give larger values. For paired data, $H_0$: the differences are centred on 0. They can't be about means, because ranks carry no information about the size of values ([[Ranks]]).

3. **[[Test Assumptions|Requirements]].** Independence still matters. The rank-sum and Kruskal–Wallis tests compare locations cleanly when the groups have similar shapes. If the shapes differ, the ranks can differ even when the centres are equal.

4. **Calculate by hand: rank everything.** Ranks keep the order but drop the distances, so outliers and [[Shape of a Distribution|skew]] can't dominate, and the null distribution is exact.
   - **Signed-rank (paired, wetsuits):** rank the 12 differences by size and add up the ranks of the positive ones. All 12 are positive, so V = 1 + 2 + … + 12 = **78**, the most extreme value possible.
   - **Rank-sum (two groups, stem-cell sheep):** rank all 18 changes together (tied values share their average rank). The control ranks add up to 51, so W = 51 − 9·10/2 = **6**: control sheep almost always rank below stem-cell sheep.
   - **Kruskal–Wallis (3 or more groups, FAMuSS):** rank all 595 values and compare the mean rank of each genotype.

5. **Run it in R.**
```r
wilcox.test(swim$wetsuit, swim$swimsuit, paired = TRUE)  # V = 78, p-value = 0.002468
wilcox.test(change ~ trmt, data = sheep)                 # W = 6, p-value = 0.002666
kruskal.test(ndrm.ch ~ genotype, data = famuss)          # chi-squared = 5.7458, df = 2, p-value = 0.05653
```
   With tied values, R warns "cannot compute exact p-value with ties" and uses an approximation. That is expected, not an error.

6. **Decide and report.** Compare with the standard result. If they agree, the conclusion doesn't depend on the normality assumption; if they disagree, it does.
   - Wetsuits: the paired t-test (p < .001) and the signed-rank test (p = .002) agree.
   - Stem cells: [[Welch's t-Test|Welch's test]] (p = .002) and the rank-sum test (p = .003) agree.
   - FAMuSS: the ANOVA (p = .040) is **not** confirmed by Kruskal–Wallis (p = .057). This is exactly the case the rule is for: say normality was doubtful, and treat the ANOVA result as fragile ([[One-Way ANOVA]]).

That comparison is the real value. When two methods built on different assumptions agree, you can trust the answer more than either one alone. When they disagree, you've learned the result depends on an assumption, and that's worth saying.

Try it yourself. Are rank tests assumption-free? No. They still need independent observations, and comparing locations cleanly needs groups with similar shapes. They just don't need normality.

See also: [[ANOVA Assumptions]], [[Why check assumptions before trusting a test]], [[wilcox.test() and kruskal.test()]].
