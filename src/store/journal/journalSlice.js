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
        },
        // Cargar las notas en Firebase.
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        // Cuando se está guardando una nota.
        setSaving: (state) => {

        },
        // Actualizar una nota
        updateNote: (state, action) => {
        },
        // Eliminar una nota por su id.
        deleteNoteById: (state, action) => {
        }
    }
});


export const { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;