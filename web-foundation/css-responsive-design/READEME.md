
# CSS Responsive Design — Short Notes

## 1. Responsive Design
Responsive Design andre webpage mobile, tablet, laptop mattu desktop screen sizes-ge adjust aaguvante design maadodu.

## 2. Viewport Meta Tag
HTML `<head>` olage add maadbeku.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Mobile screen-ge webpage correct-aagi adjust aagalu help maadutte.

## 3. Flexible Layouts
- `width: 100%` — parent container-na full width use maadutte.
- `max-width: 100%` — element available width-na meeradante help maadutte.
- `box-sizing: border-box` — width olage padding mattu border include maadutte.
- `height: auto` — image proportions preserve maadutte.

```css
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}
```

## 4. Responsive Grid

```css
.container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

- `1fr` — available space-na fraction-aagi share maadutte.
- `minmax(250px, 1fr)` — column-ge minimum 250px mattu flexible maximum kodutte.
- `auto-fit` — available space-ge takkante columns arrange maadutte.

## 5. Media Queries
Screen width based maadi CSS change maadalu use maadutte.

```css
@media (min-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- `min-width` — specified width athava adakkinta dodda screens-ge rules apply aagutte.
- `max-width` — specified width athava adakkinta chikka screens-ge rules apply aagutte.

## 6. Responsive Testing
Browser DevTools device toolbar use maadi different screen widths alli test maadbeku.

Namma practice:
- 390px — mobile
- 700px — tablet-size screen
- 1200px — desktop

Horizontal overflow ideya mattu cards correct-aagi fit aagiveya anta check maadbeku.

## Quick Summary
1. Viewport meta tag add maadu.
2. Flexible layouts mattu responsive images use maadu.
3. Grid/Flexbox use maadu.
4. Media queries inda breakpoints set maadu.
5. Different screen widths alli test maadu.
