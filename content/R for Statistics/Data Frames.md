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

A data frame is R's version of a spreadsheet table, with rows as observations and columns as variables. `d$name` picks out a column, and `d[rows, columns]` picks out parts.

In R, almost everything you analyse lives in one kind of object, so it's worth knowing it well. A data set is a table: rows are observations and columns are variables ([[Data Table Rows and Columns]]). R's name for that table is a data frame. Each column is a vector ([[c() and Vectors]]), and different columns can hold different types of data. `read.csv()` returns a data frame ([[read.csv() and file.choose()]]).

Get a column by name with `$`: `d$HEALTH` is the HEALTH column. Using names is safer than positions, because names survive reordering and they say what you meant. Get any piece by position with `[rows, columns]`, where leaving a side blank means "all":

```r
d[, 15]             # all rows, column 15
d[1:5, ]            # first five rows, all columns
YouGov[, c(2:25)]   # drop column 1 (the case ID)
COVID[, c(7, 8)]    # keep two columns
```

It often helps to keep only the columns you need. When you later drop missing values (NA), R removes any row with a missing value in *any* column, so keeping just the needed columns keeps more rows ([[na.omit() and complete.cases()]]).

Almost every function takes a data frame (`data = d`) or a column from one (`d$x`).

For example:

```r
names(COVIDtime) <- c("March", "April")
COVIDtime$April - COVIDtime$March   # the paired differences
```

When in doubt, be explicit about rows and columns. `d[15]` and `d[, 15]` are close but not the same: `d[, 15]` returns the column's values. Use `[rows, columns]` to be clear.

Try it yourself. You have a data frame `d` with columns `height` and `diet`. How do you get just the heights? `d$height`. The `$` reaches into the table and pulls out one column, which is a vector.

See also: [[R Objects and Assignment]], [[str()]], [[Wide vs Long Format]].
