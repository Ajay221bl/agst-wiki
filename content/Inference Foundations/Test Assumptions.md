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

A test's assumptions are the conditions under which its null distribution, and so its p-value, are correct; for the common tests they are independence, normality (of means, [[Residuals|residuals]] or differences) and, for some, equal variances.

1. **A p-value is an area under a null distribution** ([[P-Value]], [[Null Distribution]]).
2. **That distribution comes from a model of how the data arose** ([[Statistical Model]]). The t curve, for example, is exactly right only if the data are independent draws from a normal population.
3. **The conditions in that model are the test's assumptions.** If they fail, the curve is wrong, so the p-value and α are wrong ([[Why check assumptions before trusting a test]]).
4. **The common tests share three:**
   - **Independence** of observations, judged from the design ([[Why independence is judged from the design, not a test]]).
   - **Normality** of what the model calls chance: the mean ([[Central Limit Theorem|CLT]] helps), the differences, or the residuals ([[Normality Checks]], [[Why normality is checked on residuals or differences]]).
   - **Equal variances** for the [[Pooled Variance|pooled t-test]] and ANOVA ([[Homogeneity of Variance]]).
5. **Check them with plots and, where useful, a test**; for assumption tests you hope for a large p ([[Why we hope for a large p-value on assumption checks]]).
6. **Small violations often don't matter** ([[Robustness]]). Large ones call for another method: Welch, a rank test, or caution in the write-up ([[Welch's t-Test]], [[Nonparametric Alternatives]]).

![[Robustness - t-test with skewed data.png|700]]
When normality holds, the real [[Type I and Type II Errors|false-positive]] rate is the promised 5%; with strongly skewed data and small n it is higher. That gap is what a broken assumption costs.

A p-value is a promise ("only α of the time by chance"), and assumptions are the small print. Checking them is how you know whether the promise holds.

For example:

FAMuSS: independence holds by design (different people), group SDs are similar (equal variances fine), but the values are skewed and the Kruskal–Wallis check gives p = 0.057 against the ANOVA's 0.040, so the result is reported as fragile ([[One-Way ANOVA]], [[Nonparametric Alternatives]]).

Common mistakes:

- **"Assumptions are about the raw data."** For ANOVA they are about the residuals; for the paired test, the differences.
- **"A non-significant normality test proves normality."** It only fails to find a problem ([[Why we never accept the null hypothesis]]).

See also: [[ANOVA Assumptions]].
