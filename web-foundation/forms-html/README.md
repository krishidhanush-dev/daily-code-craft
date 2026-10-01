# HTML Forms

HTML Forms are used to collect user input and send data for processing.

## Basic Structure

<form>
    <!-- Form controls -->
</form>

---

## 1. `<form>`

- Container for collecting user input.
- Main attributes:
  - `action` → Where the form data is sent.
  - `method` → How the data is sent.

Example:

<form action="/register" method="POST">

---

## 2. `<label>`

- Gives a name/description to an input field.
- `for` connects the label with the input's `id`.

Example:

<label for="email">Email</label>
<input type="email" id="email">

---

## 3. `<input>`

Used to accept user input.

Common types:

<input type="text">       → Text
<input type="email">      → Email
<input type="password">   → Password
<input type="number">     → Number
<input type="date">       → Date
<input type="radio">      → Single choice
<input type="checkbox">   → Multiple choices

---

## 4. Important Input Attributes

### `id`
- Identifies an HTML element.
- Used to connect `<label>` with `<input>`.

### `name`
- Identifies the form data when submitted.
- Important for sending data to the backend.

### `value`
- Represents the input's current/default value.

### `placeholder`
- Shows a hint inside an empty input.

### `required`
- Makes the field mandatory.

Example:

<input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    required
>

---

## 5. `<textarea>`

- Used for long/multi-line text.
- Examples: Message, Feedback, Description.

Example:

<textarea
    name="message"
    placeholder="Enter your message">
</textarea>

---

## 6. `<select>` and `<option>`

Used to create a dropdown.

Example:

<select name="course">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
</select>

`<select>` → Dropdown
`<option>` → Choice

---

## 7. Radio Button

- Used when the user should normally select ONE option.
- Radio buttons in the same group should have the same `name`.

Example:

<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">

---

## 8. Checkbox

- Used when the user can select multiple options.

Example:

<input type="checkbox" name="skills" value="html">
<input type="checkbox" name="skills" value="css">

---

## 9. `<button>`

Used to perform an action.

### Button Types

<button type="submit">Submit</button>
→ Submits the form.

<button type="reset">Reset</button>
→ Resets form fields.

<button type="button">Click</button>
→ Normal button; does not submit the form by default.

---

## 10. `action`

Defines where the form data should be sent.

Example:

<form action="/register">

---

## 11. `method`

Defines how form data is submitted.

### GET

<form action="/search" method="GET">

- Commonly used for retrieving/searching data.
- Data may appear in the URL query string.
- Example: Search forms.

### POST

<form action="/register" method="POST">

- Commonly used for submitting data.
- Data is sent in the request body.
- Example: Registration, login, creating data.

Note:
POST does NOT automatically encrypt data.
HTTPS is required for secure transmission.

---

# GET vs POST

| GET | POST |
|-----|------|
| Retrieve/search data | Submit/send data |
| Data may appear in URL | Data in request body |
| Common for search | Common for registration/login |
| URL can represent the request | Usually not represented in URL |

---

# Form Mental Model

<form>
    ↓
<label>      → Field description
    ↓
<input>      → User input
    ↓
name        → Form data key
id          → Element identification/label connection
    ↓
required    → Mandatory field
    ↓
<button>    → Action
    ↓
action      → Where data goes
method      → How data is sent

---

# Quick Revision

<form>        → Form container
<label>       → Input description
<input>       → User input
<textarea>    → Long text
<select>      → Dropdown
<option>      → Dropdown choice
radio         → One choice
checkbox      → Multiple choices
<button>      → Action
action        → Destination
method        → Submission method
name          → Form data key
id            → Element identifier
value         → Input value
placeholder   → Input hint
required      → Mandatory field

# One-line memory trick
form -> label -> input -> name -> button -> action + method