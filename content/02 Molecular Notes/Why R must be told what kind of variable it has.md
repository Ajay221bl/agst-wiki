---
type: molecular
tags:
  - molecular
  - r-for-statistics
aliases:
  - "factors and long format"
  - "why str() first"
status: seedling
---

Why should you check str(), use factors and reshape the data to long format before running a test in R?

R only knows what a column looks like, not what it means. Treatments coded 1 to 4 look like numbers, so R fits a straight line, and the ANOVA has the wrong degrees of freedom. Before any test, check the data with str(), turn grouping columns into factors, and put the data in long format, with one column for the response and one for the group.

![[Treatment codes - numbers vs factor.png|700]]
The same 24 numbers. Read as numbers, R draws one line through the codes (Df = 1); read as a factor, it estimates one mean per treatment (Df = 3). [[Simulation|Simulated data]].

1. A variable's type comes from what it means, not from the symbols in the cell. An ID number or a treatment code from 1 to 4 is categorical ([[Types of Data]]).
2. R can't see meaning. It reads a column of digits as numeric and a column of words as text ([[str()]]). This matters because every function decides what to do from that type.
3. A numeric treatment column in `aov()` is treated as a slope: one line with 1 degree of freedom, instead of one mean per group with $k-1$ ([[Degrees of Freedom]]).
4. Declaring the column a factor makes R [[Point Estimate|estimate]] a separate mean for each level ([[factor()]], [[Factors and Levels]]).
5. The formula `response ~ group` also needs long format: one row per [[Variable and Observation|observation]], with one column for the response and one for the group. Data typed with one column per treatment (wide format) must be stacked first ([[Wide vs Long Format]]).
6. So read the data, run `str()`, fix the types and the shape, and then check that the degrees of freedom in the output are what you expect.

Otherwise the test runs without an error but answers a different question (a trend across the codes instead of differences between groups), and nothing warns you except the degrees of freedom.

See also: [[t.test()|t.test]], [[Why use degrees of freedom as a sanity check]], [[Why visualize data before testing]].
