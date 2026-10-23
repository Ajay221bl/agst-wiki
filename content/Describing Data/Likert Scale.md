---
type: atomic
tags:
  - describing-data
aliases:
  - "Likert"
  - "Likert-type"
  - "Likert scale"
  - "Likert item"
  - "Likert-type survey scores"
status: seedling
---

**In one line:** a Likert item asks people to rate agreement on ordered categories (strongly disagree to strongly agree, often coded 1 to 5); the answers are ordinal, so they are usually not normal and rank-based methods often fit better.

> [!info] Before this, it helps to know
> [[Types of Data]] · [[Median]] · [[Shape of a Distribution]]

## Start from zero
1. **Surveys turn opinions into answers you can count**: "I feel stressed: strongly disagree ... strongly agree".
2. **The answers have an order but not a fixed spacing.** "Agree" is more than "neutral", but nobody knows whether the step is the same size as "neutral" to "disagree". That makes a single item **ordinal** ([[Types of Data]]).
3. **Coding them 1 to 5 doesn't change that.** The numbers are labels in order. *Why it matters:* means and SDs assume equal steps; the median and percentiles only need order ([[Median]], [[Percentiles and Quantiles]]).
4. **Few possible values and piled-up ends make them non-normal** ([[Shape of a Distribution]], [[Normality Checks]]).
5. **So rank-based tests are a natural fit**, and a common check beside a t-test ([[Nonparametric Alternatives]], [[Ranks]]).
6. **Scales add many items** (like the PHQ-9 depression score). The sum has many values and is often treated as quantitative, with a look at its shape first.

## See it

![[Likert item - ordered categories.png|700]]
*What to look at:* five ordered boxes; the arrows show order, but nothing says the gaps are equal.

## Why it exists
Most survey data in the course are of this kind, and the type decides which summaries and tests make sense.

## A tiny example
A 5-point item answered 1, 2, 2, 4, 5: the median (2) is a safe summary; the [[Mean|mean]] (2.8) treats the step from 2 to 4 as exactly twice the step from 1 to 2, which the scale never promised.

## Common confusions
- **"Coded 1 to 5, so it's quantitative."** The codes are ordered labels.
- **"Ordinal data can't be analyzed."** They can, with medians, proportions and rank-based tests.

## Connections
- **Builds on:** [[Types of Data]], [[Median]], [[Shape of a Distribution]]
- **Leads to:** [[Nonparametric Alternatives]], [[Normality Checks]], [[Ranks]]
- **Part of:** [[MOC - Describing Data]]
