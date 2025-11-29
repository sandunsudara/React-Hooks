import  { useReducer } from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
const TabUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
          useReducer Hook Example
        </Typography>

        {/* Description Card */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            bgcolor: "#fff7e6",
            border: "1px solid #ffe1a3",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            🔍 About useReducer
          </Typography>
          <Typography variant="body2">
            <strong>useReducer</strong> is ideal for complex state logic or
            when many updates are controlled by specific actions.
          </Typography>
        </Paper>

        <Typography variant="h4" textAlign="center" mb={3}>
          {state.count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" onClick={() => dispatch({ type: "inc" })}>
            +
          </Button>
          <Button variant="outlined" onClick={() => dispatch({ type: "dec" })}>
            -
          </Button>
          <Button variant="contained" color="secondary" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default TabUseReducer;
