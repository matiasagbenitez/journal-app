import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));           // Si no se pudo iniciar sesión, se cierra la sesión
        dispatch(login(result));                                                // Si se pudo iniciar sesión, se guarda la información del usuario
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
        if (!ok) return dispatch(logout(errorMessage));                         // Si no se pudo iniciar sesión, se cierra la sesión
        dispatch(login({ uid, displayName, email, photoURL }));                 // Si se pudo iniciar sesión, se guarda la información del usuario
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password });
        if (!ok) return dispatch(logout(errorMessage));                         // Si no se pudo iniciar sesión, se cierra la sesión
        dispatch(login({ uid, displayName, email, photoURL }));                 // Si se pudo iniciar sesión, se guarda la información del usuario
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}