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

Why check the normality of the differences or the residuals, instead of the raw data?

Because a test only assumes normality for the part it treats as chance. In a paired t-test, that's the differences, not the before and after columns. In ANOVA, it's the residuals, each value minus its group mean, not the whole response column. The raw column can look lumpy simply because the groups differ, which is exactly what you hoped to find. So check the thing the model actually assumes is normal.

![[Raw response vs residuals.png|700]]
Three perfectly normal groups give a three-humped raw column. Subtract each group's mean and one bell is left. [[Simulation|Simulated data]].

Every test quietly splits your data into two pieces. One is structure: a mean, group means or a difference. The other is chance scatter around that structure ([[Statistical Model]]). The model explains the first piece, and treats the second as random noise.

The normality assumption is only about the noise. That's the piece the p-value calculation treats as random, so that's the piece whose shape matters ([[Residuals]]). The structure can look like anything.

Now apply it. A paired t-test is a [[One-Sample t-Test|one-sample t-test]] on the differences. So the differences must be roughly normal. The before and after columns can each be skewed, and it doesn't matter, because the test never uses them directly ([[Paired t-Test]]).

In ANOVA, the residuals are each value minus its group mean. But the raw response mixes groups with different centres. If the treatment works, the groups sit in different places, and the combined column looks lumpy and non-normal. So the raw column would fail the check exactly when your experiment succeeds. That's a test that punishes you for being right.

Books often say "check each group" for two-sample tests and ANOVA. Checking the residuals asks the same question once, using all the data together ([[ANOVA Assumptions]], [[Normality Checks]]).

The general habit is worth more than the rule. Before checking an assumption, ask what exactly it's an assumption about. Check the raw response and you'd flag non-normality whenever the groups really differ. Check the wrong columns in a paired design and you can both miss real problems and invent fake ones.

Try it yourself. Three groups have means far apart, so the whole response column, plotted together, has three humps. Does that break ANOVA's normality assumption? Not necessarily. Subtract each group's mean and look at the residuals. If they look roughly normal, you're fine. The humps were just the groups being different, which is the effect you're testing for.

See also: [[Q-Q Plot|Q-Q plots]], [[Histogram|histograms]], [[Why check assumptions before trusting a test]], [[Why use a paired test for paired data]], [[Why we hope for a large p-value on assumption checks]].
