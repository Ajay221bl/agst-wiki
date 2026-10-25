---
type: moc
tags:
  - moc
  - anova
status: growing
---

> [!tip] New to this?
> Two "why" notes carry this topic. [[Why ANOVA instead of many t-tests]] explains why the method exists, and [[Why analysis of variance can compare means]] explains how it works. Read them first and the rest falls into place.

One-way analysis of variance (ANOVA) compares the means of three or more groups with a single test. It's the t-test, grown up.

The whole method comes from two insights. First, testing every pair of groups separately piles up false positives, so you need one overall question. Second, you can answer that question by comparing how far apart the group means are with how much the values vary inside each group: signal against noise. Everything below is either one of those two ideas, a check that the method can be trusted, or a way to find out where the difference is once you know there is one.

*Reading:* [[References|Vu and Harrington 2020, Ch. 5]] §5.5.

## 1. Why one test
- [[Family-Wise Type I Error]]: why every extra test is another chance to be fooled
- [[Factors and Levels]]: one factor, split into k groups

## 2. How it works
- [[Statistical Model]]: every value is its group's mean plus some random error
- [[Residuals]]: those errors, the part the model treats as chance, and what the assumption checks look at
- [[Grand Mean]]: the mean of everything, the reference point every group is measured against
- [[Between- and Within-Group Variability]]: how far apart the groups sit (the signal) against how spread out each group is (the noise)
- [[Sums of Squares and Mean Squares]]: the total variation splits cleanly into a between-group part and a within-group part, and each one divided by its degrees of freedom becomes a mean square
- [[F-Distribution]]: the curve for the ratio of the two mean squares, and why only a large F counts
- [[One-Way ANOVA]]: the hypotheses and the single overall test
- [[ANOVA Table]]: degrees of freedom, sums of squares, mean squares, F and p in one table, where each column can be worked out from the others

## 3. Before trusting it
- [[ANOVA Assumptions]]: independent observations, roughly normal errors and equal spread in every group, the conditions the p-value's promise depends on
- [[Homogeneity of Variance]]: checking for equal spread with Levene's test, and why ANOVA still copes with a variance ratio of up to about 9:1

## 4. After a significant F
- [[Post Hoc Tests]]: once you know something differs, finding where
- [[Tukey HSD]]: Tukey's honestly significant difference test, the usual default
- [[Bonferroni Correction]]: the simplest fix for many comparisons, safe but cautious
- [[Compact Letter Display]]: letters that show at a glance which groups differ

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
