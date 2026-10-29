# JavaScript Functions --- Short Notes

## 1. Function Basics

A function is a reusable block of code that runs when it is called.

``` js
function greet() {
  console.log("Radhe Radhe!");
}

greet();
```

-   Define a function with `function`.
-   Call it using its name followed by `()`.
-   If a function is defined but not called, its body does not run.

## 2. Parameters and Arguments

-   **Parameter:** The variable listed in the function definition.
-   **Argument:** The value passed when calling the function.

``` js
function greet(name) {
  console.log("Hello " + name);
}

greet("Radhe");
```

Here, `name` is the parameter and `"Radhe"` is the argument.

A function can accept multiple parameters:

``` js
function introduce(name, skill) {
  console.log("My name is " + name + " and I am learning " + skill);
}

introduce("Dhanush", "JavaScript");
```

## 3. The `return` Statement

`return` sends a value back to the code that called the function.

``` js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result); // 30
```

`console.log()` displays a value in the console; `return` gives a value
back so it can be stored or used elsewhere.

## 4. Function Expressions

A function can be assigned to a variable.

``` js
const greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Krishna"));
```

Call the function using the variable name.

## 5. Arrow Functions

Arrow functions provide another syntax for writing functions.

``` js
const addition = (x, y) => {
  return x + y;
};

console.log(addition(10, 5)); // 15
```

A concise arrow function can return an expression implicitly:

``` js
const add = (a, b) => a + b;
const square = num => num * num;

console.log(square(8)); // 64
```

-   Use braces `{}` with an explicit `return` when writing a function
    body.
-   Without braces, an expression is returned implicitly.
-   For one parameter, parentheses may be omitted: `num => num * num`.

## 6. Default Parameters

A parameter can have a default value used when the argument is omitted
or `undefined`.

``` js
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Krishna");
greet(); // Hello Guest
```

Example with a calculation:

``` js
function calculatePrice(price, quantity = 1) {
  return price * quantity;
}

console.log(calculatePrice(100, 5)); // 500
console.log(calculatePrice(100));    // 100
```

## 7. Function Scope

Variables declared inside a function are local to that function. A
function can also access variables declared outside it, when they are in
scope.

``` js
const language = "JavaScript";

function showSkill() {
  const level = "Beginner";
  console.log("Language: " + language);
  console.log("Level: " + level);
}

showSkill();
```

`level` is local to `showSkill()` and cannot be accessed outside that
function.

## 8. Block Scope: `let` vs `var`

-   `let` is block-scoped: it is available only inside the `{}` block
    where it is declared.
-   `var` is function-scoped (or global-scoped when declared outside a
    function), not block-scoped.

``` js
if (true) {
  let age = 21;
  var city = "Bengaluru";
}

console.log(city); // "Bengaluru"
console.log(age);  // ReferenceError: age is not defined
```

Inside a function, a `var` declared within an `if` block can be accessed
elsewhere in that function, but a `let` declared in that block cannot.

## 9. Function Hoisting

A function declaration can be called before its declaration in the
source code:

``` js
greet();

function greet() {
  console.log("Radhe Radhe!");
}
```

A function expression assigned to `const` cannot be called before the
variable is initialized:

``` js
const showMessage = function () {
  console.log("Learning JavaScript Hoisting!");
};

showMessage();
```

Calling `showMessage()` before the `const` initialization causes a
`ReferenceError` because the binding is in the temporal dead zone until
initialization.

## 10. Final Practice Example

``` js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(100, 3);
console.log(total); // 300
```

## Common Mistakes to Avoid

-   Defining a function but forgetting to call it.
-   Confusing parameters (definition) with arguments (call).
-   Using `console.log()` when a returned value is needed for further
    calculations.
-   Forgetting that a function expression assigned to `const` must be
    initialized before it is called.
-   Trying to access a function-local or block-scoped variable from
    outside its scope.
-   Assuming `var` and `let` have the same scope rules.

------------------------------------------------------------------------

**Revision tip:** Practice each example by typing it yourself and
predicting the output before running it.
