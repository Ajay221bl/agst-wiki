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

A Likert item asks people to rate how much they agree with a statement on ordered categories, from strongly disagree to strongly agree, often coded 1 to 5. The answers are ordinal, so they are usually not normal, and rank-based methods often suit them better.

Putting numbers on feelings is useful, but the numbers can pretend to be more precise than the feelings are. Surveys turn opinions into answers you can count: "I feel stressed: strongly disagree ... strongly agree". The answers have an order but no fixed spacing. "Agree" is more than "neutral", but nobody knows whether that step is the same size as the step from "neutral" to "disagree". That makes a single item **ordinal** ([[Types of Data]]). Coding the answers 1 to 5 doesn't change this; the numbers are just labels in order. Means and standard deviations assume equal steps, while the median and percentiles only need the order ([[Median]], [[Percentiles and Quantiles]]).

With only a few possible values, and answers often piled up at one end, Likert items are rarely normal ([[Shape of a Distribution]], [[Normality Checks]]). Rank-based tests are a natural fit, and a common check alongside a t-test ([[Nonparametric Alternatives]], [[Ranks]]).

A scale adds up many items, such as the PHQ-9 depression score. The total can take many values and is often treated as quantitative, after a look at its shape.

![[Likert item - ordered categories.png|700]]
Five ordered boxes; the arrows show order, but nothing says the gaps are equal.

Most survey data are like this, and the type of data decides which summaries and tests make sense.

For example, a 5-point item answered 1, 2, 2, 4, 5 has a median of 2, which is a safe summary. The [[Mean|mean]], 2.8, treats the step from 2 to 4 as exactly twice the step from 1 to 2, which the scale never promised.

The rule is to respect what the data really are, not what they've been coded as. Being coded 1 to 5 doesn't make an item quantitative. But ordinal data can still be analysed well, with medians, proportions and rank-based tests.

Try it yourself. On a 1-to-5 agreement scale, is the gap between "disagree" (2) and "neutral" (3) the same size as between "agree" (4) and "strongly agree" (5)? Nobody knows. The order is real, the spacing isn't, which is why the median and rank-based tests often suit these answers better than the mean.
