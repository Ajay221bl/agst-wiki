---
type: atomic
tags:
  - inference
aliases:
  - "assumption"
  - "assumptions"
  - "requirements"
  - "test requirements"
  - "conditions"
  - "assumption checks"
status: seedling
---

A test's assumptions are the conditions under which its null distribution, and so its p-value, are correct. For the common tests they are independence, normality (of means, [[Residuals|residuals]] or differences) and, for some tests, equal variances.

A p-value is an area under a null distribution ([[P-Value]], [[Null Distribution]]). That distribution comes from a model of how the data arose ([[Statistical Model]]). The t curve, for example, is exactly right only if the data are independent draws from a normal population. The conditions in that model are the test's assumptions. If they fail, the curve is wrong, so the p-value and α are wrong ([[Why check assumptions before trusting a test]]).

The common tests share three assumptions:
- **Independence** of the observations, judged from the design ([[Why independence is judged from the design, not a test]]).
- **Normality** of whatever the model treats as chance: the mean (where the [[Central Limit Theorem|central limit theorem]] helps), the differences, or the residuals ([[Normality Checks]], [[Why normality is checked on residuals or differences]]).
- **Equal variances**, for the [[Pooled Variance|pooled t-test]] and ANOVA ([[Homogeneity of Variance]]).

Check them with plots and, where useful, a test. For assumption tests you hope for a large p ([[Why we hope for a large p-value on assumption checks]]). Small violations often don't matter ([[Robustness]]). Large ones call for another method, such as Welch's test or a rank test, or for caution in the write-up ([[Welch's t-Test]], [[Nonparametric Alternatives]]).

![[Robustness - t-test with skewed data.png|700]]
When normality holds, the real [[Type I and Type II Errors|false-positive]] rate is the promised 5%; with strongly skewed data and small n it is higher. That gap is what a broken assumption costs.

A p-value is a promise ("only α of the time by chance"), and the assumptions are the small print. Checking them is how you know whether the promise holds.

For example, in the FAMuSS genotype data, independence holds by design (different people) and the group standard deviations are similar, so equal variances are fine. But the values are skewed, and the Kruskal–Wallis check gives p = 0.057 against the ANOVA's 0.040, so the result is reported as fragile ([[One-Way ANOVA]]).

Assumptions aren't always about the raw data. For ANOVA they are about the residuals, and for the paired test, the differences. And a non-significant normality test doesn't prove normality; it only fails to find a problem ([[Why we never accept the null hypothesis]]).

See also: [[ANOVA Assumptions]].
