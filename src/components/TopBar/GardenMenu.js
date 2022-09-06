import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function GardenMenu() {
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  return (
    <div>
      <Button
        color="inherit"
        id="garden-button"
        aria-controls={open ? "garden-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Garden
      </Button>
      <Menu
        id="garden-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "garden-button" }}
      >
        <MenuItem onClick={handleClose}>TODO!</MenuItem>
      </Menu>
    </div>
  );
}
