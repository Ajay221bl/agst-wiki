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

**In one line:** in a data table, each row is one observation and each column is one variable, which is the layout R expects.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (what rows and columns stand for)

## Start from zero
1. **I have several observations, each with values for several variables** ([[Variable and Observation]]). I need one layout that holds them all.
2. **Give each observation its own row** (one chicken, one plot, one survey respondent). *Why rows for observations:* adding a new chicken then means adding a row, and nothing else has to change.
3. **Give each variable its own column** (diet, weight, region). *Why:* every value in a column is the same kind of thing, so a column can be summarized (averaged, counted) as a unit.
4. **Put one value in each cell.** *Why:* a cell holding "2.1 kg, healthy" can't be computed with.
5. **This is the "tidy" layout, and software assumes it.** R calls such a table a [[Data Frames|data frame]], and most R functions, such as `aov()` and `t.test()` with a formula, expect it. When data arrive another way (one column per group), they have to be reshaped first ([[Wide vs Long Format]]).

## Why it exists
If the layout is inconsistent, software cannot tell which numbers belong to the same unit or which column holds the groups. The classic case in this course: recording one column per [[Treatment and Control Groups|treatment group]] ("wide" format) is natural on paper, but `aov()` needs one column of responses and one column of group labels ("long" format). See [[Wide vs Long Format]].

## A tiny example
Wide (how I might jot it down):

| corn | soy |
|---|---|
| 2.1 | 2.9 |
| 2.4 | 2.6 |

Long (what R's modeling functions want):

| weight | diet |
|---|---|
| 2.1 | corn |
| 2.4 | corn |
| 2.9 | soy |
| 2.6 | soy |

Same numbers, different shape. In the long version every row is a chicken and every column is a variable.

## Common confusions
- **"Wide data are wrong."** They are fine for paired data and for reading. They only need reshaping for functions that want a group column.
- **"A row is a variable."** In a tidy table it is always an observation.

## Connections
- **Builds on:** [[Variable and Observation]]
- **Leads to:** [[Data Frames]], [[Wide vs Long Format]], [[Factors and Levels]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (data matrices, §1.2)
