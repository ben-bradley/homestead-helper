import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LivestockMenu from "./LivestockMenu.js";
import GardenMenu from "./GardenMenu.js";
import ConfigMenu from "./ConfigMenu.js";

export default function TopBar(props) {
  const { config } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Homestead Helper
          </Typography>
          <LivestockMenu config={config} />
          <GardenMenu config={config} />
          <ConfigMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
