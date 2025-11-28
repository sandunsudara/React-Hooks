# React Hooks Summary

React Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They enable functional components to manage state, handle side effects, and optimize performance.

This document categorizes all built-in hooks and provides a brief description, primary use case, and an example for each.

## Your Own Hooks (Custom Hooks)

Custom Hooks are a core concept for reusing stateful logic across multiple components.

* **Description:** A Custom Hook is a JavaScript function whose name starts with the word `use` (e.g., `useDataFetching`).
* **Use Case:** They are used to **abstract and reuse complex component logic** that often involves combining built-in hooks like `useState` and `useEffect`. For example, a custom hook can manage form validation logic or abstract connection logic to an external API.

## Built-in React Hooks Reference

| Hook | Category | Use Case & Description | Example (Conceptual) |
| :--- | :--- | :--- | :--- |
| **`useState`** | **State** | **Essential for basic state management.** Declares a state variable that you can update directly. Returns the current state and a function to update it. | ```jsx const [count, setCount] = useState(0); ``` |
| **`useReducer`** | **State** | Used for managing **complex state logic** where the update logic is intricate, or when the next state depends on the previous one. An alternative to `useState` for complex objects. | ```jsx const [state, dispatch] = useReducer(reducer, initialState); ``` |
| **`useContext`** | **Context** | **Reads and subscribes to a React Context.** Allows a component to access data from distant ancestor components without "prop drilling." | ```jsx const theme = useContext(ThemeContext); ``` |
| **`useRef`** | **Ref** | **Holds a mutable value** that persists across renders but **does not cause a component to re-render** when changed. Most often used to hold a reference to a DOM element. | ```jsx const inputRef = useRef(null); ``` |
| **`useImperativeHandle`** | **Ref** | Used with `forwardRef` to **customize the ref value** exposed to parent components, limiting access to certain methods or properties. (Rarely used.) | ```jsx useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() })); ``` |
| **`useEffect`** | **Effect** | **Performs side effects** (interacting with external systems) after rendering. Common for data fetching, subscriptions, and manual DOM manipulation. Requires a cleanup function to prevent memory leaks. | ```jsx useEffect(() => { document.title = `Clicked ${count} times`; return () => {/* Cleanup */}; }, [count]); ``` |
| **`useLayoutEffect`** | **Effect** | Fires **synchronously after all DOM mutations but before the browser paints.** Essential for reading layout properties (e.g., element size) and synchronously making DOM changes based on them. | ```jsx useLayoutEffect(() => { // Measure and update layout here }, [dependency]); ``` |
| **`useInsertionEffect`** | **Effect** | An extremely rare hook **primarily for CSS-in-JS libraries.** Fires **before React makes changes to the DOM.** (Very rare in application code.) | ```jsx useInsertionEffect(() => { /* Inject dynamic CSS */ }, [style]); ``` |
| **`useMemo`** | **Performance** | **Memoizes (caches) the result of an expensive calculation** between renders. The value is recalculated only when one of its dependencies changes. | ```jsx const memoizedValue = useMemo(() => calculateExpensiveValue(a, b), [a, b]); ``` |
| **`useCallback`** | **Performance** | **Memoizes a function definition** itself. Used to prevent unnecessary re-renders in optimized child components that rely on reference equality (e.g., passing event handlers down). | ```jsx const handleClick = useCallback(() => { // function body }, [dependency]); ``` |
| **`useTransition`** | **Performance** | Allows you to mark a state update as a **"transition,"** making it non-blocking. This keeps the UI responsive for urgent updates while a slower update renders in the background. | ```jsx const [isPending, startTransition] = useTransition(); startTransition(() => { setCount(newCount); }); ``` |
| **`useDeferredValue`** | **Performance** | Defers updating a non-critical part of the UI. This lets the main UI update immediately while a less important value (like a filtering list) updates with a delay. | ```jsx const deferredQuery = useDeferredValue(query); // Used to render the slower list ``` |
| **`useActionState`** | **Other** | **Manages state updates from form actions.** Wraps an asynchronous function (action) and returns the last result and a new function to trigger the action, useful for server-side forms. | ```jsx const [state, formAction] = useActionState(submitForm, null); ``` |
| **`useId`** | **Other** | Generates a stable, globally **unique ID** for use with accessibility attributes (like `aria-labelledby`) to ensure consistency across the server and client. | ```jsx const id = useId(); ``` |
| **`useSyncExternalStore`** | **Other** | Allows components to efficiently **subscribe to an external store** (outside of React state) without causing tearing issues during concurrent rendering. Primarily used by library authors. | ```jsx const value = useSyncExternalStore(store.subscribe, store.getSnapshot); ``` |
| **`useDebugValue`** | **Other** | Used inside **custom Hooks** to display a custom, human-readable label in React DevTools, aiding in the debugging of custom hook logic. | ```jsx useDebugValue(isOnline ? 'Online' : 'Offline'); ``` |