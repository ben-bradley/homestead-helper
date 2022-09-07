import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function LivestockMenu(props) {
  const { config } = props;
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  return (
    <div>
      <Button
        color="secondary"
        id="livestock-button"
        aria-controls={open ? "livestock-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Livestock
      </Button>
      <Menu
        id="livestock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "livestock-button" }}
      >
        { config.show.chicken &&
          <Link color="secondary" to="/livestock/chicken" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleClose}>
              Chicken
            </MenuItem>
          </Link>
        }
        { config.show.rabbits &&
          <Link color="secondary" to="/livestock/rabbits" style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleClose}>
              Rabbits
            </MenuItem>
          </Link>
        }
      </Menu>
    </div>
  );
}
