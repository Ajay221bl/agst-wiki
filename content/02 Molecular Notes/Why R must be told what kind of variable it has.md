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

Because R knows what a column looks like, not what it means. You know that treatments coded 1 to 4 are four separate groups. R sees four numbers, fits a straight line through them, and gives you an ANOVA with the wrong degrees of freedom, without a single error message. So before any test, check the data with str(), turn grouping columns into factors, and put the data in long format, with one column for the response and one for the group.

![[Treatment codes - numbers vs factor.png|700]]
The same 24 numbers. Read as numbers, R draws one line through the codes (Df = 1). Read as a factor, it estimates one mean per treatment (Df = 3). [[Simulation|Simulated data]].

The root of the problem is a gap between meaning and symbols. A variable's type comes from what it means, not from what's written in the cell. An ID number is not a quantity. Neither is a treatment code from 1 to 4. Both are categories that happen to be written with digits ([[Types of Data]]).

R can't see meaning. It sees a column of digits and calls it numeric, a column of words and calls it text ([[str()]]). And every function decides what to do from that type. So hand `aov()` a numeric treatment column and it does the sensible thing for a number: it fits a slope, one line with 1 degree of freedom, instead of one mean per group with $k-1$ ([[Degrees of Freedom]]). Declare the column a factor, and R [[Point Estimate|estimates]] a separate mean for each level, which is what you meant all along ([[factor()]], [[Factors and Levels]]).

Shape matters the same way. The formula `response ~ group` expects long format: one row per [[Variable and Observation|observation]], one column for the response and one for the group. Data typed with one column per treatment, called wide format, has to be stacked first ([[Wide vs Long Format]]).

So the routine is short. Read the data, run `str()`, fix the types and the shape, then check that the degrees of freedom in the output are what you expect.

The danger here is silence. The test runs, the output looks normal, and it answers a different question: a trend across the codes instead of differences between groups. A computer will do exactly what you said, not what you meant. The only defence is to say it precisely.

Try it yourself. You run `aov(yield ~ treatment)` on 4 treatments coded 1 to 4, and the output shows 1 degree of freedom for treatment. What went wrong? With 4 groups you should see 4 − 1 = 3. A 1 means R read the codes as a number and fitted a line. Wrap the column in `factor()` and run it again.

See also: [[t.test()|t.test]], [[Why use degrees of freedom as a sanity check]], [[Why visualize data before testing]].
