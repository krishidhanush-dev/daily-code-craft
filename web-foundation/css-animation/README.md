
# CSS Animations

## 1. What is CSS Animation?

CSS Animations allow HTML elements to change styles over time without requiring a user interaction.

Animations can change colors, sizes, positions, rotation, opacity, and more.

## 2. @keyframes

The `@keyframes` rule defines the stages of an animation.

```css
@keyframes changeColor {
  from {
    background-color: blue;
  }

  to {
    background-color: red;
  }
}
```

- `from` — starting state (0%)
- `to` — ending state (100%)
- Percentage keyframes can define multiple stages, such as `0%`, `50%`, and `100%`.

## 3. animation-name

Specifies the name of the animation to run.

```css
animation-name: changeColor;
```

The name must match the corresponding `@keyframes` name.

## 4. animation-duration

Specifies how long one animation cycle takes to complete.

```css
animation-duration: 3s;
```

Example: `3s` means one cycle takes 3 seconds.

## 5. animation-iteration-count

Specifies how many times the animation repeats.

```css
animation-iteration-count: 3;
```

Values:
- `1` — runs once
- `3` — runs three times
- `infinite` — repeats continuously

## 6. animation-direction

Controls the direction of animation cycles.

- `normal` — forward every cycle
- `reverse` — backward every cycle
- `alternate` — forward, then backward
- `alternate-reverse` — backward, then forward

```css
animation-direction: alternate;
```

## 7. animation-delay

Specifies how long to wait before the animation starts.

```css
animation-delay: 2s;
```

The animation starts after a 2-second delay.

## 8. animation-fill-mode

Controls how animation keyframe styles apply before or after the animation runs.

- `none` — no styles retained outside the animation
- `forwards` — retains the final keyframe styles
- `backwards` — applies the initial keyframe styles during the delay
- `both` — combines `forwards` and `backwards`

```css
animation-fill-mode: forwards;
```

## 9. animation-timing-function

Controls the animation's speed pattern.

- `ease` — slow start, faster middle, slow end
- `linear` — constant speed
- `ease-in` — slow start
- `ease-out` — slow end
- `ease-in-out` — slow start and slow end

```css
animation-timing-function: ease-in-out;
```

## 10. animation-play-state

Pauses or resumes an animation.

```css
.box:hover {
  animation-play-state: paused;
}
```

Values:
- `running` — animation runs
- `paused` — animation pauses

## 11. Animation Shorthand

The `animation` shorthand combines multiple animation properties into one declaration.

```css
.box {
  animation: changeColor 3s ease-in-out 1s 3 alternate forwards;
}
```

Values:
1. `changeColor` — name
2. `3s` — duration
3. `ease-in-out` — timing function
4. `1s` — delay
5. `3` — iteration count
6. `alternate` — direction
7. `forwards` — fill mode

## 12. Complete Example

```html
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;

  animation: changeColor 2s ease-in-out 1s 3 alternate forwards;
}

@keyframes changeColor {
  from {
    background-color: blue;
  }

  to {
    background-color: red;
  }
}
```

## Summary

CSS Animation concepts learned:

1. `@keyframes`
2. `animation-name`
3. `animation-duration`
4. `animation-iteration-count`
5. `animation-direction`
6. `animation-delay`
7. `animation-fill-mode`
8. `animation-timing-function`
9. `animation-play-state`
10. `animation` shorthand

CSS Animations are useful for loaders, buttons, notifications, moving elements, and interactive web interfaces.
