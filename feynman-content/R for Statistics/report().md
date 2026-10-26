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

The `report` package writes summaries for you. `report_sample()` makes a "Table 1" describing the sample, and `report()` turns a test result into a paragraph of text that includes the [[Effect Size|effect size]].

Writing up results is tedious, and a tool can draft it for you, but not think for you. Results have to be written up in words, with the numbers that support them ([[Writing a Conclusion]]). The `report` package drafts that text from a data frame or a test result ([[R Packages]]):

```r
report::report_sample(d)                 # mean (SD) for numbers, % for categories
report::report_sample(frust, by = "major")
report::report(t.test(COVID$distress, mu = 10))   # auto-written summary
```

`report_sample` is useful because a table of the sample, with the mean and [[Standard Deviation|standard deviation]] or percentages, is the first thing a reader needs ([[Why report both center and spread]]). Treat the output as a draft: it can't know your context, and its labels for effect sizes may differ from the usual benchmarks ([[Cohen's d]]).

It saves time, and it shows the direction of the effect and a **[[Confidence Interval|confidence interval]] for the effect size**, which `cohensD()` doesn't ([[cohensD()]]).

For example, for a paired test, `report()` gives the sign of Cohen's d (which depends on the order of subtraction) and labels its size, such as "negligible" or "small".

Let it write the first draft; you write the final one. The report's wording isn't final. It is a draft, and it may not match your [[Null and Alternative Hypotheses|hypotheses]], your α or your context.

Try it yourself. `report()` writes a full sentence about your test. Should you paste it straight into your thesis? Use it as a draft. Check every number against the output, and make sure the sentence says what your hypothesis actually was.

See also: [[Descriptive vs Inferential Statistics]].
