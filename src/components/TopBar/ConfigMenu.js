import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

export default function ConfigMenu() {
  return (
    <IconButton aria-label="config">
      <Link color="secondary" to="/config" style={{ textDecoration: "none" }}>
        <SettingsIcon color="secondary" />
      </Link>
    </IconButton>
  );
}
