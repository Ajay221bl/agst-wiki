---
type: molecular
tags:
  - molecular
  - t-tests
aliases:
  - "Welch default"
  - "pooled vs Welch"
status: seedling
---

Why does [[t.test()|t.test]]() use Welch's version by default, and when would you use the pooled test?

Because it's the better bet. The pooled two-sample t-test assumes both populations have the same [[Variance|variance]]. When that's true, it gains a little power. When it's false, especially with groups of different sizes, it can give badly wrong p-values. Welch's test drops the [[Test Assumptions|assumption]] and costs almost nothing when the variances happen to be equal. Small downside, large upside, so R makes it the default. Use the pooled test only when you have a real reason to believe the variances match.

![[Pooled variance weighting.png|700]]
Pooling averages the two variances, weighted by degrees of freedom (df), so it leans towards the bigger group. If the variances really differ, one number misstates at least one group. Illustrative values.

Think about what pooling actually does. It takes the two groups' variances and blends them into one shared estimate ([[Pooled Variance]]). That's only honest if there really is one shared variance underneath ([[Homogeneity of Variance]]).

If there is, blending is smart. You're using both groups' information to estimate one thing, so the estimate is sharper and the test slightly more powerful.

If there isn't, blending is a mistake. One number now has to stand in for two different spreads, and it can't describe both. It leans towards the bigger group, because the blend is weighted by size. With [[Balanced Design|unequal group sizes]], the pooled [[Standard Error|standard error]] comes out wrong, and the p-value can be too small or too large. You won't know which.

Welch's test refuses to blend. It keeps each group's own variance and adjusts the degrees of freedom to match, which is why R prints df that aren't whole numbers ([[Welch's t-Test]], [[Degrees of Freedom]]).

So compare the two bets. Choose Welch and the variances are equal: you lose a sliver of power. Choose pooled and the variances differ: your p-value can be misleading. When one choice risks a little and the other risks a lot, you don't need to know the future to decide. Pick the one that fails gracefully.

That's why defaulting to the pooled test would mislead in exactly the unbalanced, unevenly spread data that field studies tend to produce.

Try it yourself. Your output shows degrees of freedom with a decimal point, not a whole number. Did something break? No. That's Welch's adjustment at work. It keeps each group's own variance, and the degrees of freedom it ends up with needn't be a whole number. A pooled test would have given a whole number.

See also: [[Two-Sample Independent t-Test]], [[Why check assumptions before trusting a test]], [[Why a two-group ANOVA gives F equal to t squared]].
