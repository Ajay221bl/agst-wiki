---
type: atomic
tags:
  - study-design
aliases:
  - "PICO"
  - "scientific vs statistical question"
  - "research question"
  - "IRB"
  - "IACUC"
status: seedling
---

**In one line:** PICO (Patient or Problem, Intervention, Comparison, Outcome) is a framework for turning a vague scientific question into a statistical one with a specific, measurable outcome.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (the outcome is a variable) · [[Parameter vs Statistic]] (the outcome must become a statistic)

## Start from zero
1. **"Is this drug effective?" means nothing to statistics until "effective" is defined as a statistic:** a mean change? A [[Proportions and Percentages|proportion]] who improve? *Why:* statistics models [[Variability|variability]] from unit to unit, and needs a number to model ([[Parameter vs Statistic]]).
2. **PICO forces the definition**, one letter per decision:
   - **P**atient / Problem: who or what is studied. *Why:* that's the [[Population and Sample|population]] results apply to.
   - **I**ntervention: the treatment or exposure (the IV).
   - **C**omparison: what it is compared against. *Why:* "better" needs a baseline.
   - **O**utcome: what is measured, and as which statistic (the DV) ([[Variable and Observation]]).
3. **Template:** *"[Intervention], given to [population], will tend to result in [outcome] at a [rate/mean] that is [higher/lower/equal] compared to [comparison]."*
4. **It then translates straight into hypotheses** about a parameter ([[Null and Alternative Hypotheses]]).

## Why it exists
A blood-pressure illustration, ten patients before and after a drug:
- **Clear case:** BP drops for everyone. "Effective" is easy (a physician may still ask whether the drop is clinically meaningful).
- **Not so clear:** a big drop for 9, terrible for 1. Is effectiveness the average drop or the share who improve?
- **Mess:** a dramatic drop for 3 and a rise for 7. Now "do no harm" matters.
How "effective" is defined decides the analysis.

## A tiny example
"Cholesterol-lowering drugs given to people over 50 with high cholesterol will tend to result in heart attacks **at a rate** lower than in the comparison group." The rate is the statistic, so now there is a population parameter to make [[Descriptive vs Inferential Statistics|inference]] about.

## Common confusions
- **"The comparison must be a placebo."** Any meaningful reference works.
- **"Statistical significance answers the scientific question."** It answers the statistical one; you still bring it back to context ([[Statistical vs Practical Significance]]).

## Connections
- **Builds on:** [[Variable and Observation]], [[Parameter vs Statistic]]
- **Leads to:** [[Experiment]], [[Null and Alternative Hypotheses]], [[Independent and Dependent Variables]]
- **Part of:** [[MOC - Study Design and Sampling]]
- **Go deeper:** [[References|Kirk 2013, Ch. 1]]
