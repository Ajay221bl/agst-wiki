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

To rank data, sort it and replace each value with its position: 1 for the smallest, 2 for the next, and so on. Tied values share the average of the positions they take up.

Imagine a race. You could record everyone's finishing time to the hundredth of a second. Or you could just record who came first, second, third. The second way throws information away: you no longer know whether the winner won by a hair or by a mile. Why would anyone do that on purpose?

Because sometimes the distances are where the trouble is. Each value carries two kinds of information: its order, bigger or smaller than the others, and its distance, how much bigger. Distances are what [[Outliers|outliers]] and [[Shape of a Distribution|skew]] use to cause damage. One gigantic value drags the [[Mean|mean]] and inflates the [[Standard Deviation|standard deviation]]. Ranks keep only the order. The largest value becomes rank n whether it's 9 or 9 trillion. Nothing extreme can push you around any more.

![[Ranks tame outliers.png|700]]
On the raw scale one value is far away; as ranks, it is just one step above the next.

Ties share. If two values tie for positions 3 and 4, both get 3.5. Why the average? It keeps the total of all the ranks the same, $1 + 2 + \dots + n$, whatever the ties.

For example, the data 1, 2, 3, 4, 100 become the ranks 1, 2, 3, 4, 5. The data 3, 5, 5, 9 become 1, 2.5, 2.5, 4.

Here's the clever part, the reason ranks power a whole family of tests. If the groups really don't differ, every arrangement of the ranks among them is equally likely. That's pure counting, so you can work out the null distribution exactly, without assuming the data are normal. That's how rank-based tests work ([[Nonparametric Alternatives]], [[Null Distribution]], [[Normality Checks|normality]]).

![[Worked example - rank-based test.png|700]]
The stem-cell sheep with 14.25 becomes rank 18, one step above the next sheep.

It's a trade: you give up the distances, and in return you get a method that can't be hijacked by a few wild values ([[Robustness]], [[Median]]).

Try it yourself. Rank these: 7, 2, 7, 10. Sorted: 2, 7, 7, 10. The two 7s share positions 2 and 3, so each gets 2.5. Ranks: 2 gets 1, each 7 gets 2.5, 10 gets 4.

See also: [[Percentiles and Quantiles]].
