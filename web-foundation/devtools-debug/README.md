# Chrome DevTools — Short Notes

**Roadmap:** Python Full Stack Developer → Phase 1: Web Foundation  
**Learning Status:** ✅ 12 foundational lessons completed

## 1. What is Chrome DevTools?
Chrome DevTools is a collection of tools inside Chrome for inspecting HTML, editing CSS, debugging JavaScript, and testing requests and responsive layouts.

**Open:** `F12` or `Ctrl + Shift + I` (Windows). Right-click an element → **Inspect**.

## 2. Elements & Styles
- **Elements:** Inspect the page's HTML structure.
- **Styles:** View and temporarily edit CSS rules.
- Changes made in DevTools are usually temporary; editing styles here does **not** automatically save them in the original CSS file.

## 3. CSS Box Model
**Content → Padding → Border → Margin**
- **Content:** Text/image inside the element.
- **Padding:** Space inside the border.
- **Border:** Boundary surrounding padding and content.
- **Margin:** Space outside the border.
- View the box model in the **Computed** panel.

## 4. Responsive Testing
- Open the Device Toolbar with `Ctrl + Shift + M`.
- Try widths such as **375px (mobile)**, **768px (tablet)**, and **1440px (desktop)**.
- Check how media queries and layout behave at different viewport widths.

## 5. Console
- **Console:** Run JavaScript and inspect logs and errors.

```js
console.log("Hello Developer!");
console.log(10 + 20); // 30
```

## 6. JavaScript Error Debugging
- Use error messages and file/line links to locate issues.
- JavaScript variable names are case-sensitive: `totalMarks` and `totalmarks` are different.
- An undeclared variable reference commonly produces a `ReferenceError`.

## 7. Sources & Breakpoints
- **Sources:** Inspect and debug JavaScript files.
- **Breakpoint:** Pause execution at a chosen line.
- Check local variables in the **Scope** panel while execution is paused.

## 8. Step Over
- Press `F10` when paused to execute the current statement and pause at the next one.
- Step Over runs called functions without stepping through their internals.

## 9. Network Panel
- Inspect network requests, response statuses, timings, and resource loading.
- Use **Doc** for document requests and **Fetch/XHR** for JavaScript HTTP requests.
- Click a request to see **Headers**, **Preview**, **Response**, and **Timing**.

## 10. Fetch & XHR
- `fetch()` is a modern JavaScript API for making HTTP requests.
- **XHR** stands for XMLHttpRequest, an older browser request API.
- `response.json()` parses a valid JSON response body; it does not require the `Content-Type` header to be present.

```js
fetch("https://dummyjson.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## 11. HTTP Methods & Headers
| Method | Typical purpose |
| --- | --- |
| `GET` | Read data |
| `POST` | Create data |
| `PUT` | Replace data |
| `PATCH` | Partially update data |
| `DELETE` | Delete data |

- **Request headers:** Sent from the browser/client to the server (e.g. `Accept`).
- **Response headers:** Sent from the server to the browser/client (e.g. `Content-Type`).
- `Content-Type: application/json` identifies the response body's JSON media type.
- CORS headers, including `Access-Control-Allow-Origin`, determine whether a browser allows frontend code to read cross-origin responses.

## 12. HTTP Status & Debugging
| Status | Meaning |
| --- | --- |
| `200` | OK |
| `404` | Not Found |
| `500` | Internal Server Error |

- `response.status` contains the HTTP status number.
- `response.ok` is `true` when the status is in **200–299**, otherwise `false`.
- `fetch()` normally **resolves** for HTTP errors like 404 and 500. It rejects for network-level failures or other promise rejections; handle HTTP errors explicitly.

```js
fetch("https://dummyjson.com/todos/9999999")
  .then(response => {
    console.log("Status:", response.status);
    console.log("Success:", response.ok);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Next Roadmap Task
**Build a Responsive Portfolio Website** using semantic HTML, CSS, Flexbox, Grid, responsive media queries, and Chrome DevTools. Push the project to GitHub. Revise DevTools naturally while building and troubleshooting the project.
