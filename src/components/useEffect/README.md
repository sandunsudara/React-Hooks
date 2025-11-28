# 📘 useEffect Hook

## 🔍 What is `useEffect`?
`useEffect` is a React hook used for **side effects** in functional components.  
Side effects include things like:

- Fetching data from an API  
- Subscribing to events  
- Timers and intervals  
- Updating the DOM directly  

---

## 🎯 Why Use `useEffect`?
- Perform **actions after rendering**  
- React to **changes in state or props**  
- Handle **component mount/unmount** logic  

---

## ⚙️ How It Works

### **Basic Usage**
```js
useEffect(() => {
  console.log("Component mounted or updated");

  return () => {
    console.log("Cleanup on unmount or before next update");
  };
}, [dependencies]);
```

- First argument → **callback function**  
- Optional return → **cleanup function**  
- Second argument → **dependency array** (run effect when dependencies change)

---

## 🚀 Example (MUI Version)
```jsx
useEffect(() => {
  const timer = setInterval(() => setTime(new Date()), 1000);
  return () => clearInterval(timer);
}, []);
```

- `[]` → runs only once after initial render (componentDidMount)  
- `[time]` → runs whenever `time` changes  

---

## 📌 When NOT to Use
- Avoid heavy computations in `useEffect`  
- Avoid running effects unnecessarily (use dependencies wisely)  

---

## 🧠 Best Use Cases
- Fetch API data  
- Subscribing/unsubscribing to events  
- Timers and intervals  
- Animation triggers  

---

## 📦 Summary
`useEffect` allows functional components to handle **side effects** easily.  
Combined with **MUI**, it helps create dynamic and reactive UI components that respond to time, events, or data changes.

---
