---
type: atomic
tags:
  - study-design
aliases:
  - "nuisance variable"
  - "confounder"
  - "confounding"
  - "third variable"
  - "blocking"
  - "randomized block design"
status: seedling
---

A nuisance variable is anything other than the IV that affects the outcome; when it is also tied to the IV, it confounds the comparison, making it impossible to tell which one caused the difference.

1. **I want to know if the IV causes changes in the DV** ([[Independent and Dependent Variables]]).
2. **Other variables also affect the DV.** Age, sex, barn location all change chicken weight. These are **nuisance variables**.
3. **They become a problem when they line up with the IV.** I compare two chicken diets. Without thinking, I put all the older chickens on diet A. Diet A's chickens end up heavier. Was it the diet, or the age? I cannot tell: **age is confounded with diet**. Age is the "third variable".
4. **Biostatistics splits these into confounders, moderators and mediators;** here they are all simply **nuisance variables**.
5. **The defense is to break the link between nuisance and IV.** Random assignment spreads every nuisance variable, measured or not, evenly over the groups on average ([[Random Assignment]]). *Why that's enough:* if age is no longer tied to diet, it can't masquerade as a diet effect ([[Internal Validity]]).

Confounding is the main threat to [[Internal Validity]]: the claim that the IV caused the change in the DV. There are three ways to handle a nuisance variable:
1. **Control it in advance:** [[Random Assignment|random assignment]] spreads it evenly; **blocking** groups units by it and randomizes within each block (randomized block designs build on this idea).
2. **Adjust for it after the fact** statistically.
3. **Report it as a limitation.** "You'll never go wrong by just stating what's happening in your study."

For example:

Book case study (§5.3): an apparent difference in expenditure by ethnicity disappeared once groups were compared **within age groups**. Age was the confounder ([[References|Vu and Harrington 2020, Ch. 5]]).

Book blocking example: group patients into low-risk and high-risk, then randomize to treatment within each block ([[References|Vu and Harrington 2020, Ch. 1]], pp. 25–27).

Common mistakes:

- **"Randomization removes the nuisance variable."** It does not remove it; it balances it across groups on average so it cannot systematically favour one.
- **"Adjusting statistically is as good as randomizing."** You can only adjust for what you measured.

See also: [[Observational Study Designs]].

Further reading: [[References|Kirk 2013, Ch. 1]], [[References|Vu and Harrington 2020, Ch. 1]] (pp. 25–29).
