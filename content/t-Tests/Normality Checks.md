---
type: atomic
tags:
  - t-tests
  - anova
aliases:
  - "Shapiro-Wilk test"
  - "Q-Q plot"
  - "normal probability plot"
  - "checking normality"
  - "normality"
  - "normality assumption"
  - "normality test"
status: seedling
---

To check whether data are roughly normal, use both a formal test (Shapiro–Wilk, where you want a large p-value) and pictures (a histogram and a normal Q-Q plot).

1. **t-tests and ANOVA assume the data (or residuals) come from a normal population** ([[Normal Distribution]]). *Why it matters:* the p-value comes from a t or F distribution that is only exact under normality; small samples are most sensitive ([[Robustness]]).
2. **We can't see the population, so we look at the sample in two complementary ways.** "Don't hate on either of them."
3. **Formal test: Shapiro–Wilk** (`shapiro.test`)
   - $H_0$: the data come from a normal population. $H_A$: they deviate from normality.
   - **Here you want a large p-value** ([[Why we never accept the null hypothesis|fail to reject]] = no evidence of non-normality), the reverse of the usual hope ([[Null and Alternative Hypotheses]]).
   - **Large samples:** it nearly always rejects, because trivial deviations become significant. Genomic-scale data will probably never pass. *Why:* like every test its [[Statistical Power|power]] grows with $n$. So add visuals.
4. **Visual checks**
   - **Histogram** with an overlaid normal curve: roughly bell-shaped? ([[Histogram]])
   - **Normal Q-Q plot** (`qqnorm` + `qqline`, `ggqqplot`): points near the straight line → approximately normal; systematic curves or bends → [[Shape of a Distribution|skew]] or heavy [[Tails of a Distribution|tails]] ([[Q-Q Plot]], [[References|Vu and Harrington 2020, Ch. 3]], pp. 163–167). *Why a Q-Q plot:* lines are easier to judge than bell shapes, especially with few points.
5. **Check the right thing:** the differences for a paired test, each group for a two-sample test, the residuals for ANOVA ([[Residuals]]). If normality fails badly with small $n$, use a rank-based test ([[Nonparametric Alternatives]]).

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals skew.

Most tests assume normality somewhere. Which "somewhere" matters:

| Test | Check normality of... |
|---|---|
| one-sample t | the sample values |
| [[Paired t-Test\|paired t]] | **the differences** |
| [[Two-Sample Independent t-Test\|two-sample t]] | **each group** |
| one-way ANOVA | each group, or the model **residuals** |

For example:

COVID distress (n = 939): Shapiro p < [[Scientific Notation|2.2e-16]], so normality rejected; but with that $n$, the CLT supports proceeding with caution ([[One-Sample t-Test]]).

Common mistakes:

- **"p < 0.05 on Shapiro is good."** It means normality is rejected.
- **"Check each column for a paired test."** Check the differences.

See also: [[ANOVA Assumptions]], [[shapiro.test()]], [[Why check assumptions before trusting a test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (pp. 163–167).
