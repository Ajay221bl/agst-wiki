---
type: atomic
tags:
  - basics-from-zero
aliases:
  - "sigma notation"
  - "sum symbol"
status: seedling
---

The symbol $\sum$ (capital Greek [[Standard Deviation|sigma]]) means "add up", so $\sum x_i$ is shorthand for $x_1 + x_2 + \dots + x_n$.

1. **Name each observation.** Write the weights of four chickens as $x_1 = 2.1$, $x_2 = 2.4$, $x_3 = 2.9$, $x_4 = 2.6$. The subscript $i$ in $x_i$ just says *which* chicken ([[Variable and Observation]]).
2. **Adding them up comes up constantly** (totals, means, variances), and writing $x_1 + x_2 + \dots + x_n$ every time is clumsy.
3. **So use a symbol for "add up".** The capital Greek letter sigma, $\sum$ (S for sum):
$$\sum_{i=1}^{n} x_i$$
   Read it as: "for $i$ from 1 to $n$, add up $x_i$." Often the limits are dropped and it is written $\sum x_i$.
4. **Whatever is written after the sigma is computed first for each $i$, then added.** $\sum (x_i - \bar{x})^2$ means: for each value, subtract the mean, square, and only then add ([[Variance]]). *Why the order matters:* $\sum (x_i - \bar{x})^2$ and $\left(\sum (x_i - \bar{x})\right)^2$ are different numbers (the second is always 0).
5. **A double sum, $\sum\sum$, adds over two indices**, for example every value $j$ in every group $i$ in ANOVA ([[Sums of Squares and Mean Squares]]).

Formulas would be unreadable without it. The [[Mean]] is $\bar{x} = \sum x_i / n$. The [[Variance]] is $\sum (x_i - \bar{x})^2/(n-1)$. The ANOVA sums of squares are double sums, one over groups and one over observations within groups ([[ANOVA Table]]).

For example:

Data 1, 2, 3, 6, 3.
- $\sum x_i = 1 + 2 + 3 + 6 + 3 = 15$
- $\bar{x} = 15/5 = 3$
- $\sum (x_i - \bar{x}) = (-2) + (-1) + 0 + 3 + 0 = 0$

That last line is always 0, which is why the variance squares the deviations first ([[Why report both center and spread]]).

Common mistakes:

- **"$\sum x_i^2$ and $(\sum x_i)^2$ are the same."** No. The first squares then adds; the second adds then squares. With 1, 2, 3: 14 vs 36.

See also: [[Greek Letters and Symbols]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4 numerical summaries).
