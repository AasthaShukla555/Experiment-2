import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Abouttext() {
  return (
    <Stack spacing={2} sx={{ width: 400 }}>
     
      <TextField
        label="About Me"
        variant="outlined"
        multiline
        rows={4}
        placeholder="Write something about yourself......"
        className="about-textfield"
      />
    </Stack>
  );
}
