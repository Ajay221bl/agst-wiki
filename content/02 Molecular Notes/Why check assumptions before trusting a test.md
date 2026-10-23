---
type: molecular
tags:
  - molecular
  - anova
  - t-tests
aliases:
  - "assumption checks"
  - "garbage in garbage out"
status: seedling
---

Why does a careful R analysis run Shapiro and Levene tests before the main test?

A p-value is calculated from a [[Probability Distribution|probability model]], and that model assumes things: independent observations, roughly normal data or means, and equal spreads for pooled tests. If those are badly wrong, the p-value and the [[Confidence Interval|confidence interval]] are wrong too. So check them with plots and tests, rely on robustness and the central limit theorem where that is justified, and confirm with a nonparametric test when in doubt.

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals [[Shape of a Distribution|skew]].

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

1. The t and F distributions used for p-values only hold if the assumptions hold ([[t-Distribution]], [[F-Distribution]]).
2. **Independence** is the most important, and it is decided by the design, not by a test ([[Independent vs Paired Samples]]).
3. **Normality:** check each group, or the residuals, with a Shapiro test and a Q-Q plot, and hope for a large p. With a large $n$, the Shapiro test rejects trivial departures, so the picture and the central limit theorem decide ([[Normality Checks]]).
4. **Equal variances:** use Levene's test, and hope for a large p. ANOVA tolerates variance [[Ratios and Fractions|ratios]] up to about 9:1 ([[Homogeneity of Variance]]).
5. If the assumptions fail, say so, and confirm with a nonparametric test. If both agree, report the finding as robust. If they don't, the result is uncertain, so make a careful argument ([[Nonparametric Alternatives]]).

Broken assumptions threaten statistical conclusion validity: they give p-values and [[Post Hoc Tests|post hoc tests]] that look precise but aren't ([[Statistical Conclusion Validity]]).

See also: [[ANOVA Assumptions]], [[Central Limit Theorem]], [[Null Distribution]], [[Test Assumptions|assumptions]], [[Robustness]], [[Residuals]], [[Q-Q Plot]], [[Why visualize data before testing]], [[Why a significant ANOVA can have no significant post hocs]].
