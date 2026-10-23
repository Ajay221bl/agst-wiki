---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "significant ANOVA, no pairwise differences"
status: seedling
---

> [!summary] In plain words
> Yes, it can happen. Post hoc tests are adjusted to be [[Conservative Tests|conservative]], each one uses only two groups' data so it has less power than the [[One-Way ANOVA|omnibus test]], the real difference may be a combination (one group vs the average of the others) that no single pair captures, and violated [[Test Assumptions|assumptions]] make post hocs behave unpredictably.

## The question
"Can a one-way ANOVA be significant while none of the pairwise comparisons are? Why?"

## Built from
- [[Post Hoc Tests]]: what they test.
- [[Statistical Power]]: omnibus vs pairwise power.
- [[Bonferroni Correction]] and [[Tukey HSD]]: conservative adjustments.
- [[ANOVA Assumptions]]: what goes wrong when they fail.

## The reasoning, step by step
1. **Conservative adjustment.** Each pairwise p-value is penalized for the number of comparisons, sometimes overly so ([[Bonferroni Correction]]).
2. **Power.** The omnibus test uses the whole sample; each pairwise test has less power, especially with [[Balanced Design|unequal group sizes]] ([[Statistical Power]]).
3. **Complex contrasts.** Group A may differ from the *average* of B, C and D. The omnibus test catches it, but no single pair shows it ([[Post Hoc Tests]]).
4. **Violated assumptions.** Non-normality or unequal variances make post hocs behave unpredictably; check assumptions and consider nonparametric tests with nonparametric post hocs ([[ANOVA Assumptions]], [[Nonparametric Alternatives]]).

## What would go wrong otherwise
Without this, a researcher might think the software is broken, or drop the significant ANOVA result.

## Connections
- **Related:** [[Why post hoc tests only after a significant ANOVA]], [[Why check assumptions before trusting a test]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - ANOVA]]
