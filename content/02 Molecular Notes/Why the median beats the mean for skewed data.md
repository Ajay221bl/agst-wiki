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

"Which measure of center would you recommend, and why?"

The mean uses the size of every value, so a long [[Tails of a Distribution|tail]] of big values drags it toward the tail and away from the typical case. The median only uses order, so it stays with the bulk of the data. For skewed data or outliers the median is the better summary, even though the mean has nicer theory (it is unbiased).

![[Mean vs median - years in school.png|700]]
An example: one value of 33 pulls the mean to 9 while four of the five people are at 6 or below. The median (3) stays with the typical person.

![[Distribution shapes.png|700]]
Watch where the red mean line sits relative to the dashed median: they agree for symmetric data and the mean chases the long tail when the data are skewed.

1. The mean is the balance point; values far from the center pull hardest ([[Mean]]).
2. Years in school 1, 2, 3, 6, 3 → mean 3, median 3. Change a 3 to 33 → mean 9, median still 3.
3. In right-skewed data the tail drags the mean above the median: time outdoors had mean 3.72 h vs median 1.07 h.
4. The median "doesn't care whether the top value is 9 or 9 trillion", so it describes a typical value.
5. The mean is still the default for roughly symmetric data because it is unbiased with "nice statistical properties" ([[Unbiased Estimator]]).
6. For unordered categories, neither works; only the mode maps back to a category ([[Mode]]).

- Reporting a mean income or hospital stay would describe almost nobody.
- A single data-entry error could change the headline number.

See also: [[Median]], [[Shape of a Distribution]], [[Outliers]], [[Robustness]], [[Ranks]], [[Why report both center and spread]], [[Nonparametric Alternatives]].
