# CSS Variables — Short Notes

## 1. What are CSS Variables?
CSS Variables let us store a CSS value once and reuse it in multiple places. They make styles easier to maintain.

## 2. Declare Variables with `:root`
Use a name that starts with `--`.

```css
:root {
  --primary-color: #2563eb;
  --bg-color: #f8fafc;
  --card-color: #ffffff;
  --text-color: #1e293b;
}
```

- `:root` selects the document's root element (`html`).
- Variables declared here can usually be accessed throughout the page.
- Variable names are case-sensitive.

## 3. Use Variables with `var()`
Pass the variable name to `var()`:

```css
h1 {
  color: var(--primary-color);
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.card {
  background-color: var(--card-color);
}
```

## 4. Why Use CSS Variables?
- Reuse values instead of repeating them.
- Change a shared value in one place.
- Keep colors, spacing, and other design values consistent.
- Make projects easier to update.

If `--primary-color` changes, elements that use `var(--primary-color)` update to the new value. Elements using other variables do not change.

## 5. Fallback Values
A fallback can be provided if a variable is missing or invalid:

```css
h1 {
  color: var(--primary-color, blue);
}
```

Here, `blue` is used if `--primary-color` cannot provide a valid value.

## 6. Common Mistakes
- Forgetting the two hyphens: use `--primary-color`.
- Forgetting `var()`: use `var(--primary-color)`.
- Using a different variable by mistake, such as `--bg-color` instead of `--card-color`.
- Forgetting the semicolon after a declaration.

## Quick Summary
- Declare: `--variable-name: value;`
- Use: `var(--variable-name)`
- Global-style location: `:root { ... }`
- Update the variable once to update every rule that uses it.

## Practice Task
Create variables for a primary color, page background, card background, and text color. Apply them to `h1`, `body`, and `.card`, then change one variable and observe which elements update.
