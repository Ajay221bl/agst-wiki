---
type: atomic
tags:
  - inference
aliases:
  - "CI"
  - "confidence intervals"
  - "margin of error"
  - "confidence level"
  - "z-interval"
status: seedling
---

**In one line:** a confidence interval is a range of plausible values for an unknown [[Parameter vs Statistic|population parameter]], built as point estimate ± margin of error at a chosen confidence level.

> [!info] Before this, it helps to know
> [[Point Estimate]] (the centre) · [[Standard Error]] (the spread of estimates) · [[Central Limit Theorem]] (why the net works) · [[Critical Value]] (how wide the net is)

## Start from zero
1. **A point estimate is almost surely a little off,** so give a range instead ([[Point Estimate]]).
2. **How wide?** By the CLT, sample means scatter normally around $\mu$ with [[Standard Deviation|SD]] $\sigma/\sqrt{n}$ ([[Central Limit Theorem]], [[Standard Error]]). So 95% of all sample means lie within $1.96\,\sigma/\sqrt{n}$ of $\mu$ ([[Empirical Rule]]).
3. **Flip it around.** If our $\bar{x}$ is one of those usual 95%, then $\mu$ is within $1.96\,\sigma/\sqrt{n}$ of $\bar{x}$. Casting the same-width net around *our* $\bar{x}$ catches $\mu$:
$$\bar{x} \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt{n}} \qquad\text{(in practice: } \bar{x} \pm t^*_{n-1}\,\frac{s}{\sqrt{n}}\text{)}$$
4. **The multiplier is a critical value.** $z_{\alpha/2}$ has area $\alpha/2$ to its right: 1.645 (90%), **1.96 (95%)**, 2.58 (99%) ([[Critical Value]]). *Why* $t^*$ *in practice:* $\sigma$ is unknown and $s$ adds uncertainty ([[Why t instead of z when sigma is unknown]]).
5. **critical value × SE = the margin of error** ("the wiggle room").
6. **"95% confident" describes the method:** 95% of intervals built this way catch $\mu$. Any one interval either does or doesn't. *Consequence:* higher confidence means a wider net, and more data means a narrower one ([[Why a bigger sample gives a narrower confidence interval]]).

## See it

![[Confidence intervals - coverage.png|700]]
*What to look at:* Each line is one study's 95% CI. Most catch the true mean (dashed line); a few (red) miss it. The 95% describes how often the method works, not any single interval.

## Why it exists
It answers "how big, and how sure?" in one statement, and it needs no pre-specified hypothesis. "If you don't know what to do, go with the CI." ([[Why go with the confidence interval when the hypothesis is weak]])

## A tiny example
Book NHANES BMI: $\bar{x} = 28.8$, $s = 6.7$, $n = 134$. SE = $6.7/\sqrt{134} = 0.58$. 95% CI: $28.8 \pm 1.96(0.58) = (27.7, 29.9)$ kg/m² ([[References|Vu and Harrington 2020, Ch. 4]], p. 210).

**Interpretation (heavily tested):**
- ✅ "We are 95% confident that the true population mean [in context] is between 27.7 and 29.9."
- ✅ Confident in the **process**: about 95% of intervals built this way would contain $\mu$ (book p. 209).
- ❌ "There is a 95% probability that $\mu$ is in *this* interval." $\mu$ is fixed; a given interval either contains it or not.

**What changes the width:**
| Change | Width |
|---|---|
| confidence level ↑ | wider |
| variability ↑ | wider |
| sample size ↑ | narrower |
Why no 100% CI? You'd need "0 to 200 just in case", which says nothing.

## Common confusions
- **"A CI is a range for the sample mean."** It is for the population parameter.
- **"95% of the data fall in the CI."** The CI is about the mean, not individual values.

## Connections
- **Builds on:** [[Point Estimate]], [[Standard Error]], [[Central Limit Theorem]], [[Critical Value]]
- **Leads to:** [[Hypothesis Testing]], [[One-Sample t-Test]], [[Why a bigger sample gives a narrower confidence interval]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (§4.2, pp. 205–210)
- **Terms used:** [[Variability]], [[Sample Size]]
