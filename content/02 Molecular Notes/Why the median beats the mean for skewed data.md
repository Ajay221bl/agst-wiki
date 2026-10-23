---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "which measure of center"
  - "mean vs median"
status: seedling
---

Which measure of centre should you report, and why?

The mean uses the size of every value, so a long [[Tails of a Distribution|tail]] of big values drags it towards the tail and away from the typical case. The median only uses the order of the values, so it stays with the bulk of the data. For skewed data or data with outliers, the median is the better summary, even though the mean has nicer theory (it is unbiased).

![[Mean vs median - years in school.png|700]]
An example: one value of 33 pulls the mean to 9 while four of the five people are at 6 or below. The median (3) stays with the typical person.

![[Distribution shapes.png|700]]
Watch where the red mean line sits relative to the dashed median: they agree for symmetric data and the mean chases the long tail when the data are skewed.

1. The mean is the balance point, so values far from the centre pull hardest ([[Mean]]).
2. Years in school of 1, 2, 3, 6 and 3 give a mean of 3 and a median of 3. Change one 3 to 33, and the mean becomes 9 while the median is still 3.
3. In data skewed to the right, the tail drags the mean above the median. For example, time spent outdoors had a mean of 3.72 h but a median of 1.07 h.
4. The median doesn't care whether the top value is 9 or 9 trillion, so it describes a typical value.
5. The mean is still the default for roughly symmetric data, because it is unbiased and easy to work with in theory ([[Unbiased Estimator]]).
6. For categories with no order, neither works; only the mode gives back a category ([[Mode]]).

Reporting a mean income or a mean hospital stay would describe almost nobody, and a single data-entry error could change the headline number.

See also: [[Median]], [[Shape of a Distribution]], [[Outliers]], [[Robustness]], [[Ranks]], [[Why report both center and spread]], [[Nonparametric Alternatives]].
