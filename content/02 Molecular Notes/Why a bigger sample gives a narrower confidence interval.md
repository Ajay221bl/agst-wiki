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

Because the width is just a measure of how much you don't know, and each of these changes that. Half the width of a confidence interval (CI) is a critical value times the standard error (SE), $s/\sqrt{n}$. More data shrinks the standard error, because means of bigger [[Population and Sample|samples]] vary less, so the interval narrows. Asking for more confidence needs a bigger critical value, and noisier data gives a bigger $s$, so both widen it.

![[CI width vs sample size.png|700]]
Same spread in the data, same confidence level, and only n changes. Each fourfold increase in n halves the width.

![[Standard error vs sample size.png|700]]
The standard error drops fast at first and then slowly. Going from 4 to 16 observations halves it, and halving it again needs 64.

Once you see the parts of the interval, every rule follows from it. Width = 2 × critical value × $s/\sqrt{n}$ ([[Confidence Interval]]). Three dials, so three effects.

**The confidence you demand.** More confidence needs a bigger critical value: 1.645, then 1.96, then 2.58. So the interval widens. That's not a flaw, it's the deal. To be more sure you've caught the truth, you cast a wider net. Push it all the way to 100% and the net has to be something like "0 to 200", which is certain and useless.

**The noise in the data.** More variability means a bigger $s$, so the interval widens. If the values themselves are all over the place, any one sample is a shakier guess.

**The amount of data.** A bigger sample means a bigger $\sqrt{n}$ and a smaller standard error, so the interval narrows. Means of big samples vary less ([[Law of Large Numbers]]).

That last dial has a square root on it, and the square root is the hard truth of research. Halving the width needs four times the data ([[Squares and Square Roots]]). Precision gets expensive fast. The first observations teach you a lot, and each extra one teaches you a little less.

So the lesson cuts two ways. More confidence is never free: you pay in width. And a narrow interval is only as good as the sample behind it. Precision from a biased sample is still the wrong answer.

Try it yourself. Your interval is too wide and you want it half as wide, keeping the same confidence level. How much more data do you need? Four times as much, because the width shrinks with the square root of n. And if you raised the confidence level instead, would the interval get wider or narrower? Wider.

See also: [[Point Estimate|estimate]], [[Standard Error]], [[Critical Value]], [[Why the sampling distribution makes inference possible]], [[Statistical Power]].
