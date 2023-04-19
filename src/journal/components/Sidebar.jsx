import { useSelector } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  Grid,
  ListItemText,
} from "@mui/material";

export const Sidebar = ({ drawerWith = 240 }) => {
  const { displayName, photoURL } = useSelector((state) => state.auth);
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWith },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWith,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {["Enero", "Febrero", "Marzo", "Abril"].map((month) => (
            <ListItem key={month} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid>
                  <ListItemText primary={month} />
                  <ListItemText secondary={"Lorem ipsum dolor sit amet."} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
