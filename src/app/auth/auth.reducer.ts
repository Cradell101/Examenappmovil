// auth.reducer.ts
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    isAuthenticated: false,
};

const _authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state, { username, password }) => {
        // Realiza la lógica de autenticación y actualiza el estado
        if (username === 'usuario' && password === 'contraseña') {
            return { isAuthenticated: true };
        }
        return { isAuthenticated: false };
    }),
    on(AuthActions.logout, () => {
        return { isAuthenticated: false };
    })
);

export function authReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}

// New export for the selector
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (authState: AuthState) => authState.isAuthenticated
);


