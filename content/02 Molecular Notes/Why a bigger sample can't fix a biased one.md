---
type: molecular
tags:
  - molecular
  - study-design
aliases:
  - "bias vs random error"
  - "sample size vs representativeness"
status: seedling
---

> [!summary] In plain words
> A larger sample shrinks [[Random Error and Precision|random error]]: sample means cluster ever more tightly. But they cluster around the mean of the [[Population and Sample|population]] you actually sampled. If the sampling leaves people out, more data just gives a more precise wrong answer. Bias has to be fixed by how you sample, not by how many.

## The question
Why doesn't collecting more data fix a sample that isn't representative?

## Built from
- [[Random Sampling]]: what makes a sample representative.
- [[Sampling Bias]]: systematic miss.
- [[Law of Large Numbers]]: more data converges, but to what?.
- [[Standard Error]]: random error shrinks with n.
- [[External Validity]]: who the result applies to.

## See it

![[Bias vs random error as n grows.png|700]]
*What to look at:* Blue (random sample) tightens around the true 164 cm; red (one subgroup only) tightens around 170 cm. [[Simulation|Simulated data]].

## The reasoning, step by step
1. The [[Law of Large Numbers]]: as n grows, the sample mean settles on the mean of the population being sampled.
2. Random error, the scatter from sample to sample, shrinks like $1/\sqrt{n}$ ([[Standard Error]]).
3. If the sampling method reaches only part of the population, the population being sampled is that part. Its mean can differ from the target's ([[Sampling Bias]]).
4. So the sample mean converges, precisely, to the wrong value. More n shrinks the scatter but not the miss.
5. Only the sampling design (a random sample of the target population) removes the miss ([[Random Sampling]], [[External Validity]]).

## What would go wrong otherwise
Huge but biased samples (online polls, voluntary surveys) look convincing because their intervals are narrow, while being confidently wrong.

## Connections
- **Related:** [[Why random assignment and random sampling protect different things]], [[Why a bigger sample gives a narrower confidence interval]], [[Why big samples make almost everything significant]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Study Design and Sampling]], [[MOC - Inference Foundations]]
