---
type: molecular
tags:
  - molecular
  - anova
aliases:
  - "significant ANOVA, no pairwise differences"
status: seedling
---

Can a one-way ANOVA be significant while none of the pairwise comparisons are? Why?

Yes, and it isn't a contradiction. The [[One-Way ANOVA|overall test]] looks at the whole picture at once, while each post hoc test looks at one pair, with less data and a stricter bar. A pattern can be clear in the whole and too faint in every part. There are four reasons this happens: the adjustment is [[Conservative Tests|conservative]], the pairwise tests have less power, the real difference may be a combination of groups, and broken [[Test Assumptions|assumptions]] can make post hoc tests behave unpredictably.

The first time you see this, it feels like the software is broken. It isn't. The two tests are asking different questions with different amounts of evidence, so take them one at a time.

**The bar is higher for each pair.** Post hoc tests penalize each pairwise p-value for the number of comparisons, to stop false positives piling up. That's the point of them. But the penalty can be heavy, sometimes heavier than it needs to be ([[Bonferroni Correction]]).

**Each pair sees less of the data.** The overall test uses every observation in the study. A pairwise test uses only two groups. Less data means less power, especially when the groups are [[Balanced Design|unequal in size]] ([[Statistical Power]]).

**The difference may not live in any single pair.** Suppose group A differs from the *average* of B, C and D, while no single one of them is far enough from A on its own. The overall test catches the pattern. No pairwise test can, because it never looks at B, C and D together ([[Post Hoc Tests]]).

**Broken assumptions muddy everything.** Non-normal data or unequal variances make post hoc tests behave unpredictably. Check the assumptions, and consider nonparametric tests with nonparametric post hoc tests ([[ANOVA Assumptions]], [[Nonparametric Alternatives]]).

So the forest can be clearly there even when no single tree stands out. If you don't understand this, you might throw away a perfectly good significant ANOVA, or go hunting for a bug that isn't there. The honest report is both results, side by side, with the reason they differ.

Try it yourself. Your ANOVA gives p just under α, and Tukey's test finds no pair significant. Should you report "no differences"? No. Report that the overall test found evidence the means aren't all equal, but the data weren't strong enough to say which pairs differ. More data per group is the usual fix.

See also: [[Tukey HSD]], [[Why post hoc tests only after a significant ANOVA]], [[Why check assumptions before trusting a test]].
