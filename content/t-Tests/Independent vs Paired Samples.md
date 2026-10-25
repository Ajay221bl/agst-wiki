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

Independent samples come from two separate sampling processes with no natural link between them. Paired (or dependent) samples come in natural pairs, such as the same unit measured twice, or matched units.

This is the first question to ask before any two-group test, and it's a question about how the data were collected, not about the numbers. Two samples are independent when knowing a value in one tells you nothing about any particular value in the other ([[Independent Events]]). They are paired when each value in one sample is tied to one value in the other. Pet owners and lizards make a good illustration:
- **Independent:** a random sample of 50 pet owners and a separate random sample of 30 lizards. Isaac owns Milo the cat; no lizard in the sample is "his". The [[Sample Size|sample sizes]] can differ.
- **Paired:** a random sample of 150 pet owners **and each owner's lizard**. They are tied together because they live in the same home.

Signs that data are paired:
- **Before and after** on the same subject. Each subject is their own control, and repeated measures are always dependent.
- **Couples, twins or siblings**, such as the oldest and youngest child in the same family.
- **The same unit at two times**, such as tick-borne disease by county in 2022 and 2023: Pulaski county is paired with Pulaski county.
- **The same object, two raters**, such as two physicians estimating the volume of the **same tumour**.
- **The same unit under two [[Test Assumptions|conditions]]**, such as a car on regular and premium fuel, or a swimmer in a wetsuit and a regular suit.

Here's the principle: the design decides the test, not the numbers. This matters because the two members of a pair share everything except the treatment, so subtracting within each pair removes that shared [[Variability|variation]]. Ignoring the pairing throws that away; treating independent data as paired invents a link. Paired data need a [[Paired t-Test|paired t-test]], and independent data need a [[Two-Sample Independent t-Test|two-sample independent t-test]]. In the book's swim data, ignoring the pairing made the [[Standard Error|standard error]] about 10 times larger ([[Why use a paired test for paired data]]).

![[Paired vs independent view.png|700]]
Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that variation, and every unit clearly went up.

For example, four chickens are weighed before and after a diet. The differences (+2.5, +4, +2, +0.5) are what matter, not the two columns separately.

When in doubt, ask whether each value has a natural partner. Two different physicians doesn't make the data independent. The *measurements* are repeated on one tumour, so they are paired.

See also: [[Random Sampling]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.2, p. 244).
