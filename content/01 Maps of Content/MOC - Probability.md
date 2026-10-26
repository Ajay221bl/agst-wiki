---
type: moc
tags:
  - moc
  - probability
status: growing
---

> [!tip] New to this?
> Read [[Why probability comes before statistics]] first. It explains why statistics starts with dice and drug tests.

Probability is the language a p-value is written in.

*Reading:* [[References|Vu and Harrington 2020, Ch. 2]].

## 1. The building blocks
- [[Sample Space and Events]]: every possible outcome, and the groups of outcomes you care about
- [[Classical vs Relative Frequency Probability]]: working out chances on paper versus counting what actually happened
- [[Law of Large Numbers]]: why the share of times something happens settles down over many tries
- [[Random Variable]]: a number decided by chance, and its distribution
- [[Probability Distribution]]: every possible value and its chance, shown as bars or as area under a curve
- [[Expected Value]]: the long-run average of a random variable

## 2. Combining events
- [[Complementary Events]]: $1 - P(A)$, the shortcut for "at least one"
- [[Disjoint Events]]: events that cannot happen together
- [[Independent Events]]: one event does not change the chance of the other, which is not the same as disjoint
- [[Addition Rule]]: the chance of "A or B", minus the overlap
- [[Multiplication Rule]]: the chance of "A and B", with or without putting items back
- [[Sampling With and Without Replacement]]: putting an item back keeps the draws independent, and keeping it out makes them dependent
- [[Venn Diagram]]: events drawn as circles, with probabilities as areas

## 3. Conditioning
- [[Contingency Table]]: the table every conditional question is read from
- [[Conditional Probability]]: a chance worked out only among the cases that meet a condition
- [[Bayes' Theorem]]: turning a conditional probability around
- [[Odds and Odds Ratio]]: the chance something happens divided by the chance it doesn't, and how to compare two groups

## 4. Diagnostic testing
- [[Sensitivity and Specificity]]: how well the test itself performs
- [[Predictive Values and Prevalence]]: what a result means for one person, which depends on how common the condition is

## 5. The bridge to inference
- [[Rare Event Rule]]: if something very unlikely under an assumption happens anyway, the assumption is probably wrong

## Why notes on this topic
- [[Why probability comes before statistics]]
- [[Why a positive test can still mean you are probably healthy]]
- [[Why ANOVA instead of many t-tests]], which shows the complement rule at work

## Other maps
[[MOC - Basics from Zero]] · [[MOC - Inference Foundations]] · [[index|Home]]
