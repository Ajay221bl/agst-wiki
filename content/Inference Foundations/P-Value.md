---
type: atomic
tags:
  - inference
aliases:
  - "p-value"
  - "p value"
  - "P-value low"
status: seedling
---

The p-value answers one question: if nothing were really going on, how often would chance alone give a result at least as extreme as yours? A small p-value means "chance alone would rarely do this".

Let's start with a coin. A friend says it's a fair coin. You flip it 10 times and get 10 heads. Do you believe your friend?

Notice how you just reasoned. You didn't calculate the chance that the coin is fair. You did something sneakier. You said: "Suppose it *is* fair. Then 10 heads in a row would be really weird." And because it would be so weird, you start doubting the "fair" part. That's the whole idea, and you already knew it ([[Rare Event Rule]]).

Now let's make it a number. Pretend the boring story is true; in statistics that boring story is called the null hypothesis, $H_0$ ([[Null and Alternative Hypotheses]]). Imagine running your study over and over in that boring world, thousands of times, and writing down the result each time. Those results pile up into a shape, the null distribution ([[Null Distribution]]). Now put your actual result on that pile ([[Test Statistic]]). What fraction of the pile is at least as far out as yours? That fraction is the p-value.

Why "at least as extreme", and not "exactly yours"? Because any one exact result is unlikely. Getting exactly 5 heads in 10 flips isn't common either, and it's the least surprising thing that could happen. What makes a result surprising is how far out in the [[Tails of a Distribution|tail]] it sits, so we count everything that far out or farther. Which side counts as "farther" depends on what you were looking for ([[One-Tailed vs Two-Tailed Tests]]).

![[P-value as tail area.png|700]]
Assume H₀ is true and draw the curve of test statistics it would produce. The p-value is the red area at least as far out as what was observed (both tails for a two-sided test).

So a small p-value leaves you two choices. Either you just saw something rare, or the boring story is wrong. You decide in advance how rare is rare enough to stop believing the boring story; that cutoff is the [[Significance Level|significance level]], α ([[Critical Value]]). If p ≤ α, you reject $H_0$. If p > α, you [[Why we never accept the null hypothesis|fail to reject]] it, which is not the same as proving it.

For example, testing whether salmonella in ice cream is above 0.3 ($H_A: \mu > 0.3$) gave p ≈ 0.029. If the true mean were really 0.3, a sample this high would turn up only about 3% of the time. With α = 0.05 you'd reject; with α = 0.01 you wouldn't. Same data, different verdict, which is exactly why α has to be chosen before you look ([[Why choose alpha and tails before seeing the data]]).

Now the trap, and almost everybody falls in. The p-value is **not** the chance that $H_0$ is true. Look at how we built it: we *assumed* $H_0$ was true, then asked about the data. "The chance of the data, given the boring story" is a different thing from "the chance of the boring story, given the data", just as "the chance a person who is a basketball player is tall" is different from "the chance a tall person is a basketball player" ([[Conditional Probability]]). A few more traps:
- It is not the chance your result "happened by chance".
- A large p doesn't show $H_0$ is true. It shows you didn't catch it being false.
- A tiny p doesn't mean a big effect. With a huge sample, even a trivial difference gets a tiny p ([[Statistical vs Practical Significance]]).

Try it yourself. A study reports a p-value of about one half. Does that mean there's a fifty-fifty chance the treatment does nothing? No. It means: if the treatment did nothing, results like these would show up about half the time. Nothing surprising happened, so there's no reason to doubt the boring story. That's all.

A p-value is a measure of surprise, never above 1 or below 0. Report the actual number, not just "below 0.05", so readers can apply their own α. R prints very tiny ones in [[Scientific Notation|scientific notation]], and those are tiny, not huge. Fisher meant p-values as rough evidence, not a bright line, and the American Statistical Association warns against treating 0.05 as one.

See also: [[Writing a Conclusion]], [[Effect Size]], [[Why a p-value is not always meaningful]].

Further reading: [[References|Vu and Harrington 2020, Ch. 4]] (§4.3), [[References|Wasserstein and Lazar 2016]].
