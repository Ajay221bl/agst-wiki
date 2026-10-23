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

A two-way ANOVA tests two factors at once. It gives a **main effect** for each factor, plus an **interaction**, which asks whether one factor's effect depends on the level of the other.

A one-way ANOVA has one factor with several levels ([[Factors and Levels]], [[One-Way ANOVA]]). Many questions have two, such as fertilizer (yes or no) and watering (low or high). Crossing them gives every combination, which is called a factorial design.

Each factor gets a main effect: does fertilizer change the mean, averaged over the watering levels? The interaction asks whether the effects simply add up. If fertilizer adds the same amount at both watering levels, there is no interaction. If it helps much more when the plants are well watered, there is one. Check the interaction first: if there is one, "the effect of fertilizer" has no single answer, so the main effects alone mislead.

The model adds a term for each: grand mean + factor A + factor B + the A×B interaction + [[Residuals|residual]] ([[Statistical Model]], [[Grand Mean]]). Each term gets its own F test in one ANOVA table ([[ANOVA Table]]).

One two-way ANOVA is better than separate one-way ANOVAs. It uses all the data for both questions and can see the interaction, which separate tests can't ([[Why ANOVA instead of many t-tests]]).

![[Interaction plot - schematic.png|700]]
Schematic, not data. Parallel lines: the factors add (no interaction). Lines that spread apart: fertilizer's effect depends on water (interaction).

Real treatments act together. Testing them separately wastes data and can't detect that the combination behaves differently.

For example, with made-up numbers: without fertilizer, the means are 2 (low water) and 4 (high water); with fertilizer, they are 3 and 5. Fertilizer adds 1 at both levels, so there is no interaction. If the high-water fertilized mean were 8, fertilizer would add 1 at low water and 4 at high water: an interaction.

More groups don't mean more factors. Four fertilizer types are four levels of one factor; a second factor is a different variable. And no main effect doesn't mean the factor doesn't matter. With an interaction, its effects can cancel out on average and still be large at particular levels.

See also: [[Test Choice Guide]].
