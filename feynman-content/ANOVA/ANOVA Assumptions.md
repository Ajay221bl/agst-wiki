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

Think of a bridge. It's safe because of things you can't see: the steel is strong enough, the ground underneath is solid. Nobody thinks about them while driving across, but if one is wrong, the bridge isn't what it seems. An assumption is like that. It isn't a rule someone invented to make your life harder. It's a part of the calculation you're trusting without checking.

The ANOVA p-value comes from the F-distribution, and that's only the right curve if the data behave in certain ways ([[F-Distribution]], [[Why check assumptions before trusting a test]]). Each assumption props up one part of the calculation:
- **Independence:** the errors of different units are unrelated, so each observation adds new information. If two plants share a pot, you don't really have two pieces of evidence ([[Independent Events]]).
- **Normality:** the errors are normal, which is what makes F follow the F-distribution ([[Normality Checks]], [[Residuals]]).
- **Homogeneity of variance:** ANOVA pools all the within-group spread into one number, the mean square error (MSE). That only makes sense if every group has about the same spread ([[Homogeneity of Variance]]).

| Assumption | Meaning | Usual check | Want |
|---|---|---|---|
| **Independence** | independent random samples; each subject in only one group | the study design; assume it unless there is an obvious pairing | no quick fix: use an analysis that matches the design |
| **Normality** | each group from a roughly normal population | `shapiro.test()` per group, or on the residuals; [[Q-Q Plot\|Q-Q plots]] | **large p** |
| **Equal variances** | $\sigma_1^2 = \cdots = \sigma_k^2$ | Levene's test, `car::leveneTest()`; first screen: the group standard deviations | **large p** |

They're not equally important. Independence is the one no [[Parameter vs Statistic|statistic]] can rescue, because it comes from how the data were collected. No calculation afterwards can turn one piece of evidence back into two. Moderate non-normality matters less with large groups ([[Robustness]]). If it is severe, use the Kruskal–Wallis test ([[Nonparametric Alternatives]]).

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals skew.

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

When these assumptions fail, the [[One-Way ANOVA|F-test]]'s p-value can be off, and **post hoc tests behave unpredictably**. That's one reason a significant ANOVA can have no significant post hoc tests ([[Why a significant ANOVA can have no significant post hocs]]).

For example:
- **Frustration by undergraduate major:** all four Shapiro p-values are above 0.05, and Levene's p is above 0.05 but close, so go ahead.
- **Halloween costumes:** normality is fine in all four groups and Levene's p is high, so go ahead. One Superman [[Outliers|outlier]] is flagged.

Here's the trap people fall into. Usually a small p-value is the "interesting" result. For Shapiro and Levene it's the opposite: you *want* a large p. A Levene p below 0.05 isn't good news. It means equal variances are rejected.

Try it yourself. A student measures each of 5 mice twice and treats that as 10 independent observations in the ANOVA. Which assumption breaks? Independence: the two readings from one mouse aren't separate pieces of evidence. And no test on the data will catch it, because it's a fact about the design.

See also: [[Post Hoc Tests]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (pp. 264–266).
