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

A confidence interval (CI) is a range of believable values for an unknown [[Parameter vs Statistic|population parameter]]. It is built as point estimate ± margin of error, at a chosen confidence level such as 95%.

A single best guess is almost surely a little off, so give a range instead ([[Point Estimate]]). How wide should it be? By the central limit theorem, sample means scatter normally around $\mu$ with [[Standard Deviation|standard deviation]] $\sigma/\sqrt{n}$, called the standard error ([[Central Limit Theorem]], [[Standard Error]]). So 95% of all sample means lie within $1.96\,\sigma/\sqrt{n}$ of $\mu$ ([[Empirical Rule]]).

Now flip it around. If our $\bar{x}$ is one of those usual 95%, then $\mu$ is within $1.96\,\sigma/\sqrt{n}$ of $\bar{x}$. So a net of that width cast around *our* $\bar{x}$ catches $\mu$:
$$\bar{x} \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt{n}} \qquad\text{(in practice: } \bar{x} \pm t^*_{n-1}\,\frac{s}{\sqrt{n}}\text{)}$$

The multiplier is a [[Critical Value|critical value]]: 1.645 for 90%, 1.96 for 95%, and 2.58 for 99%. In practice $\sigma$ is unknown and we use $s$, which adds uncertainty, so a t value replaces z ([[Why t instead of z when sigma is unknown]]). The critical value times the standard error is the **margin of error**.

"95% confident" describes the method: 95% of intervals built this way catch $\mu$. Any one interval either does or doesn't. So higher confidence means a wider net, and more data means a narrower one ([[Why a bigger sample gives a narrower confidence interval]]).

![[Confidence intervals - coverage.png|700]]
Each line is one study's 95% CI. Most catch the true mean (dashed line); a few (red) miss it. The 95% describes how often the method works, not any single interval.

A confidence interval answers "how big, and how sure?" in one statement, and it needs no hypothesis set in advance. When you are unsure which test to run, a confidence interval is a safe choice ([[Why go with the confidence interval when the hypothesis is weak]]).

For example, in the book's NHANES data on body mass index (BMI), $\bar{x} = 28.8$, $s = 6.7$ and $n = 134$. The standard error is $6.7/\sqrt{134} = 0.58$, and the 95% CI is $28.8 \pm 1.96(0.58) = (27.7, 29.9)$ kg/m² ([[References|Vu and Harrington 2020, Ch. 4]], p. 210).

How to say it correctly:
- "We are 95% confident that the true population mean [in context] is between 27.7 and 29.9."
- The confidence is in the **process**: about 95% of intervals built this way would contain $\mu$ (book p. 209).
- It is wrong to say "there is a 95% probability that $\mu$ is in *this* interval". $\mu$ is fixed, so a given interval either contains it or doesn't.

What changes the width:

| Change | Width |
|---|---|
| confidence level ↑ | wider |
| variability ↑ | wider |
| sample size ↑ | narrower |

There is no useful 100% CI: you would have to say "0 to 200, just in case", which tells you nothing.

A confidence interval is a range for the population parameter, not for the sample mean. And it doesn't mean that 95% of the data fall inside it: it is about the mean, not individual values.

See also: [[Hypothesis Testing]], [[One-Sample t-Test]], [[Variability]], [[Sample Size]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.2, pp. 205–210).
