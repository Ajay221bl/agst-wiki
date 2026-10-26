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

Use the paired test when each measurement has a natural partner. When the same unit is measured twice, most of the variation between units, big animals and small ones, healthy people and sick ones, affects both measurements equally. Taking differences cancels it out, which leaves a much smaller standard error (SE) and a more powerful test. Treat paired data as independent and you waste that, and you also break the [[Why independence is judged from the design, not a test|independence assumption]].

![[Paired vs independent view.png|700]]
Left: the units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that [[Variability|variation]], and every unit clearly went up.

The question to ask is: where is the noise coming from?

Usually, most of it comes from units being different from each other. People differ in fitness, animals in size, fields in soil. Compare one group with another and all those differences are mixed into the comparison, burying the effect you care about.

Now suppose the observations are naturally linked: the same unit twice, twins, or one tumour measured by two raters. Linked observations are expected to be more alike than two random numbers ([[Independent vs Paired Samples]]). And that's a gift. Subtract within each pair, and everything the two measurements share cancels out: the animal's size, the person's starting level ([[Paired t-Test]]). What's left is the change.

So the standard deviation of the differences is usually much smaller than that of either column. The standard error shrinks, and power rises ([[Statistical Power]]). In the book's swim data, treating the pairs as independent made the standard error about 10 times larger ([[References|Vu and Harrington 2020, Ch. 5]], p. 252). Same swimmers, same effect, ten times the noise, just from choosing the wrong test.

There's a second reason, too. The independent two-sample test assumes the two groups are unrelated. Paired data break that assumption outright ([[Two-Sample Independent t-Test]]).

So the rule follows from the design, not from the numbers. If each value has a natural partner, use the pairing. Otherwise a real change can be missed because the noise between units swamps it. Comparing something with itself is the cleanest comparison there is.

Try it yourself. You weigh 8 dogs before and after a diet. Big dogs stay big and small dogs stay small, so the before and after weights vary hugely. Should you use an independent two-sample test or a paired test? Paired. Taking each dog's own difference cancels out the dog-to-dog size differences, leaving only the diet's effect and a little noise.

See also: [[Standard Error]], [[Independent Events]], [[Test Assumptions|assumption]], [[Signal and Noise]], [[Why check assumptions before trusting a test]], [[ANOVA Assumptions]].
