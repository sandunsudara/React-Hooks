# 📘 useState Hook

## 🔍 What is `useState`?
`useState` is a React hook used to **add state to functional components**.  
It lets you store and update **values dynamically** inside a component.

---

## 🎯 Why Use `useState`?
- Store **simple values** like numbers, strings, booleans, or small objects
- Manage **component-specific state**
- Handle **input values, counters, toggles, and visibility**

---

## ⚙️ How It Works

### **Declare State**
```js
const [count, setCount] = useState(0);
```
- `count` → current state value  
- `setCount` → function to update state

### **Update State**
```js
setCount(count + 1);
```

---

## 🚀 Example (MUI Version)
```jsx
<Button variant="contained" onClick={() => setCount(count + 1)}>
  Increment
</Button>

<Button variant="outlined" onClick={() => setCount(count - 1)}>
  Decrement
</Button>

<Button variant="contained" color="secondary" onClick={() => setCount(0)}>
  Reset
</Button>
```

---

## 📌 When NOT to Use
- State is **complex with many transitions** → consider `useReducer`
- State logic needs **centralized action handling**

---

## 🧠 Best Use Cases
- Counters  
- Toggle buttons  
- Input fields  
- Form elements  
- Simple UI state  

---

## 📦 Summary
`useState` provides a **simple and intuitive way to manage state** in functional components.  
When combined with **MUI**, it helps build responsive and consistent UI components quickly.

---
