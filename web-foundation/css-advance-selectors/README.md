# CSS Advanced Selectors — Short Notes

## 1. What are Advanced Selectors?
CSS Advanced Selectors are used to select and style HTML elements based on their state, position, or specific conditions.

## 2. Pseudo-Classes (`:`)
Pseudo-classes are used to style elements based on their state or position.

**`:hover`** — Mouse hover madidaga style apply agutte.

```css
button:hover {
  background-color: blue;
}
```

**`:focus`** — Input select/focus madidaga style apply agutte.

```css
input:focus {
  border: 2px solid green;
}
```

**`:first-child`** — Parent olagina first child element select madutte.

```css
p:first-child {
  color: blue;
}
```

**`:last-child`** — Parent olagina last child element select madutte.

```css
p:last-child {
  color: red;
}
```

**`:nth-child()`** — Specific position alli iruva child elements select madutte.

```css
p:nth-child(even) {
  color: green;
}

p:nth-child(odd) {
  color: red;
}
```

- `even` → 2, 4, 6...
- `odd` → 1, 3, 5...

**`:not()`** — Specific selector match aaguva elements exclude madutte.

```css
p:not(.special) {
  color: blue;
}
```

All paragraph elements except `.special` class paragraphs will become blue.

## 3. Pseudo-Elements (`::`)
Pseudo-elements are used to style or insert content at specific parts of an element.

**`::before`** — Element content ginta munche content insert madutte.

```css
h2::before {
  content: "🚀 ";
}
```

**`::after`** — Element content aadmele content insert madutte.

```css
h2::after {
  content: " ⭐";
}
```

## 4. Pseudo-Class vs Pseudo-Element

| Pseudo-Class | Pseudo-Element |
|---|---|
| Uses `:` | Uses `::` |
| Selects element state/position | Selects or creates part of an element |
| Example: `:hover` | Example: `::before` |

## 5. Important Points
- `:hover` → Mouse hover effect.
- `:focus` → Focus effect.
- `:first-child` → First child selection.
- `:last-child` → Last child selection.
- `:nth-child()` → Position-based selection.
- `:not()` → Exclude matching elements.
- `::before` → Insert content before.
- `::after` → Insert content after.
- `content` property is needed to display generated content with `::before` and `::after`.

## Conclusion
CSS Advanced Selectors help create interactive designs, select specific HTML elements, and reduce unnecessary CSS classes.

**Learning Status:** ✅ Completed

**Next Topic:** Chrome DevTools