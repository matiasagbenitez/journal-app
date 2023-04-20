import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // activeNote: {
        //     id: '',
        //     title: '',
        //     body: '',
        //     date: '',
        //     imagesURLS: [],
        // }
    },
    // Todos los reducers deben ser funciones puras y síncronas. Para tareas asíncronas, usar thunks.
    reducers: {
        // Se crea el espacio en Firebase y se actualiza su información.
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        // Cuando se está guardando una nota.
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        // Hacer click en una nota para que se muestre en el editor.
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
            state.messageSaved = '';
        },
        // Cargar las notas en Firebase.
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        // Cuando se está guardando una nota.
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        // Una nota se ha guardado, se debe actualizar el mensaje de guardado y el estado de guardado.
        noteUpdated: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note);
            state.messageSaved = `¡La nota se ha actualizado correctamente!`;
        },
        // Eliminar una nota por su id.
        deleteNoteById: (state, action) => {
        }
    }
});


export const { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, noteUpdated, deleteNoteById } = journalSlice.actions;