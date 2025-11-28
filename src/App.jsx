import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import TabUseReducer from "./components/useReducer/TabUseReducer";
import TabUseState from "./components/useState/TabUseState";
import TabUseEffect from "./components/useEffect/TabUseEffect";

function App() {
  const [value, setValue] = useState("useState");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // 👇 Completed tabItems array
  const tabItems = [
    {
      label: "useState",
      value: "useState",
      component: <TabUseState/>
    },
    {
      label: "useReducer",
      value: "useReducer",
      component: <TabUseReducer />,
    },
     {
      label: "useEffect",
      value: "useEffect",
      component: <TabUseEffect />,
    },
  ];


  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* You can now render the Tabs dynamically */}
          <Tabs value={value} onChange={handleChange} aria-label="react hooks tabs">
            {tabItems.map((item) => (
              <Tab key={item.value} label={item.label} value={item.value} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ p: 2 }}>
          {/* And render the corresponding content dynamically */}
          {tabItems.find((item) => item.value === value)?.component}
        </Box>
      </Box>
    </>
  );
}

export default App;