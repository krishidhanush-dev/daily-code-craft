# JavaScript — Arrays & Objects (Part 1)

Short revision notes for the concepts practised in `script.js`.

## 1. Arrays

An array stores an ordered collection of values. Indexing starts at `0`.

```js
const skills = ["HTML", "CSS", "JavaScript"];
skills[0];          // "HTML"
skills.length;      // 3
skills[skills.length - 1]; // last item
```

### Read, update, add and remove

| Method / property | Purpose | Changes the original array? |
|---|---|---|
| `arr[index]` | Read or update an item | Yes, when assigning |
| `arr.length` | Get the number of items | No |
| `push(value)` | Add item at the end | Yes |
| `pop()` | Remove the last item | Yes; returns removed item |
| `unshift(value)` | Add item at the beginning | Yes |
| `shift()` | Remove the first item | Yes; returns removed item |

### Search and copy / combine

| Method | Purpose | Result / mutation |
|---|---|---|
| `includes(value)` | Check whether a value exists | `true` or `false`; no mutation |
| `indexOf(value)` | Find the first matching index | Index, or `-1` if not found; no mutation |
| `slice(start, end)` | Copy a portion of an array | New array; `end` is excluded; no mutation |
| `splice(start, count, ...items)` | Remove, insert or replace items | Mutates the original array |
| `concat(otherArray)` | Combine arrays | New array; originals unchanged |
| `join(separator)` | Join items into text | Returns a string; original unchanged |

### Reorder

- `reverse()` reverses the array **in place** (mutates it).
- `sort((a, b) => a - b)` sorts numbers in ascending order.
- `sort((a, b) => b - a)` sorts numbers in descending order.
- `sort()` mutates the original array. Use a numeric compare function when sorting numbers.

## 2. Objects

An object stores related data as key–value pairs.

```js
const developer = {
  name: "Dhanu",
  role: "Full Stack Developer"
};
```

### Access and modify properties

```js
developer.name;          // dot notation
developer["role"];       // bracket notation
developer.role = "Developer"; // update

developer.city = "Mysore";    // add

delete developer.city;         // delete
```

Use bracket notation when the property name is held in a variable or needs a string key.

### Object utility methods

- `Object.keys(obj)` returns an array of property names.
- `Object.values(obj)` returns an array of property values.
- `Object.entries(obj)` returns an array of `[key, value]` pairs.
- `for...in` loops over an object's enumerable property keys. Use `obj[key]` to read each value.

### Nested objects

An object can contain another object. Access or update nested properties with chained dot notation:

```js
developer.address.city;
developer.address.city = "Mysore";
developer.address.state = "Karnataka"; // add nested property
delete developer.address.country;       // delete nested property
```

## 3. Object Destructuring

Destructuring extracts properties into variables.

```js
const { name, role } = developer;
```

Rename a variable while extracting a property:

```js
const { role: developerRole } = developer;
```

Extract properties from a nested object:

```js
const {
  address: { city, country }
} = developer;
```

Set a default value when a property is missing or `undefined`:

```js
const { language = "JavaScript" } = developer;
```

## 4. Object Rest and Spread

### Rest: collect remaining properties

```js
const { role, ...otherDetails } = developer;
```

`role` is extracted separately; the remaining enumerable own properties are collected into `otherDetails`.

### Spread: copy and extend an object

```js
const finalDeveloper = {
  ...developer,
  role: "Full Stack Developer",
  language: "JavaScript"
};
```

Spread copies the object's own enumerable properties into a new object. Properties written later override earlier properties with the same key.

**Important:** Object spread creates a **shallow copy**. Nested objects such as `address` are still shared references unless copied separately.

## Quick revision

- Arrays are ordered and use zero-based indexes.
- `slice()` returns a portion; `splice()` changes the original array.
- `push`, `pop`, `shift`, `unshift`, `splice`, `reverse`, and `sort` mutate the array.
- `concat()` and `slice()` return new arrays; `join()` returns a string.
- Objects store key–value pairs; properties can be accessed, added, updated, and deleted.
- Destructuring extracts properties; Rest collects the remaining properties; Spread copies properties into another object.
