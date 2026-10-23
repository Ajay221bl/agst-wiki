---
type: atomic
tags:
  - probability
aliases:
  - "with replacement"
  - "without replacement"
  - "replacement"
status: seedling
---

Drawing **with replacement** puts each item back before the next draw, so the draws are independent; **without replacement** keeps it out, so later probabilities change.

1. **A probability of drawing something depends on what is in the bag**: favourable ÷ total ([[Classical vs Relative Frequency Probability]], [[Ratios and Fractions]]).
2. **Put the item back, and the bag is the same every time.** The second draw doesn't know about the first, so the draws are independent ([[Independent Events]]).
3. **Keep it out, and the bag changes.** Fewer items, and fewer of the kind you drew. The second probability is now conditional on the first ([[Conditional Probability]]).
4. **So the "and" rule changes form.** With replacement: $P(A)P(B)$. Without: $P(A)P(B \mid A)$ ([[Multiplication Rule]]).
5. **Real sampling is usually without replacement** (you don't survey a person twice). *Why it is still treated as independent:* when the population is huge compared with the sample, removing a few barely changes the bag. The book's rule of thumb is a sample under 10% of the population ([[Random Sampling]]).

![[With vs without replacement.png|700]]
The same bag, the same question, two answers: 0.36 with replacement, 0.30 without.

Whether the draws are independent decides which multiplication rule applies, and independence is an [[Test Assumptions|assumption]] of every test ([[Why independence is judged from the design, not a test]]).

For example:

Two clubs from a deck: without replacement $\frac{13}{52} \times \frac{12}{51} \approx 0.059$; with replacement $\frac{13}{52} \times \frac{13}{52} = 0.0625$ ([[Multiplication Rule]]).

Common mistakes:

- **"Without replacement means the events are disjoint."** No: they are dependent, not mutually exclusive ([[Disjoint Events]]).
- **"Samples must be drawn with replacement to be random."** Random sampling is normally without replacement; independence is close enough when the sample is small relative to the population.
