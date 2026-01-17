import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Textfield() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <TextField
        label="Enter Your Name"
        variant="outlined"
        className="home-textfield"
        placeholder="Name"
         slotProps={{
          input: {
            sx: {
              bgcolor: "white",
            },
          },
        }}
      />

      <TextField
        label="Age"
        variant="outlined"
        className="home-textfield"
        placeholder="Age"
        slotProps={{
          input: {
            sx: {
              bgcolor: "white",
            },
          },
        }}
      />

      <TextField
        
        type="date"
        variant="outlined"
        
        placeholder="Name"
         slotProps={{
          input: {
            sx: {
              bgcolor: "white",
            },
          },
        }}
      />

    </Stack>
  );
}
