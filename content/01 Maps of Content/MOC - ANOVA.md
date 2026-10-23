---
type: moc
tags:
  - moc
  - anova
status: growing
---

> [!tip] New to this?
> Two "why" notes carry this topic. [[Why ANOVA instead of many t-tests]] explains why the method exists, and [[Why analysis of variance can compare means]] explains how it works.

One-way analysis of variance (ANOVA) compares the means of three or more groups with a single test.

*Reading:* [[References|Vu and Harrington 2020, Ch. 5]] §5.5.

## 1. Why one test
- [[Family-Wise Type I Error]]: every extra test adds another chance of a false positive
- [[Factors and Levels]]: one factor, split into k groups

## 2. How it works
- [[Statistical Model]]: each value is its group's mean plus some random error
- [[Residuals]]: those errors, which the assumption checks look at
- [[Grand Mean]]: the mean of all the values together, used as the reference point
- [[Between- and Within-Group Variability]]: how far apart the groups sit (the signal) compared with how spread out each group is (the noise)
- [[Sums of Squares and Mean Squares]]: the total sum of squares splits into a between-group part and a within-group part, and each part divided by its degrees of freedom gives a mean square
- [[F-Distribution]]: the curve for the ratio of the two mean squares
- [[One-Way ANOVA]]: the hypotheses and the single overall test
- [[ANOVA Table]]: degrees of freedom, sums of squares, mean squares, F and p in one table, where each column can be worked out from the others

## 3. Before trusting it
- [[ANOVA Assumptions]]: independent observations, roughly normal errors, and equal spread in every group
- [[Homogeneity of Variance]]: checking for equal spread with Levene's test, and why ANOVA still copes with a variance ratio of up to about 9:1

## 4. After a significant F
- [[Post Hoc Tests]]: finding which pairs of groups differ
- [[Tukey HSD]]: Tukey's honestly significant difference test, a common default
- [[Bonferroni Correction]]: a simple and cautious adjustment
- [[Compact Letter Display]]: letters that show which groups differ, for the write-up

## 5. Going further
- [[Two-Way ANOVA and Interaction]]: two factors at once, and whether their effects simply add up

## Why notes on this topic
- [[Why ANOVA instead of many t-tests]]
- [[Why analysis of variance can compare means]]
- [[Why post hoc tests only after a significant ANOVA]]
- [[Why a significant ANOVA can have no significant post hocs]]
- [[Why check assumptions before trusting a test]]
- [[Why use degrees of freedom as a sanity check]]
- [[Why a two-group ANOVA gives F equal to t squared]]
- [[Why normality is checked on residuals or differences]]
- [[Why we hope for a large p-value on assumption checks]]
- [[Why independence is judged from the design, not a test]]

## Other maps
[[MOC - t-Tests]] · [[MOC - R for Statistics]] · [[Test Choice Guide]] · [[index|Home]]
