
# CSS Fundamentals 

## 1. CSS Syntax & How CSS Works

CSS is used to style HTML elements.

```css
selector {
    property: value;
}
```

- Selector: Selects the HTML element.
- Property: Specifies what to change.
- Value: Defines how it should look.

**HTML** = Structure | **CSS** = Styling | **JavaScript** = Behavior

## 2. CSS Selectors

Selectors target HTML elements for styling.

```css
h1 { color: blue; }           /* Element selector */
.title { color: green; }      /* Class selector */
#heading { color: red; }      /* ID selector */
h1, p { color: purple; }      /* Grouping selector */
```

- Element: Targets elements by tag name.
- Class (`.`): Can be reused across elements.
- ID (`#`): Normally identifies one unique element.
- Grouping (`,`): Applies the same rules to multiple selectors.

## 3. Colors & Backgrounds

```css
.card {
    color: #333333;
    background-color: lightgray;
    background-image: url("image.jpg");
    background-size: cover;
    background-position: center;
}
```

- `color`: Changes text color.
- `background-color`: Changes background color.
- Colors can use names, HEX, RGB and RGBA.
- RGBA's alpha value controls opacity.
- `background-size: cover`: Makes the image cover the element.

## 4. CSS Units

| Unit | Meaning |
|---|---|
| `px` | Pixel |
| `%` | Relative to the relevant reference size |
| `rem` | Relative to the root font size |
| `em` | Relative to the relevant font-size context |
| `vh` | 1% of viewport height |
| `vw` | 1% of viewport width |

```css
h1 { font-size: 2rem; }
.container { width: 80%; }
section { min-height: 100vh; }
```

Use a combination of units to build responsive layouts.

## 5. Typography

Typography controls how text appears.

```css
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

h1 {
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
}

a { text-decoration: none; }
p { font-style: italic; }
```

- `font-family`: Font type.
- `font-size`: Text size.
- `font-weight`: Text thickness.
- `font-style`: Normal or italic.
- `line-height`: Space between lines.
- `letter-spacing`: Space between letters.
- `text-align`: Text alignment.
- `text-decoration`: Underline or other text decoration.

## 6. CSS Box Model

Every HTML element is represented as a box.

**Order:** Content → Padding → Border → Margin

- Content: Actual text or element content.
- Padding: Space inside the border.
- Border: Boundary around the padding and content.
- Margin: Space outside the border.

```css
* {
    box-sizing: border-box;
}

.card {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 20px;
}
```

`box-sizing: border-box` includes padding and border within the specified width and height.

## 7. Width & Height

```css
.container {
    width: 100%;
    max-width: 1200px;
    min-height: 200px;
    margin: 0 auto;
}
```

- `width` / `height`: Set element dimensions.
- `min-width` / `min-height`: Set minimum dimensions.
- `max-width` / `max-height`: Set maximum dimensions.
- `width: 100%`: Uses the available width relative to its containing block.
- `100vw`: Represents the viewport width.
- `100vh`: Represents the viewport height.
- `margin: 0 auto`: Horizontally centers a block with available space.

## 8. Display Property

The `display` property controls how an element participates in layout.

| Value | Behavior |
|---|---|
| `block` | Starts on a new line; normally takes available width |
| `inline` | Flows within a line; width and height behave differently |
| `inline-block` | Flows inline and supports width and height |
| `none` | Hides the element and removes its layout space |
| `flex` | Creates a flex container |
| `grid` | Creates a grid container |

```css
.card { display: inline-block; }
.hidden { display: none; }
```

## 9. CSS Overflow

Overflow controls content that exceeds an element's box.

```css
.box {
    width: 200px;
    height: 100px;
    overflow: auto;
}
```

- `visible`: Content may extend outside the box.
- `hidden`: Overflowing content is clipped.
- `scroll`: Provides scrolling.
- `auto`: Provides scrolling when needed.
- `overflow-x`: Controls horizontal overflow.
- `overflow-y`: Controls vertical overflow.

## 10. Cascade, Specificity & Inheritance

### Cascade
When rules conflict, the browser determines which declaration wins using origin, importance, cascade layers, specificity and source order.

### Specificity
For ordinary author rules of equal importance and cascade layer:

`#ID > .class > element`

```css
h1 { color: blue; }
.title { color: green; }
#heading { color: red; }
```

An element matching all three selectors will be red under these conditions.

### Inheritance
Some properties pass from parent to child automatically.

```css
.parent {
    color: blue;
    font-family: Arial, sans-serif;
}
```

- Usually inherited: `color`, `font-family`.
- Not inherited by default: `margin`, `border`.

## Key Takeaway

- HTML defines the structure.
- CSS controls appearance and layout.
- Understand the Box Model before learning layouts.
- Use appropriate units and selectors.
- Practice in the browser and inspect elements with DevTools.
