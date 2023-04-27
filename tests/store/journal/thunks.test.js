import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";
import { FirebaseDB } from "../../../src/firebase/config";

describe('Pruebas en Journal Thunks', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de crear una nueva nota en blanco', async () => {
        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid } });
        await startNewNote()(dispatch, getState);
        expect(dispatch).toHaveBeenCalledWith(savingNewNote());
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            title: '',
            body: '',
            date: expect.any(Number),
            id: expect.any(String)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            title: '',
            body: '',
            date: expect.any(Number),
            id: expect.any(String)
        }));

        // Borrar la nota creada
        // const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        // const docs = await getDocs(collectionRef); 

        // const promises = [];
        // docs.forEach(doc => promises.push(deleteDoc(doc.ref)));
        // await Promise.all(promises);

    });
});