---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "proportion"
  - "percentage"
  - "relative frequency"
status: seedling
---

A proportion is a part divided by the whole, so it is a number from 0 to 1. A percentage is the same number times 100.

Say 202 of 1,010 surveyed adults smoke. The count, 202, can't be compared with a survey of a different size: 202 smokers out of 300 would be a very different picture. Dividing by the whole fixes that: 202 / 1,010 = 0.20, or 20%. A proportion can't be below 0 or above 1, because the part can't be less than nothing or more than the whole.

A proportion is really a mean. Code each smoker as 1 and each non-smoker as 0, and the average of those 0s and 1s is the proportion of smokers ([[Mean]]). This is why results about means, such as the [[Central Limit Theorem]], also apply to proportions. Probabilities are proportions too: the share of times an event happens in the long run ([[Classical vs Relative Frequency Probability]]).

Proportions put groups of different sizes on the same scale. For example, 44 positive tests out of 50 users and 90 out of 950 non-users are very different rates (0.88 against 0.095), even though 90 is the bigger count.

As another example, 10 people taste a new feed: four like it and six don't. Coded as 1 for "like" and 0 for "don't": 1, 1, 1, 1, 0, 0, 0, 0, 0, 0. The sum is 4 and the average is 4/10 = **0.4**, which is the proportion who like it.

Watch the format: 0.05 is 5%, not 5. Writing "p = 5" is an error, since a p-value can never be bigger than 1. And a bigger count only means a bigger rate when the wholes are the same size.

See also: [[Variable and Observation]], [[Contingency Table]], [[Sampling Distribution]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.5 [[Types of Data|categorical]] data).
