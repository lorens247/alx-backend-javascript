# 0x01. ES6 Promises

# Promises: How, Why, and What

## What is a Promise?

A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous code more elegantly, avoiding callback hell and improving code readability.

## How a Promise Works

1. **Pending:**
   - Initial state when a Promise is created.

2. **Fulfilled (Resolved):**
   - The operation completed successfully, and the promise has a resulting value.

3. **Rejected:**
   - The operation failed, and the promise has a reason for the failure.

## Why Use Promises

- **Asynchronous Operations:**
  - Ideal for handling asynchronous tasks such as API calls, file reading, etc.

- **Chaining:**
  - Promises can be easily chained, making code more readable.

- **Error Handling:**
  - Allows centralized error handling using the `catch` method.

# How to Use the `then`, `resolve`, `catch` Methods

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Async operation, e.g., API call
  const success = true;

  if (success) {
    resolve('Operation completed successfully');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

- The `then` method is used to handle the fulfilled state.
- The `catch` method is used to handle the rejected state.

# How to Use Every Method of the Promise Object

## `Promise.all`

```javascript
const promise1 = Promise.resolve('Promise 1');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000));

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // ['Promise 1', 'Promise 2']
  });
```

- Resolves when all promises in the array are fulfilled.

## `Promise.race`

```javascript
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000));

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value); // 'Promise 2' (whichever resolves first)
  });
```

- Resolves or rejects as soon as one of the promises resolves or rejects.

# Throw / Try

```javascript
function exampleFunction() {
  try {
    // Code that might throw an exception
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error(error.message);
  }
}
```

- The `try` block contains the code that might throw an exception.
- If an exception occurs, it is caught in the `catch` block.

# The `await` Operator

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
```

- The `await` operator is used inside an `async` function to pause execution until the Promise is resolved.

# How to Use an Async Function

```javascript
async function asyncExample() {
  try {
    const result = await somePromiseFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncExample();
```

- An async function returns a Promise, allowing the use of `await` to handle asynchronous operations more cleanly.
- Error handling can be done using `try` and `catch` within the async function.
