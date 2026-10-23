---
type: atomic
tags:
  - inference
aliases:
  - "conservative"
  - "conservative test"
  - "liberal"
  - "liberal test"
  - "conservative adjustment"
status: seedling
---

**In one line:** a **conservative** test or adjustment rejects $H_0$ less often than its stated α allows (fewer false positives, less power); a **liberal** one rejects more often.

> [!info] Before this, it helps to know
> [[Significance Level]] · [[Type I and Type II Errors]] · [[Statistical Power]]

## Start from zero
1. **A test promises a Type I error rate α** when $H_0$ is true ([[Significance Level]]).
2. **The real rate can differ from the promise.** [[Test Assumptions|Assumptions]], approximations or adjustments can push it up or down ([[Robustness]]).
3. **Real rate below α: conservative.** It plays safe, so false positives are rarer than promised.
4. **The price is power.** Fewer rejections [[Grand Mean|overall means]] more missed real effects ([[Type I and Type II Errors]], [[Statistical Power]]). *Why the trade is unavoidable:* making it harder to reject is the same lever for true and false nulls.
5. **Real rate above α: liberal.** More power, more false positives than promised.
6. **Multiple-comparison methods sit on this scale.** Bonferroni is the most conservative common choice; Tukey HSD is less so; no adjustment at all is very liberal for the family ([[Bonferroni Correction]], [[Tukey HSD]], [[Family-Wise Type I Error]]).

## See it

![[Conservative - Bonferroni error rate.png|700]]
*What to look at:* exact calculation for independent tests with every null true. Without correction the chance of a false positive climbs to 0.64 at 20 tests; Bonferroni keeps it just under 0.05.

## Why it exists
It names the direction a method errs in, so you can pick one to match which mistake is worse for your question.

## A tiny example
Exact, independent tests, all nulls true: with 10 tests at 0.05 each, P(at least one false positive) = $1 - 0.95^{10} = 0.40$; with Bonferroni (each at 0.005) it is 0.049.

## Common confusions
- **"More conservative is always safer."** Safer against false positives, but more likely to miss real effects.
- **"Conservative means the [[P-Value|p-values]] are wrong."** They are valid, just cautious: the real error rate is at most α.

## Connections
- **Builds on:** [[Significance Level]], [[Type I and Type II Errors]], [[Statistical Power]]
- **Leads to:** [[Bonferroni Correction]], [[Tukey HSD]], [[Post Hoc Tests]], [[Why a significant ANOVA can have no significant post hocs]]
- **Part of:** [[MOC - Inference Foundations]]
