---
type: atomic
tags:
  - r-statistics
aliases:
  - "data frame"
  - "data.frame"
  - "$ operator"
  - "indexing"
  - "[rows, columns]"
status: seedling
---

**In one line:** a data frame is R's version of a spreadsheet table, rows as observations and columns as variables; `d$name` picks a column and `d[rows, columns]` picks parts.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] · [[R Objects and Assignment]]

## Start from zero
1. **A data set is a table: rows are observations, columns are variables** ([[Data Table Rows and Columns]]).
2. **R's name for that table is a data frame.** Each column is a vector ([[c() and Vectors]]), and different columns can hold different types. `read.csv()` returns one ([[read.csv() and file.choose()]]).
3. **Get a column by name with `$`:** `d$HEALTH` is the HEALTH column. *Why by name:* names survive reordering, and they say what you meant.
4. **Get any piece by position with `[rows, columns]`;** blank means "all":

```r
d[, 15]             # all rows, column 15
d[1:5, ]            # first five rows, all columns
YouGov[, c(2:25)]   # drop column 1 (the case ID)
COVID[, c(7, 8)]    # keep two columns
```

5. **Why keep only some columns:** dropping NAs later removes any row with a missing value in *any* column, so keeping just the needed ones keeps more rows ([[na.omit() and complete.cases()]]).

## Why it exists
Almost every function takes a data frame (`data = d`) or a column from one (`d$x`).

## A tiny example
```r
names(COVIDtime) <- c("March", "April")
COVIDtime$April - COVIDtime$March   # the paired differences
```

## Common confusions
- **"`d[15]` and `d[, 15]` are the same."** Close but not identical; `d[, 15]` returns the column's values. Use `[rows, columns]` to be explicit.

## Connections
- **Builds on:** [[Data Table Rows and Columns]], [[R Objects and Assignment]]
- **Leads to:** [[str()]], [[Wide vs Long Format]], [[read.csv() and file.choose()]]
- **Part of:** [[MOC - R for Statistics]]
