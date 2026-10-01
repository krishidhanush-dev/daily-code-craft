# ♿ Web Accessibility

## What is Accessibility?

Web Accessibility means making websites usable by as many people as possible, including people with disabilities.

### Main Goal

> Everyone should be able to understand, navigate, and interact with a website.

---

## 1. Semantic HTML

Use correct HTML elements according to their purpose.

Examples:

- `<header>` → introductory/top content
- `<nav>` → navigation
- `<main>` → primary content
- `<section>` → logical content group
- `<article>` → self-contained content
- `<aside>` → related/secondary content
- `<footer>` → ending/supporting content
- `<button>` → action
- `<a>` → navigation

Semantic HTML is the foundation of accessibility.

---

## 2. `alt` Attribute

`alt` provides text information about an image.

### Informative image

```html
<img src="developer.jpg" alt="Developer working on a laptop">
```

## 3. Heading Hierarchy

Headings provide the structure of a webpage.

### Informative image

h1
 ├── h2
 │    ├── h3
 │    └── h3
 └── h2
      └── h3
```      
<h1>Developer Connect</h1>

<h2>About Me</h2>

<h3>Skills</h3>

<h4>HTML</h4>
<h4>CSS</h4>

<h3>Projects</h3>

<h2>Contact Me</h2>
```
## 4. Accessible Forms

Form controls should have proper labels.

### Informative
```
<label for="email">Email</label>

<input
  type="email"
  id="email"
  name="email"
  placeholder="Enter your email"
>
```

## 5. Keyboard Accessibility

A website should be usable without a mouse.

### Informative
```<a href="/about">About</a>

<input type="text">

<button type="submit">Submit</button>
```

## 6. Buttons vs Links

`<a>` -> Navigation when the user needs to go somewhere.
`<button>` -> Action when the user needs to perform an action.

### Informative

```<button type="submit">Register</button>
<button type="reset">Reset</button>
<button type="button">Open Menu</button>
```
## 7. ARIA Basics

Accessible Rich Internet Applications
ARIA provides additional accessibility information to assistive technologies

## Informative
```<button aria-label="Open menu">☰</button>

<button aria-label="Close">✕</button>

<button aria-label="Search">🔍</button>
```

## 8. Color contrast

color contrast means having enough difference between text and its background so that the content is easy to read.

### Informative

Good Contrast
``` Black text + White background ```

Poor Contrast
``` Light gray text + White background ```

## 9. Focus States

Focus shows which interactive element currently has keyboard focus.
When the user presser Tab, focus moves between interactive elements.

### Informative

- CSS :focus

``` 
button:focus {
  outline: 2px solid black;
  outline-offset: 2px;
}

```

# Accessibility Golden Rules
1. Use semantic HTML.
2. Use meaningful alt text for informative images.
3. Use alt="" for decorative images.
4. Maintain logical heading hierarchy.
5. Give form controls proper labels.
6. Don't use placeholder as a label.
7. Make the website keyboard accessible.
8. Use `<a>` for navigation.
9. Use `<button>` for actions.
10. Use native HTML elements whenever possible.
11. Use ARIA only when necessary.
12. Maintain sufficient color contrast.
13. Don't communicate important information using color alone.
14. Keep keyboard focus visible.

# Final Accessibility Mindset
```
Semantic HTML
      ↓
Proper Labels & Structure
      ↓
Keyboard Accessibility
      ↓
Visible Focus
      ↓
Good Contrast
      ↓
ARIA when necessary
```
