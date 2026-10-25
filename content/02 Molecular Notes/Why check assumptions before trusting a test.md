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

Because a p-value is a calculation inside a model, and the model makes promises on your behalf. It's calculated from a [[Probability Distribution|probability model]] that assumes independent observations, roughly normal data or means, and, for pooled tests, equal spreads. If those are badly wrong, the p-value and the [[Confidence Interval|confidence interval]] are wrong too, however precise they look. So you check them, with plots and tests. You lean on robustness and the central limit theorem where that's justified, and you confirm with a nonparametric test when in doubt.

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends, as in the right panel, signals [[Shape of a Distribution|skew]].

![[Homogeneity of variance.png|700]]
Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

Ask where a p-value comes from. It's an area under a curve, the t or the F distribution. But those curves are only the right curves if the assumptions hold ([[t-Distribution]], [[F-Distribution]]). Break the assumptions and you're measuring an area under the wrong curve. The number still comes out. It just doesn't mean what it says.

So go through the assumptions, most important first.

**Independence** matters most, and no test can check it. It's decided by the design: how the data were collected ([[Independent vs Paired Samples]]).

**Normality**: check each group, or the residuals, with a Shapiro test and a Q-Q plot, and hope for a large p. But don't let the test rule alone. With a large $n$, the Shapiro test rejects trivial departures, so the picture and the central limit theorem decide ([[Normality Checks]]).

**Equal variances**: use Levene's test, and again hope for a large p. ANOVA is forgiving here. It tolerates variance [[Ratios and Fractions|ratios]] up to about 9:1 ([[Homogeneity of Variance]]).

If the assumptions fail, say so, and get a second opinion from a nonparametric test. If both agree, the finding doesn't hang on the assumption, so report it as robust. If they disagree, the result is genuinely uncertain, and you make a careful argument rather than pretending otherwise ([[Nonparametric Alternatives]]).

This is what statistical conclusion validity means. Broken assumptions give p-values and [[Post Hoc Tests|post hoc tests]] that look precise but aren't ([[Statistical Conclusion Validity]]). Precision you haven't earned is worse than none, because it gets believed.

See also: [[ANOVA Assumptions]], [[Central Limit Theorem]], [[Null Distribution]], [[Test Assumptions|assumptions]], [[Robustness]], [[Residuals]], [[Q-Q Plot]], [[Why visualize data before testing]], [[Why a significant ANOVA can have no significant post hocs]].
