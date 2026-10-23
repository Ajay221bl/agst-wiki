---
type: molecular
tags:
  - molecular
  - assumptions
aliases:
  - "independence assumption"
  - "checking independence"
status: seedling
---

> [!summary] In plain words
> Every test in the course assumes the observations are independent, but no output can confirm it. Independence comes from how the data were collected: separate random samples, units that don't share pens, families or repeated measurements. You judge it by asking how the data arose, and if units are linked you choose a design that accounts for it, such as a paired test.

## The question
How do you check the independence assumption, and why can't software do it for you?

## Built from
- [[Independent Events]]: what independence means.
- [[Independent vs Paired Samples]]: the most common link.
- [[Random Sampling]]: separate draws give independence.
- [[ANOVA Assumptions]]: independence listed first.
- [[Standard Error]]: what dependence quietly breaks.

## See it

![[Paired vs independent view.png|700]]
*What to look at:* Lines join the two values from the same unit. They move together, so they are not two independent observations. [[Simulation|Simulated data]].

## The reasoning, step by step
1. Independent observations: knowing one tells you nothing about another ([[Independent Events]]).
2. The SE formulas divide by n on the [[Test Assumptions|assumption]] that each observation adds new information ([[Standard Error]]).
3. Linked observations (the same animal twice, siblings, plants in one pot, neighbouring pens) share information, so the true SE is larger than the formula gives. Treating them as independent makes p-values too small.
4. The numbers alone can't reveal the link: a column of values looks the same either way. The evidence is in the design ([[Random Sampling]]).
5. So ask: are any units measured more than once, grouped together, or naturally matched? If yes, use a design that models it (paired test, repeated measures); if no, state that independence is assumed and why ([[Independent vs Paired Samples]], [[ANOVA Assumptions]]).

## What would go wrong otherwise
Linked data analysed as independent overstate the evidence, giving [[Type I and Type II Errors|false positives]] that no assumption test would warn about.

## Connections
- **Related:** [[Why use a paired test for paired data]], [[Why check assumptions before trusting a test]], [[Why random assignment and random sampling protect different things]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - ANOVA]], [[MOC - Study Design and Sampling]]
