---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "outlier removal"
  - "outlier rules"
status: seedling
---

Why is removing an outlier a decision you have to justify, rather than a routine step?

Because "outlier" isn't a fact about a value. It's the output of a rule you chose. Whether a value counts depends on the rule: the fences at 1.5 times the interquartile range (IQR), ±2 [[Standard Deviation|standard deviations]] (SD), which assumes [[Normality Checks|normality]], or ±3 SD for extreme values. And a flagged value may be an error, or it may be the most interesting observation in the data. Removing it changes the results, so it needs a reason, a stated rule, and usually a discussion. With small samples, every point carries weight.

![[Box plot anatomy - canopy trees.png|700]]
The canopy-tree minimum (25.2 m) falls below the lower fence of 27.25 m and has z = −2.10, so both rules flag it.

Start with the definition, or rather the lack of one. There is no single definition. The IQR rule, which is based on order, flags values below Q1 − 1.5 IQR or above Q3 + 1.5 IQR. The [[Empirical Rule|empirical rule]] flags values with z beyond ±2 and assumes normality, and some people use ±3 for extreme values ([[Range and IQR]], [[Z-Score]]). Both are valid. But you must say which you used ([[Outliers]]).

Then ask what the value actually is. It's one of two things. Either it's a mistake, such as a typing error or a broken instrument, or it's a real unit that happens to be unusual. Only a mistake is a reason to fix or remove it. A real unusual value is data, and sometimes it's the discovery.

Now see the temptation. Outliers pull the mean and inflate the standard deviation. So deleting one can turn a non-significant result into a significant one. Remove values without a rule fixed in advance, and you're free to pick [[Family-Wise Type I Error|whichever result looks best]]. That freedom is the problem.

Small samples make it sharper. Each value is a big share of the data: dropping 1 of 8 removes 12.5% of a group.

So there are better moves than deleting. Check the original record. Report the results with and without the value, and let the reader see how much hangs on it. Or use methods that resist outliers, such as the [[Median|median]] or [[Nonparametric Alternatives|rank-based tests]].

Silently dropping outliers makes results look cleaner than the data are. And if the same data can say different things depending on which points disappear, then the conclusion belongs to the analyst, not the data.

Try it yourself. One plant in your study is three times taller than the rest. Before deleting it, what should you ask? Is it a recording error, like a misplaced decimal point? Or is it a real plant that grew that tall? An error can be fixed or removed, with a note saying so. A real value is data, and deleting it makes your results look neater than nature is.

See also: [[Box Plot and Five-Number Summary]], [[Why the median beats the mean for skewed data]], [[Why visualize data before testing]], [[Why rank tests trade power for robustness, and why run both]].
