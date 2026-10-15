# CSS Grid & Positioning — Quick Notes

## CSS Grid
CSS Grid is a two-dimensional layout system used to arrange elements in rows and columns.

- `display: grid;` — makes an element a grid container.
- `grid-template-columns: 1fr 1fr 1fr;` — creates three equal-width columns.
- `grid-template-columns: repeat(4, 1fr);` — creates four equal-width columns.
- `grid-template-rows: 100px 100px;` — defines two rows, each 100px high.
- `gap: 10px;` — adds space between grid items.
- `1fr` — represents a share of the available space.
- Media queries can change the grid for smaller screens.

Example:
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## CSS Positioning
The `position` property controls how an element is positioned.

- `position: static;` — default; element stays in normal document flow.
- `position: relative;` — keeps the element's original space and lets you offset it from its normal position.
- `position: absolute;` — removes the element from normal flow and positions it relative to its nearest positioned ancestor.
- `position: fixed;` — positions the element relative to the viewport; it stays in place while scrolling.
- `position: sticky;` — behaves normally until it reaches a scroll threshold, then sticks within its containing block.

### Offset properties
- `top: 20px;` — moves the positioned element 20px down from its reference position/edge.
- `bottom: 20px;` — positions it 20px above the reference bottom edge.
- `left: 30px;` — positions it 30px from the reference left edge (visually to the right).
- `right: 20px;` — positions it 20px from the reference right edge (visually to the left).

### Important reminders
- `absolute` elements do not keep their original space in normal flow, so other elements can move into that space or overlap.
- A common pattern is `.container { position: relative; }` with a child using `position: absolute;`.
- `fixed` is tied to the viewport; `sticky` is constrained by its scrolling/container context.
- `z-index` controls stacking order when elements overlap (subject to stacking contexts).

## Responsive Design
Responsive design makes a website's layout, spacing, text, and navigation adapt to different screen sizes, such as mobile, tablet, laptop, desktop, and TV.
