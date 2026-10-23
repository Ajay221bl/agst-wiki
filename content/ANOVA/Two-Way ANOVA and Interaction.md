---
type: atomic
tags:
  - anova
aliases:
  - "two-way ANOVA"
  - "two-way"
  - "interaction"
  - "interaction effect"
  - "main effect"
  - "main effects"
  - "factorial design"
status: seedling
---

**In one line:** a two-way ANOVA tests two factors at once: a **main effect** for each, plus an **interaction**, which asks whether one factor's effect depends on the level of the other.

> [!info] Before this, it helps to know
> [[Factors and Levels]] · [[One-Way ANOVA]] · [[Statistical Model]]

> [!note] Short note
> A short note. It gives the idea so the term makes sense where it appears.

## Start from zero
1. **A one-way ANOVA has one factor** with several levels ([[Factors and Levels]], [[One-Way ANOVA]]).
2. **Many questions have two**: fertilizer (yes/no) and watering (low/high). Crossing them gives every combination (a factorial design).
3. **Each factor gets a main effect**: does fertilizer change the mean, averaged over watering?
4. **The interaction asks whether the effects add up.** If fertilizer adds the same amount at both waterings, no interaction; if it helps much more when watered, there is one. *Why test it first:* if there is an interaction, "the effect of fertilizer" has no single answer, so main effects alone mislead.
5. **The model adds a term for each**: grand mean + factor A + factor B + A×B + [[Residuals|residual]] ([[Statistical Model]], [[Grand Mean]]). Each gets its own F test in one ANOVA table ([[ANOVA Table]]).
6. **One two-way ANOVA beats separate one-way ANOVAs.** It uses all the data for both questions and can see the interaction, which separate tests cannot ([[Why ANOVA instead of many t-tests]]).

## See it

![[Interaction plot - schematic.png|700]]
*What to look at:* schematic, not data. Parallel lines: the factors add (no interaction). Lines that spread apart: fertilizer's effect depends on water (interaction).

## Why it exists
Real treatments act together. Testing them separately wastes data and can't detect that the combination behaves differently.

## A tiny example
Schematic numbers: without fertilizer, means 2 (low water) and 4 (high water); with fertilizer, 3 and 5. Fertilizer adds 1 at both, so no interaction. If the high-water fertilized mean were 8, fertilizer would add 1 at low water and 4 at high water: an interaction.

## Common confusions
- **"More groups means more factors."** Four fertilizer types are four levels of one factor; a second factor is a different variable.
- **"No main effect means the factor doesn't matter."** With an interaction, its effects can cancel on average and still be large at particular levels.

## Connections
- **Builds on:** [[Factors and Levels]], [[One-Way ANOVA]], [[Statistical Model]]
- **Leads to:** [[ANOVA Table]], [[Test Choice Guide]]
- **Part of:** [[MOC - ANOVA]]
