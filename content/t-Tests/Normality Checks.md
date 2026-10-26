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

t-tests and ANOVA assume the data, or the residuals, come from a normal population ([[Normal Distribution]]). This matters because the p-value comes from a t or F distribution that is only exact when the data are normal. Small samples are the most sensitive ([[Robustness]]). We can't see the population, so we look at the sample in two ways that complement each other.

**The formal test: Shapiro–Wilk** (`shapiro.test`).
- $H_0$: the data come from a normal population. $H_A$: they depart from normality.
- **Here you want a large p-value**, which means you [[Why we never accept the null hypothesis|fail to reject]] and have no evidence against normality. This is the reverse of the usual hope ([[Null and Alternative Hypotheses]]).
- With large samples, it nearly always rejects, because trivial departures become significant. Genomic-scale data will probably never pass. Like every test, its [[Statistical Power|power]] grows with $n$. So add pictures.

**The visual checks.**
- A **histogram** with a normal curve laid over it: is it roughly bell-shaped ([[Histogram]])?
- A **normal Q-Q plot** (`qqnorm` + `qqline`, or `ggqqplot`). Points near the straight line mean the data are approximately normal. Systematic curves or bends mean [[Shape of a Distribution|skew]] or heavy [[Tails of a Distribution|tails]] ([[Q-Q Plot]], [[References|Vu and Harrington 2020, Ch. 3]], pp. 163–167). Lines are easier to judge than bell shapes, especially with few points.

Check the right thing: the differences for a paired test, each group for a two-sample test, and the residuals for ANOVA ([[Residuals]]). If normality fails badly with a small $n$, use a rank-based test ([[Nonparametric Alternatives]]).

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals skew.

Which values to check depends on the test:

| Test | Check normality of... |
|---|---|
| one-sample t | the sample values |
| [[Paired t-Test\|paired t]] | **the differences** |
| [[Two-Sample Independent t-Test\|two-sample t]] | **each group** |
| one-way ANOVA | each group, or the model **residuals** |

For example, COVID distress scores (n = 939) gave a Shapiro p below [[Scientific Notation|2.2e-16]], so normality is rejected. But with that $n$, the central limit theorem supports going ahead with caution ([[One-Sample t-Test]]).

A Shapiro p below 0.05 isn't good news: it means normality is rejected. And for a paired test, don't check each column; check the differences.

See also: [[ANOVA Assumptions]], [[shapiro.test()]], [[Why check assumptions before trusting a test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (pp. 163–167).
