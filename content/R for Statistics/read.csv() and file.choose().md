---
type: atomic
tags:
  - r-statistics
aliases:
  - "read.csv"
  - "file.choose"
  - "importing data"
  - "na.strings"
  - "getwd"
  - "CSV"
  - "comma-separated file"
status: seedling
---

`read.csv(file.choose(), header = TRUE)` opens a file browser, reads the chosen CSV (comma-separated values) file, and returns it as a data frame.

The data live in a file, and R needs them as a data frame ([[Data Frames]]). `read.csv()` reads a comma-separated file into one. Each argument answers a question R can't guess:

```r
getwd()    # where R currently looks for and saves files
YouGov <- read.csv(file.choose(), header = TRUE,
                   stringsAsFactors = TRUE,
                   na.strings = c("", ".", "NA", "PNTA", "Not listed"))
```

- `file.choose()` opens a file browser, so no file path is needed. Typing paths is where most loading errors come from.
- `header = TRUE` says the first row holds the variable names. Otherwise the names become a row of data.
- `stringsAsFactors = TRUE` turns text columns into factors ([[factor()]]), which grouping functions need.
- `na.strings` lists every code that means "missing" ([[Missing Data]]). `""` is a blank cell, and PNTA means "prefer not to answer". Without this, "PNTA" would turn a numeric column into text.

Then check what arrived with `str()` ([[str()]]). Getting the data into R is often the hardest part, so practise `file.choose()` until it is routine.

For example, after reading, check `head(YouGov)`, `str(YouGov)` and `summary(YouGov)` ([[summary()]]).

Blank cells aren't automatically treated as missing. In text columns they may come in as empty text unless `""` is in `na.strings`.

See also: [[na.omit() and complete.cases()]].
