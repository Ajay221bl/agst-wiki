---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "missing data reporting"
  - "na.omit consequences"
status: seedling
---

> [!summary] In plain words
> Missing values silently change an analysis: na.omit() drops a whole row if any column is blank, so the sample shrinks, the degrees of freedom change, and if the missing people differ from the rest the results are biased. Whatever you do (drop, impute), state it and the numbers: "1,000 responses, 61 removed for missing values, 939 analysed".

## The question
Why must a write-up say how missing values were handled?

## Built from
- [[Missing Data]]: why values go missing.
- [[na.omit() and complete.cases()]]: what R removes.
- [[summary()]]: where NAs show up.
- [[Degrees of Freedom]]: n after removals.
- [[Sampling Bias]]: when the missing differ.

## See it

![[Missing data - rows kept.png|700]]
*What to look at:* The same 1,000 COVID responses: 979 rows survive when only March and April must be complete, 939 when every column must be.

## The reasoning, step by step
1. Values go missing for reasons: a skipped question, a dead plant, a broken sensor ([[Missing Data]]).
2. `na.omit()` removes every row with an NA in any column, even a column you don't use ([[na.omit() and complete.cases()]]). Keeping only the needed columns first saves rows.
3. Fewer rows means a smaller n, wider intervals, less [[Statistical Power|power]], and different df ([[Degrees of Freedom]]).
4. If the people with gaps differ (the most distressed skip the distress questions), the complete cases no longer represent the sample ([[Sampling Bias]]).
5. Blank cells are usually read as NA, but codes like 999 or "n/a" may not be; [[summary()]] and [[str()]] show what R saw.
6. So report: how many started, how many removed and why, how many analysed, and any imputation, ideally as a small flow chart.

## What would go wrong otherwise
Unreported removals make the stated n wrong, hide possible bias, and leave nobody able to reproduce the analysis.

## Connections
- **Related:** [[Why use degrees of freedom as a sanity check]], [[Why R must be told what kind of variable it has]], [[Why a bigger sample can't fix a biased one]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Describing Data]], [[MOC - R for Statistics]]
