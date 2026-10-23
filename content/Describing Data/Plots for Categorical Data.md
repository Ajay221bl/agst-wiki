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

Categorical variables are best shown with bar graphs (side by side for two variables) or mosaic plots, not pie charts or infographics.

1. **Categorical data can only be counted** ([[Types of Data]]), so they are summarized by counts, proportions, percentages and the mode ([[Mode]]).
2. **So the plot should show counts or shares, in a way the eye can compare.** *Why that's the test:* eyes compare lengths along a common baseline well, and angles and areas badly.
3. **Options, from the most useful down:**
   - **Bar graph:** "lame, straightforward, very clear." Bar heights side by side are easy to compare.
   - **Pareto chart:** a bar graph with bars sorted by height.
   - **Side-by-side (grouped) bar graph:** splits each bar by a second variable (`beside = TRUE`). Preferred over **stacked** bars, which make comparisons hard (and are what generative AI loves to produce). *Why:* only the bottom segment of a stack shares a baseline.
   - **Mosaic plot:** two categorical variables; a precursor to the [[Chi-Square Test|chi-square test]].
   - **Pie chart:** discouraged. Eyes are bad at comparing wedges; 3-D tilted pies are worse.

![[Bar graph vs pie chart.png|700]]
The same five percentages. In the bar graph the ranking is obvious; in the pie the 22% and 25% slices are hard to tell apart.

A good plot lets the reader compare categories accurately. Lengths on a common baseline (bars) are read accurately; angles and areas (pies) are not.

For example:

Health rating counts: Poor 120, Fair 410, Good 780, Very good 520, Excellent 170 (illustrative). A bar graph in that order shows the ordinal pattern. In alphabetical order (Excellent, Fair, Good, Poor, Very good) the order is lost, which is why ordinal factors need re-levelling ([[factor()]]).

Common mistakes:

- **"A bar chart of categories shows a distribution shape."** For unordered categories, the order is arbitrary, so there is no shape ([[Shape of a Distribution]]).

See also: [[Proportions and Percentages]], [[Contingency Table]], [[Plots for Two Variables]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.5, p. 37).
