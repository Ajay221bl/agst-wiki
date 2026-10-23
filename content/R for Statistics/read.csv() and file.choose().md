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

**In one line:** `read.csv(file.choose(), header = TRUE)` opens a file browser, reads the chosen CSV file and returns it as a data frame.

> [!info] Before this, it helps to know
> [[Data Frames]] · [[Missing Data]]

## Start from zero
1. **The data live in a file; R needs them as a data frame** ([[Data Frames]]).
2. **`read.csv()` reads a comma-separated file into one.** Each argument answers a question R can't guess:

```r
getwd()    # where R currently looks for and saves files
YouGov <- read.csv(file.choose(), header = TRUE,
                   stringsAsFactors = TRUE,
                   na.strings = c("", ".", "NA", "PNTA", "Not listed"))
```

   - `file.choose()` opens a file browser, so no path is needed: "always a friend". *Why:* typing paths is where most loading errors come from.
   - `header = TRUE`: the first row holds variable names. *Why:* otherwise the names become a row of data.
   - `stringsAsFactors = TRUE`: text columns become factors ([[factor()]]). *Why:* grouping functions need factors.
   - `na.strings`: every code meaning "missing" (`""` is a blank cell; PNTA = prefer not to answer) ([[Missing Data]]). *Why:* otherwise "PNTA" turns a numeric column into text.
3. **Then check what arrived** with `str()` ([[str()]]).

## Why it exists
Reading the data into R is often the hardest part, so practice `file.choose()` until it is routine.

## A tiny example
After reading, check: `head(YouGov)`, `str(YouGov)`, `summary(YouGov)` ([[str()]], [[summary()]]).

## Common confusions
- **"Blank cells are automatically NA."** For text columns they may come in as empty strings unless `""` is in `na.strings`.

## Connections
- **Builds on:** [[Data Frames]], [[Missing Data]]
- **Leads to:** [[str()]], [[summary()]], [[na.omit() and complete.cases()]]
- **Part of:** [[MOC - R for Statistics]]
