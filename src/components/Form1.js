import TextField from "@mui/material/TextField";

import { useLocalStorage } from "../utils/storage.js";

const Form1 = () => {
  const [ name, setName ] = useLocalStorage("name", "");

  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        variant="outlined"
      />
    </div>
  );
};

export default Form1;
