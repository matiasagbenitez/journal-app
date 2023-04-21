import { useDispatch, useSelector } from "react-redux";
import {
  MenuOutlined,
  LogoutOutlined,
  BookOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { startLogout } from "../../store/auth";
import { resetActiveNote } from "../../store/journal";

export const Navbar = ({ drawerWith = 240 }) => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWith}px)` },
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <IconButton
            color="inherit"
            onClick={() => dispatch(resetActiveNote())}
          >
            <BookOutlined />
            <Typography
              variant="h6"
              noWrap
              sx={{
                marginLeft: 1,
                textTransform: "none",
              }}
            >
              JournalApp
            </Typography>
          </IconButton>
          <Typography
            variant="p"
            noWrap
            sx={{
              fontSize: 16,
              marginRight: 1,
            }}
          >
            ¡Hola, {""}
            {displayName}!
          </Typography>
          <IconButton onClick={onLogout} color="inherit" title="Cerrar sesión">
            <Typography
              variant="p"
              noWrap
              sx={{
                fontSize: 16,
                marginRight: 1,
              }}
            >
              Cerrar sesión
            </Typography>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
