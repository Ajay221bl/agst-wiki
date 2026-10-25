---
type: atomic
tags:
  - t-tests
aliases:
  - "rank"
  - "ranking"
  - "rank transform"
  - "ties"
status: seedling
---

To rank data, sort them and replace each value by its position, with 1 for the smallest. Tied values share the average of the positions they fill.

Sometimes the smartest move is to throw information away on purpose. A value carries two kinds of information: its order (bigger or smaller than the others) and its distance (how much bigger). Distances are where outliers and [[Shape of a Distribution|skew]] do damage. One huge value drags the mean and inflates the [[Standard Deviation|standard deviation]] ([[Outliers]], [[Mean]]).

Ranking keeps only the order. Sort the values and number them 1, 2, 3 and so on. This tames outliers, because the largest value becomes rank n whether it is 9 or 9 trillion.

Tied values share. If two values tie for positions 3 and 4, both get 3.5. Using the average keeps the total of the ranks the same, $1 + 2 + \dots + n$.

Ranks behave in a known way when the null hypothesis is true. If the groups don't differ, every arrangement of the ranks is equally likely, so the null distribution of a rank sum can be worked out without assuming [[Normality Checks|normality]]. That is how rank-based tests work ([[Nonparametric Alternatives]], [[Null Distribution]]).

![[Ranks tame outliers.png|700]]
On the raw scale one value is far away; as ranks, it is just one step above the next.

![[Worked example - rank-based test.png|700]]
The stem-cell sheep with 14.25 becomes rank 18, one step above the next sheep.

It's a trade: you give up the distances, and in return nothing extreme can push you around. Ranks let tests compare groups using only order, so they don't depend on normality or on how extreme a few values are.

For example, the data 1, 2, 3, 4, 100 become the ranks 1, 2, 3, 4, 5. The data 3, 5, 5, 9 become 1, 2.5, 2.5, 4.

Ranking doesn't throw away all the information. It keeps the order, which is often what the question is about. And tied values don't get the same lower rank; they get the average of the positions they fill.

See also: [[Percentiles and Quantiles]], [[Robustness]], [[Median]].
