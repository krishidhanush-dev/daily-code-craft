
# CSS Flexbox — Notes

## What is Flexbox?
Flexbox is a CSS layout system used to arrange elements in rows or columns and control their alignment and spacing.

## 1. Flex Container and Flex Items
- **Flex Container:** Parent element with `display: flex`.
- **Flex Items:** Direct children of the flex container.

```css
.container {
  display: flex;
}
```

## 2. justify-content
Controls the alignment of items along the main axis.

- `flex-start` — Align to the start.
- `center` — Align to the center.
- `flex-end` — Align to the end.
- `space-between` — Space between items.
- `space-around` — Space around items.
- `space-evenly` — Equal spacing between items and edges.

## 3. align-items
Aligns items along the cross axis.

- `flex-start` — Align to the start.
- `center` — Align to the center.
- `flex-end` — Align to the end.
- `stretch` — Stretch items across the available cross-axis space, when allowed.

## 4. flex-direction
Defines the direction of flex items.

- `row` — Horizontal, in the normal direction.
- `row-reverse` — Horizontal, reversed.
- `column` — Vertical, top to bottom.
- `column-reverse` — Vertical, reversed.

## 5. flex-wrap
Controls whether items can move onto another line.

- `nowrap` — Keep items on one line (default).
- `wrap` — Allow items to wrap onto another line.
- `wrap-reverse` — Wrap onto lines in the reverse cross-axis direction.

## 6. gap
Adds spacing between flex items.

```css
.container {
  display: flex;
  gap: 20px;
}
```

Use `row-gap` and `column-gap` to control spacing separately.

## 7. flex-grow
Controls how available extra space is distributed among items.

```css
.box1 { flex-grow: 1; }
.box2 { flex-grow: 2; }
```

Items with larger grow factors receive a larger share of the available extra space, depending on their base sizes and constraints.

## 8. flex-shrink
Controls how items shrink when there is insufficient space.

- `flex-shrink: 1` — Shrinking is allowed (default).
- `flex-shrink: 0` — The item does not shrink due to negative free space.

## 9. flex-basis
Defines an item's initial main-axis size before free space is distributed.

```css
.card {
  flex-basis: 200px;
}
```

In a row layout, this usually sets the initial width; in a column layout, it usually sets the initial height.

## Important Points
- `justify-content` works along the main axis.
- `align-items` works along the cross axis.
- Changing `flex-direction` changes the main axis.
- `gap` is useful for consistent spacing.
- `flex-grow`, `flex-shrink`, and `flex-basis` can affect the final item sizes.
- Flexbox alone does not guarantee a responsive layout; use wrapping and media queries when needed.

## What I Practiced
- Arranging cards horizontally and vertically.
- Aligning items and controlling spacing.
- Wrapping items onto multiple lines.
- Experimenting with item growth, shrinking, and base sizes.

## Next Step
Build a Responsive Cards Layout using CSS Flexbox.
