---
type: atomic
tags:
  - inference
aliases:
  - "alpha"
  - "significance threshold"
  - "rejection region"
status: seedling
---

The significance level α is the cutoff for "unusual" chosen before the study. It equals the probability of a Type I error, a false positive, that you are willing to accept.

A p-value needs a cutoff for "too rare to believe $H_0$". You decide it **before collecting data**. Choosing it after seeing p would let you pick whatever cutoff gives the answer you want ([[Why choose alpha and tails before seeing the data]]). That cutoff is α. Common choices are **0.05** (the usual default), 0.01, and sometimes 0.10.

α is the false-alarm rate. If $H_0$ is true, results this extreme happen with probability α, so you will wrongly reject it with probability α ([[Type I and Type II Errors]]). On the null distribution, α is an area. The **rejection region** is the set of [[Test Statistic|test statistics]] extreme enough to reject; its area is α, and its edge is the [[Critical Value|critical value]] ([[Null Distribution]]).

A lower α isn't free. Fewer false alarms means more missed real effects, so less power ([[Statistical Power]]).

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each cut-off is further out (±1.96 instead of 1.645).

Choosing α (book pp. 221–222):
- If a **Type I error is more costly**, use a smaller α, such as 0.01. A drug regulator, for example, wants to avoid approving a drug that doesn't work.
- If a **Type II error is more costly**, a larger α, such as 0.10, may be reasonable.

For example, take a pacemaker battery. Claiming it lasts more than 300 days when it doesn't means patients skip check-ups they need, which could be fatal. That Type I error is worse, so use a smaller α.

α isn't the p-value: α is fixed in advance, while the p-value comes from the data. And a smaller α isn't always better. It raises the Type II error rate unless $n$ grows.

See also: [[P-Value]], [[Hypothesis Testing]], [[Bonferroni Correction]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 221–222).
