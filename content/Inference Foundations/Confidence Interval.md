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

A confidence interval (CI) is a range of believable values for something you can't measure directly, like a population average. You build it as "my best guess, plus or minus a margin", and the confidence level (like 95%) says how often that recipe catches the truth.

Imagine you're fishing for a single fish that stays in one spot under muddy water. You can't see it. You get one look at a ripple on the surface, and the ripple is usually near the fish, but not exactly on top of it. Where do you throw?

If you throw a spear at the ripple, you'll almost always miss, because the ripple is almost never *exactly* above the fish. So throw a net instead, centred on the ripple. How wide? That depends on how far ripples usually land from the fish. If you know that, you can make the net just wide enough to catch the fish most of the time.

That's a confidence interval. The fish is the true population mean, $\mu$, sitting still; you can't see it. The ripple is your sample mean, $\bar{x}$ ([[Point Estimate]]). And how far ripples land from the fish is exactly what the [[Central Limit Theorem|central limit theorem]] tells us: sample means scatter in a bell shape around $\mu$, with a spread called the standard error, $\sigma/\sqrt{n}$ ([[Standard Error]]). About 95% of sample means land within $1.96$ standard errors of $\mu$ ([[Empirical Rule]]).

Now flip it around, and that's the clever step. If $\bar{x}$ is usually within $1.96$ standard errors of $\mu$, then $\mu$ is usually within $1.96$ standard errors of $\bar{x}$. So the net is:
$$\bar{x} \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt{n}} \qquad\text{(in practice: } \bar{x} \pm t^*_{n-1}\,\frac{s}{\sqrt{n}}\text{)}$$
Read it as "best guess, plus or minus a few wobbles". The multiplier is a [[Critical Value|critical value]]: 1.645 for 90%, 1.96 for 95%, 2.58 for 99%. We usually don't know $\sigma$, so we use the sample's $s$, which adds a bit of uncertainty, so a slightly bigger t value replaces z ([[Why t instead of z when sigma is unknown]]). The "plus or minus" part, critical value times standard error, is called the **margin of error**.

![[Confidence intervals - coverage.png|700]]
Each line is one study's 95% CI. Most catch the true mean (dashed line); a few (red) miss it. The 95% describes how often the method works, not any single interval.

Look at that picture carefully, because it answers the most confusing question about confidence intervals. Each line is one throw of the net. The fish doesn't move. Most nets catch it; a few miss. "95% confident" is a statement about the *net-throwing method*: 95% of throws catch the fish. Once a particular net has landed, it either has the fish or it doesn't. So it's wrong to say "there's a 95% probability $\mu$ is in *this* interval" ([[Why 95% confidence is not a 95% probability]]).

For example, in the book's NHANES data on body mass index (BMI), $\bar{x} = 28.8$, $s = 6.7$ and $n = 134$. The standard error is $6.7/\sqrt{134} = 0.58$, and the 95% CI is $28.8 \pm 1.96(0.58) = (27.7, 29.9)$ kg/m² ([[References|Vu and Harrington 2020, Ch. 4]], p. 210). You'd say: "We are 95% confident that the true mean BMI of this population is between 27.7 and 29.9." The confidence is in the process: about 95% of intervals built this way contain $\mu$ (book p. 209).

What makes the net wider or narrower? Think about the fishing:

| Change | Width | Why |
|---|---|---|
| confidence level ↑ | wider | to catch the fish more often, you need a bigger net |
| variability ↑ | wider | ripples land farther from the fish |
| sample size ↑ | narrower | a bigger sample's ripple lands closer to the fish |

Could you have a 100% interval? Sure: "the mean BMI is between 0 and a billion." Always right, completely useless. Confidence costs width ([[Why a bigger sample gives a narrower confidence interval]]).

Why do people love confidence intervals? A test only answers yes or no about one value. An interval shows you every value the data can support, and how big the effect might be, all at once. When you're unsure which test to run, an interval is a safe choice ([[Why go with the confidence interval when the hypothesis is weak]], [[Hypothesis Testing]]).

Try it yourself. Does a 95% confidence interval mean that 95% of the people in the sample have a BMI between 27.7 and 29.9? No. It's about where the *average* is, not about individuals. Individual BMIs spread much more widely than that.

See also: [[One-Sample t-Test]], [[Variability]], [[Sample Size]], [[Standard Deviation|standard deviation]], [[Parameter vs Statistic|population parameter]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.2, pp. 205–210).
