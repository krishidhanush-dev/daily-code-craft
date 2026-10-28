
# JavaScript Loops — Short Notes

Loops execute code repeatedly while a condition is true.

## 1. for Loop
Used for counter-based repetition.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```
- `let i = 1` → Initialization
- `i <= 5` → Condition
- `i++` → Increment

## 2. while Loop
Checks the condition before execution.

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## 3. do...while Loop
Executes at least once before checking the condition.

```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

## 4. break Statement
Immediately exits the loop.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```
Output: `1 2 3 4`

## 5. continue Statement
Skips the current iteration.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
Output: `1 2 4 5`

## 6. Useful Operators
- `i++` → Increase by 1
- `i--` → Decrease by 1
- `i += 2` → Increase by 2
- `i % 3 === 0` → Divisible by 3
- `===` → Strict equality
- `||` → Logical OR

## Key Points
- `for` → Counter-based repetition
- `while` → Condition checked first
- `do...while` → Runs at least once
- `break` → Stops entire loop
- `continue` → Skips current iteration
- Update counters to avoid infinite loops.
- In `while` loops, don't skip essential counter updates with `continue`.
  