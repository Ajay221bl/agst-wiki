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

Why must a write-up say how missing values were handled?

Missing values change an analysis without warning. na.omit() drops a whole row if any column is blank, so the sample shrinks and the degrees of freedom change, and if the people with missing values differ from the rest, the results are biased. Whatever you do, whether dropping or filling in values, state it with the numbers, for example: "1,000 responses, 61 removed for missing values, 939 analysed".

![[Missing data - rows kept.png|700]]
The same 1,000 COVID responses: 979 rows survive when only March and April must be complete, 939 when every column must be.

1. Values go missing for reasons: a skipped question, a dead plant, a broken sensor ([[Missing Data]]).
2. `na.omit()` removes every row with a missing value (NA) in any column, even a column you don't use ([[na.omit() and complete.cases()]]). Keeping only the needed columns first saves rows.
3. Fewer rows mean a smaller n, wider intervals, less [[Statistical Power|power]] and different degrees of freedom ([[Degrees of Freedom]]).
4. If the people with gaps differ, for example if the most distressed people skip the distress questions, the complete cases no longer represent the sample ([[Sampling Bias]]).
5. Blank cells are usually read as missing, but codes like 999 or "n/a" may not be. [[summary()]] and [[str()]] show what R saw.
6. So report how many started, how many were removed and why, how many were analysed, and any filling in of values, ideally as a small flow chart.

Unreported removals make the stated n wrong, hide possible bias, and leave nobody able to repeat the analysis.

See also: [[Why use degrees of freedom as a sanity check]], [[Why R must be told what kind of variable it has]], [[Why a bigger sample can't fix a biased one]].
