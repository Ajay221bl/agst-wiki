---
type: atomic
tags:
  - describing-data
  - r-statistics
aliases:
  - "NA"
  - "missing values"
  - "non-response"
status: seedling
---

**In one line:** missing data are blank or unusable values (NA in R); you must decide, document and report how they were handled, because dropping them changes your sample.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] (the empty cell) · [[Sampling Bias]] (missingness can be a bias) · [[Degrees of Freedom]] (fewer rows, fewer df)

## Start from zero
1. **Sometimes a cell has no value.** A survey respondent skips a question, a plant dies, a sensor fails ([[Data Table Rows and Columns]]).
2. **R must be told it's missing.** It marks missing values `NA` ("not available"), but only recognizes the codes you tell it (blank, ".", "PNTA" for "prefer not to answer"). *Why:* otherwise "PNTA" is read as text and the whole column stops being numeric.
3. **Arithmetic with an unknown gives an unknown.** Many functions return `NA` unless told to skip missing values (`na.rm = TRUE`). *Why R does this:* it refuses to silently pretend the value doesn't exist.
4. **Dropping rows with NAs shrinks $n$**, which changes the [[Degrees of Freedom]]. Check the df in the output against the number of complete rows.
5. **Ask why the data are missing.** If the people who skipped a question differ from those who answered (the most distressed skip the distress question), the complete rows are a biased sample ([[Sampling Bias]]).

## Why it exists
The bigger question is **whether the missingness is random**. If the people who skip a question differ systematically from those who answer (orientation, marital status), the remaining data are biased: **non-response bias** ([[Sampling Bias]]).

## A tiny example
COVID survey: 1,000 rows. After `na.omit()`, 939 complete rows remain, so a [[One-Sample t-Test|one-sample t-test]] has df = 938, not 999. If you expected 999, the df tells you rows were dropped ([[Why use degrees of freedom as a sanity check]]).

## Common confusions
- **"`na.omit()` drops only the NAs in the column I care about."** It drops any row with an NA in **any** column. Select columns first, or use `complete.cases()` on the ones you need.
- **"Missing values don't matter if there are few."** Even a few can bias results if they are not random.

## Connections
- **Builds on:** [[Data Table Rows and Columns]], [[Sampling Bias]], [[Degrees of Freedom]]
- **Leads to:** [[Degrees of Freedom]], [[na.omit() and complete.cases()]]
- **Part of:** [[MOC - Describing Data]], [[MOC - R for Statistics]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.3 non-response)
