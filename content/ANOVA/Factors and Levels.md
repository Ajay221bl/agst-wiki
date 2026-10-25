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

A factor is a categorical grouping variable, such as the treatment or the independent variable (IV). Its levels are the groups it creates. "One-way" ANOVA means one factor, with any number of levels.

Before you pick a test, you need to name the design, and naming the design comes down to two counts. When a study compares groups, the independent variable is categorical ([[Independent and Dependent Variables]], [[Types of Data]]). ANOVA calls that variable a **factor**, and its categories **levels**. For example, "time of day" is one factor, and morning, midday and evening are its three levels. Counting factors and levels names the design:

| Factor | Levels | Design |
|---|---|---|
| Time of day | morning, midday, evening | 1 factor, 3 levels |
| Region | Northeast, Southeast, South, Midwest, West | 1 factor, 5 levels |
| Soy consumption | 4 groups of 20 | 1 factor, 4 levels |
| Undergraduate major | business, English, math, psychology | 1 factor, 4 levels |
| Halloween costume | Hulk, Ninja Turtle, Spider-Man, Superman | 1 factor, 4 levels |
| Blood lead level | low, medium, high | 1 factor, 3 levels |
| Child under 12 at home | no, yes | 1 factor, 2 levels, so a two-sample t-test |

The number of levels decides the test. With 2 levels it is a two-sample t-test; with 3 or more you need ANOVA ([[Why ANOVA instead of many t-tests]]). In R, the variable must be stored as a factor, or `aov()` treats it as a number ([[factor()]]).

Five groups are the five *levels* of **one** variable, not five factors. Two factors, such as sex and time of day, with a possible interaction between them, make a **two-way ANOVA**.

For example, four fertilizers coded A, B, C and D are one factor with four levels, so the ANOVA [[Ratios and Fractions|numerator]] degrees of freedom are k − 1 = 3. If they are coded 1, 2, 3, 4 and read as numbers, R gives 1 degree of freedom, which is a sign it treated fertilizer as a single number ([[Why use degrees of freedom as a sanity check]]).

The point is that the computer only knows what you tell it. More groups don't mean more factors; they mean more levels of the same factor.

See also: [[One-Way ANOVA]], [[Wide vs Long Format]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.5).
