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

To check whether data are roughly normal, look at them two ways: a picture (a histogram and a normal Q-Q plot) and a formal test (Shapiro–Wilk, where you *want* a large p-value).

First, an honest admission: you can never prove data are normal. Nature doesn't make perfect bell curves. So the real question is humbler: are these data *so* far from normal that it would mess up the test I want to run?

Why would it mess it up? t-tests and ANOVA get their p-values from the t or F curve, and those curves are only exactly right when the data, or the [[Residuals|residuals]], come from a normal population ([[Normal Distribution]]). Small samples are the most sensitive; large ones get rescued by the central limit theorem ([[Robustness]]). We can't see the population, only the sample, so we look at the sample in two ways.

**The formal test: Shapiro–Wilk** (`shapiro.test`).
- $H_0$: the data come from a normal population. $H_A$: they don't.
- Notice the twist: **here you want a large p-value.** A large p means you [[Why we never accept the null hypothesis|fail to reject]] "normal", which is what you're hoping for. That's the opposite of the usual hope ([[Null and Alternative Hypotheses]]).
- But with big samples it nearly always rejects, even for tiny, harmless departures, because like every test its [[Statistical Power|power]] grows with $n$. Genomic-scale data will probably never pass. That's why you need pictures too.

Shapiro–Wilk isn't the only formal test. Kolmogorov–Smirnov, Anderson–Darling and Cramér–von Mises ask the same question in slightly different ways, and they share the same weakness with big samples. Shapiro–Wilk is the usual default.

**The pictures.**
- A **histogram** with a normal curve drawn over it: roughly a bell ([[Histogram]])?
- A **normal Q-Q plot** (`qqnorm` + `qqline`, or `ggqqplot`). If the points hug a straight line, the data are close to normal. Systematic bends mean [[Shape of a Distribution|skew]] or heavy [[Tails of a Distribution|tails]] ([[Q-Q Plot]], [[References|Vu and Harrington 2020, Ch. 3]], pp. 163–167). A straight line is much easier to judge by eye than a bell shape.

![[QQ plots - normal vs skewed.png|700]]
If the data are normal, the points follow the red line. Systematic curving away at the ends (right panel) signals skew.

Why both? Each covers the other's blind spot. The test is objective but over-sensitive with big samples. The picture shows *what kind* of departure it is and *how big*, which is what you need to decide.

And check the right thing. Ask yourself: what does this test actually treat as chance?

| Test | Check normality of... |
|---|---|
| one-sample t | the sample values |
| [[Paired t-Test\|paired t]] | **the differences** |
| [[Two-Sample Independent t-Test\|two-sample t]] | **each group** |
| one-way ANOVA | each group, or the model **residuals** |

For example, COVID distress scores (n = 939) gave a Shapiro p below [[Scientific Notation|2.2e-16]], so normality is rejected. But with that $n$, the central limit theorem supports going ahead with caution ([[One-Sample t-Test]]). If normality fails badly with a *small* $n$, use a rank-based test instead ([[Nonparametric Alternatives]]).

Try it yourself. Shapiro–Wilk on your residuals gives a p-value just under 0.05. Good news or bad? Bad, mildly: it rejects normality at 0.05. Now look at the Q-Q plot to see whether the departure is big enough to matter.

See also: [[ANOVA Assumptions]], [[shapiro.test()]], [[Why check assumptions before trusting a test]].

Further reading: [[References|Vu and Harrington 2020, Ch. 3]] (pp. 163–167).
