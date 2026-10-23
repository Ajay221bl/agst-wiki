---
type: atomic
tags:
  - study-design
aliases:
  - "PICO"
  - "scientific vs statistical question"
  - "research question"
  - "IRB"
  - "IACUC"
status: seedling
---

PICO stands for Patient (or Problem), Intervention, Comparison and Outcome. It is a way to turn a vague scientific question into a statistical one with a specific, measurable outcome.

"Is this drug effective?" means nothing to statistics until "effective" is pinned down as a number: a mean change, or the [[Proportions and Percentages|proportion]] of people who improve? Statistics models how things vary from unit to unit, and it needs a number to model ([[Variability]], [[Parameter vs Statistic]]). PICO forces you to decide, one letter at a time:
- **Patient or Problem:** who or what is studied. This is the [[Population and Sample|population]] the results apply to.
- **Intervention:** the treatment or exposure, which is the independent variable.
- **Comparison:** what it is compared with. "Better" needs a baseline.
- **Outcome:** what is measured, and which summary of it you will use. This is the dependent variable ([[Variable and Observation]]).

A useful template: *"[Intervention], given to [population], will tend to result in [outcome] at a [rate or mean] that is [higher, lower or equal] compared with [comparison]."* This then turns directly into hypotheses about a population value ([[Null and Alternative Hypotheses]]).

Here is why the outcome needs defining. Picture ten patients whose blood pressure is measured before and after a drug.
- If everyone's blood pressure drops, "effective" is easy to judge, though a doctor may still ask whether the drop is big enough to matter.
- If 9 patients have a big drop and 1 does terribly, is effectiveness the average drop or the share who improve?
- If 3 have a dramatic drop and 7 get worse, avoiding harm becomes the main question.

How you define "effective" decides the analysis.

For example: "Cholesterol-lowering drugs given to people over 50 with high cholesterol will tend to result in heart attacks **at a rate** lower than in the comparison group." The rate is the number to estimate, so now there is a population value to make [[Descriptive vs Inferential Statistics|inferences]] about.

The comparison doesn't have to be a placebo; any meaningful reference works. And a statistically significant result answers the statistical question, not the scientific one: you still have to bring it back to the real context ([[Statistical vs Practical Significance]]).

See also: [[Experiment]], [[Independent and Dependent Variables]].

Further reading: [[References|Kirk 2013, Ch. 1]].
