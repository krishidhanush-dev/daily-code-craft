# JavaScript Basics — Learning Notes

## Lesson 1 — Variables (`let` and `const`) ✅

- **Variable:** A name used to store a value.
- **`let`:** Use when the value may change (reassignment allowed).
- **`const`:** Use when the variable should not be reassigned.
- **`var`:** Older variable declaration; prefer `let` and `const` in modern JavaScript.
- **`console.log()`:** Prints values in the browser console.

```javascript
let username = "Dhanush";
username = "Dhanu"; // Allowed with let

const language = "JavaScript";

console.log(username); // Dhanu
console.log(language); // JavaScript
```

**Remember:** Trying to reassign a `const` variable causes a `TypeError`. A `const` object or array can still have its contents changed.

---

