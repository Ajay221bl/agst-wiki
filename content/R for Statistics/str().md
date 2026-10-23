---
type: atomic
tags:
  - r-statistics
aliases:
  - "str"
  - "structure"
  - "numeric"
  - "character"
  - "integer"
  - "data types in R"
status: seedling
---

`str(d)` shows how R is storing each variable (int, num, chr, Factor) with its first few values; it is the first thing to check when something goes wrong.

1. **After loading, confirm R understood the data the way you meant.** Wrong types are the most common silent error ([[Types of Data]]).
2. **`str()` shows the structure:**

```r
str(frust)
# 'data.frame': 120 obs. of 2 variables:
#  $ score: num  12 15 9 ...
#  $ major: Factor w/ 4 levels "business","English",..: 1 1 1 ...
```

3. **Read it line by line:** the [[Sample Size|number of observations]] and variables, each variable's storage type, and for factors the number of levels ([[Data Frames]]).
4. **What to check, and why:**
   - the response is `num`: otherwise you can't average it;
   - the group is `Factor` with the expected number of levels: otherwise `aov()` treats it as a number or splits groups by typos ([[factor()]]);
   - the number of obs. matches the file.

**`str()` shows what R *thinks* each variable is, not what it really is.** ID numbers come in as integers; treatments coded 1–4 come in as numbers, and ANOVA will then be wrong ([[factor()]]). Wide data show several numeric columns and no group variable ([[Wide vs Long Format]]).

For example:

Before an ANOVA, want: `num score` + `Factor major (4 levels)`. Anything else needs fixing first.

Common mistakes:

- **"If it prints, the types are right."** A numeric-coded factor prints fine and analyzes wrongly.

See also: [[summary()]], [[aov()]].
