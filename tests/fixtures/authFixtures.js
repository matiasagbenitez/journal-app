export const initialState = {
    status: 'checking', 
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: 'authenticated',
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo user',
    photoURL: 'demo.jpg',
    errorMessage: null,
};

export const notAuthenticated = {
    status: 'not-authenticated', 
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo user',
    photoURL: 'demo.jpg',
};
