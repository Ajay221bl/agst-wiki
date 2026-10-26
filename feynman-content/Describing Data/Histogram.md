---
type: atomic
tags:
  - describing-data
aliases:
  - "histograms"
  - "dot plot"
  - "density plot"
  - "bins"
  - "bin width"
status: seedling
---

A histogram sorts the values of a quantitative variable into ranges called bins, and draws a bar for each bin. The bar's height is the number, or share, of values that fall in it.

Our eyes are good at shapes and bad at long lists of numbers. A histogram turns one into the other. A list of 22 tree heights is hard to take in. To see the shape of the whole set at once, split the measurement scale into bins, say 5 m wide (25 to 30, 30 to 35, and so on). Bins are needed because with a continuous variable almost no two values are exactly equal, so counting exact values shows nothing ([[Types of Data]]). Count how many values fall in each bin and draw a bar of that height, or of that share of the total ([[Proportions and Percentages]]). Then read the outline: where most values are, how spread out they are, and whether there is a long [[Tails of a Distribution|tail]] or a second peak ([[Shape of a Distribution]]).

The bin width is a choice. Software picks one for you, and different widths can make the same data look quite different. With small samples a histogram can mislead, so checks for normality add a [[Q-Q Plot|Q-Q plot]]. With a huge sample and very thin bins, the outline becomes a smooth curve: the density curve of a [[Probability Distribution|probability distribution]].

![[Histogram - canopy trees.png|700]]
Bar heights are counts per 5 m bin. Adding them gives n = 22, and counting up to the 11th and 12th values shows the [[Median|median]] sits in the 35–40 m bin.

Summary numbers hide shape: two data sets can share a [[Mean|mean]] and [[Standard Deviation|standard deviation]] and look nothing alike. The histogram is the first tool for checking normality and spotting outliers before any test ([[Why visualize data before testing]], [[Normality Checks]], [[Outliers]]).

For example, the canopy trees give bars of 2 (25 to 30 m), 3 (30 to 35), 10 (35 to 40), 4 (40 to 45) and 3 (45 to 50).
- $n = 2 + 3 + 10 + 4 + 3 = 22$. With counts on the vertical axis you can recover $n$, which you can't do from a [[Box Plot and Five-Number Summary|box plot]].
- The median lies between the 11th and 12th values in order. 2 + 3 = 5 trees are below 35 m and the next bin holds 10 more, so both middle values fall in the **35 to 40 m** bin.
- The shape is roughly symmetric with one peak, so the mean is a fine summary.

Draw one before you compute anything; it's the fastest way to see what you're dealing with. In R, `plot(x)` on a column of numbers doesn't draw a histogram: it plots each value against its row number. Use `hist()`. And a bar chart of a categorical variable isn't a histogram and has no shape ([[Plots for Categorical Data]]).

Try it yourself. You draw a histogram of exam scores and see two separate humps, one near the bottom and one near the top. What might be going on? There may be two different groups mixed together, such as students who studied and students who didn't. A single average would describe neither.

Further reading: [[References|Vu and Harrington 2020, Ch. 1]] (§1.4).
