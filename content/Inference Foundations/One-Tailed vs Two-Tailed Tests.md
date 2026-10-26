---
type: atomic
tags:
  - inference
aliases:
  - "one-sided test"
  - "two-sided test"
  - "left-tailed"
  - "right-tailed"
  - "alternative = less"
status: seedling
---

A one-tailed test only looks for a difference in one direction you named in advance. A two-tailed test looks for a difference in either direction, and it's the safe default.

Suppose you're testing whether a new drug changes blood pressure. You hope it lowers it. Should you only watch for "lower"? What if it raises it? You'd want to know that too, wouldn't you? Very much so.

That's the whole question: which surprises count? The alternative hypothesis, $H_A$, decides ([[Null and Alternative Hypotheses]]). A surprise means a result far out in a tail of the null distribution, and $H_A$ says which tail or tails you're watching ([[Null Distribution]]):

| $H_A$ | Test | Reject when you see... | R `alternative =` |
|---|---|---|---|
| $\mu < \mu_0$ | left-tailed ("**l**ess" goes with "**l**eft") | something unusually low | `"less"` |
| $\mu > \mu_0$ | right-tailed | something unusually high | `"greater"` |
| $\mu \ne \mu_0$ | two-tailed | something unusually low **or** high ($\alpha/2$ per tail) | `"two.sided"` (default) |

Now here's the bookkeeping. Your total false-alarm budget is α, say 5% ([[Significance Level]]). If you watch both directions, you have to split the budget: half for "surprisingly low", half for "surprisingly high". If you watch only one direction, you can spend all 5% there. That makes it easier to reject in your chosen direction, and impossible in the other.

![[One vs two tailed rejection regions.png|700]]
The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each [[Critical Value|cut-off]] is further out (±1.96 instead of 1.645).

See how the two-tailed cut-offs sit further out? That's the price of watching both sides.

For example, in a book example with t = 1.80, the two-sided p = 0.072, so you [[Why we never accept the null hypothesis|fail to reject]] at 0.05. The one-sided p = 0.036, so you reject. The one-sided p-value is exactly half the two-sided one, because it only counts one tail ([[References|Vu and Harrington 2020, Ch. 4]], p. 222).

You can see the temptation, can't you? A two-sided p just misses 0.05, so you think, "Well, I always expected it to go *that* way," and switch to one tail. Now it's significant. But that's cheating, and not just morally. If you pick the tail after seeing which way the data went, you've really been watching both tails, with the full α on each, so your actual false-alarm rate is doubled ([[Why choose alpha and tails before seeing the data]], [[Type I and Type II Errors|Type I error]]).

And being blind to one direction can be deadly. In an arrhythmia trial described in the book (p. 223), researchers ran a one-sided test because they were sure a new drug would reduce deaths. In fact it was almost 4 times as likely to kill patients as a [[Blinding and Placebo|placebo]]. A one-sided test pointed the other way can't see that.

So when is one tail fair? When only one direction could possibly matter, and you said so before collecting data, such as salmonella being *above* a safe level.

Try it yourself. You plan a two-tailed test at α = 0.05. How much of α sits in each tail? Half of it, α/2, on each side. Want to know why the two-sided cut-off is 1.96 rather than 1.645? That's why.

See also: [[Tails of a Distribution|tails]], [[P-Value]], [[t.test()]], [[Critical Value|cut-off]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (pp. 222–223).
