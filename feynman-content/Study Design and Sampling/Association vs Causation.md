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

Two variables are **associated** when they tend to change together. **Causation** means that changing one would change the other. Only a randomized experiment can show causation cleanly.

Here's a strange fact: towns with more fire engines at a fire have more damage. Do fire engines cause damage? Of course not. Big fires bring more engines *and* cause more damage. The engines and the damage go together because something else, the size of the fire, drives both. Keep that picture in mind; almost every confusion about cause comes down to it.

This is one of the most useful distinctions you'll ever learn, in statistics or out of it. An association is a pattern in data: higher values of X go with higher (or lower) values of Y ([[Correlation]], [[Contingency Table]]). Causation is a claim about what would happen if you stepped in and changed X. A pattern can have other explanations. A third variable may drive both X and Y (this is called confounding), Y may be driving X, or the pattern may be chance ([[Nuisance Variables and Confounding]]).

Random assignment removes the third-variable explanation. When chance decides who gets which level of X, nothing else can line up with X systematically ([[Random Assignment]]). Any remaining difference in Y is then either the treatment or chance, and a statistical test deals with chance. So the design decides how strong a claim you can make: experiments can claim causation, while observational studies can only claim association ([[Experiment]], [[Observational Study Designs]], [[Internal Validity]]). A small p-value doesn't change this. It says the association is unlikely to be chance, not that it is causal ([[P-Value]], [[Writing a Conclusion]]).

![[Confounding.png|700]]
The third variable points at both X and Y, producing an association with no arrow from X to Y.

For example, an observational study finds that people who drink more coffee have more heart trouble. Smoking is linked to both, and could produce the whole pattern. Only randomly assigning how much coffee people drink would separate the two.

So before you believe any claim that X causes Y, ask one question: who or what decided which units got X? Correlation is evidence of causation, just not proof without a design that rules out the alternatives. And a large [[Population and Sample|sample]] doesn't make an association causal: size reduces [[Random Error and Precision|random error]], not confounding ([[Why a bigger sample can't fix a biased one]]).

Try it yourself. Children with bigger feet read better. Does foot size improve reading? What's the third variable? Age: older children have bigger feet and read better. To show a cause, you'd need to change the thing yourself, at random, and see what happens.

See also: [[Independent and Dependent Variables]].
