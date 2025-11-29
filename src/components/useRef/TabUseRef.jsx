import { useRef } from "react";
import { Box, TextField ,Button, Typography, Paper ,Divider } from "@mui/material";

const TabUseRef = () => {
  const inputRef = useRef(null);

  return (
     <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f7f7f7"
      p={2}
    >
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: 400 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
          useRef Hook Example
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
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            🔍 About useRef
          </Typography>
          <Typography variant="body2">
            <strong>useRef</strong> stores a mutable value that does not trigger
            re-renders. Common uses include focusing inputs and storing DOM nodes.
          </Typography>
        </Paper>

        <TextField
          inputRef={inputRef}
          label="Type something..."
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button variant="contained" onClick={() => inputRef.current.focus()}>
          Focus Input
        </Button>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" textAlign="center" color="text.secondary">
          This focuses the input using <strong>useRef</strong>.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TabUseRef;
