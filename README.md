# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error stemming from the language's loose typing system and the overloaded behavior of the `+` operator.  When used with numbers, it performs addition, but with strings, it concatenates.

The `bug.js` file shows how this can lead to unexpected results when mixing string and number operands. The `bugSolution.js` offers a solution using type checking to ensure numerical addition.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` to see the unexpected behavior.
3. Run `node bugSolution.js` to see the corrected behavior.

## Solution

Explicit type checking is the most straightforward solution.  Always ensure your operands are numbers before performing arithmetic.