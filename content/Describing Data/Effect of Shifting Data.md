---
type: atomic
tags:
  - describing-data
aliases:
  - "adding a constant"
  - "linear transformation"
  - "rescaling"
status: seedling
---

Adding the same amount to every value moves the mean and the [[Median|median]] by that amount, but leaves the [[Standard Deviation|standard deviation]], the variance, the range and the [[Range and IQR|interquartile range]] unchanged.

You don't need formulas for this. You need one good picture. Imagine everyone in a group photo standing on a 10 cm box. Every height goes up by 10 cm, so the average height goes up by 10 cm too ([[Mean]]). But each person and the mean both moved by the same amount, so each person's distance from the mean is unchanged ([[Deviations from the Mean]]). All the measures of spread are built from those distances, so none of them change ([[Variance]]). This is handy: switching units by adding a constant, such as from degrees Celsius to kelvin, doesn't affect any measure of spread or any [[Test Statistic|t statistic]].

Multiplying is different. Multiply every value by 2 and both the mean and the standard deviation double, while the variance becomes four times as big.

![[Shifting data.png|700]]
Every value moved 15 units to the right: the centre moved by exactly 15, but the shape and width of the pile did not change at all.

This saves recalculating, and it answers trick questions. If an instrument read 4 units too high, the corrected data have a different mean but the same standard deviation.

Here is why. With new values $x_i + c$,
$$\bar{x}_{new} = \frac{\sum (x_i + c)}{n} = \bar{x} + c$$
$$s^2_{new} = \frac{\sum \big((x_i + c) - (\bar{x} + c)\big)^2}{n-1} = \frac{\sum (x_i - \bar{x})^2}{n-1} = s^2$$
The $c$'s cancel inside the deviations.

For example, scores of 60, 70 and 80 have a mean of 70 and a standard deviation of 10. Add 12 points to everyone and you get 72, 82 and 92: the mean is 82 and the standard deviation is still 10.

The book adds that multiplying every value by $a$ multiplies the mean and the standard deviation by $|a|$, and the variance by $a^2$. Converting centimetres to millimetres multiplies the standard deviation by 10.

So adding a constant moves the whole distribution without changing its [[Variability|spread]], but multiplying does change the spread. Think it through physically and you'll never have to memorize the rules.

See also: [[Z-Score]].

Further reading: [[References|Vu and Harrington 2020, Ch. 1]].
