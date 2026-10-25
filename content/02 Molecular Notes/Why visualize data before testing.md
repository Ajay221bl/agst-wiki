---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "benefits of visualizing data"
  - "always visualize"
status: seedling
---

What are the benefits of plotting data before testing?

Plots show you what summary numbers throw away: shape, outliers, gaps, unequal spreads and data errors. Those decide which summary to report and whether a test's [[Test Assumptions|assumptions]] hold. Data sets with identical means and standard deviations (SD) can look completely different, so a test run without looking can confidently answer the wrong question.

![[Same mean different spread.png|700]]
Both groups have a mean of 50, so the centre alone says they're identical. Only a measure of spread shows how different they are.

![[Distribution shapes.png|700]]
Watch where the red mean line sits relative to the dashed [[Median|median]]. They agree for symmetric data, and the mean chases the long [[Tails of a Distribution|tail]] when the data are skewed.

Think about what a summary number is. It's a compression. A mean and a standard deviation squeeze a whole data set into two numbers. That's useful, but compression loses information, and you can't see what was lost by looking at what's left. Very different data sets can share the same means and standard deviations, as the "Datasaurus" example famously shows ([[Plots for Two Variables]]).

A plot is the uncompressed version. And it tells you things you need before any test.

It shows **shape**. Skew decides whether to report the mean or the median ([[Why the median beats the mean for skewed data]]).

It shows **outliers**, which would drag the means and inflate the standard deviations ([[Outliers]]).

It checks **assumptions**: Q-Q plots for normality, and side-by-side boxes for equal spreads ([[Normality Checks]], [[Homogeneity of Variance]]).

It previews **differences** between groups, or over time, before any test tells you whether they're real. You should already have a guess when the p-value arrives.

And it **communicates**. A good plot convinces faster than any table.

So look first, then calculate. Skip the looking, and tests get run on skewed, outlier-ridden or wrongly coded data without anyone noticing, and the conclusions inherit every one of those problems. The numbers are a summary of the data. Always see the original before trusting the summary.

See also: [[Histogram]], [[Box Plot and Five-Number Summary]], [[Shape of a Distribution]], [[Q-Q Plot]], [[Why check assumptions before trusting a test]], [[Descriptive vs Inferential Statistics]].
