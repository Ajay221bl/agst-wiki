---
type: atomic
tags:
  - describing-data
aliases:
  - "bar graph"
  - "bar chart"
  - "Pareto chart"
  - "mosaic plot"
  - "pie chart"
status: seedling
---

Categorical variables are best shown with bar graphs, side by side when there are two variables, or with mosaic plots. Pie charts and infographics are harder to read.

When your data are labels, the only honest thing you can do is count them, and a good plot just shows the counts clearly. Categorical data can only be counted, so they are summarized by counts, proportions, percentages and the [[Mode|mode]] ([[Types of Data]]). A good plot shows those counts in a way the eye can compare accurately. Eyes are good at comparing lengths along a shared baseline, and bad at comparing angles and areas.

The main options, from most useful to least:
- **Bar graph:** simple and clear. Bar heights side by side are easy to compare.
- **Pareto chart:** a bar graph with the bars sorted by height.
- **Side-by-side (grouped) bar graph:** splits each bar by a second variable (`beside = TRUE` in R). It is better than a **stacked** bar graph, because in a stack only the bottom segment sits on the shared baseline.
- **Mosaic plot:** shows two categorical variables at once, and leads naturally to the chi-square test.
- **Pie chart:** best avoided. Wedges are hard to compare, and tilted 3-D pies are worse.

![[Bar graph vs pie chart.png|700]]
The same five percentages. In the bar graph the ranking is obvious; in the pie the 22% and 25% slices are hard to tell apart.

For example, here are made-up counts of health ratings: Poor 120, Fair 410, Good 780, Very good 520, Excellent 170. A bar graph in that order shows the pattern. In alphabetical order (Excellent, Fair, Good, Poor, Very good) the natural order is lost, which is why ordered categories need their order set in R ([[factor()]]).

Pick the plot that answers your question, then make it easy to read. For unordered categories, the order of the bars is arbitrary, so a bar chart of them has no "shape" to describe ([[Shape of a Distribution]]).

See also: [[Proportions and Percentages]], [[Contingency Table]], [[Plots for Two Variables]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.5, p. 37).
