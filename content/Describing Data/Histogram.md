---
type: atomic
tags:
  - describing-data
aliases:
  - "histograms"
  - "dot plot"
  - "density plot"
  - "bins"
  - "bin width"
status: seedling
---

**In one line:** a histogram groups a quantitative variable into bins and draws a bar for each bin whose height is the number (or share) of observations in it.

> [!info] Before this, it helps to know
> [[Types of Data]] (histograms are for quantitative data) · [[Proportions and Percentages]] (bar heights are counts or shares)

## Start from zero
1. **A list of 22 tree heights is hard to see.** I want the shape of the whole set at a glance.
2. **Split the measurement axis into bins**, say 5 m wide (25–30, 30–35, ...). *Why bins:* with a continuous variable almost no two values are equal, so counting exact values shows nothing ([[Types of Data]]).
3. **Count how many values fall in each bin and draw a bar of that height** (or the share of the total: [[Proportions and Percentages]]).
4. **Read the silhouette:** where the bulk is, how spread out it is, whether there is a [[Tails of a Distribution|tail]] or a second peak ([[Shape of a Distribution]]).
5. **The bin width is a choice.** Software picks a default, and very different bin widths can make the same data look different. *Why that matters:* with small samples a histogram can mislead, so normality checks add a Q-Q plot ([[Q-Q Plot]]).
6. **With huge samples and very thin bins, the outline becomes a smooth curve**: the density curve of a distribution ([[Probability Distribution]]).

## See it

![[Histogram - canopy trees.png|700]]
*What to look at:* Bar heights are counts per 5 m bin. Adding them gives n = 22, and counting up to the 11th and 12th values shows the [[Median|median]] sits in the 35–40 m bin.

## Why it exists
Summary numbers hide shape. Two datasets can share a [[Mean|mean]] and [[Standard Deviation|SD]] and look nothing alike. The histogram is the first tool for checking normality and spotting outliers before any test ([[Why visualize data before testing]]).

## A tiny example
Canopy trees: bars of 2 (25–30 m), 3 (30–35), 10 (35–40), 4 (40–45), 3 (45–50).
- $n = 2 + 3 + 10 + 4 + 3 = 22$. With frequency on the y-axis you **can** count $n$ (unlike a [[Box Plot and Five-Number Summary|box plot]]).
- The median is between the 11th and 12th ordered values: 2 + 3 = 5 trees below 35 m, then 10 more, so both fall in the **35–40 m** bin.
- Roughly symmetric and unimodal → use the mean.

## Common confusions
- **"`plot(x)` on a number makes a histogram."** It plots values against their row number: "hideous". Use `hist()`.
- **"A histogram of a categorical variable."** That is a bar chart, and it has no shape ([[Plots for Categorical Data]]).

## Connections
- **Builds on:** [[Types of Data]], [[Proportions and Percentages]]
- **Leads to:** [[Shape of a Distribution]], [[Normality Checks]], [[Outliers]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4)
