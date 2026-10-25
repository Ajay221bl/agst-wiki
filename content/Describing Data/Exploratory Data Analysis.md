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

Exploratory data analysis (EDA) means looking at your data before testing anything. You check how R read the file, summarize the data overall and by group, and plot them, to find mistakes, see the shape of the data and spot patterns.

A test is a machine that trusts whatever you feed it. Your job is to look before you trust. A data file can be wrong in ways no test will notice: a typo, a column read as text, or missing values coded as 999 ([[read.csv() and file.choose()]], [[Missing Data]]). So first check what you have: how many rows, which columns, and what type each column is ([[str()]], [[summary()]]). Every later step relies on this. Next, describe the data: centre and spread, overall and for each group ([[Mean]], [[Standard Deviation]], [[describe() and describeBy()]]). Then plot them: histograms and box plots for one variable, side-by-side plots for groups, and scatter plots for two quantitative variables ([[Histogram]], [[Box Plot and Five-Number Summary]], [[Plots for Two Variables]]). Pictures show shape, [[Outliers|outliers]] and gaps that summary numbers hide ([[Why visualize data before testing]]).

What you see decides what comes next. [[Shape of a Distribution|Skew]], outliers, unequal spreads and odd values tell you which test to use and which assumptions to check ([[Test Assumptions]], [[Test Choice Guide]], [[Types of Data]]).

![[Plots for two variables.png|700]]
Each pair of variable types has its own exploratory plot; choosing it is the first EDA decision.

A test answers one narrow question and assumes the data are what you think they are. EDA checks that, and shows you what the data actually look like.

For example, in the book's FAMuSS data (checked in R), `str()` shows 595 rows, with `ndrm.ch` stored as numbers and `genotype` stored as text (chr). The genotype column must be turned into a factor before running `aov()` ([[factor()]]). Within each genotype, values run from 0 to at least 150, and each group's mean sits above its [[Median|median]]. So the groups overlap a lot and are right-skewed, which warns that the ANOVA result (p = 0.040) may be fragile ([[One-Way ANOVA]]).

Looking is cheap and being wrong is expensive. EDA isn't optional just because the test is simple: even the simplest test trusts the data file. And a pattern you spot while exploring is a lead, not a finding. EDA describes; it doesn't prove. Testing a pattern on the same data you found it in raises the chance of [[Type I and Type II Errors|false positives]], so tests are best planned before you look ([[Family-Wise Type I Error]], [[Why choose alpha and tails before seeing the data]]).

See also: [[Descriptive vs Inferential Statistics]].
