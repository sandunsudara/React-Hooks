import React, { useState, useCallback } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";

const TabUseCallback = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // ---------- useCallback Function ----------
  const handleSubmit = useCallback(() => {
    alert("Submitted: " + value);
  }, [value]);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f7f7f7"
      p={2}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          width: 450,
          bgcolor: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          useCallback Hook Example
        </Typography>

        {/* Description Card */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            bgcolor: "#f0f4ff",
            border: "1px solid #d0d8ff",
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            🔍 About useCallback
          </Typography>

          <Typography variant="body2">
            <strong>useCallback</strong> returns a memoized version of a
            function. It prevents unnecessary re-creations of functions on each
            render, improving performance—especially when passing callbacks to
            child components.
          </Typography>
        </Paper>

        {/* Input + Submit */}
        <TextField
          label="Enter Text"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit (uses useCallback)
        </Button>

        <Divider sx={{ my: 3 }} />

        {/* Count Section */}
        <Typography variant="body2" color="text.secondary" mb={1}>
          This button re-renders the component and updates count.
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          onClick={() => setCount((c) => c + 1)}
        >
          Increase Count: {count}
        </Button>
      </Paper>
    </Box>
  );
};

export default TabUseCallback;
