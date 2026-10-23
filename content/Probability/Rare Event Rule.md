---
type: atomic
tags:
  - probability
  - inference
aliases:
  - "rare event rule for inferential statistics"
status: seedling
---

If something you observed would be extremely unlikely under some [[Test Assumptions|assumption]], you conclude that the assumption is probably wrong.

Suppose you assume a coin is fair. A friend flips it and gets heads 20 times in a row. If the coin really is fair, the chance of that is $0.5^{20} \approx 0.00000095$ ([[Multiplication Rule]]). That number is a [[Conditional Probability|conditional probability]]: it is only as good as the assumption behind it. Now there are two explanations. Either you just saw a one-in-a-million event, or the coin isn't fair. The sensible choice is to trust what you saw and doubt the assumption: the coin is probably weighted.

As a rule: if, under a given assumption, the probability of what you observed is extremely small, conclude that the assumption is probably not correct.

This is the logic of every hypothesis test ([[Hypothesis Testing]]). The assumption is the null hypothesis ([[Null and Alternative Hypotheses]]). The probability of what you observed, or something more extreme, is the [[P-Value|p-value]]. And "extremely small" is decided in advance as the [[Significance Level|significance level]], α.

For example:

| Heads in a row | Probability with a fair coin |
|---|---|
| 3 | 0.125 |
| 5 | 0.031 |
| 10 | 0.001 |
| 20 | 0.00000095 |

Three heads in a row is mildly suspicious; twenty is very hard to believe.

A rare result doesn't prove the assumption false. It makes it hard to believe, not impossible: rare things do happen, and that is exactly what a Type I error is ([[Type I and Type II Errors]]). And a result that isn't rare doesn't prove the assumption true. It only means there is no strong evidence against it ([[Why we never accept the null hypothesis]]).

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
