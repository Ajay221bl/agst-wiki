---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "variable"
  - "observation"
  - "experimental unit"
status: seedling
---

A variable is a characteristic that changes from one thing to the next (height, diet, region); an observation is one thing you measured, with its value for each variable.

1. **Start with things you can measure.** I weigh four chickens. Each chicken is one **observation** (also called a case or, in an [[Experiment|experiment]], an **experimental unit**).
2. **What I wrote down about each one is a variable.** Weight is a variable because it *varies* from chicken to chicken. If I also record each chicken's diet, that is a second variable. *Why the name matters:* a characteristic that never changes ("species: chicken" when every animal is a chicken) carries no information to compare, so it is not a variable in that study.
3. **[[Variability|Variation]] is the whole reason statistics exists.** If every chicken weighed exactly the same, one weighing would tell me everything and there would be nothing to analyze. Put another way, statistics models the variability from unit to unit (person, animal, plant, farm) that comes from things we did not measure or could not measure perfectly.
4. **Everything later is built on these two words.** Variables come in types, which decide which summaries and tests make sense ([[Types of Data]]); observations are stacked into the rows of a data table ([[Data Table Rows and Columns]]); and a sample is a set of observations taken from a larger population ([[Population and Sample]]).

Every later idea needs these two words. A [[Mean]] summarizes one variable across many observations. A [[Contingency Table]] crosses two variables. Choosing a test starts by asking what kind of variable the response is ([[Types of Data]]) and what kind the explanatory variable is ([[Independent and Dependent Variables]]). Without clear words for "the thing measured" and "the thing that differs", none of that can be said.

For example:

| Chicken (observation) | Diet (variable 1) | Weight in kg (variable 2) |
|---|---|---|
| A | corn | 2.1 |
| B | corn | 2.4 |
| C | soy | 2.9 |
| D | soy | 2.6 |

Four observations, two variables. Weight varies within each diet, and the averages differ between diets (2.25 vs 2.75). Telling those two kinds of variation apart is what [[One-Way ANOVA]] is about.

Common mistakes:

- **"An observation is one number."** An observation is one *unit*, usually one row, with a value for every variable.
- **"[[Sample Size|Sample size]] is the number of variables."** Sample size $n$ counts observations (rows), not variables (columns).

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.2 data basics, p. 14).
