---
type: atomic
tags:
  - study-design
aliases:
  - "control group"
  - "control groups"
  - "treatment group"
  - "treatment groups"
  - "control"
  - "comparison group"
status: seedling
---

**In one line:** in an experiment the **treatment group** gets the thing being tested and the **control group** gets nothing, a placebo or the current standard, so the difference between them shows the treatment's effect.

> [!info] Before this, it helps to know
> [[Experiment]] · [[Independent and Dependent Variables]] · [[Random Assignment]]

## Start from zero
1. **An experiment changes something on purpose** and watches the outcome ([[Experiment]], [[Independent and Dependent Variables]]).
2. **But outcomes change anyway**: plants grow, patients recover, people feel better because they expect to.
3. **So we need a comparison**: units treated in every way the same except the treatment. That is the control group. *Why:* the difference between groups is then the treatment's effect, and not time, season or expectation.
4. **The groups must be alike at the start.** Random assignment makes them alike on average, measured and unmeasured ([[Random Assignment]]).
5. **Expectations need controlling too.** A placebo and blinding give the control group the same beliefs ([[Blinding and Placebo]]).
6. **In ANOVA language the groups are levels of one factor**, e.g. treatment A, treatment B and control ([[Factors and Levels]]).

## See it

![[Treatment and control groups.png|700]]
*What to look at:* random assignment splits the units; the only planned difference between the arms is the treatment, so the gap in outcomes is its effect.

## Why it exists
Without a control group, "they got better" can't be separated from "they would have got better anyway".

## A tiny example
Stem-cell sheep: 9 got stem cells (treatment), 9 got a control. Heart pumping capacity fell in the controls (mean change −4.3) and rose in the treated sheep (+3.5); the comparison, not the treated group alone, is the evidence ([[Two-Sample Independent t-Test]]).

## Common confusions
- **"A control group gets nothing at all."** It can get a placebo or the current standard treatment; what matters is that it differs only in the treatment.
- **"Before vs after on the same units is a control."** A pre-post design has no separate control group, so time effects are not ruled out ([[Internal Validity]]).

## Connections
- **Builds on:** [[Experiment]], [[Independent and Dependent Variables]], [[Random Assignment]]
- **Leads to:** [[Blinding and Placebo]], [[Randomized Controlled Trial]], [[Factors and Levels]], [[Internal Validity]]
- **Part of:** [[MOC - Study Design and Sampling]]
