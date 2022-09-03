import { useLocalStorage } from "../utils/storage.js";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

const Form1 = () => {
  const [ name, setName ] = useLocalStorage("name", "");
  const [ checked, setChecked ] = useLocalStorage("checked", false);

  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
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
