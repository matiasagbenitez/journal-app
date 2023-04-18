import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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