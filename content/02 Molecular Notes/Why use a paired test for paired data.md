---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "paired vs independent t-test"
status: seedling
---

> [!summary] In plain words
> When the same unit is measured twice, most of the variation between units (big animals vs small, healthy people vs sick) affects both measurements equally. Taking differences cancels it out, leaving a much smaller SE and a more powerful test. Treating paired data as independent wastes that, and also breaks the [[Why independence is judged from the design, not a test|independence assumption]].

## The question
"What's the difference between a two-sample independent t-test and a paired t-test? When would you use each?"

## Built from
- [[Independent vs Paired Samples]]: recognising pairing.
- [[Paired t-Test]]: a one-sample test on differences.
- [[Two-Sample Independent t-Test]]: the alternative.
- [[Standard Error]]: what pairing shrinks.
- [[Independent Events]]: the [[Test Assumptions|assumption]] paired data break.
- [[Signal and Noise]]: pairing shrinks the noise.

## See it

![[Paired vs independent view.png|700]]
*What to look at:* Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that [[Variability|variation]], and every unit clearly went up.

## The reasoning, step by step
1. Paired observations are naturally linked (same unit twice, twins, the same tumor and two raters) and are expected to be more similar than two random numbers ([[Independent vs Paired Samples]]).
2. Subtracting within each pair removes everything the two measurements share, such as the animal's size, the person's baseline ([[Paired t-Test]]).
3. The [[Standard Deviation|SD]] of the differences is usually much smaller than the SD of either column, so the SE shrinks and power rises ([[Statistical Power]]).
4. Book swim data: treating the pairs as independent made the SE about 10× larger ([[References|Vu and Harrington 2020, Ch. 5]], p. 252).
5. Independent two-sample tests also assume the two groups are unrelated, which paired data violate ([[Two-Sample Independent t-Test]]).

## What would go wrong otherwise
A real change could be missed because between-unit noise swamps it, and the independence assumption would be violated.

## Connections
- **Related:** [[Why check assumptions before trusting a test]], [[ANOVA Assumptions]] (repeated-measures ANOVA)
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - t-Tests]]
