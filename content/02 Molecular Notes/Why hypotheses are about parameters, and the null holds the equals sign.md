---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "hypotheses about parameters"
  - "why equality in H0"
status: seedling
---

> [!summary] In plain words
> We only test what we can't see. A sample mean is known the moment we calculate it, so a hypothesis about x̄ is pointless; hypotheses (and confidence intervals) are about population parameters like μ. The null must contain an equals sign because the test needs one specific value to centre the sampling distribution on before it can say how unusual the data are.

## The question
Why must a hypothesis be about a parameter, and why does H₀ contain the equals sign?

## Built from
- [[Parameter vs Statistic]]: known vs unknown.
- [[Null and Alternative Hypotheses]]: how they are written.
- [[Sampling Distribution]]: needs a centre.
- [[Null Distribution]]: the curve H₀ sets up.
- [[Confidence Interval]]: also an [[Point Estimate|estimate]] of a parameter.

## See it

![[Null distribution centred at mu0 - body temperature.png|700]]
*What to look at:* The curve can only be drawn once H₀ names a centre (98.6). Then the observed 98.249 is 5.45 [[Standard Error|standard errors]] below it. Class body temperature output.

## The reasoning, step by step
1. A statistic (x̄, s, p̂) is computed from the sample, so it is known exactly; a parameter (μ, σ, p) describes the whole population and is unknown ([[Parameter vs Statistic]]).
2. Testing "x̄ = 2" is like testing your own height when you can just measure it. Only unknowns need a test, so H₀ and Hₐ are always about parameters. The same goes for a CI: it estimates a parameter, never a statistic.
3. To judge how unusual x̄ is, we need the sampling distribution of x̄, and it is centred at μ, which we don't know ([[Sampling Distribution]]).
4. H₀ supplies a value to plug in: μ = μ₀. That fixes the centre and gives the [[Null Distribution]].
5. An [[Inequality Signs|inequality]] (μ < 190) names no single centre, so it can't be the [[Test Assumptions|assumption]] the maths runs on. It goes in Hₐ, and H₀ keeps the equality (written = or ≤ / ≥).
6. H₀ is therefore a calculating assumption, not necessarily what you believe; usually you hope to reject it.

## What would go wrong otherwise
Hypotheses about statistics test nothing, and a null without a specific value leaves the test with no distribution to compare the data against.

## Connections
- **Related:** [[Why we never accept the null hypothesis]], [[Why the sampling distribution makes inference possible]], [[Why a p-value is not the probability the null is true]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Inference Foundations]]
