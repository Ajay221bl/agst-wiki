---
type: molecular
tags:
  - molecular
  - describing-data
aliases:
  - "which measure of center"
  - "mean vs median"
status: seedling
---

Which measure of centre should you report, and why?

The one the data can't fool. The mean uses the size of every value, so a long [[Tails of a Distribution|tail]] of big values drags it towards the tail and away from the typical case. The median only uses the order of the values, so it stays with the bulk of the data. For skewed data or data with outliers, the median is the better summary, even though the mean has nicer theory: it's unbiased.

![[Mean vs median - years in school.png|700]]
One value of 33 pulls the mean to 9, while four of the five people are at 6 or below. The median, 3, stays with the typical person.

![[Distribution shapes.png|700]]
Watch where the red mean line sits relative to the dashed median. They agree for symmetric data, and the mean chases the long tail when the data are skewed.

Start with what each one is. The mean is the balance point. Picture the values as weights on a plank: the mean is where it balances. And a weight far from the centre has a long lever, so it pulls hardest ([[Mean]]).

See it with five people's years in school: 1, 2, 3, 6 and 3. The mean is 3 and the median is 3. Now change one 3 to 33. The mean jumps to 9. The median is still 3. One person moved, and the mean now describes nobody in the room.

Real data do this all the time. In data skewed to the right, the tail drags the mean above the median. For example, time spent outdoors had a mean of 3.72 h but a median of 1.07 h. Most people were nowhere near 3.72.

The median is immune because it only cares about order. It doesn't matter whether the top value is 9 or 9 trillion. It's still just the top value, and the middle stays the middle. That's why the median describes a typical value.

That doesn't make the mean bad. For roughly symmetric data it's the default, because it's unbiased and easy to work with in theory ([[Unbiased Estimator]]). And for categories with no order, neither works: only the mode gives back a category ([[Mode]]).

So match the summary to the shape. Report a mean income or a mean hospital stay and you describe almost nobody, and one data-entry error can change the headline. The right question isn't "which is better?" It's "which one does this data distort?"

See also: [[Median]], [[Shape of a Distribution]], [[Outliers]], [[Robustness]], [[Ranks]], [[Why report both center and spread]], [[Nonparametric Alternatives]].
