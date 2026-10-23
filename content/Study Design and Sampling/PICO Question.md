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

PICO (Patient or Problem, Intervention, Comparison, Outcome) is a framework for turning a vague scientific question into a statistical one with a specific, measurable outcome.

1. **"Is this drug effective?" means nothing to statistics until "effective" is defined as a statistic:** a mean change? A [[Proportions and Percentages|proportion]] who improve? *Why:* statistics models [[Variability|variability]] from unit to unit, and needs a number to model ([[Parameter vs Statistic]]).
2. **PICO forces the definition**, one letter per decision:
   - **P**atient / Problem: who or what is studied. *Why:* that's the [[Population and Sample|population]] results apply to.
   - **I**ntervention: the treatment or exposure (the IV).
   - **C**omparison: what it is compared against. *Why:* "better" needs a baseline.
   - **O**utcome: what is measured, and as which statistic (the DV) ([[Variable and Observation]]).
3. **Template:** *"[Intervention], given to [population], will tend to result in [outcome] at a [rate/mean] that is [higher/lower/equal] compared to [comparison]."*
4. **It then translates straight into hypotheses** about a parameter ([[Null and Alternative Hypotheses]]).

A blood-pressure illustration, ten patients before and after a drug:
- **Clear case:** BP drops for everyone. "Effective" is easy (a physician may still ask whether the drop is clinically meaningful).
- **Not so clear:** a big drop for 9, terrible for 1. Is effectiveness the average drop or the share who improve?
- **Mess:** a dramatic drop for 3 and a rise for 7. Now "do no harm" matters.
How "effective" is defined decides the analysis.

For example:

"Cholesterol-lowering drugs given to people over 50 with high cholesterol will tend to result in heart attacks **at a rate** lower than in the comparison group." The rate is the statistic, so now there is a population parameter to make [[Descriptive vs Inferential Statistics|inference]] about.

Common mistakes:

- **"The comparison must be a placebo."** Any meaningful reference works.
- **"Statistical significance answers the scientific question."** It answers the statistical one; you still bring it back to context ([[Statistical vs Practical Significance]]).

See also: [[Experiment]], [[Independent and Dependent Variables]].

Further reading: [[References|Kirk 2013, Ch. 1]].
