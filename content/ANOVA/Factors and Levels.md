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

Here's an everyday picture. A coffee shop asks: does the time of day change how much people spend? "Time of day" is the thing being varied, and it comes in a few settings: morning, midday, evening. In ANOVA language, "time of day" is the **factor**, and morning, midday and evening are its three **levels**. A factor is like a dial; the levels are the positions it can be set to.

When a study compares groups, the independent variable is categorical like this ([[Independent and Dependent Variables]], [[Types of Data]]). And before you choose a test, you just count two things: how many factors, and how many levels each has. That names the design:

| Factor | Levels | Design |
|---|---|---|
| Time of day | morning, midday, evening | 1 factor, 3 levels |
| Region | Northeast, Southeast, South, Midwest, West | 1 factor, 5 levels |
| Soy consumption | 4 groups of 20 | 1 factor, 4 levels |
| Undergraduate major | business, English, math, psychology | 1 factor, 4 levels |
| Halloween costume | Hulk, Ninja Turtle, Spider-Man, Superman | 1 factor, 4 levels |
| Blood lead level | low, medium, high | 1 factor, 3 levels |
| Child under 12 at home | no, yes | 1 factor, 2 levels, so a two-sample t-test |

The number of levels decides the test. With 2 levels it is a two-sample t-test; with 3 or more you need ANOVA ([[Why ANOVA instead of many t-tests]]).

Here's where people trip. Five groups are the five *levels* of **one** variable, not five factors. More groups don't mean more factors. You only get a second factor when you vary a second, different thing, such as sex *and* time of day. That makes a **two-way ANOVA**, where the two can also have an interaction.

And one more trap, a computer one. In R, the variable must be stored as a factor, or `aov()` treats it as a number ([[factor()]]). The computer only knows what you tell it. For example, four fertilizers coded A, B, C and D are one factor with four levels, so the ANOVA [[Ratios and Fractions|numerator]] degrees of freedom are k − 1 = 3. If they are coded 1, 2, 3, 4 and read as numbers, R gives 1 degree of freedom, which is a sign it treated fertilizer as a single number ([[Why use degrees of freedom as a sanity check]]).

Try it yourself. A study tests three diets on mice, and also compares male and female mice. How many factors, and how many levels? Two factors: diet with 3 levels, sex with 2 levels. So it's not a one-way ANOVA.

See also: [[One-Way ANOVA]], [[Wide vs Long Format]].

Further reading: [[References|Vu and Harrington 2020, Ch. 5]] (§5.5).
