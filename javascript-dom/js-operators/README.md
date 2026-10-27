## Lessons 1.4–1.8 — JavaScript Operators ✅

### Arithmetic Operators
`+` addition, `-` subtraction, `*` multiplication, `/` division, `%` remainder.

```javascript
const a = 20, b = 5;
console.log(a + b); // 25
console.log(a % b); // 0
```

### Assignment Operators
`=` assigns a value. `+=`, `-=`, `*=`, `/=`, `%=` update the existing value.

```javascript
let balance = 1000;
balance += 500; // 1500
balance -= 200; // 1300
balance *= 2;   // 2600
```

### Comparison Operators
`>`, `<`, `>=`, `<=` compare values. `==` / `!=` can convert types. Prefer strict `===` / `!==` for equality checks.

```javascript
console.log(20 == "20");  // true
console.log(20 === "20"); // false
```

### Logical Operators
- `&&` AND: both conditions must be true.
- `||` OR: at least one condition must be true.
- `!` NOT: reverses a Boolean value.

```javascript
console.log(true && false); // false
console.log(false || true); // true
console.log(!false);        // true
```

### Increment & Decrement
`++` increases by 1; `--` decreases by 1. Postfix (`x++`) returns the old value before incrementing. Prefix (`++x`) increments before returning the value.

```javascript
let points = 10;
points++;              // points is 11
console.log(points++); // prints 11, then points becomes 12
console.log(++points); // prints 13
```

**Best practice:** Use `const` when reassignment isn't needed; use `let` when values change. Always declare variables.

---
