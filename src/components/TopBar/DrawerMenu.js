import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
  const { open, toggleDrawer, config } = props;
  const { root } = config;

  const livestock = Object.keys(config.show.livestock)
    .filter((key) => config.show.livestock[key]);
  const garden = Object.keys(config.show.garden)
    .filter((key) => config.show.garden[key]);

  return (
    <Drawer anchor='left' open={open} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListSubheader>Livestock</ListSubheader>
          { livestock.map((item, i) =>
            <ListItem key={i} style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemButton
                component={Link}
                to={`/${root}/livestock/${item}`}
                onClick={toggleDrawer}
              >
                <ListItemText primary={item} style={{ textTransform: "capitalize" }} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
        <Divider />
        <List>
          <ListSubheader>Garden</ListSubheader>
          { garden.map((item, i) =>
            <ListItem key={i} style={{ paddingTop: 0, paddingBottom: 0 }}>
              <ListItemButton
                component={Link}
                to={`/${root}/garden/${item}`}
                onClick={toggleDrawer}
              >
                <ListItemText primary={item} style={{ textTransform: "capitalize" }} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );
}
