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

Drawing with replacement puts each item back before the next draw, so the draws are independent. Drawing without replacement keeps each item out, so the chances change from one draw to the next.

Whether you put things back changes the odds, because it changes what's left. The chance of drawing something depends on what is in the bag: the number of items you want divided by the total ([[Classical vs Relative Frequency Probability]], [[Ratios and Fractions]]). If you put each item back, the bag is the same every time, and the second draw doesn't depend on the first ([[Independent Events]]). If you keep it out, the bag changes: there are fewer items, and fewer of the kind you drew. The second chance now depends on the first ([[Conditional Probability]]). So the rule for "and" changes. With replacement it is $P(A)P(B)$; without replacement it is $P(A)P(B \mid A)$ ([[Multiplication Rule]]).

Real sampling is usually without replacement, since you don't survey the same person twice. It is still treated as independent when the population is much bigger than the sample, because removing a few people barely changes the bag. The book's rule of thumb is a sample of under 10% of the population ([[Random Sampling]]).

![[With vs without replacement.png|700]]
The same bag, the same question, two answers: 0.36 with replacement, 0.30 without.

This matters because whether the draws are independent decides which multiplication rule applies, and independence is an [[Test Assumptions|assumption]] of every test ([[Why independence is judged from the design, not a test]]).

For example, the chance of two clubs from a deck is $\frac{13}{52} \times \frac{12}{51} \approx 0.059$ without replacement and $\frac{13}{52} \times \frac{13}{52} = 0.0625$ with replacement.

Always ask what the bag looks like at the moment you draw. Drawing without replacement makes events dependent, not mutually exclusive ([[Disjoint Events]]). And a sample doesn't need replacement to be random. Random sampling is normally done without replacement, and independence is close enough when the sample is small compared with the population.
