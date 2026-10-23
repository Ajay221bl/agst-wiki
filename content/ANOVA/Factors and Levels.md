---
type: atomic
tags:
  - anova
aliases:
  - "factor"
  - "levels"
  - "treatment groups"
  - "one-way"
status: seedling
---

**In one line:** a factor is a categorical grouping variable (the treatment or IV), and its levels are the groups it creates; "one-way" ANOVA means one factor with any number of levels.

> [!info] Before this, it helps to know
> [[Independent and Dependent Variables]] (a factor is a categorical IV) · [[Types of Data]] (levels are categories)

## Start from zero
1. **In a comparison of groups, the IV is categorical** ([[Independent and Dependent Variables]], [[Types of Data]]).
2. **ANOVA calls that IV a factor, and its categories levels.** "Time of day" is one factor. Morning, midday and evening are its three levels.
3. **Count factors and levels to name the design:**

| Factor | Levels | Design |
|---|---|---|
| Time of day | morning, midday, evening | 1 factor, 3 levels |
| Region | NE, [[Standard Error\|SE]], South, Midwest, West | 1 factor, 5 levels |
| Soy consumption | 4 groups of 20 | 1 factor, 4 levels |
| Undergraduate major | business, English, math, psychology | 1 factor, 4 levels |
| Halloween costume | Hulk, Ninja Turtle, Spider-Man, Superman | 1 factor, 4 levels |
| Blood lead level | low, medium, high | 1 factor, 3 levels |
| Child under 12 at home | no, yes | 1 factor, 2 levels → two-sample t-test |

4. **The count decides the test.** *Why:* 2 levels is the two-sample t-test; 3 or more needs ANOVA ([[Why ANOVA instead of many t-tests]]). In R the factor must be stored as a factor, or `aov()` treats it as a number ([[factor()]]).

## Why it exists
"I have 5 groups." Yes, but they are the *levels* of **one** variable. Two factors (say sex × time of day, with an [[Two-Way ANOVA and Interaction|interaction]]) make a **two-way ANOVA**, which is a later topic.

## A tiny example
Four fertilizers coded A, B, C, D: one factor, four levels, so the ANOVA [[Ratios and Fractions|numerator]] df = k − 1 = 3. If coded 1, 2, 3, 4 and read as numbers, R gives df = 1, a sign it treated fertilizer as a single number ([[Why use degrees of freedom as a sanity check]]).

## Common confusions
- **"More groups means more factors."** More groups means more levels of the same factor.

## Connections
- **Builds on:** [[Independent and Dependent Variables]], [[Types of Data]]
- **Leads to:** [[One-Way ANOVA]], [[factor()]], [[Wide vs Long Format]]
- **Part of:** [[MOC - ANOVA]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 5]] (§5.5)
