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

You only ever see one sample. But theory, through the central limit theorem (CLT), tells you how all possible sample means would be spread: roughly normal, centred on the true mean, with spread $\sigma/\sqrt{n}$. Knowing that pattern lets you reason backwards from your one mean, either to a range for the true mean (a confidence interval) or to how surprising your mean would be if a claim were true (a test).

![[Central limit theorem.png|700]]
The population (left) is strongly skewed, yet the means of samples pile up into a bell around μ = 10 and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

1. The population mean $\mu$ is fixed but unknown ([[Parameter vs Statistic]]).
2. Each random sample gives a different $\bar{x}$, and the collection of all of them is the sampling distribution ([[Sampling Distribution]]).
3. The central limit theorem says that distribution is approximately normal, centred at $\mu$, with [[Standard Deviation|standard deviation]] $\sigma/\sqrt{n}$, called the standard error ([[Central Limit Theorem]]).
4. So 95% of sample means fall within about 1.96 standard errors of $\mu$. Turned around, a net of that width around your $\bar{x}$ catches $\mu$ 95% of the time. That is a **confidence interval** ([[Confidence Interval]]).
5. Or centre the distribution at a claimed value $\mu_0$ and ask how far out your $\bar{x}$ lands. That is a **test** and its p-value ([[Hypothesis Testing]]).
6. Keep three distributions apart. The **population distribution** holds every individual value; it is fixed and never seen. The **data distribution** holds the individual values in your one sample; it is seen, but it is only one of many possible samples. The **sampling distribution** holds every possible $\bar{x}$; it is theoretical. Only the third has sample means on its axis, and it is the one [[Descriptive vs Inferential Statistics|inference]] uses ([[Population and Sample]]).
7. All of this assumes a random sample. Without one, as the book puts it, "there is no population mean to which the confidence interval applies" ([[References|Vu and Harrington 2020, Ch. 4]], p. 210).

Without the sampling distribution, a sample mean would be just a number, with no way to say how far it might be from the truth.

See also: [[Why report both center and spread|center and spread]], [[Standard Error]], [[Random Sampling]], [[Null Distribution]], [[Why a bigger sample gives a narrower confidence interval]], [[Why t instead of z when sigma is unknown]].
