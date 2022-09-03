import { useLocalStorage } from "../utils/storage.js";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

const Form1 = () => {
  const [ otherName, setOtherName ] = useLocalStorage("otherName", "");
  const [ checked, setChecked ] = useLocalStorage("checked", false);

  return (
    <div>
      <TextField
        value={otherName}
        onChange={(e) => setOtherName(e.target.value)}
        label="Other Name"
        variant="outlined"
        color="secondary"
      />
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Not a robot?"
        color="secondary"
      />
    </div>
  );
};

export default Form1;
