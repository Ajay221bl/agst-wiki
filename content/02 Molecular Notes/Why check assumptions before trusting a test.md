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

> [!summary] In plain words
> A p-value is calculated from a [[Probability Distribution|probability model]], and that model assumes things: independent observations, roughly normal data or means, equal spreads for pooled tests. If those are badly wrong, the p-value and [[Confidence Interval|CI]] are wrong too. So check them with plots and tests, lean on robustness and the CLT where justified, and confirm with a nonparametric test when in doubt.

## The question
Why does a careful R analysis run Shapiro and Levene before the main test?

## Built from
- [[ANOVA Assumptions]]: independence, normality, equal variances.
- [[Normality Checks]] and [[Homogeneity of Variance]]: how to check.
- [[Central Limit Theorem]]: why large samples forgive non-normal data.
- [[Nonparametric Alternatives]]: the backup.
- [[Statistical Conclusion Validity]]: what's at stake.
- [[Null Distribution]]: the p-value comes from it, and it is built on the [[Test Assumptions|assumptions]].
- [[Robustness]]: which violations matter, and when.
- [[Residuals]]: what normality is checked on in ANOVA.
- [[Q-Q Plot]]: the visual normality check.

## See it

![[QQ plots - normal vs skewed.png|700]]
*What to look at:* If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals [[Shape of a Distribution|skew]].

![[Homogeneity of variance.png|700]]
*What to look at:* Compare the heights of the boxes and [[Box Plot and Five-Number Summary|whiskers]], not where they sit. On the right, group C is far more spread out than group A.

## The reasoning, step by step
1. The t and F distributions used for p-values only hold if the assumptions hold ([[t-Distribution]], [[F-Distribution]]).
2. **Independence** is the most important and is decided by the design, not a test ([[Independent vs Paired Samples]]).
3. **Normality:** check per group (or residuals) with Shapiro and a Q-Q plot; want large p. With large $n$, Shapiro rejects trivial deviations, so the picture and the CLT decide ([[Normality Checks]]).
4. **Equal variances:** Levene; want large p; ANOVA tolerates [[Ratios and Fractions|ratios]] up to about 9:1 ([[Homogeneity of Variance]]).
5. If assumptions fail: say so, and confirm with a nonparametric test. If both agree, report the finding as robust; if not, "it's fuzzy", so make an argument ([[Nonparametric Alternatives]]).

## What would go wrong otherwise
Violated assumptions are a threat to statistical conclusion validity: p-values and [[Post Hoc Tests|post hocs]] that look precise but aren't ([[Statistical Conclusion Validity]]).

## Connections
- **Related:** [[Why visualize data before testing]], [[Why a significant ANOVA can have no significant post hocs]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - ANOVA]], [[MOC - t-Tests]]
