---
type: atomic
tags:
  - inference
aliases:
  - "alpha"
  - "significance threshold"
  - "rejection region"
status: seedling
---

**In one line:** the significance level α is the cutoff for "unusual" chosen before the study, and it equals the probability of a Type I error you are willing to accept.

> [!info] Before this, it helps to know
> [[P-Value]] (what gets compared with α) · [[Null Distribution]] (α is an area on it) · [[Type I and Type II Errors]] (what α controls)

## Start from zero
1. **A p-value needs a cutoff for "too rare to believe $H_0$".** Decide it **before collecting data**. *Why before:* choosing it after seeing p lets you pick whatever cutoff gives the answer you want ([[Why choose alpha and tails before seeing the data]]).
2. **That threshold is α.** Common choices: **0.05** (the usual default), 0.01, sometimes 0.10.
3. **α is the false-alarm rate.** If $H_0$ is true, results this extreme happen with probability α, so you will wrongly reject it with probability α ([[Type I and Type II Errors]]).
4. **On the null distribution, α is an area.** The **rejection region** is the set of [[Test Statistic|test statistics]] extreme enough to reject; its area is α, and its edge is the [[Critical Value]] ([[Null Distribution]]).
5. **Lower α is not free.** Fewer false alarms means more missed real effects, so less power ([[Statistical Power]]).

## See it

![[One vs two tailed rejection regions.png|700]]
*What to look at:* The 5% rejection region goes wherever the alternative points. A two-tailed test splits it, so each cut-off is further out (±1.96 instead of 1.645).

## Why it exists
Without a pre-set threshold, people choose the cutoff after seeing the p-value, which defeats the purpose ([[Why choose alpha and tails before seeing the data]]).

**Choosing α** (book pp. 221–222):
- If a **Type I error is costlier**, use a smaller α (0.01). A drug regulator wants to avoid approving an ineffective drug.
- If a **Type II error is costlier**, a larger α (0.10) may be reasonable.

## A tiny example
Pacemaker: claiming a battery lasts more than 300 days when it doesn't means patients skip check-ups and "don't make it". That Type I error is worse, so **shrink α**.

## Common confusions
- **"α is the p-value."** α is fixed in advance; the p-value comes from the data.
- **"Smaller α is always better."** It raises the Type II error rate unless $n$ grows ([[Statistical Power]]).

## Connections
- **Builds on:** [[P-Value]], [[Hypothesis Testing]], [[Null Distribution]], [[Type I and Type II Errors]]
- **Leads to:** [[Type I and Type II Errors]], [[Statistical Power]], [[Bonferroni Correction]]
- **Part of:** [[MOC - Inference Foundations]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 4]] (pp. 221–222)
