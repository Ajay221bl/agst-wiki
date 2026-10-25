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

Because independence isn't in the numbers. It's in the story of how the numbers were collected. Every test assumes the observations are independent, but no output can confirm it. It comes from the design: separate random samples, and units that don't share pens, families or repeated measurements. So you judge it by asking how the data arose, and if units are linked, you choose a method that accounts for it, such as a paired test.

![[Paired vs independent view.png|700]]
Lines join the two values from the same unit. They move together, so they aren't two independent observations. [[Simulation|Simulated data]].

Start with what independence means. Observations are independent when knowing one tells you nothing about another ([[Independent Events]]).

Now see why tests care so much. The standard error formulas divide by n, on the [[Test Assumptions|assumption]] that each observation brings new information ([[Standard Error]]). Ten independent observations are ten pieces of evidence.

But linked observations share information. The same animal measured twice, siblings, plants in one pot, neighbouring pens: each tells you partly what the other already said. Ten such observations might be worth far fewer than ten. So the true standard error is larger than the formula gives, and treating them as independent makes p-values too small. You think you have more evidence than you do.

Here's why software can't catch it. A column of values looks exactly the same whether the units were linked or not. The link isn't in the numbers. It's in the design, in who was measured and how ([[Random Sampling]]).

So you ask the questions yourself. Was any unit measured more than once? Are units grouped together? Are some naturally matched? If yes, use a method that models the link, such as a paired test or repeated measures. If no, state that independence is assumed, and why ([[Independent vs Paired Samples]], [[ANOVA Assumptions]]).

Get this wrong and you overstate the evidence, producing [[Type I and Type II Errors|false positives]] that no assumption test will ever warn you about. Some knowledge only lives in the context. No amount of computation substitutes for knowing where your data came from.

See also: [[Why use a paired test for paired data]], [[Why check assumptions before trusting a test]], [[Why random assignment and random sampling protect different things]].
