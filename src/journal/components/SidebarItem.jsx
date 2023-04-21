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
import moment from "moment";

export const SidebarItem = ({ title = '', body, id, date, imagesUrls = [] }) => {

  const dispatch = useDispatch();
  const newTitle = useMemo(() => {
      return title > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  const newDate = useMemo(() => {
    return moment(date).format("L") + " " + moment(date).format("LT");
  }, [date]);

  const onClickNote = () => {
    dispatch(setActiveNote({title, body, id, date, imagesUrls}));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid>
          <ListItemText primary={newTitle ? newTitle : 'Nota nueva'} />
          <ListItemText secondary={newDate} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
