import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = async () => {
    try {
        // En este punto se abre el modal de Google para que el usuario inicie sesión
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // Si el usuario inicia sesión correctamente, se obtienen las credenciales
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // Actualizar el displayName del usuario en Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, photoURL, uid } = resp.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return {
            ok: true,
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
}