import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";

export const SidebarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();
  const newTitle = useMemo(() => {
      return title > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const onClickNote = () => {
    dispatch(setActiveNote({title, body, id, date, imageUrls}));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
