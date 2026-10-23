---
type: molecular
tags:
  - molecular
  - study-design
aliases:
  - "blinding after randomization"
  - "placebo and subject roles"
status: seedling
---

> [!summary] In plain words
> Random assignment makes the groups alike at the start. It does nothing about what happens after people know which group they are in: treated subjects feel better or try to please, controls lose heart, and raters see what they expect. Blinding stops that knowledge from becoming a difference between groups.

## The question
If treatments are randomly assigned, why do we still blind participants and evaluators?

## Built from
- [[Random Assignment]]: balances groups at the start.
- [[Blinding and Placebo]]: hides group membership.
- [[Internal Validity]]: connecting the treatment to the outcome.
- [[Nuisance Variables and Confounding]]: knowledge as a confounder.
- [[Randomized Controlled Trial]]: where both are used.

## See it

![[Blinding levels.png|700]]
*What to look at:* Open label, single-blind, double-blind: who knows the group. Each person who knows is another route for expectations to leak into the outcome.

## The reasoning, step by step
1. [[Random Assignment]] balances everything about the units, measured or not, at the moment of assignment.
2. After assignment, knowing your group changes behaviour: the placebo effect, the "good subject" who tries to help, the "screw you" subject, evaluation apprehension, and controls who become demoralised or compete.
3. Evaluators who know the group can rate differently, even without meaning to.
4. Those effects differ by group, so they become a second difference besides the treatment: a confounder created after randomisation ([[Nuisance Variables and Confounding]], [[Internal Validity]]).
5. Blinding (and a placebo) keeps the knowledge equal across groups, so the only systematic difference left is the treatment ([[Blinding and Placebo]]).
6. When blinding is impossible (surgery vs physical therapy), say so as a limitation.

## What would go wrong otherwise
A perfectly randomised trial can still show a "treatment effect" that is really an expectation effect.

## Connections
- **Related:** [[Why random assignment and random sampling protect different things]], [[Why RCTs trade external validity for internal validity]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Study Design and Sampling]]
