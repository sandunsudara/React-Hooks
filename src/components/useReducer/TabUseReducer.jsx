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
      height="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Count: {state.count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <Button
            variant="contained"
            onClick={() => dispatch({ type: "increment" })}
          >
            Increment
          </Button>

          <Button
            variant="outlined"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Decrement
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default TabUseReducer;
