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

Independent samples come from two separate sampling processes with no natural link; paired (dependent) samples come in natural pairs, such as the same unit measured twice or matched units.

1. **Two samples are independent when knowing a value in one tells you nothing about any particular value in the other** ([[Independent Events]]).
2. **They are paired when each value in one sample is tied to one value in the other.** A pet-owner and lizard illustration:
   - **Independent:** a random sample of 50 pet owners and a separate random sample of 30 lizards. Isaac owns Milo the cat; no lizard in the sample is "his". [[Sample Size|Sample sizes]] can differ.
   - **Paired:** a random sample of 150 pet owners **and each owner's lizard**. They're tied together because they live in the same home.
3. **Signs data are paired:**
   - **Pre/post** on the same subject (they serve as their own control; repeated measures are always dependent).
   - **Couples, twins, siblings** (oldest vs youngest in the same family).
   - **The same unit at two times:** tick-borne disease by county in 2022 vs 2023; Pulaski is paired with Pulaski.
   - **The same object, two raters:** two physicians estimating the **same tumor's** volume.
   - **The same unit, two [[Test Assumptions|conditions]]:** a car on regular vs premium gas; a swimmer in a wetsuit vs a regular suit.
4. **The design decides the test, not the numbers.** *Why it matters:* pairs share everything except the treatment, so subtracting within each pair removes that shared [[Variability|variation]]. Ignoring the pairing throws that away; treating independent data as paired invents a link ([[Paired t-Test]], [[Two-Sample Independent t-Test]], [[Why use a paired test for paired data]]).

![[Paired vs independent view.png|700]]
Left: units differ so much from each other that pre and post look similar. Right: taking post − pre within each unit removes that variation, and every unit clearly went up.

Paired data need a [[Paired t-Test]]; independent data need a [[Two-Sample Independent t-Test]]. Ignoring pairing throws information away: in the book's swim data it made the [[Standard Error|SE]] about 10× larger ([[Why use a paired test for paired data]]).

For example:

Four chickens weighed before and after a diet: the differences (+2.5, +4, +2, +0.5) are what matter, not the two columns separately.

Common mistakes:

- **"Two different physicians means independent."** The *measurements* are repeated on one tumor, so they are paired.

See also: [[Random Sampling]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.2, p. 244).
