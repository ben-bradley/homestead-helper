import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ConfigMenu from "./ConfigMenu.js";
import DrawerMenu from "./DrawerMenu.js";

export default function TopBar(props) {
  const { config } = props;

  const [ open, setOpen ] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((_open) => !_open);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="app-menu" onClick={toggleDrawer}>
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Homestead Helper
          </Typography>
          <ConfigMenu />
        </Toolbar>
      </AppBar>
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} config={config} />
    </Box>
  );
}
