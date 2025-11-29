import { useState } from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";

const TabUseState = () => {
  const [count, setCount] = useState(0);
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
          useState Hook Example
        </Typography>

        {/* Description Card */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            bgcolor: "#e9f5ff",
            border: "1px solid #b6ddff",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            🔍 About useState
          </Typography>
          <Typography variant="body2">
            <strong>useState</strong> lets you store and update simple state
            values such as numbers, strings, booleans, and small objects.
          </Typography>
        </Paper>

        <Typography variant="h4" textAlign="center" mb={3}>
          {count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            +
          </Button>
          <Button variant="outlined" onClick={() => setCount(count - 1)}>
            -
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default TabUseState;
