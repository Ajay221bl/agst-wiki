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

Greek letters usually stand for values of the whole population, which we don't know. Ordinary (Roman) letters stand for values worked out from a sample.

The symbols look like a foreign language, but there's one simple idea behind most of them. Statistics always talks about two groups at once: the population we care about and the sample we actually measured ([[Population and Sample]]). The same quantity exists in both. There is a population mean, which is unknown, and a sample mean, which we calculate. Different symbols keep them apart: $\mu$ (mu) is the population mean and $\bar{x}$ (x-bar) is the sample mean; $\sigma$ (sigma) is the population [[Standard Deviation|standard deviation]] (SD) and $s$ is the sample SD ([[Parameter vs Statistic]]). A "hat" means "an [[Point Estimate|estimate]] of": $\hat{p}$ (p-hat) is the sample's estimate of the population [[Proportions and Percentages|proportion]] $p$.

The symbols used in these notes:

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

The symbols make it clear whether a sentence is about the data you have or the population you want to learn about. A hypothesis such as "$H_0: \mu = 98.6$" is always about the population. Writing "$H_0: \bar{x} = 2$" makes no sense, because $\bar{x}$ is something you can simply calculate ([[Null and Alternative Hypotheses]]).

For example, "In my sample of 24 lizards, $\bar{x} = 8.96$ cm; I want an interval for $\mu$." The first number is known. The second is what we are trying to learn.

Greek for what's true, Roman for what you saw. Keep that in mind and most formulas become readable. $\sigma$ and $s$ are not interchangeable. $\sigma$ is the population value and is almost never known, while $s$ comes from the data. Having to use $s$ is exactly why we need the [[t-Distribution]]. Also, not everyone uses $N$ the same way: some papers write $N$ for the [[Sample Size|sample size]], and in ANOVA $N$ is often the total number of observations across all groups ([[ANOVA Table]]).

Try it yourself. In "x̄ = 5 and μ is unknown", which describes the sample and which the population? x̄ (a Roman letter with a bar) is the sample mean you calculated. μ (Greek) is the population mean you're trying to learn about.

See also: [[Variable and Observation]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]].
