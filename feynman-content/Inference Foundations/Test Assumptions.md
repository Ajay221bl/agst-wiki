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

A test's assumptions are the conditions under which its p-value can be trusted. For the common tests they are independence, roughly normal data (or residuals, or differences), and sometimes equal spreads in the groups.

Think of a bathroom scale. It promises to tell you your weight. But that promise comes with small print: put it on a hard, flat floor. Put it on a thick rug and it'll still show a number, just a wrong one, and nothing on the display warns you.

A test is the same. Its promise is the p-value: "results this extreme happen only this often by chance" ([[P-Value]]). That number is an area under a curve, the null distribution ([[Null Distribution]]). And the curve comes from a model of how the data arose ([[Statistical Model]]). The t curve, for example, is exactly right only if the data are independent draws from a normal population. Those conditions are the small print. Break them and R will still print a p-value; it just might be wrong ([[Why check assumptions before trusting a test]]).

The common tests have three pieces of small print:
- **Independence:** each observation carries its own information, not a copy of another's. You judge this from how the study was run, not from a test ([[Why independence is judged from the design, not a test]]).
- **Normality** of whatever the model treats as chance: the means (where the [[Central Limit Theorem|central limit theorem]] helps), the paired differences, or the [[Residuals|residuals]] ([[Normality Checks]], [[Why normality is checked on residuals or differences]]).
- **Equal variances**, for the [[Pooled Variance|pooled t-test]] and ANOVA ([[Homogeneity of Variance]]).

![[Robustness - t-test with skewed data.png|700]]
When normality holds, the real [[Type I and Type II Errors|false-positive]] rate is the promised 5%; with strongly skewed data and small n it is higher. That gap is what a broken assumption costs.

How strict do you need to be? Not perfectly strict; small breaks often don't matter much ([[Robustness]]). Check with plots and, where useful, a test. With assumption tests you hope for a *large* p, because $H_0$ is "the assumption is fine" ([[Why we hope for a large p-value on assumption checks]]). Big breaks call for another method, such as Welch's test or a rank test, or for honest caution in the write-up ([[Welch's t-Test]], [[Nonparametric Alternatives]]).

For example, in the FAMuSS genotype data, independence holds by design (different people) and the group standard deviations are similar, so equal variances are fine. But the values are skewed, and the Kruskal–Wallis check gives p = 0.057 against the ANOVA's 0.040, so the result is reported as fragile ([[One-Way ANOVA]]).

Try it yourself. For a paired t-test, should you check that the "before" and "after" columns are each normal? No. The test only looks at the differences, so the differences are what need to be roughly normal. Always ask: what exactly does this test treat as chance? Check that. (And a non-significant normality test doesn't prove normality; it just didn't find a problem, see [[Why we never accept the null hypothesis]].)

See also: [[ANOVA Assumptions]], [[Type I and Type II Errors|false-positive]].
