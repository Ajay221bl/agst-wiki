---
type: molecular
tags:
  - molecular
  - assumptions
aliases:
  - "what to check for normality"
  - "residuals not raw data"
status: seedling
---

Why check the normality of the differences or the residuals instead of the raw data?

A test assumes normality only for the part it treats as chance. In a paired t-test that is the differences, not the before and after columns. In ANOVA it is the residuals (each value minus its group mean), not the pooled response, which can look lumpy simply because the groups differ. Check the thing the model assumes is normal.

![[Raw response vs residuals.png|700]]
Three perfectly normal groups give a three-humped raw column. Subtract each group's mean and one bell is left. [[Simulation|Simulated data]].

1. Every test splits the data into a structure (a mean, group means, a difference) plus chance scatter ([[Statistical Model]]).
2. The normality assumption is about the chance part only; that is what the p-value's calculation treats as random ([[Residuals]]).
3. A paired t-test is a [[One-Sample t-Test|one-sample t-test]] on the differences, so the differences must be roughly normal. The before and after columns can each be skewed and it doesn't matter ([[Paired t-Test]]).
4. In ANOVA the residuals are each value minus its group mean. The raw response pools groups with different centres, so it can look non-normal exactly when the treatment works.
5. Books often say "check each group" for two-sample tests and ANOVA; checking residuals asks the same question once, with all the data ([[ANOVA Assumptions]], [[Normality Checks]]).

Checking the pooled raw response would flag non-normality whenever the groups really differ, and checking the wrong columns in a paired design can both miss and invent problems.

See also: [[Q-Q Plot|Q-Q plots]], [[Histogram|histograms]], [[Why check assumptions before trusting a test]], [[Why use a paired test for paired data]], [[Why we hope for a large p-value on assumption checks]].
