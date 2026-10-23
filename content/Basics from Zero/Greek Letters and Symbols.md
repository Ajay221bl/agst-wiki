---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "notation"
  - "symbols"
  - "mu and sigma"
status: seedling
---

**In one line:** Greek letters usually stand for unknown population values (parameters) and Roman letters for values calculated from a sample (statistics).

> [!info] Before this, it helps to know
> [[Variable and Observation]] (what is being described) · [[Population and Sample]] (the two things the symbols describe)

## Start from zero
1. **Statistics talks about two worlds at once:** the whole population we care about and the sample we actually measured ([[Population and Sample]]).
2. **The same quantity exists in both worlds.** There's a population mean (unknown) and a sample mean (computed). We need different symbols so we never confuse them.
3. **The convention: Greek for the population, Roman for the sample.** $\mu$ (mu) is the population mean, $\bar{x}$ (x-bar) the sample mean; $\sigma$ ([[Standard Deviation|sigma]]) is the population SD, $s$ the sample SD ([[Parameter vs Statistic]]). *Why it matters:* a sentence like "$H_0: \mu = 98.6$" is about the population, never about the sample you already have.
4. **A "hat" means "an [[Point Estimate|estimate]] of".** $\hat{p}$ (p-hat) is the sample's estimate of the population [[Proportions and Percentages|proportion]] $p$.
5. **The full list used in this course:**

| Symbol | Say | Means |
|---|---|---|
| $\bar{x}$ | x-bar | sample mean |
| $\mu$ | mu | population mean |
| $s$, $s^2$ | s, s-squared | sample SD, [[Variance\|sample variance]] |
| $\sigma$, $\sigma^2$ | sigma | population SD, variance |
| $\hat{p}$ | p-hat | sample proportion |
| $p$ | p | population proportion |
| $\tilde{x}$ | [[Median\|x-tilde]] | sample median |
| $n$, $N$ | | sample size, population size |
| $\alpha$ | alpha | significance level ([[Significance Level]]) |
| $\beta$ | beta | Type II error probability ([[Type I and Type II Errors]]) |
| $H_0$, $H_A$ | H-naught (H-O), H-A | null and alternative hypotheses |
| $\sum$ | capital sigma | add up ([[Summation Notation]]) |
| $\lvert x \rvert$ | absolute value of x | distance from 0 ([[Absolute Value]]) |
| $\cup$, $\cap$ | union, intersection | "or", "and" ([[Addition Rule]], [[Multiplication Rule]]) |
| $P(A \mid B)$ | P of A given B | [[Conditional Probability]] |

## Why it exists
Symbols make it obvious whether a sentence is about the data I have or the population I want to learn about. "$H_0: \bar{x} = 2$" is nonsense once you know $\bar{x}$ is something I can just calculate ([[Null and Alternative Hypotheses]]).

## A tiny example
"In my sample of 24 lizards, $\bar{x} = 8.96$ cm; I want an interval for $\mu$." The first number is known; the second is the target.

## Common confusions
- **"$\sigma$ and $s$ are interchangeable."** $\sigma$ is the population value (almost never known); $s$ is computed from data. Using $s$ is exactly why we need the [[t-Distribution]].
- **"$N$ always means population size."** Fields differ; some papers write $N$ for [[Sample Size|sample size]]. In ANOVA, $N$ is often the total sample size across groups ([[ANOVA Table]]).

## Connections
- **Builds on:** [[Population and Sample]], [[Variable and Observation]]
- **Leads to:** [[Parameter vs Statistic]], [[Null and Alternative Hypotheses]], [[Summation Notation]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]]
