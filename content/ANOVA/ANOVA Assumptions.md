---
type: atomic
tags:
  - anova
aliases:
  - "ANOVA requirements"
  - "assumptions of ANOVA"
  - "repeated-measures ANOVA"
status: seedling
---

**In one line:** one-way ANOVA assumes independent observations, roughly normal data in each group, and equal variances across groups (homogeneity of variance), with the data classified by one factor.

> [!info] Before this, it helps to know
> [[Independent Events]] (independence) · [[Normality Checks]] (normality) · [[Homogeneity of Variance]] (equal spreads) · [[Residuals]] (what the checks are run on)

## Start from zero
1. **The p-value comes from the F-distribution, which is only correct if the data behave in certain ways** ([[F-Distribution]], [[Why check assumptions before trusting a test]]).
2. **Each assumption comes from one part of the calculation:**
   - **Independence:** the error terms of different units are unrelated, so each observation adds new information ([[Independent Events]]).
   - **Normality:** the errors are normal, which makes F follow the F-distribution ([[Normality Checks]], [[Residuals]]).
   - **HOV:** one pooled MSE describes every group ([[Homogeneity of Variance]]).
3. **The short answer:** independence, normality, homogeneity of variance (HOV); plus, the samples are categorized in only one way.

| Assumption | Meaning | Usual check | Want |
|---|---|---|---|
| **Independence** | independent random samples; a between-subjects design | study design; assume it unless there's an obvious pairing | no quick fix: use an analysis that matches the design |
| **Normality** | each group from a roughly normal population | `shapiro.test()` per group (later: on residuals); [[Q-Q Plot\|Q-Q plots]] | **large p** |
| **HOV** | $\sigma_1^2 = \cdots = \sigma_k^2$ | Levene's test, `car::leveneTest()`; first screen: group SDs | **large p** |

4. **Independence is the one no [[Parameter vs Statistic|statistic]] can rescue,** because it comes from how the data were collected. Moderate non-normality matters less with large groups ([[Robustness]]); if it is severe, use Kruskal–Wallis ([[Nonparametric Alternatives]]).

## See it

![[QQ plots - normal vs skewed.png|700]]
*What to look at:* If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals skew.

![[Homogeneity of variance.png|700]]
*What to look at:* Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

## Why it exists
The [[One-Way ANOVA|F-test]]'s p-value is only right when these hold. And when they fail, **post hoc tests behave unpredictably**, one reason a significant ANOVA can have no significant post hocs ([[Why a significant ANOVA can have no significant post hocs]]).

## A tiny example
- **Frustration by major:** all four Shapiro p > 0.05; Levene p > 0.05 but close → proceed.
- **Halloween costumes:** normality OK in all four groups; Levene p high → proceed. One Superman [[Outliers|outlier]] flagged.

## Common confusions
- **"For Levene's test, p < 0.05 is good."** It means equal variances are rejected.

## Connections
- **Builds on:** [[Normality Checks]], [[Homogeneity of Variance]], [[Independent Events]], [[Residuals]]
- **Leads to:** [[Post Hoc Tests]], [[Why check assumptions before trusting a test]]
- **Part of:** [[MOC - ANOVA]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (pp. 264–266)
