import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";

export default function Tick() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Stack spacing={2}>
      <FormControlLabel
        control={<Checkbox {...label} defaultChecked />}
        label="Agree To Terms"
      />
      
      
    </Stack>
  );
}
