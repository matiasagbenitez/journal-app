import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    activeNote: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { id, title, body, date, onInputChange, formState } = useForm(note);
  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "¡Genial!",
        text: messageSaved,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#262254",
      });
    }
  }, [messageSaved]);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={30} fontWeight={"light"}>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ p: 1 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué suceció hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
