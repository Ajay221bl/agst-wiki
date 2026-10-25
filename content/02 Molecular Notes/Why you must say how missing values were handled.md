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

Because missing values change an analysis without warning. na.omit() drops a whole row if any column is blank, so the sample shrinks and the degrees of freedom change. And if the people with missing values differ from the rest, the results are biased. So whatever you do, dropping rows or filling in values, state it with the numbers, for example: "1,000 responses, 61 removed for missing values, 939 analysed".

![[Missing data - rows kept.png|700]]
The same 1,000 COVID responses: 979 rows survive when only March and April must be complete, 939 when every column must be.

Start with a simple truth: values don't go missing at random. They go missing for reasons. A skipped question, a dead plant, a broken sensor ([[Missing Data]]). And the reason often matters.

Now watch what the software does. `na.omit()` removes every row with a missing value (NA) in any column, even a column you never use ([[na.omit() and complete.cases()]]). It's quiet and thorough. Keep only the columns you need first, and you save rows.

Fewer rows mean a smaller n, wider intervals, less [[Statistical Power|power]] and different degrees of freedom ([[Degrees of Freedom]]). That's the visible cost.

The invisible cost is worse. Suppose the most distressed people are the ones who skip the distress questions. Then the complete cases are the less distressed people, and they no longer represent the sample ([[Sampling Bias]]). Your analysis is now about a different group than you think, and nothing in the output says so.

There's a practical trap too. Blank cells are usually read as missing, but codes like 999 or "n/a" may not be. R may treat 999 as a real number. [[summary()]] and [[str()]] show what R actually saw.

So report the whole path: how many started, how many were removed and why, how many were analysed, and any filling in of values. A small flow chart does it well.

The principle is transparency. Every analysis makes choices, and the reader can only judge your conclusion if they can see them. Unreported removals make the stated n wrong, hide possible bias, and leave nobody able to repeat what you did.

See also: [[Why use degrees of freedom as a sanity check]], [[Why R must be told what kind of variable it has]], [[Why a bigger sample can't fix a biased one]].
