---
type: atomic
tags:
  - inference
aliases:
  - "sample size"
  - "sample sizes"
  - "n"
  - "N"
  - "n_i"
  - "number of observations"
status: seedling
---

**In one line:** the sample size $n$ is the number of independent units measured ($N$ for the total across groups, $n_i$ for group $i$); it sets the standard error, the degrees of freedom and the power.

> [!info] Before this, it helps to know
> [[Variable and Observation]] · [[Population and Sample]] · [[Squares and Square Roots]]

## Start from zero
1. **A sample is the units we actually measure** ([[Population and Sample]]). Count them: that is $n$. With groups, $n_i$ is group $i$'s size and, in ANOVA, $N = \sum n_i$ is the total ([[Summation Notation]]). *Watch the notation:* outside ANOVA, capital $N$ often means the population size instead ([[Greek Letters and Symbols]]).
2. **Count units, not measurements.** Two leaves from one plant are not two independent units ([[Variable and Observation]], [[Why independence is judged from the design, not a test]]).
3. **Means of bigger samples wobble less**: $SE = \sigma / \sqrt{n}$ ([[Standard Error]]). *Why the square root:* averaging cancels [[Random Error and Precision|random errors]], but only at the rate $\sqrt{n}$, so four times the data halves the SE.
4. **n sets the degrees of freedom** ($n - 1$, $N - k$), which sets the t or F curve ([[Degrees of Freedom]]).
5. **So n drives power and interval width.** Bigger n: narrower CIs, more power ([[Statistical Power]], [[Why a bigger sample gives a narrower confidence interval]]).
6. **But n can't fix everything.** It doesn't remove [[Sampling Bias|bias]] ([[Why a bigger sample can't fix a biased one]]), and with a huge n even trivial effects become significant ([[Why big samples make almost everything significant]]).

## See it

![[Sample size - what n changes.png|700]]
*What to look at:* the SE falls like $1/\sqrt{n}$; t* falls quickly toward 1.96; power for a medium effect (d = 0.5) reaches 0.80 at about 64 per group.

## Why it exists
Every [[Descriptive vs Inferential Statistics|inference]] depends on how much information you have, and n is the count of it. It is also the one thing you choose before collecting data ([[power.t.test()]]).

## A tiny example
Exact (R `power.t.test`): a two-sample t-test for d = 0.5 has power 0.34 with 20 per group and 0.80 with 64 per group.

## Common confusions
- **"Doubling n halves the SE."** It takes four times n to halve it.
- **"n is the number of rows."** It is the number of independent units, after missing values are dropped.

## Connections
- **Builds on:** [[Variable and Observation]], [[Population and Sample]], [[Squares and Square Roots]]
- **Leads to:** [[Standard Error]], [[Degrees of Freedom]], [[Statistical Power]], [[Balanced Design]], [[power.t.test()]]
- **Part of:** [[MOC - Inference Foundations]]
