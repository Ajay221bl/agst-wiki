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

The median is the middle value once the data are put in order; half the values are below it and half above.

1. **Another way to say "typical": the middle.** Line everyone up by height and pick the person in the middle.
2. **With an odd count there is one middle value; with an even count, average the two middle values.**
3. **It only needs order.** The median cares about **ranks**, not about how far away the extreme values are ([[Ranks]]). *Why that's useful:* it works for ordinal data too, where the mean doesn't make sense ([[Types of Data]]).
4. **That makes it robust:** "the median doesn't care whether the top value is 9 or 9 trillion" ([[Robustness]]).
5. **It is the 50th percentile:** half the data below, half above ([[Percentiles and Quantiles]]).
6. **Compare it with the mean to detect skew.** In a right-skewed distribution the long [[Tails of a Distribution|tail]] pulls the mean above the median ([[Mean]], [[Shape of a Distribution]]).

![[Mean vs median - years in school.png|700]]
An example: one value of 33 pulls the mean to 9 while four of the five people are at 6 or below. The median (3) stays with the typical person.

Real data are often skewed: income, time outdoors, hospital stays. A few huge values drag the mean toward the long tail, so the mean no longer describes a "typical" value. The median does ([[Why the median beats the mean for skewed data]]).

For example:

1, 2, 3, 6, 3 → ordered 1, 2, 3, 3, 6 → median **3**. Change a 3 to 33 → 1, 2, 3, 6, 33 → median still **3** (mean jumps to 9).

Even count: 2, 4, 7, 9 → median (4 + 7)/2 = 5.5.

Common mistakes:

- **"Unbiased means better, so the mean always wins."** Unbiasedness is one property; robustness to skew can matter more.
- **"The median of an even-sized sample must be one of the data values."** It can be halfway between two.

See also: [[Range and IQR]], [[Box Plot and Five-Number Summary]], [[Nonparametric Alternatives]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
