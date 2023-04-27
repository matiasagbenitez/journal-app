import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { initialState, demoUser, authenticatedState, notAuthenticated } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => {

    test('debe de retornar el estado inicial y llamarse "auth"', () => {
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('debe de autenticar al usuario', () => {
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual(authenticatedState);
    });

    test('debe de desautenticar al usuario sin argumentos', () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });
    });

    test('debe de desautenticar al usuario y mostrar un mensaje de error', () => {
        const errorMessage = 'Credentials are invalid';

        const state = authSlice.reducer(authenticatedState, logout( errorMessage ));
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        });
    });

    test('Debe de cambiar el estado a checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe('checking');
    });

});