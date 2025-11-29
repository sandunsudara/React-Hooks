import { useState, useEffect } from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";

const TabUseEffect = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5"
      p={2}
    >
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: 380 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          useEffect Hook Example
        </Typography>

        {/* Description Card */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            bgcolor: "#e8ffe8",
            border: "1px solid #baffba",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            🔍 About useEffect
          </Typography>
          <Typography variant="body2">
            <strong>useEffect</strong> lets you run side effects, such as API
            calls, timers, subscriptions, and updating the DOM.
          </Typography>
        </Paper>

        <Typography variant="h4" textAlign="center">
          {time.toLocaleTimeString()}
        </Typography>
      </Paper>
    </Box>
  );
};

export default TabUseEffect;
