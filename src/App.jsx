import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import TabUseReducer from "./components/useReducer/TabUseReducer";

function App() {
  const [value, setValue] = useState("useState");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="react hooks tabs">
            <Tab label="useState" value="useState" />
            <Tab label="useEffect" value="useEffect" />
            <Tab label="useReducer" value="useReducer" />
          </Tabs>
        </Box>

        <Box sx={{ p: 2 }}>
          {value === "useState" && (
            <Typography>useState example placeholder</Typography>
          )}

          {value === "useEffect" && (
            <Typography>useEffect example placeholder</Typography>
          )}

          {value === "useReducer" && <TabUseReducer />}
        </Box>
      </Box>
    </>
  );
}

export default App;
