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

Why must a hypothesis be about a parameter, and why does H₀ contain the equals sign?

We only test what we can't see. A sample mean is known the moment we calculate it, so a hypothesis about x̄ would be pointless. Hypotheses, and confidence intervals, are about population parameters such as μ. And the null must contain an equals sign because the test needs one specific value to centre its curve on before it can say how unusual the data are.

![[Null distribution centred at mu0 - body temperature.png|700]]
The curve can only be drawn once H₀ names a centre, 98.6. Then the observed 98.249 is 5.45 [[Standard Error|standard errors]] below it. Body temperature output from R.

Both rules follow from asking what a test is for.

A statistic, such as x̄, s or p̂, is calculated from the sample, so it's known exactly. A parameter, such as μ, σ or p, describes the whole population, and it's unknown ([[Parameter vs Statistic]]). Testing "x̄ = 2" is like testing your own height when you can just measure it. Uncertainty only exists about the things you can't see, so H₀ and Hₐ are always about parameters. The same goes for a confidence interval. It estimates a parameter, never a statistic.

Now the equals sign. To judge how unusual x̄ is, we need its sampling distribution, the curve of all the values x̄ could have taken. That curve is centred at μ, which we don't know ([[Sampling Distribution]]). We're stuck, unless someone hands us a value.

That's H₀'s job. It supplies a value to plug in, μ = μ₀. That fixes the centre and gives the [[Null Distribution|null distribution]]. An [[Inequality Signs|inequality]] such as μ < 190 can't do this. It names no single centre, so there's nothing to draw the curve around, and it can't be the [[Test Assumptions|assumption]] the calculation runs on. So it goes in Hₐ, and H₀ keeps the equality, written as =, or as ≤ or ≥.

Notice what that makes H₀. It's not necessarily what you believe. It's a starting point for a calculation, and usually you're hoping to reject it. Think of it as the position you take for the sake of argument, to see whether the data can knock it down.

Get either rule wrong and the test collapses. Hypotheses about statistics test nothing. A null without a specific value leaves the test with no distribution to compare the data against.

Try it yourself. A student writes H₀: x̄ = 5. What's wrong? x̄ is the sample mean, which you already know the moment you calculate it, so there's nothing to test. The hypothesis should be about the population mean, μ. And which one gets the equals sign, H₀ or Hₐ? H₀, because the test needs one exact value to build its curve around.

See also: [[Null and Alternative Hypotheses]], [[Confidence Interval]], [[Point Estimate|estimate]], [[Why we never accept the null hypothesis]], [[Why the sampling distribution makes inference possible]], [[Why a p-value is not the probability the null is true]].
