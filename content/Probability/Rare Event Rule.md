---
type: atomic
tags:
  - probability
  - inference
aliases:
  - "rare event rule for inferential statistics"
status: seedling
---

If something we observed would be extremely unlikely under an [[Test Assumptions|assumption]], we conclude the assumption is probably wrong.

1. **Make an assumption.** The coin is fair.
2. **Observe something.** A friend flips it and gets heads 20 times in a row.
3. **Compute how likely that observation is, assuming the assumption.** If the coin is fair, the chance is $0.5^{20} \approx 0.00000095$ ([[Multiplication Rule]]). *Why "assuming":* it is a conditional probability; it is only as good as the assumption ([[Conditional Probability]]).
4. **Two explanations remain:** either you just witnessed a one-in-a-million event, or the assumption is wrong.
5. **Trust what you saw, doubt the assumption.** The coin is probably weighted.
6. **Written as a rule:** if, under a given assumption, the probability of a particular observed event is extremely small, we conclude that the assumption is probably not correct.
7. **This is hypothesis testing in miniature.** The assumption is $H_0$, the probability is the p-value, and "extremely small" is decided in advance as α ([[Hypothesis Testing]], [[P-Value]], [[Significance Level]]).

This one sentence is the logic of every hypothesis test.
- The "assumption" is the null hypothesis ([[Null and Alternative Hypotheses]]).
- The "probability of the observed event (or something more extreme)" is the [[P-Value]].
- "Extremely small" is set by the [[Significance Level]] α.

For example:

| Heads in a row | Probability with a fair coin |
|---|---|
| 3 | 0.125 |
| 5 | 0.031 |
| 10 | 0.001 |
| 20 | 0.00000095 |

"After 3 heads you should be raising an eyebrow, after 5 for sure... and hopefully you gave them no money."

Common mistakes:

- **"A rare result proves the assumption false."** It makes the assumption implausible, not impossible. Rare things do happen, which is exactly what a Type I error is ([[Type I and Type II Errors]]).
- **"If the result isn't rare, the assumption is true."** You just lack evidence against it ([[Why we never accept the null hypothesis]]).

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3).
