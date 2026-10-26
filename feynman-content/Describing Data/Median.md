---
type: atomic
tags:
  - describing-data
aliases:
  - "x-tilde"
  - "middle value"
  - "50th percentile"
status: seedling
---

The median is the middle value once the data are put in order. Half the values are below it and half above.

Sometimes the average lies, because a few extreme values drag it away from where most people are. It is another way to say "typical": line everyone up by height and pick the person in the middle. With an odd number of values there is one middle value. With an even number, take the average of the two middle values.

The median only needs the order of the values, not how far apart they are ([[Ranks]]). That makes it work for ordinal data too, where a mean doesn't make sense ([[Types of Data]]). It also makes it robust: the median doesn't care whether the top value is 9 or 9 trillion ([[Robustness]]). The median is the 50th percentile, with half the data below it ([[Percentiles and Quantiles]]).

Comparing the median with the mean reveals skew. In right-skewed data the long [[Tails of a Distribution|tail]] pulls the mean above the median ([[Mean]], [[Shape of a Distribution]]). Real data are often skewed, for example income, time spent outdoors or hospital stays. A few huge values drag the mean towards the tail, so the mean no longer describes a typical value, but the median still does ([[Why the median beats the mean for skewed data]]).

![[Mean vs median - years in school.png|700]]
An example: one value of 33 pulls the mean to 9 while four of the five people are at 6 or below. The median (3) stays with the typical person.

For example, put 1, 2, 3, 6, 3 in order: 1, 2, 3, 3, 6. The median is **3**. Change a 3 to 33, giving 1, 2, 3, 6, 33, and the median is still **3**, while the mean jumps to 9.

With an even count, such as 2, 4, 7, 9, the median is (4 + 7)/2 = 5.5, which isn't one of the values.

Which centre you choose is a judgment about your data, not a rule to memorize. The mean is unbiased, but that doesn't make it always better: when data are skewed, the median's robustness can matter more.

Try it yourself. The values 1, 2, 3, 3 and 6 have median 3. Change the 6 to a thousand. What's the new median? Still 3. The middle value didn't move, which is exactly why the median is safe against extreme values.

See also: [[Range and IQR]], [[Box Plot and Five-Number Summary]], [[Nonparametric Alternatives]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
