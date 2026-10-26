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

One-way ANOVA assumes independent observations, roughly normal data in each group, and equal variances across the groups (called homogeneity of variance). It also assumes the data are grouped by just one factor.

The p-value comes from the F-distribution, which is only correct if the data behave in certain ways ([[F-Distribution]], [[Why check assumptions before trusting a test]]). Each assumption comes from one part of the calculation:
- **Independence:** the errors of different units are unrelated, so each observation adds new information ([[Independent Events]]).
- **Normality:** the errors are normal, which makes F follow the F-distribution ([[Normality Checks]], [[Residuals]]).
- **Homogeneity of variance:** one pooled within-group variance, the mean square error (MSE), describes every group ([[Homogeneity of Variance]]).

| Assumption | Meaning | Usual check | Want |
|---|---|---|---|
| **Independence** | independent random samples; each subject in only one group | the study design; assume it unless there is an obvious pairing | no quick fix: use an analysis that matches the design |
| **Normality** | each group from a roughly normal population | `shapiro.test()` per group, or on the residuals; [[Q-Q Plot\|Q-Q plots]] | **large p** |
| **Equal variances** | $\sigma_1^2 = \cdots = \sigma_k^2$ | Levene's test, `car::leveneTest()`; first screen: the group standard deviations | **large p** |

Independence is the one assumption no [[Parameter vs Statistic|statistic]] can rescue, because it comes from how the data were collected. Moderate non-normality matters less with large groups ([[Robustness]]). If it is severe, use the Kruskal–Wallis test ([[Nonparametric Alternatives]]).

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals skew.

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

The [[One-Way ANOVA|F-test]]'s p-value is only right when these assumptions hold. When they fail, **post hoc tests behave unpredictably**, which is one reason a significant ANOVA can have no significant post hoc tests ([[Why a significant ANOVA can have no significant post hocs]]).

For example:
- **Frustration by undergraduate major:** all four Shapiro p-values are above 0.05, and Levene's p is above 0.05 but close, so go ahead.
- **Halloween costumes:** normality is fine in all four groups and Levene's p is high, so go ahead. One Superman [[Outliers|outlier]] is flagged.

For Levene's test, a p below 0.05 isn't good news: it means equal variances are rejected.

See also: [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 264–266).
