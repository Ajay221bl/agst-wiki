---
type: molecular
tags:
  - molecular
  - inference
aliases:
  - "pre-specify the test"
  - "no switching to one-sided"
status: seedling
---

Why must α, and the choice between a one-tailed and a two-tailed test, be decided before looking at the data?

α and the direction of the test define what counts as "surprising". If you pick them after seeing the result, you can always pick ones that make it significant, and the real false-positive rate climbs above the α you report. So both are fixed in advance, by the costs of each kind of error and by the scientific question.

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each [[Critical Value|cut-off]] is further out (±1.96 instead of 1.645).

1. α is only the false-positive rate if the rule was fixed before the data ([[Significance Level]]).
2. Switching to a one-sided test after a two-sided p of 0.07 halves the p-value. Doing that whenever a result is "almost significant" doubles the real Type I error rate. The book calls it "unacceptable" ([[References|Vu and Harrington 2020, Ch. 4]], p. 223).
3. A one-sided test also can't see effects in the other direction, as in the arrhythmia trial where the drug killed patients ([[One-Tailed vs Two-Tailed Tests]]).
4. α should come from the stakes: smaller when a Type I error is worse (as with the pacemaker battery), larger when a Type II error is worse ([[Type I and Type II Errors]]).
5. The salmonella example shows why it matters: p ≈ 0.029 rejects at 0.05 but not at 0.01 ([[P-Value]]).
6. A one-tailed test is more powerful in its chosen direction, because all of α sits in one [[Tails of a Distribution|tail]]. That extra power is exactly why it needs a reason stated in advance. Choosing it to rescue a result is fishing for significance ([[Statistical Power]]).

Chasing significance in this way makes published results that can't be repeated ([[References|Wasserstein and Lazar 2016]]).

See also: [[Family-Wise Type I Error]], [[Null Distribution]], [[Why a p-value is not always meaningful]], [[Why ANOVA instead of many t-tests]].
