## Lesson 2 — Conditional Statements ✅

Conditional statements run different code depending on whether a condition is true or false.

- **`if`:** Runs a block only when its condition is truthy.
- **`if...else`:** Chooses between two blocks.
- **`else if`:** Checks multiple conditions in order; only the first matching branch runs.
- **Nested `if`:** An `if` inside another `if`, useful for dependent checks.
- **Ternary `? :`:** Short expression for a simple two-way choice: `condition ? whenTrue : whenFalse`.
- **`switch`:** Selects a matching `case` using strict equality; `break` prevents fall-through; `default` handles unmatched values.

```javascript
// if / else if / else
let marks = 65;
if (marks >= 75) {
  console.log("High score");
} else if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Nested condition
let attendance = 80;
let feesPaid = true;
if (attendance >= 75) {
  if (feesPaid) console.log("Eligible for Exam");
}

// Ternary operator
let result = marks >= 35 ? "Pass" : "Fail";

// switch
let signal = "green";
switch (signal) {
  case "red": console.log("Stop"); break;
  case "yellow": console.log("Wait"); break;
  case "green": console.log("Go"); break;
  default: console.log("Invalid Signal");
}
```

**Remember:** `else if` order matters. Prefer `if...else` when logic is complex, and include `break` after a `switch` case unless you intentionally want fall-through.

---
