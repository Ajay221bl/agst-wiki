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

**In one line:** nonparametric tests are rank-based versions of the t-tests and ANOVA that do not assume normality, used to confirm results when the normality assumption is doubtful.

> [!info] Before this, it helps to know
> [[Ranks]] (what these tests use) · [[Normality Checks]] (when you need them) · [[Median]] (they work with ranks and medians) · [[Robustness]] (why ranks resist [[Outliers|outliers]])

## Start from zero
1. **t-tests need roughly normal data or a large $n$.** With small, skewed or outlier-heavy samples that fails ([[Normality Checks]]).
2. **Replace the values with their ranks** (smallest = 1, next = 2, ...) ([[Ranks]]). *Why:* ranks don't care how extreme an outlier is or how skewed the data are, so the test can't be thrown off by them ([[Robustness]]).
3. **Compare the ranks between groups.** If one group's ranks are mostly high, its values tend to be larger. *Why this needs no normality:* under $H_0$ every arrangement of the ranks is equally likely, so the null distribution can be counted exactly ([[Null Distribution]]).
4. **Each parametric test has a rank-based partner:**

| Parametric | Nonparametric | R |
|---|---|---|
| [[One-Sample t-Test\|one-sample t]] / [[Paired t-Test\|paired t]] | Wilcoxon signed-rank | `wilcox.test(x, mu = )`, `wilcox.test(x, y, paired = TRUE)` |
| [[Two-Sample Independent t-Test\|two-sample t]] | Wilcoxon rank-sum / Mann–Whitney U | `wilcox.test(y ~ group)` |
| one-way ANOVA | Kruskal–Wallis (+ Dunn [[Post Hoc Tests\|post hoc]]) | `kruskal.test(y ~ group)` |

5. **The price is some [[Statistical Power|power]] when the data really are normal,** and the [[Null and Alternative Hypotheses|hypotheses]] are about typical values (medians, ranks) rather than means ([[Median]]). Bootstrapping is another option for small samples.

## Why it exists
When normality is violated (small samples from clearly non-normal populations, [[Likert Scale|Likert-type survey scores]], heavy outliers), parametric p-values can mislead. A sensible rule: **say so, and say a nonparametric test should be used to confirm the robustness of the results** ([[Normality Checks]]).

## A tiny example
Data 1, 2, 3, 4, 100 → ranks 1, 2, 3, 4, 5. The 100 counts the same as any largest value would; it cannot dominate the test.

## How to run it

![[Worked example - rank-based test.png|700]]
*What to look at:* top, the raw changes, with one stem-cell sheep far out at 14.25. Bottom, the same sheep as ranks: the outlier is just rank 18, one step above the next sheep.

These are the standard steps, run on the same book data as the t-test and ANOVA worked examples. That lets you compare the answers directly.

1. **Pick the test.** Same design question as the t-tests (one sample or paired, two independent groups, 3+ groups), but you want a check that doesn't rely on normality. *Why:* with small or skewed samples, the t and F p-values may be wrong ([[Robustness]]).

2. **Hypotheses.** Stated about the distributions rather than the means: $H_0$: the groups have the same distribution (same location); $H_A$: one tends to give larger values. For paired data, $H_0$: the differences are centred on 0. *Why not means:* ranks carry no information about the size of values, so they can't speak about means ([[Ranks]]).

3. **[[Test Assumptions|Requirements]].** Independence still matters. The rank-sum and Kruskal–Wallis tests compare locations cleanly when the groups have similar shapes. *Why:* if the shapes differ, the ranks can differ even when the centres are equal.

4. **Calculate by hand: rank everything.** *Why ranks:* they keep the order but drop the distances, so outliers and [[Shape of a Distribution|skew]] can't dominate, and under $H_0$ every arrangement of ranks is equally likely, which gives an exact null distribution ([[Ranks]], [[Null Distribution]]).
   - **Signed-rank (paired, wetsuits):** rank the 12 differences by size and add up the ranks of the positive ones. All 12 are positive, so V = 1 + 2 + … + 12 = **78**, the most extreme value possible.
   - **Rank-sum (two groups, stem-cell sheep):** rank all 18 changes together (ties share their average rank). The control ranks add up to 51, so W = 51 − 9·10/2 = **6**: control sheep almost always rank below stem-cell sheep.
   - **Kruskal–Wallis (3+ groups, FAMuSS):** rank all 595 values and compare the mean rank of each genotype.

5. **Run it in R.**
```r
wilcox.test(swim$wetsuit, swim$swimsuit, paired = TRUE)  # V = 78, p-value = 0.002468
wilcox.test(change ~ trmt, data = sheep)                 # W = 6, p-value = 0.002666
kruskal.test(ndrm.ch ~ genotype, data = famuss)          # chi-squared = 5.7458, df = 2, p-value = 0.05653
```
   With tied values, R warns "cannot compute exact p-value with ties" and uses an approximation. That is expected, not an error.

6. **Decide and report.** Compare with the parametric result. *Why compare:* agreement means the conclusion doesn't hinge on the normality assumption; disagreement says it does.
   - Wetsuits: the paired t (p < .001) and signed-rank (p = .002) agree.
   - Stem cells: [[Welch's t-Test|Welch]] (p = .002) and rank-sum (p = .003) agree.
   - FAMuSS: the ANOVA (p = .040) is **not** confirmed by Kruskal–Wallis (p = .057). This is exactly the case where that rule matters: say normality was doubtful and treat the ANOVA result as fragile ([[One-Way ANOVA]]).

## Common confusions
- **"Nonparametric tests have no assumptions."** They still assume independence, and some assume similar shapes across groups.
- **"Always use them to be safe."** They can have less power when the parametric assumptions hold.

## Connections
- **Builds on:** [[Normality Checks]], [[Median]], [[Ranks]], [[Robustness]]
- **Leads to:** [[ANOVA Assumptions]], [[Why check assumptions before trusting a test]]
- **Part of:** [[MOC - t-Tests]], [[MOC - ANOVA]]
- **Terms used:** [[wilcox.test() and kruskal.test()]]
