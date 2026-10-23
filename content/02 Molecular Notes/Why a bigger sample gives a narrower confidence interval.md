---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "what changes CI width"
status: seedling
---

Why do the confidence level, the [[Variability|variability]] and the [[Sample Size|sample size]] change the width of a confidence interval the way they do?

Half the width of a confidence interval (CI) is a critical value times the standard error (SE), $s/\sqrt{n}$. More data shrink the standard error, because means of bigger [[Population and Sample|samples]] vary less, so the interval narrows. Higher confidence needs a bigger critical value, and more variable data give a bigger $s$, so both widen it.

![[CI width vs sample size.png|700]]
Same data spread, same confidence level; only n changes. Each fourfold increase in n halves the width.

![[Standard error vs sample size.png|700]]
The SE drops fast at first and then slowly: going from 4 to 16 observations halves it, and halving it again needs 64.

1. Width = 2 × critical value × $s/\sqrt{n}$ ([[Confidence Interval]]).
2. **Higher confidence** needs a bigger critical value (1.645, then 1.96, then 2.58), so the interval is wider. A wider net is needed to be more certain. A 100% interval would have to be something like "0 to 200", which says nothing.
3. **More variability** means a bigger $s$, so the interval is wider.
4. **A bigger sample** means a bigger $\sqrt{n}$ and a smaller standard error, so the interval is narrower. Means of big samples vary less ([[Law of Large Numbers]]).
5. Because of the square root, halving the width needs four times the data ([[Squares and Square Roots]]).

Without this, people might think more confidence is free, or that a narrow interval from a biased sample can be trusted.

See also: [[Point Estimate|estimate]], [[Standard Error]], [[Critical Value]], [[Why the sampling distribution makes inference possible]], [[Statistical Power]].
