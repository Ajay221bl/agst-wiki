---
type: moc
tags:
  - moc
  - describing-data
status: growing
---

Before any test, you need to know what kind of data you have, where the values sit, how spread out they are and what shape they take.

*Reading:* [[References|Vu and Harrington 2020, Ch. 1]].

## 1. What kind of data
- [[Types of Data]]: categories or measured amounts, and why that decides everything else
- [[Descriptive vs Inferential Statistics]]: describing your sample versus drawing conclusions about the whole population
- [[Missing Data]]: decide how to handle it, write the decision down, and report it
- [[Likert Scale]]: ordered survey answers, such as "agree" to "disagree", and why they count as ordered categories

## 2. Centre
- [[Mean]]: the balance point of the data, right on average but pulled toward long tails
- [[Median]]: the middle value, which skewed data barely move
- [[Mode]]: the most common value, and the only centre for categories with no order

## 3. Spread
- [[Variability]]: why values differ, and why statistics exists at all
- [[Percentiles and Quantiles]]: the value below which a given share of the data falls
- [[Range and IQR]]: the range and the interquartile range, spreads based on putting the data in order, which go with the median
- [[Deviations from the Mean]]: how far each value is from the mean, and why these distances always add up to zero
- [[Variance]]: the average squared distance from the mean
- [[Standard Deviation]]: the variance turned back into the original units
- [[Coefficient of Variation]]: the spread compared with the size of the mean
- [[Effect of Shifting Data]]: adding the same amount to every value moves the centre but not the spread

## 4. Shape and unusual values
- [[Shape of a Distribution]]: how many peaks, how lopsided (skew), and how heavy the tails are (kurtosis)
- [[Tails of a Distribution]]: the rare far ends, where skew shows and where p-values are measured
- [[Outliers]]: unusually far values, flagged by fences built from the interquartile range or by a z-score beyond ±2

## 5. Pictures
- [[Exploratory Data Analysis]]: check, describe and plot the data before any test
- [[Histogram]]: the picture for one measured variable
- [[Box Plot and Five-Number Summary]]: centre, spread and outliers in one picture
- [[Plots for Categorical Data]]: use bar charts, not pie charts
- [[Plots for Two Variables]]: pick the plot that fits the types of the two variables
- [[Correlation]]: r, a number for how closely two measured variables follow a straight line

## Why notes on this topic
- [[Why report both center and spread]]
- [[Why the median beats the mean for skewed data]]
- [[Why we divide by n minus 1]]
- [[Why visualize data before testing]]
- [[Why variance squares the deviations]]
- [[Why you can't just delete an outlier]]
- [[Why you must say how missing values were handled]]

## Other maps
[[MOC - Basics from Zero]] · [[MOC - R for Statistics]] · [[MOC - Inference Foundations]] · [[index|Home]]
