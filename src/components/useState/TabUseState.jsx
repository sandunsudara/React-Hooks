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
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Count: {count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Increment
          </Button>

          <Button variant="outlined" onClick={() => setCount(count - 1)}>
            Decrement
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
