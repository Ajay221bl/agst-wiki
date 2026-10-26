---
type: atomic
tags:
  - t-tests
aliases:
  - "paired samples"
  - "dependent samples"
  - "independent samples"
  - "repeated measures"
status: seedling
---

Two samples are independent when they come from separate groups with no link between them. They are paired when each value in one has a natural partner in the other, like the same person measured before and after.

Suppose you want to know if a diet makes chickens heavier. Here are two ways to run it. In the first, you put some chickens on the diet and compare them to a different set of chickens that weren't. In the second, you weigh the same chickens before and after the diet. Both give you two columns of numbers. But they're completely different situations. Can you see why?

In the second design, each "after" weight has a partner: the same chicken's "before" weight. A big chicken is big in both columns; a small one is small in both. So if you subtract within each chicken, all those chicken-to-chicken differences disappear, and what's left is just the change. In the first design, there's no partner to subtract from. The "big chicken" noise stays in.

That's the whole distinction. Two samples are **independent** when knowing a value in one tells you nothing about any particular value in the other ([[Independent Events]]). They are **paired** when each value is tied to one specific value in the other. Pet owners and lizards make a good illustration:
- **Independent:** a random sample of 50 pet owners and a separate random sample of 30 lizards. Isaac owns Milo the cat; no lizard in the sample is "his". The [[Sample Size|sample sizes]] can differ.
- **Paired:** a random sample of 150 pet owners **and each owner's lizard**. They're tied together because they live in the same home.

How to spot pairs:
- **Before and after** on the same subject. Each subject is their own control.
- **Couples, twins or siblings**, such as the oldest and youngest child in the same family.
- **The same unit at two times**, such as tick-borne disease by county in 2022 and 2023: Pulaski county is paired with Pulaski county.
- **The same object, two raters**, such as two physicians estimating the volume of the **same tumour**.
- **The same unit under two [[Test Assumptions|conditions]]**, such as a car on regular and premium fuel, or a swimmer in a wetsuit and a regular suit.

![[Paired vs independent view.png|700]]
Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that variation, and every unit clearly went up.

Look at the left panel: the units are so different from each other that "before" and "after" look about the same. Now the right: subtract within each unit, and every one of them went up. The effect was there all along, buried under the differences between units ([[Variability]]).

So the design decides the test, not the numbers. Paired data need a [[Paired t-Test|paired t-test]]; independent data need a [[Two-Sample Independent t-Test|two-sample independent t-test]]. Get it wrong and you either throw away the pairing, so the noise stays in, or invent a link that isn't there. In the book's swim data, ignoring the pairing made the [[Standard Error|standard error]] about 10 times larger ([[Why use a paired test for paired data]]).

For example, four chickens are weighed before and after a diet. The differences (+2.5, +4, +2, +0.5) are what matter, not the two columns separately.

Try it yourself. Two different physicians measure the volume of the same set of tumours. Independent or paired? Paired. There are two people, but each tumour is measured twice, so each measurement has a partner: the same tumour's other measurement. Always ask: does each value have a natural partner?

See also: [[Random Sampling]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.2, p. 244).
