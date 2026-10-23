---
type: atomic
tags:
  - study-design
aliases:
  - "association"
  - "causation"
  - "cause and effect"
  - "causal"
  - "correlation is not causation"
status: seedling
---

Two variables are **associated** when they tend to change together; **causation** means changing one would change the other, and only a randomized experiment can show it cleanly.

1. **Association is a pattern in data**: higher values of X go with higher (or lower) values of Y ([[Correlation]], [[Contingency Table]]).
2. **Causation is a claim about intervening**: if we changed X, Y would change.
3. **A pattern has other explanations.** A third variable may drive both (confounding), Y may drive X, or it may be chance ([[Nuisance Variables and Confounding]]).
4. **Random assignment removes the third-variable explanation.** The experimenter sets X by chance, so nothing else can line up with it systematically ([[Random Assignment]]). *Why that is enough:* any remaining difference in Y is either the treatment or chance, and the test handles chance.
5. **So the design decides the claim.** Experiments can claim causation; observational studies can claim association ([[Experiment]], [[Observational Study Designs]]).
6. **A small p-value doesn't change this.** It says the association is unlikely to be chance, not that it is causal ([[P-Value]]).

![[Confounding.png|700]]
The third variable points at both X and Y, producing an association with no arrow from X to Y.

It keeps conclusions honest: the strongest wording a study can use is set by how it was designed, not by how small its p-value is.

For example:

An observational study finds that people who drink more coffee have more heart trouble. Smoking, linked to both, could produce the whole pattern. Only random assignment of coffee would separate the two ([[Nuisance Variables and Confounding]]).

Common mistakes:

- **"Correlation is never evidence of causation."** It is evidence; it just isn't proof without a design that rules out alternatives.
- **"A large [[Population and Sample|sample]] makes an association causal."** Size shrinks [[Random Error and Precision|random error]], not confounding ([[Why a bigger sample can't fix a biased one]]).

See also: [[Independent and Dependent Variables]], [[Internal Validity]], [[Writing a Conclusion]].
