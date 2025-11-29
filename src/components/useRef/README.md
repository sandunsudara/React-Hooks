# 📘 useRef Hook – README (with MUI Components)

## 🔍 What is `useRef`?
`useRef` is a React hook used to store **mutable values** that persist across renders.  
It does **not re-render** the component when the value changes.

You can use it to reference:

- DOM elements  
- Mutable variables  
- Previous values  
- Timeout/interval IDs  

---

## 🎯 Why Use `useRef`?
- To control or focus DOM elements  
- To store values without causing re-renders  
- To keep track of previous state  
- To manage timers or external libraries  

---

## ⚙️ How It Works

### **Create a reference**
```js
const inputRef = useRef(null);
```

### **Use it in elements**
```jsx
<input ref={inputRef} />
```

### **Access stored DOM node**
```js
inputRef.current.focus();
```

---

## 🚀 Example (MUI Version)
```jsx
<TextField inputRef={inputRef} label="Type something..." />
<Button onClick={() => inputRef.current.focus()}>Focus Input</Button>
```

---

## 📌 When NOT to Use
- Avoid using `useRef` to store values that should trigger re-renders  
- Avoid replacing state with refs just to skip re-renders  

---

## 🧠 Best Use Cases
- Focusing inputs  
- Accessing DOM elements  
- Storing previous state values  
- Managing intervals / timeouts  
- Storing values across renders without update triggers  

---

## 📦 Summary
`useRef` is perfect for working with **DOM elements and mutable values** without re-rendering.  
Combined with **MUI**, it provides clean and smooth UI interactions like focusing inputs.

---
