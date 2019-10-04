# Promotion codes

The promotion code should be of the following format:

- Nine numerical characters
- When multiplying the first number by 9, the second by 8, the third by 7, and so on... the resulting number should be divisible by 11 and a single digit may not appear more than twice.

Examples:

- 613884922 is valid, because 6&times;9 + 1&times;8 + 3&times;7 + 8&times;6 + 8&times;5 + 4&times;4 + 9&times;3 + 2&times;2 + 2&times;1 = 220 / 11 = 20 (whole number, no digit is repeated 3+ times)
- 538820102 is invalid, because 5&times;9 + 3&times;8 + 8&times;7 + 8&times;6 + 2&times;5 + 0&times;4 + 1&times;3 + 0&times;2 + 2&times;1 = 188 / 11 = 17.09 (not a whole number)
- 131888331 is invalid (digits 1, 3 and 8 appear too often)

## Generate codes

To generate the codes, you need to run the default exported method from this folder.

The exported function will generate an array within 1000 valid codes.

For example:

```js
import generateCodes from "./src/promotion-codes""

generateCodes(); // print the codes or store them on another variable
```

## List with 1000 valid codes

Open the file [`codes.json`](codes.json), there you will find a list with 1000 valid codes.
