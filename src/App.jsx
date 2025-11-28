import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import TabUseReducer from "./components/useReducer/TabUseReducer";
import TabUseState from "./components/useState/TabUseState";

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
      label: "useEffect",
      value: "useEffect",
      component: (
        <Typography>
          **useEffect** example placeholder
        </Typography>
      ),
    },
    {
      label: "useReducer",
      value: "useReducer",
      component: <TabUseReducer />,
    },
  ];
  // 👆 End of completed tabItems array

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