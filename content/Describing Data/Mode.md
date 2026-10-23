---
type: atomic
tags:
  - describing-data
aliases:
  - "most frequent value"
  - "bimodal"
status: seedling
---

**In one line:** the mode is the most common value or category; a dataset can have one mode, two (bimodal) or several.

> [!info] Before this, it helps to know
> [[Types of Data]] (the mode is the only centre for unordered categories)

## Start from zero
1. **Some data are labels with no order** ([[Types of Data]]). Ask 20 classmates their favourite colour.
2. **The [[Mean|mean]] fails:** you can't average "green" and "orange".
3. **The [[Median|median]] fails:** "the middle colour" depends on how you happen to order them.
4. **Counting still works.** Which colour was named most often? That is the **mode**. *Why it's the only option here:* counting is the one operation nominal data allow.
5. **Quantitative data have modes too**, read as the peak(s) of a histogram, which is how "unimodal" and "bimodal" are defined ([[Shape of a Distribution]]).

## Why it exists
For **categorical unordered data**, the mode is the only measure of center that maps back to an actual category. Mean and median need numbers or an order.

## A tiny example
Colours coded 1 = red, 2 = green, 3 = orange, 4 = blue. Responses: 2, 2, 3, 3, 1, 4, 3, 2.
- Mean = 20/8 = 2.5: "between green and orange"? Meaningless.
- Recode alphabetically and the mean changes. Still meaningless.
- Modes: green (2) and orange (3), three each → **bimodal**. Informative, and unchanged by recoding.

## Common confusions
- **"The mode is useless for numbers."** It is rarely the best center for continuous data, but bimodality in a histogram is important information.
- **"There is always exactly one mode."** There can be [[Ranks|ties]], or none worth mentioning.

## Connections
- **Builds on:** [[Types of Data]]
- **Leads to:** [[Shape of a Distribution]], [[Plots for Categorical Data]]
- **Part of:** [[MOC - Describing Data]]
- **Go deeper:** [[References|Vu and Harrington 2020, Ch. 1]] (§1.4–1.5)
