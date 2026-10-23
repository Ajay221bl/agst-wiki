---
type: atomic
tags:
  - describing-data
aliases:
  - "EDA"
  - "exploratory data analysis"
  - "exploring the data"
  - "explore"
status: seedling
---

Exploratory data analysis (EDA) is looking at the data before testing anything: checking how R read it, summarizing it overall and by group, and plotting it, to find errors, shape and patterns.

1. **A data file can be wrong in ways no test will notice**: a typo, a column read as text, missing values coded as 999 ([[read.csv() and file.choose()]], [[Missing Data]]).
2. **So first check what you have.** How many rows, which columns, what type each is ([[str()]], [[summary()]]). *Why first:* every later step trusts these.
3. **Then describe it**: centre and spread, overall and by group ([[Mean]], [[Standard Deviation]], [[describe() and describeBy()]]).
4. **Then look at it.** Histograms and box plots for one variable, side-by-side plots for groups, scatter plots for two quantitative variables ([[Histogram]], [[Box Plot and Five-Number Summary]], [[Plots for Two Variables]]). *Why pictures:* they show shape, [[Outliers|outliers]] and gaps that summary numbers hide ([[Why visualize data before testing]]).
5. **Use what you see to plan the test.** [[Shape of a Distribution|Skew]], outliers, unequal spreads and odd values decide which test and which assumption checks come next ([[Test Assumptions]], [[Test Choice Guide]]).
6. **EDA is description, not proof.** Patterns found by looking still need a test, ideally planned before the look ([[Why choose alpha and tails before seeing the data]]).

![[Plots for two variables.png|700]]
Each pair of variable types has its own exploratory plot; choosing it is the first EDA decision.

A test answers one narrow question and assumes the data are what you think they are. EDA checks that assumption and shows what the data actually look like.

For example:

Book FAMuSS data (checked in R): `str()` shows 595 rows, `ndrm.ch` as numbers and `genotype` as text (chr), which must become a factor before `aov()` ([[factor()]]). By genotype, every group runs from 0 to at least 150 and its mean sits above its [[Median|median]], so the groups overlap heavily and are right-skewed: a warning that the ANOVA result (p = 0.040) may be fragile ([[One-Way ANOVA]]).

Common mistakes:

- **"EDA is optional when the test is simple."** The simplest test still trusts the data file.
- **"A pattern seen in EDA is a finding."** It is a lead; testing it on the same data after looking inflates [[Type I and Type II Errors|false positives]] ([[Family-Wise Type I Error]]).

See also: [[Descriptive vs Inferential Statistics]], [[Types of Data]].
