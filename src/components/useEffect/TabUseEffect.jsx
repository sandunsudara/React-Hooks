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
      bgcolor="#f0f0f0"
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Current Time
        </Typography>
        <Typography variant="h5">{time.toLocaleTimeString()}</Typography>
      </Paper>
    </Box>
  );
};

export default TabUseEffect;
