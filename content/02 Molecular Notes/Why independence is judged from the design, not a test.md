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

How do you check the independence assumption, and why can't software do it for you?

Every test assumes the observations are independent, but no output can confirm it. Independence comes from how the data were collected: separate random samples, units that don't share pens, families or repeated measurements. You judge it by asking how the data arose, and if units are linked you choose a design that accounts for it, such as a paired test.

![[Paired vs independent view.png|700]]
Lines join the two values from the same unit. They move together, so they are not two independent observations. [[Simulation|Simulated data]].

1. Independent observations: knowing one tells you nothing about another ([[Independent Events]]).
2. The SE formulas divide by n on the [[Test Assumptions|assumption]] that each observation adds new information ([[Standard Error]]).
3. Linked observations (the same animal twice, siblings, plants in one pot, neighbouring pens) share information, so the true SE is larger than the formula gives. Treating them as independent makes p-values too small.
4. The numbers alone can't reveal the link: a column of values looks the same either way. The evidence is in the design ([[Random Sampling]]).
5. So ask: are any units measured more than once, grouped together, or naturally matched? If yes, use a design that models it (paired test, repeated measures); if no, state that independence is assumed and why ([[Independent vs Paired Samples]], [[ANOVA Assumptions]]).

Linked data analysed as independent overstate the evidence, giving [[Type I and Type II Errors|false positives]] that no assumption test would warn about.

See also: [[Why use a paired test for paired data]], [[Why check assumptions before trusting a test]], [[Why random assignment and random sampling protect different things]].
