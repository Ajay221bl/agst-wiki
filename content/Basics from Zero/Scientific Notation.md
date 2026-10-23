---
type: atomic
tags:
  - basics-from-zero
  - r-statistics
aliases:
  - "2.2e-16"
  - "e notation"
status: seedling
---

R writes very small or very large numbers in a short form: `2.2e-16` means $2.2 \times 10^{-16}$, which is 0.00000000000000022.

Powers of ten count places. $10^3 = 1000$ has three zeros, and $10^{-3} = 0.001$ has the 1 three places after the point. Any number can be written as a number between 1 and 10 times a power of ten: 15,000 is $1.5 \times 10^4$ and 0.0034 is $3.4 \times 10^{-3}$. This keeps very small and very large numbers short and easy to compare.

R writes "times 10 to the power" as the letter `e`:
- `1.5e+04` = 15,000
- `3.4e-3` = 0.0034
- `2.2e-16` = 0.00000000000000022

Read the power first. The more negative the power, the smaller the number, so `1e-10` is far smaller than `1e-3`.

This matters because p-values are often tiny. When R prints `p-value < 2.2e-16`, it means the p-value is smaller than the smallest number R can reliably show. Report it as p < 0.001 ([[P-Value]]).

For example, R prints `t = -5.4548, df = 129, p-value = 2.411e-07`. Read the p-value as 0.0000002411. It is tiny, not 2.4.

The `e` here has nothing to do with Euler's number; it is just shorthand for $\times 10^{-16}$ and the like. And `p-value < 2.2e-16` does not mean the p-value is exactly 2.2e-16. It means it is smaller than that.

See also: [[Proportions and Percentages]], [[Squares and Square Roots]], [[t.test()]], [[shapiro.test()]].
