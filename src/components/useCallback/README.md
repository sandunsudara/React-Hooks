# ⚛️ React Guide: The `useCallback` Hook

A comprehensive guide to understanding and effectively using React's `useCallback` Hook for performance optimization.

---

## 🧩 What is `useCallback`?

`useCallback` is a built-in **React Hook** that returns a **memoized version of a function**.

React will only recreate this function when one of its **dependencies changes**.

Its primary purpose is to **improve performance** and **prevent unnecessary re-renders**, especially when passing functions down to child components.

---

## 🎯 Why Use `useCallback`?

You should use `useCallback` primarily in scenarios where function identity stability is crucial:

* **Prop Stability:** When passing a function as a prop to a child component.
* **Memoized Components:** When working with **`React.memo`** or other memoization techniques, as a stable function reference is required to prevent the memoized component from re-rendering.
* **Performance Optimization:** When dealing with large or complex components where recreating a function on every render introduces a noticeable cost.
* **Effect Dependencies:** When a function is used as a dependency inside `useEffect`, `useMemo`, or another `useCallback`.

---

## 🛠️ Syntax

The syntax mirrors other dependency array hooks like `useEffect` and `useMemo`:

```javascript
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);