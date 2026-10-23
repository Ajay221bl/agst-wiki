---
type: atomic
tags:
  - describing-data
aliases:
  - "average"
  - "arithmetic mean"
  - "x-bar"
  - "measures of center"
  - "balance point"
status: seedling
---

**In one line:** the mean is the ordinary average: add up all the values and divide by how many there are.

> [!info] Before this, it helps to know
> [[Summation Notation]] (how the formula is written) · [[Types of Data]] (it needs quantitative data)

## Start from zero
1. **I want one number for "a typical value"** of a quantitative variable ([[Types of Data]]).
2. **Share the total out equally.** Add everything up and divide by how many there are:
$$\bar{x} = \frac{\sum x_i}{n}$$
   ([[Summation Notation]]). *Why this is a sensible "typical":* it is the value everyone would have if the total were split evenly.
3. **It is the balance point.** Think of the data as weights on a ruler: the mean is where the ruler balances. The deviations above it exactly cancel the ones below ([[Deviations from the Mean]]).
4. **Every value pulls on it, and values far from the centre pull hardest.** *Consequence:* one extreme value or a long [[Tails of a Distribution|tail]] drags the mean towards it, which is why the median is preferred for skewed data ([[Median]], [[Why the median beats the mean for skewed data]]).
5. **On average it hits the population mean exactly** (it is unbiased), which is why it is the default estimate of $\mu$ ([[Unbiased Estimator]], [[Point Estimate]]).

## See it

![[Mean vs median - years in school.png|700]]
*What to look at:* The class example: one value of 33 pulls the mean to 9 while four of the five people are at 6 or below. The median (3) stays with the typical person.

## Why it exists
It uses every observation, and it has "nice statistical properties": it is an **unbiased** estimator of the population mean $\mu$ ([[Unbiased Estimator]]), and the [[Central Limit Theorem]] tells us exactly how sample means behave. That is why t-tests and ANOVA compare means.

The price: because every value pulls on it, one extreme value can drag it far away ([[Outliers]]).

## A tiny example
Years in school after the bachelor's, from class: 1, 2, 3, 6, 3.
- Mean = 15/5 = **3**.
- Change one 3 to **33**: mean = 45/5 = **9**. The median stays 3 ([[Median]]).

The mean is "pulled toward the extreme uncle at Thanksgiving to keep the peace".

## Common confusions
- **"The middle line of a box plot is the mean."** It is the median ([[Box Plot and Five-Number Summary]]).
- **"The mean is always the best center."** Not for skewed data ([[Why the median beats the mean for skewed data]]).

## Connections
- **Builds on:** [[Summation Notation]], [[Types of Data]]
- **Leads to:** [[Median]], [[Variance]], [[Unbiased Estimator]], [[Sampling Distribution]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4, p. 30)
