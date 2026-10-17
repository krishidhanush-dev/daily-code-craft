
# CSS Transitions

## 1. What is CSS Transition?

CSS Transitions allow CSS property values to change smoothly over a specified duration instead of changing suddenly.

Example:
```css
button {
  background-color: blue;
  transition: background-color 2s ease;
}

button:hover {
  background-color: red;
}
```

## 2. Transition Properties

### transition-property
Specifies which CSS property should transition.

```css
transition-property: background-color;
```

Examples: `color`, `width`, `height`, `opacity`, `transform`.

### transition-duration
Specifies how long the transition takes to complete.

```css
transition-duration: 2s;
```

- `0.5s` — fast transition
- `2s` — slower transition
- `3s` — even slower transition

### transition-timing-function
Controls the speed pattern of the transition.

- `ease` — slow start, faster middle, slow end
- `linear` — constant speed
- `ease-in` — slow start
- `ease-out` — slow end
- `ease-in-out` — slow start and slow end

```css
transition-timing-function: ease-in-out;
```

### transition-delay
Specifies how long to wait before the transition starts.

```css
transition-delay: 1s;
```

If duration is `3s` and delay is `2s`, the transition finishes 5 seconds after it starts being triggered, assuming no interruption.

## 3. Transition Shorthand

The `transition` shorthand combines multiple transition properties into one declaration.

Syntax:

```css
transition: property duration timing-function delay;
```

Example:

```css
button {
  background-color: blue;
  transition: background-color 2s ease 1s;
}

button:hover {
  background-color: green;
}
```

Here:
- `background-color` — property to transition
- `2s` — duration
- `ease` — timing function
- `1s` — delay

## 4. Transition on Different Properties

### Background color
```css
.box {
  background-color: blue;
  transition: background-color 2s ease;
}

.box:hover {
  background-color: green;
}
```

### Text color
```css
button {
  color: white;
  transition: color 2s ease;
}

button:hover {
  color: yellow;
}
```

### Width
```css
.box {
  width: 100px;
  transition: width 2s ease;
}

.box:hover {
  width: 200px;
}
```

## 5. Transition Multiple Properties

```css
.box {
  width: 100px;
  background-color: blue;
  transition: width 2s ease, background-color 2s ease;
}

.box:hover {
  width: 200px;
  background-color: green;
}
```

Use `transition: all 2s ease;` when you want all supported property changes to transition, but specifying individual properties gives better control.

## 6. Important Points

- `transition` makes supported CSS property changes smooth.
- It does not choose the target color or value.
- The normal and hover states define the starting and ending values.
- Only the properties specified in `transition` are transitioned.
- `:hover` applies styles when the pointer is over an element.
- Transition duration and delay are different.
- Not every CSS property can be transitioned.

## Summary

CSS Transitions are useful for smooth hover effects, buttons, cards, links, and interactive UI elements.

Properties learned:
1. `transition-property`
2. `transition-duration`
3. `transition-timing-function`
4. `transition-delay`
5. `transition` shorthand
