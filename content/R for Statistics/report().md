---
type: atomic
tags:
  - r-statistics
aliases:
  - "report"
  - "report_sample"
  - "report package"
  - "Table 1"
status: seedling
---

The `report` package writes summaries for you: `report_sample()` makes a "Table 1" of the sample, and `report()` turns a test result into a paragraph of text with the [[Effect Size|effect size]].

1. **Results have to be written up in words, with the numbers that support them** ([[Writing a Conclusion]]).
2. **The `report` package drafts that text** from a data frame or a test result ([[R Packages]]):

```r
report::report_sample(d)                 # mean (SD) for numbers, % for categories
report::report_sample(frust, by = "major")
report::report(t.test(COVID$distress, mu = 10))   # auto-written summary
```

3. **Why `report_sample`:** a sample table (mean and [[Standard Deviation|SD]], or %) is the first thing a reader needs ([[Why report both center and spread]]).
4. **Treat the output as a draft.** *Why:* it can't know your context, and its effect-size labels may differ from the usual benchmarks ([[Cohen's d]]).

It saves time and shows the direction and a **[[Confidence Interval|CI]] for the effect size**, which `cohensD()` does not ([[cohensD()]]).

For example:

For a paired test, `report()` gives the sign of Cohen's d (which depends on the order of subtraction) and labels its size ("negligible", "small").

Common mistakes:

- **"The report wording is final."** It is a draft; it may not match your [[Null and Alternative Hypotheses|hypotheses]], α or context.

See also: [[Descriptive vs Inferential Statistics]].
