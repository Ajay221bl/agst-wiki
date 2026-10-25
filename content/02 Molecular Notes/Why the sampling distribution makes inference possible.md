---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "logic of inference"
status: seedling
---

How can one sample say anything about a population you never see?

You only ever see one sample. But theory, through the central limit theorem (CLT), tells you how all possible sample means would be spread: roughly normal, centred on the true mean, with spread $\sigma/\sqrt{n}$. You don't need to see the other samples, because you know the pattern they'd make. And knowing that pattern lets you reason backwards from your one mean, either to a range for the true mean, a confidence interval, or to how surprising your mean would be if some claim were true, a test.

![[Central limit theorem.png|700]]
The population, on the left, is strongly skewed. Yet the means of samples pile up into a bell around μ = 10, and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

This is the idea that makes the whole subject work, so build it slowly.

The population mean $\mu$ is fixed, but unknown ([[Parameter vs Statistic]]). That's what we want.

Each random sample gives a different $\bar{x}$. Draw again and you get a different one. Now imagine all the samples you could have drawn, and all their means. That imaginary collection is the sampling distribution ([[Sampling Distribution]]).

Here's the remarkable part. You can know its shape without ever drawing it. The central limit theorem says it's approximately normal, centred at $\mu$, with a [[Standard Deviation|standard deviation]] of $\sigma/\sqrt{n}$, called the standard error ([[Central Limit Theorem]]). Whatever the population looks like, the means behave.

That's enough to work backwards. 95% of sample means fall within about 1.96 standard errors of $\mu$. Turn that around: a net of that width thrown around your $\bar{x}$ catches $\mu$ 95% of the time. That's a **confidence interval** ([[Confidence Interval]]). Or centre the distribution at a claimed value $\mu_0$ and ask how far out your $\bar{x}$ lands. That's a **test** and its p-value ([[Hypothesis Testing]]).

The one confusion to avoid is mixing up three distributions. The **population distribution** holds every individual value. It's fixed, and never seen. The **data distribution** holds the individual values in your one sample. It's seen, but it's just one of many possible samples. The **sampling distribution** holds every possible $\bar{x}$. It's theoretical. Only the third has sample means on its axis, and it's the one [[Descriptive vs Inferential Statistics|inference]] uses ([[Population and Sample]]).

And all of this rests on a random sample. Without one, as the book puts it, "there is no population mean to which the confidence interval applies" ([[References|Vu and Harrington 2020, Ch. 4]], p. 210).

Without the sampling distribution, a sample mean would just be a number, with no way to say how far it might be from the truth. With it, one sample becomes evidence. That's the leap from describing what you saw to knowing something about what you didn't.

See also: [[Why report both center and spread|center and spread]], [[Standard Error]], [[Random Sampling]], [[Null Distribution]], [[Why a bigger sample gives a narrower confidence interval]], [[Why t instead of z when sigma is unknown]].
