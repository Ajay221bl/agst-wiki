---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "data table"
  - "tidy data"
  - "rows and columns"
status: seedling
---

In a data table, each row is one observation and each column is one variable. This is the layout R expects.

Say you weigh several chickens and note each one's diet. Give each chicken its own row, so adding a chicken just means adding a row. Give each measured thing (diet, weight) its own column, so every value in a column is the same kind of thing and the column can be averaged or counted. Put a single value in each cell: a cell that says "2.1 kg, healthy" can't be used in a calculation. A table built this way is called "tidy" ([[Variable and Observation]]).

R stores such a table as a [[Data Frames|data frame]], and most R functions, such as `aov()` and `t.test()` with a formula, assume this layout. If the layout is messy, the software can't tell which numbers belong to the same chicken or which column holds the groups.

The usual problem is data written with one column per [[Treatment and Control Groups|treatment group]]. That is called wide format. It is natural on paper, but `aov()` needs long format: one column of measurements and one column saying which group each belongs to ([[Wide vs Long Format]]). The group column holds the [[Factors and Levels|levels of a factor]].

For example, here are four chicken weights in wide format, the way you might jot them down:

| corn | soy |
|---|---|
| 2.1 | 2.9 |
| 2.4 | 2.6 |

And the same numbers in long format, the way R's modeling functions want them:

| weight | diet |
|---|---|
| 2.1 | corn |
| 2.4 | corn |
| 2.9 | soy |
| 2.6 | soy |

In the long version every row is a chicken and every column is a variable.

Wide data aren't wrong. They are fine for reading and for paired data, and only need reshaping for functions that want a group column. In a tidy table a row is always an observation, never a variable.

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (data matrices, §1.2).
