---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "what changes CI width"
status: seedling
---

A classic question: "All of these increase CI width *except*..." Why do confidence level, [[Variability|variability]] and [[Sample Size|sample size]] push the width the way they do?

A CI's half-width is a critical value times the standard error, $s/\sqrt{n}$. More data shrinks the SE ([[Population and Sample|sample]] means vary less), so the interval narrows. Higher confidence needs a bigger critical value, and more variable data a bigger $s$, so both widen it.

![[CI width vs sample size.png|700]]
Same data spread, same confidence level; only n changes. Each fourfold increase in n halves the width.

![[Standard error vs sample size.png|700]]
The SE drops fast at first and then slowly: going from 4 to 16 observations halves it, and halving it again needs 64.

1. Width = 2 × critical value × $s/\sqrt{n}$ ([[Confidence Interval]]).
2. **Confidence ↑** → critical value ↑ (1.645 → 1.96 → 2.58) → wider. A wider net is needed to be more certain; a 100% CI would be "0 to 200 just in case".
3. **Variability ↑** → $s$ ↑ → wider.
4. **Sample size ↑** → $\sqrt{n}$ ↑ → SE ↓ → narrower. Means of big samples vary less ([[Law of Large Numbers]]).
5. Because of the square root, halving the width needs four times the data ([[Squares and Square Roots]]).

Without this, people might think more confidence is free, or that a narrow interval from a biased sample is trustworthy.

See also: [[Point Estimate|estimate]], [[Standard Error]], [[Critical Value]], [[Why the sampling distribution makes inference possible]], [[Statistical Power]].
