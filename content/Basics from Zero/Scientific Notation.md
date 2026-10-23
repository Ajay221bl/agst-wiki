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

**In one line:** R writes very small or very large numbers as "number e [[Statistical Power|power]]", so `2.2e-16` means $2.2 \times 10^{-16}$ = 0.00000000000000022.

> [!info] Before this, it helps to know
> [[Proportions and Percentages]] (p-values live between 0 and 1) · [[Squares and Square Roots]] (powers, one more step)

## Start from zero
1. **Powers of ten count zeros.** $10^3 = 1000$ (three zeros); $10^{-3} = 0.001$ (the 1 sits three places after the point).
2. **Any number can be written as (a number between 1 and 10) × (a power of ten).** 15,000 = $1.5 \times 10^4$; 0.0034 = $3.4 \times 10^{-3}$. *Why bother:* very small and very large numbers become short and easy to compare by their power.
3. **R writes "× 10 to the power" as `e`.** So:
   - `1.5e+04` = 15,000
   - `3.4e-3` = 0.0034
   - `2.2e-16` = 0.00000000000000022
4. **Read the power first.** A more negative power means a smaller number: `1e-10` is far smaller than `1e-3`. *Why this matters in this course:* p-values are often tiny, and `p-value < 2.2e-16` just means "smaller than the smallest number R bothers to print", reported as p < 0.001 ([[P-Value]]).

## Why it exists
Printing sixteen zeros wastes space, and computers cannot store infinitely small numbers precisely. R prints `p-value < 2.2e-16` when the true p-value is smaller than the smallest gap it can reliably represent.

## A tiny example
R output: `t = -5.4548, df = 129, p-value = 2.411e-07`.
Read the p-value as 0.0000002411. It is tiny, not 2.4.

## Common confusions
- **"e means Euler's number here."** In R output, `e-16` is shorthand for $\times 10^{-16}$.
- **"A p-value of 2.2e-16 is exactly that number."** It means "smaller than this"; the true value could be even smaller.

## Connections
- **Builds on:** [[Proportions and Percentages]], [[Squares and Square Roots]]
- **Leads to:** [[P-Value]], [[t.test()]], [[shapiro.test()]]
- **Part of:** [[MOC - Basics from Zero]]
