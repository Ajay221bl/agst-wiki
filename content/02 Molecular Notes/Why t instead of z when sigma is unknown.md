---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "why the t-distribution"
status: seedling
---

> [!summary] In plain words
> The z formula needs the population [[Standard Deviation|SD]] σ, which we almost never know. Plugging in the sample SD adds extra uncertainty, so [[Test Statistic|test statistics]] land in the [[Tails of a Distribution|tails]] more often than the normal curve predicts. The t-distribution has fatter tails to account for that, and it approaches the normal as the sample grows.

## The question
Why switch from z to t once σ has to be estimated?

## Built from
- [[Standard Error]]: $\sigma/\sqrt{n}$ vs $s/\sqrt{n}$.
- [[t-Distribution]]: fatter tails, set by df.
- [[Normal Distribution]]: the z reference.
- [[Degrees of Freedom]]: what controls the tails.
- [[Critical Value]]: t* is larger than z*.

## See it

![[t-distribution vs normal.png|700]]
*What to look at:* With few degrees of freedom the t curve is lower in the middle and fatter in the tails, so cut-offs sit further out. By df = 30 it is almost the normal curve.

## The reasoning, step by step
1. The first intervals and tests used $\sigma/\sqrt{n}$ with σ known, which is rarely realistic ([[Confidence Interval]]).
2. Replacing σ with $s$ means the SE is itself estimated: "an [[Point Estimate|estimate]] inside another estimate" ([[Standard Error]]).
3. With small samples, $s$ can be too small by chance, making t large; extreme values happen more often than z allows.
4. The t-distribution builds that in with fatter tails and bigger critical values (2.07 at df 23 vs 1.96) ([[t-Distribution]]).
5. As df grows, $s$ becomes a reliable estimate of σ and t approaches z ([[Degrees of Freedom]]).

## What would go wrong otherwise
Using z with an estimated SD gives intervals that are too narrow and tests that reject too often, especially with small samples.

## Connections
- **Related:** [[One-Sample t-Test]], [[Why the sampling distribution makes inference possible]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - t-Tests]]
