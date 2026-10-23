---
type: atomic
tags:
  - inference
aliases:
  - "chi-square"
  - "chi-square test"
  - "chi square"
  - "chi-squared"
  - "chisq.test"
status: seedling
---

A chi-square ($\chi^2$) test compares the counts you observed in categories with the counts you would expect if the null hypothesis were true. It is the test for two categorical variables.

Two categorical variables give a table of counts ([[Contingency Table]]). The null hypothesis, $H_0$, says the variables are independent. If they are, each cell's expected count is (row total × column total) ÷ grand total ([[Independent Events]], [[Multiplication Rule]]).

The test compares observed and expected counts in every cell:
$$\chi^2 = \sum \frac{(O - E)^2}{E}$$
Squaring stops the pluses and minuses from cancelling ([[Squares and Square Roots]]). Dividing by E scales each gap to how much that cell could be expected to wobble.

If $H_0$ is true, this [[Parameter vs Statistic|statistic]] follows a chi-square distribution with (rows − 1)(columns − 1) degrees of freedom (df) ([[Degrees of Freedom]], [[Probability Distribution]]). Only large values count against $H_0$, so the test uses only the right tail, like the F test ([[One-Tailed vs Two-Tailed Tests]], [[Tails of a Distribution]]). The same distribution turns up elsewhere: R's Kruskal–Wallis output reports a chi-squared statistic ([[wilcox.test() and kruskal.test()]]).

![[Chi-square distributions.png|700]]
Every curve starts at 0 and leans right; more df moves the 5% cut-off further out (3.84 for df = 1, 5.99 for df = 2).

t-tests and ANOVA need a [[Types of Data|quantitative]] outcome. When both variables are categories, all you have are counts, and this test asks whether the pattern of counts departs from independence.

For example, the 5% [[Critical Value|critical values]] are 3.84 (df = 1), 5.99 (df = 2) and 7.81 (df = 3), from `qchisq(0.95, df)` ([[pnorm(), qnorm(), pt() and qt()]]). In the FAMuSS genotype data, the Kruskal–Wallis test gave χ² = 5.75 on 2 df, just under 5.99, so p = 0.057 ([[Nonparametric Alternatives]]).

Chi-square tests don't compare means; they compare counts. And a two-sided chi-square test doesn't use both tails: like F, it uses only the right tail.

See also: [[Test Statistic]], [[Null Distribution]], [[Odds and Odds Ratio]], [[Test Choice Guide]].
