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

The mean is the ordinary average: add up all the values and divide by how many there are.

You often want one number for a typical value of a quantitative variable ([[Types of Data]]). The mean shares the total out equally:
$$\bar{x} = \frac{\sum x_i}{n}$$
([[Summation Notation]]). It is the value everyone would have if the total were split evenly. It is also the balance point: picture the values as weights on a ruler, and the mean is where the ruler balances. The distances above it exactly cancel the distances below ([[Deviations from the Mean]]).

Every value pulls on the mean, and values far from the centre pull hardest. So one extreme value, or a long [[Tails of a Distribution|tail]], drags the mean towards it. That is why the [[Median|median]] is preferred for skewed data ([[Why the median beats the mean for skewed data]], [[Outliers]]).

![[Mean vs median - years in school.png|700]]
An example: one value of 33 pulls the mean to 9 while four of the five people are at 6 or below. The median (3) stays with the typical person.

The mean uses every observation, and it has useful properties. On average, a sample mean hits the population mean $\mu$ exactly, so it is unbiased and is the usual estimate of $\mu$ ([[Unbiased Estimator]], [[Point Estimate]]). And the [[Central Limit Theorem]] says exactly how sample means behave from sample to sample ([[Sampling Distribution]]). That is why t-tests and ANOVA compare means.

For example, five people's years in school after a bachelor's degree are 1, 2, 3, 6 and 3.
- The mean is 15/5 = **3**.
- Change one 3 to **33** and the mean becomes 45/5 = **9**, while the median stays at 3.

The middle line of a box plot is the median, not the mean ([[Box Plot and Five-Number Summary]]). And the mean isn't always the best centre: for skewed data the median usually describes a typical value better.

See also: [[Variance]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4, p. 30).
