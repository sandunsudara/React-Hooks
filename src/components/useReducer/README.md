# 📘 useReducer Hook – README

## 🔍 What is `useReducer`?
`useReducer` is a React hook used for managing state that is **complex**, **multi-step**, or has **multiple state transitions**.  
It works similarly to Redux by using a **reducer function** to control how state updates.

Instead of updating state directly, you **dispatch actions** that describe *what should happen*, and the reducer decides *how the state should change*.

---

## 🎯 Why Use `useReducer`?
Use `useReducer` when:

- Your state has **multiple fields**
- State updates depend on **previous values**
- You want **predictable, organized** state transitions
- You want to avoid multiple `useState` calls
- You need **Redux-like structure** without installing Redux

It is perfect for forms, complex UI logic, shopping carts, multi-step components, and any state that grows over time.

---

## ⚙️ How `useReducer` Works
There are **three main parts**:

### 1. **Initial State**
```js
const initialState = { count: 0 };
```

### 2. **Reducer Function**
The reducer decides how state changes based on an action.
```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

### 3. **useReducer Hook**
```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 🚀 Example Usage
```jsx
<button onClick={() => dispatch({ type: "increment" })}>+</button>
<button onClick={() => dispatch({ type: "decrement" })}>-</button>
<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
```

---

## 📌 When NOT to Use `useReducer`
Avoid using it when:

- The state is simple
- Only one or two variables are needed
- `useState` can handle the logic easily

`useReducer` is more verbose, so it's best for larger or more complex state logic.

---

## 🧠 When It Is MOST Useful
- Managing **complex or nested state**
- Handling **form states**
- Checkout flows / multi-step UIs
- Shopping carts
- Todo lists
- Replacing simple Redux logic

---

## 📦 Summary
`useReducer` helps you write **cleaner and scalable** state logic.  
It keeps all state changes organized in one place, making updates **predictable**, **controlled**, and **easy to debug**.

---
