---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "paired vs independent t-test"
status: seedling
---

What is the difference between a two-sample independent t-test and a paired t-test, and when would you use each?

When the same unit is measured twice, most of the variation between units (big animals and small ones, healthy people and sick ones) affects both measurements equally. Taking differences cancels it out, which leaves a much smaller standard error (SE) and a more powerful test. Treating paired data as independent wastes that, and it also breaks the [[Why independence is judged from the design, not a test|independence assumption]].

![[Paired vs independent view.png|700]]
Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that [[Variability|variation]], and every unit clearly went up.

1. Paired observations are naturally linked, such as the same unit twice, twins, or one tumour measured by two raters. They are expected to be more alike than two random numbers ([[Independent vs Paired Samples]]).
2. Subtracting within each pair removes everything the two measurements share, such as the animal's size or the person's starting level ([[Paired t-Test]]).
3. The [[Standard Deviation|standard deviation]] of the differences is usually much smaller than that of either column, so the standard error shrinks and power rises ([[Statistical Power]]).
4. In the book's swim data, treating the pairs as independent made the standard error about 10 times larger ([[References|Vu and Harrington 2020, Ch. 5]], p. 252).
5. Independent two-sample tests also assume that the two groups are unrelated, which paired data break ([[Two-Sample Independent t-Test]]).

Otherwise a real change could be missed because noise between units swamps it, and the independence assumption would be broken.

See also: [[Standard Error]], [[Independent Events]], [[Test Assumptions|assumption]], [[Signal and Noise]], [[Why check assumptions before trusting a test]], [[ANOVA Assumptions]].
