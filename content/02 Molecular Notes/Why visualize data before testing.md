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

> [!summary] In plain words
> Plots show what summary numbers hide: shape, outliers, gaps, unequal spreads and data errors. Those decide which summary to report and whether a test's [[Test Assumptions|assumptions]] hold. Datasets with identical means and SDs can look completely different, so a test run without looking can be answering the wrong question.

## The question
"What are the benefits of visualizing data?"

## Built from
- [[Histogram]] and [[Box Plot and Five-Number Summary]]: the basic looks.
- [[Shape of a Distribution]]: what to look for.
- [[Outliers]]: what numbers hide.
- [[Normality Checks]]: Q-Q plots as assumption checks.
- [[Plots for Two Variables]]: relationships and group comparisons.
- [[Q-Q Plot]]: the sharper normality picture.

## See it

![[Same mean different spread.png|700]]
*What to look at:* Both groups have a mean of 50, so the centre alone says they are identical. Only a spread measure shows how different they are.

![[Distribution shapes.png|700]]
*What to look at:* Watch where the red mean line sits relative to the dashed [[Median|median]]: they agree for symmetric data and the mean chases the long [[Tails of a Distribution|tail]] when the data are skewed.

## The reasoning, step by step
1. Means and SDs compress the data; very different datasets can share them (the "datasaurus" slide) ([[Plots for Two Variables]]).
2. A plot shows **shape**: skew decides mean vs median ([[Why the median beats the mean for skewed data]]).
3. It shows **outliers** that would drag means and inflate SDs ([[Outliers]]).
4. It checks **assumptions**: Q-Q plots for normality; side-by-side boxes for equal spreads ([[Normality Checks]], [[Homogeneity of Variance]]).
5. It previews **differences** between groups or over time before testing.
6. It **communicates** results more clearly than tables.

## What would go wrong otherwise
Tests can be run on skewed, outlier-ridden or mis-coded data without anyone noticing, and the conclusions inherit those problems: "garbage in, garbage out".

## Connections
- **Related:** [[Why check assumptions before trusting a test]], [[Descriptive vs Inferential Statistics]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Describing Data]]
