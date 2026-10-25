---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "sigma notation"
  - "sum symbol"
status: seedling
---

The symbol $\sum$ (a capital Greek sigma) means "add up". So $\sum x_i$ is short for $x_1 + x_2 + \dots + x_n$.

The big sigma looks scary, but it's just a compact instruction: add these up. Give each observation a name. If four chickens weigh 2.1, 2.4, 2.9 and 2.6 kg, call them $x_1 = 2.1$, $x_2 = 2.4$, $x_3 = 2.9$ and $x_4 = 2.6$. The small number $i$ in $x_i$ just says which chicken ([[Variable and Observation]]). Adding up values comes up all the time, for totals, means and variances, so a symbol saves writing them all out:
$$\sum_{i=1}^{n} x_i$$
Read it as "for $i$ from 1 to $n$, add up $x_i$". The limits are often left off, giving $\sum x_i$.

Whatever comes after the sigma is worked out for each value first, and only then added. $\sum (x_i - \bar{x})^2$ means: for each value, subtract the mean, square the result, then add them all ([[Variance]]). The order matters, because $\sum (x_i - \bar{x})^2$ and $\left(\sum (x_i - \bar{x})\right)^2$ are different numbers. A double sum, $\sum\sum$, adds over two things at once, for example every value in every group of an ANOVA ([[Sums of Squares and Mean Squares]], [[ANOVA Table]]).

Most formulas would be unreadable without it. The [[Mean]] is $\bar{x} = \sum x_i / n$, and the variance is $\sum (x_i - \bar{x})^2/(n-1)$.

For example, with the data 1, 2, 3, 6, 3:
- $\sum x_i = 1 + 2 + 3 + 6 + 3 = 15$
- $\bar{x} = 15/5 = 3$
- $\sum (x_i - \bar{x}) = (-2) + (-1) + 0 + 3 + 0 = 0$

That last sum is always 0, which is why the variance squares the deviations first ([[Why report both center and spread]]).

Read every formula from the inside out, and do what it says in that order. Don't confuse $\sum x_i^2$ with $(\sum x_i)^2$. The first squares each value and then adds; the second adds and then squares. With 1, 2 and 3, they give 14 and 36.

See also: [[Greek Letters and Symbols]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4 numerical summaries).
