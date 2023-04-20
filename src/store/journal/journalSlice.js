import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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

        },
        // Hacer click en una nota para que se muestre en el editor.
        setActiveNote: (state, action) => {

        },
        // Cargar las notas en Firebase.
        setNotes: (state, action) => {

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


export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;