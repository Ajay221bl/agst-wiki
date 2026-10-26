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

A variable is a characteristic that changes from one thing to the next, such as height, diet or region. An observation is one thing you measured, together with its value for each variable.

Every data set is built from two simple ideas: the things you measured and what you measured about them. Say you weigh four chickens. Each chicken is one **observation**, also called a case or, in an [[Experiment|experiment]], an **experimental unit**. Weight is a **variable** because it varies from chicken to chicken. If you also note each chicken's diet, that is a second variable. Something that never changes in your study, like "species: chicken" when every animal is a chicken, isn't a variable there, because it gives you nothing to compare.

[[Variability|Variation]] is the reason statistics exists. If every chicken weighed exactly the same, one weighing would tell you everything. Statistics deals with the differences from one unit to the next (person, animal, plant, farm) that come from things we didn't or couldn't measure perfectly.

Almost every later idea uses these two words. Variables come in different types, and the type decides which summaries and tests make sense ([[Types of Data]], [[Independent and Dependent Variables]]). Observations become the rows of a data table ([[Data Table Rows and Columns]]). A sample is a set of observations taken from a larger population ([[Population and Sample]]). A [[Mean]] summarizes one variable across many observations, and a [[Contingency Table]] crosses two variables.

For example:

| Chicken (observation) | Diet (variable 1) | Weight in kg (variable 2) |
|---|---|---|
| A | corn | 2.1 |
| B | corn | 2.4 |
| C | soy | 2.9 |
| D | soy | 2.6 |

That is four observations and two variables. Weight varies within each diet, and the averages differ between the diets (2.25 against 2.75). Telling those two kinds of variation apart is what [[One-Way ANOVA]] does.

Name the unit first; everything else follows from it. An observation is a whole unit, usually one row, not a single number. And the [[Sample Size|sample size]] $n$ counts observations (rows), not variables (columns).

Try it yourself. You record the height, age and species of 5 trees. How many observations and how many variables? 5 observations, one per tree, and 3 variables: height, age and species.

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.2 data basics, p. 14).
