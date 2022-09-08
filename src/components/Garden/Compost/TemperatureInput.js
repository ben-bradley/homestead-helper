import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function TemperatureInput(props) {
  const { pileId, createTemperature } = props;
  const [ date, setDate ] = React.useState(new Date());
  const [ temperature, setTemperature ] = React.useState("");

  return (
    <Container maxWidth="sm">
      <Stack spacing={2} align="center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            value={date}
            onChange={(newDate) => setDate(newDate.toDate())}
            renderInput={(params) => <TextField variant="standard" {...params} />}
          />
        </LocalizationProvider>
        <TextField
          label="Temp"
          id="standard-start-adornment"

          InputProps={{
            endAdornment: <InputAdornment position="end">F</InputAdornment>
          }}
          variant="standard"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <Button
          variant={temperature ? "standard" : "disabled"}
          startIcon={<SaveIcon />}
          onClick={() => {
            const temp = {
              date,
              pileId,
              value: temperature,
              scale: "F"
            };

            createTemperature(temp);
            setTemperature("");
          }}
        >
          Save
        </Button>
      </Stack>
    </Container>
  )
}
