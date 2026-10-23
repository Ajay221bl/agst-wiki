---
type: moc
tags:
  - moc
  - anova
status: growing
---

> [!tip] New to this?
> Two molecular notes carry this unit: [[Why ANOVA instead of many t-tests]] (why it exists) and [[Why analysis of variance can compare means]] (how it works).

Comparing three or more group means with one test.

*Reading:* [[References|Vu and Harrington 2020, Ch. 5]] §5.5.

## 1. Why one test
- [[Family-Wise Type I Error]]: many tests pile up false positives
- [[Factors and Levels]]: one factor, k groups

## 2. How it works
- [[Statistical Model]]: each value = group mean + error
- [[Residuals]]: the errors, and what the assumption checks look at
- [[Grand Mean]]: the mean of everything, the reference point
- [[Between- and Within-Group Variability]]: signal vs noise
- [[Sums of Squares and Mean Squares]]: SST = SSG + SSE, and each divided by its df
- [[F-Distribution]]: the ratio of the two
- [[One-Way ANOVA]]: hypotheses and the omnibus test
- [[ANOVA Table]]: the sudoku of df, SS, MS, F and p

## 3. Before trusting it
- [[ANOVA Assumptions]]: independence, normality, equal variances
- [[Homogeneity of Variance]]: Levene's test, robust to about 9:1

## 4. After a significant F
- [[Post Hoc Tests]]: which pairs differ
- [[Tukey HSD]]: the course default
- [[Bonferroni Correction]]: simple and conservative
- [[Compact Letter Display]]: letters for the write-up

## 5. Next in the course
- [[Two-Way ANOVA and Interaction]]: two factors, and whether their effects add up

## Related molecular notes
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

## Related MOCs
[[MOC - t-Tests]] · [[MOC - R for Statistics]] · [[Test Choice Guide]] · [[index|Home]]
