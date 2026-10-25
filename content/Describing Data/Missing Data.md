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

Missing data are blank or unusable values, shown as `NA` in R. You need to decide how to handle them, and say what you did, because dropping them changes your sample.

Real data have holes, and how you handle the holes can change your answer. Sometimes a cell has no value: someone skips a survey question, a plant dies, or a sensor fails ([[Data Table Rows and Columns]]). R marks missing values as `NA` ("not available"), but it only recognises the codes you tell it about, such as a blank, "." or "PNTA" for "prefer not to answer". If you don't, R reads "PNTA" as text and the whole column stops being numeric. Any sum involving an unknown value is unknown, so many R functions return `NA` unless you tell them to skip missing values with `na.rm = TRUE`. R does this on purpose, rather than quietly pretending the value doesn't exist.

Dropping rows with missing values makes your sample smaller, which changes the [[Degrees of Freedom|degrees of freedom]] in a test. Check that number in the output against the number of complete rows.

The bigger question is why the data are missing. If the people who skip a question differ from those who answer it, for example if the most distressed people skip the question about distress, then the complete rows are a biased sample. This is called non-response bias ([[Sampling Bias]]).

For example, a COVID survey has 1,000 rows. After `na.omit()`, 939 complete rows remain, so a [[One-Sample t-Test|one-sample t-test]] has 938 degrees of freedom, not 999. If you expected 999, the output tells you that rows were dropped ([[Why use degrees of freedom as a sanity check]]).

Always ask why a value is missing, not only how to remove it. `na.omit()` doesn't just drop the missing values in the column you care about: it drops any row with a missing value in **any** column. Select your columns first, or use `complete.cases()` on just the ones you need ([[na.omit() and complete.cases()]]). And a few missing values can still bias results if they aren't missing at random.

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.3 non-response).
