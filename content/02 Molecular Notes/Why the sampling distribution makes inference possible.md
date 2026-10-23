---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "logic of inference"
status: seedling
---

> [!summary] In plain words
> I only ever see one sample, but theory (the CLT) tells me how all possible sample means would be spread: roughly normal, centered on the true mean, with spread $\sigma/\sqrt{n}$. Knowing that pattern lets me reason backwards from my one mean to a range for the true mean (a CI) or to how surprising my mean would be if a claim were true (a test).

## The question
How can one sample say anything about a population I never see?

## Built from
- [[Sampling Distribution]]: the distribution of a statistic across samples.
- [[Central Limit Theorem]]: its shape, [[Why report both center and spread|center and spread]].
- [[Standard Error]]: its spread.
- [[Confidence Interval]] and [[Hypothesis Testing]]: the two uses.
- [[Random Sampling]]: the condition that makes it apply.
- [[Null Distribution]]: the sampling distribution when H₀ is true.

## See it

![[Central limit theorem.png|700]]
*What to look at:* The population (left) is strongly skewed, yet the means of samples pile up into a bell around μ = 10 and get narrower as n grows. By n = 30 the red normal curve fits almost perfectly.

## The reasoning, step by step
1. The population mean $\mu$ is fixed but unknown ([[Parameter vs Statistic]]).
2. Each random sample gives a different $\bar{x}$; the collection of all of them is the sampling distribution ([[Sampling Distribution]]).
3. The CLT says that distribution is approximately normal, centered at $\mu$, with [[Standard Deviation|SD]] $\sigma/\sqrt{n}$ ([[Central Limit Theorem]]).
4. So 95% of sample means fall within about $1.96\,SE$ of $\mu$. Turned around: a net of that width around my $\bar{x}$ catches $\mu$ 95% of the time, which is a **confidence interval** ([[Confidence Interval]]).
5. Or center the distribution at a claimed $\mu_0$ and ask how far out my $\bar{x}$ lands: that is a **test** and its p-value ([[Hypothesis Testing]]).
6. Keep three distributions apart. The **population distribution** (every individual value, fixed, never seen), the **data distribution** (the individual values in my one sample, seen, but only one of many possible), and the **sampling distribution** (every possible $\bar{x}$, theoretical). Only the third has sample means on its axis, and it is the one [[Descriptive vs Inferential Statistics|inference]] uses ([[Population and Sample]]).
7. All of this assumes a random sample; without one, "there is no population mean to which the confidence interval applies" ([[References|Vu and Harrington 2020, Ch. 4]], p. 210).

## What would go wrong otherwise
Without the sampling distribution, a sample mean would be just a number, with no way to say how far it might be from the truth.

## Connections
- **Related:** [[Why a bigger sample gives a narrower confidence interval]], [[Why t instead of z when sigma is unknown]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]]
