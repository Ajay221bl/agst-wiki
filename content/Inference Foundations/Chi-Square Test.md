---
type: atomic
tags:
  - inference
aliases:
  - "chi-square"
  - "chi-square test"
  - "chi square"
  - "chi-squared"
  - "χ²"
  - "chisq.test"
status: seedling
---

**In one line:** a chi-square ($\chi^2$) test compares the counts you observed in categories with the counts you would expect if $H_0$ were true; it is the test for two categorical variables, and comes later in the course.

> [!info] Before this, it helps to know
> [[Contingency Table]] · [[Independent Events]] · [[Test Statistic]] · [[Null Distribution]]

> [!note] Preview
> A preview. This note gives the idea so the term makes sense where it appears.

## Start from zero
1. **Two categorical variables give a table of counts** ([[Contingency Table]]).
2. **$H_0$: the variables are independent.** If so, each cell's expected count is (row total × column total) ÷ grand total ([[Independent Events]], [[Multiplication Rule]]).
3. **Compare observed with expected in every cell**: $\chi^2 = \sum \frac{(O - E)^2}{E}$. *Why square and divide by E:* squaring stops pluses and minuses cancelling ([[Squares and Square Roots]]); dividing by E scales each gap to what that cell could expect to wobble.
4. **Under $H_0$, this [[Parameter vs Statistic|statistic]] follows a chi-square distribution** with (rows − 1)(columns − 1) df ([[Degrees of Freedom]], [[Probability Distribution]]).
5. **Only large values count against $H_0$**, so the test is [[One-Tailed vs Two-Tailed Tests|right-tailed]], like F ([[Tails of a Distribution]]).
6. **The same distribution appears elsewhere.** R's Kruskal–Wallis output reports a chi-squared statistic ([[wilcox.test() and kruskal.test()]]).

## See it

![[Chi-square distributions.png|700]]
*What to look at:* every curve starts at 0 and leans right; more df moves the 5% cut-off further out (3.84 for df = 1, 5.99 for df = 2).

## Why it exists
t-tests and ANOVA need a [[Types of Data|quantitative]] outcome. When both variables are categories, all you have are counts, and this test asks whether the pattern of counts departs from independence.

## A tiny example
Exact: the 5% [[Critical Value|critical values]] are 3.84 (df = 1), 5.99 (df = 2), 7.81 (df = 3), from `qchisq(0.95, df)` ([[pnorm(), qnorm(), pt() and qt()]]). FAMuSS Kruskal–Wallis: χ² = 5.75 on 2 df, just under 5.99, so p = 0.057 ([[Nonparametric Alternatives]]).

## Common confusions
- **"Chi-square tests compare means."** They compare counts.
- **"A two-sided chi-square test uses both tails."** Like F, it uses only the right tail.

## Connections
- **Builds on:** [[Contingency Table]], [[Independent Events]], [[Test Statistic]], [[Null Distribution]]
- **Leads to:** [[Odds and Odds Ratio]], [[Test Choice Guide]]
- **Part of:** [[MOC - Inference Foundations]]
