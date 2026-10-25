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

Because they're the rules of the game, and you can't set the rules after you've seen the score. α and the direction of the test define what counts as "surprising". Pick them after seeing the result and you can always pick ones that make it significant, and then your real false-positive rate climbs above the α you report. So both are fixed in advance, by what each kind of error would cost and by the scientific question.

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each [[Critical Value|cut-off]] is further out: ±1.96 instead of 1.645.

Start with what α promises. It's the false-positive rate, the share of times you'd cry wolf when there's no wolf. But that promise only holds if the rule was fixed before the data ([[Significance Level]]). A rule you can adjust afterwards isn't a rule.

See how easily it breaks. You run a two-sided test and get p = 0.07. Annoying. Switch to a one-sided test, and the p-value halves. Do that whenever a result is "almost significant", and you've doubled your real Type I error rate while still reporting 5%. The book calls it "unacceptable" ([[References|Vu and Harrington 2020, Ch. 4]], p. 223).

There's a second cost. A one-sided test is blind in the other direction. In the arrhythmia trial, the drug killed patients, an effect a one-sided test looking only for benefit couldn't have seen ([[One-Tailed vs Two-Tailed Tests]]).

So where should α come from? From the stakes. Make it smaller when a Type I error is worse, as with a pacemaker battery, where a false "it's fine" could kill. Make it larger when a Type II error is worse ([[Type I and Type II Errors]]). And it matters: in the salmonella example, p ≈ 0.029 rejects at 0.05 but not at 0.01 ([[P-Value]]). The decision depends on the rule, so the rule has to come first.

The one-tailed test deserves a note of its own. It really is more powerful in its chosen direction, because all of α sits in one [[Tails of a Distribution|tail]]. That extra power is exactly why it needs a reason stated in advance. Choosing it to rescue a result is fishing for significance ([[Statistical Power]]).

Underneath all this is a simple point about honesty. The easiest person to fool is yourself, and the data will always offer you a flattering choice afterwards. Results chased this way are the ones that can't be repeated ([[References|Wasserstein and Lazar 2016]]). Commit first, then look.

See also: [[Family-Wise Type I Error]], [[Null Distribution]], [[Why a p-value is not always meaningful]], [[Why ANOVA instead of many t-tests]].
