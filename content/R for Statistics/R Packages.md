---
type: atomic
tags:
  - r-statistics
aliases:
  - "install.packages"
  - "library"
  - "require"
  - "packages"
status: seedling
---

A package is an add-on bundle of R functions; install it once per computer with `install.packages()`, then load it every session with `library()` or `require()`.

1. **Base R has many functions, but not all** ([[Homogeneity of Variance|Levene's test]], [[Cohen's d]], nicer plots). Other people's functions come in **packages** ([[Functions and Arguments]]).
2. **"Install the package, then check the book out of the library."**
   - Install **once per computer**: it downloads the package.
   - Load **every session** with `library()`: it makes the functions available now.

```r
# install once per computer (remove the # to run)
# install.packages("ggpubr", dependencies = TRUE)
library(ggpubr)        # load every session
require(psych)         # does the same thing
psych::describe(d)     # use one function without loading the whole package
```

3. **Why comment out the install line:** rerunning the script shouldn't download everything again.
4. **Why `package::function`:** two packages can have functions with the same name; the prefix says which one you mean.

Base R lacks many tools these notes use. Packages used: `psych` (describe), `report` (report, [[report()|report_sample]]), `Amelia` (missmap), `ggpubr` (plots), `lsr` (cohensD), `car` (leveneTest), `emmeans` and `multcomp` (letters), `lattice`, `gridExtra`, `vcd`.

For example:

Error "could not find function cohensD" → the `lsr` package isn't loaded. Run `library(lsr)`.

Common mistakes:

- **"Install every time."** Install once; load every session.

See also: [[describe() and describeBy()]], [[ggpubr Plots]], [[leveneTest()]], [[cohensD()]].
