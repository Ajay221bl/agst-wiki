---
type: atomic
tags:
  - describing-data
  - inference
aliases:
  - "descriptive statistics"
  - "inferential statistics"
  - "inference"
  - "statistical inference"
status: seedling
---

**In one line:** descriptive statistics summarize the sample you have; inferential statistics use that sample to say something about the larger population.

> [!info] Before this, it helps to know
> [[Population and Sample]] (the two things being described) · [[Parameter vs Statistic]] (the numbers on each side)

## Start from zero
1. **I measure 30 tomato plants.** I have data about these 30 plants, and a question about all plants of this variety ([[Population and Sample]]).
2. **Describing the 30 needs no guessing.** "Their average height is 41 cm and the [[Standard Deviation|SD]] is 6 cm" is **descriptive**: true of these 30 plants, full stop.
3. **Saying something about all plants needs a leap.** "The average height of all plants of this variety is probably between 39 and 43 cm" is **inferential**: it reaches beyond my 30 plants. *Why it comes with uncertainty:* a different 30 plants would have given a slightly different average ([[Sampling Distribution]]).
4. **The leap is only justified by how the sample was chosen and by probability theory.** That's why inference needs random sampling and [[Test Assumptions|assumptions]], and description doesn't ([[Random Sampling]], [[Why probability comes before statistics]]).

| Descriptive | Inferential |
|---|---|
| mean, [[Median\|median]], SD, [[Range and IQR\|IQR]], plots, tables | confidence intervals, p-values, hypothesis tests, Bayesian analysis |
| about **this** sample | about the **population** |
| no sampling assumptions | needs random sampling and theory |

5. **Always describe first.** Inference uses the descriptive numbers as its raw material, and a plot shows problems a test won't ([[Why visualize data before testing]]).

## Why it exists
Mixing them up causes errors like testing a hypothesis about something I already measured, or reporting a p-value when I measured the whole population.

## A tiny example
A rare berry grows only in one corner of Arkansas, and I measure every plant. That is a **census**: there is no sampling [[Variability|variability]] left to account for, so description is enough.

## Common confusions
- **"Descriptive statistics are just a warm-up."** They are how you check assumptions and spot problems before any test ([[Why visualize data before testing]]).
- **"A confidence interval describes the sample."** It is inferential: it estimates a population parameter.

## Connections
- **Builds on:** [[Population and Sample]], [[Parameter vs Statistic]]
- **Leads to:** [[Mean]], [[Confidence Interval]], [[Hypothesis Testing]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]]
