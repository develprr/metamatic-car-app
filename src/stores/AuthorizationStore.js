import {initStore, updateStore} from 'metamatic'

export const STORE_AUTHORIZATION = 'STORE_AUTHORIZATION';

//use initState instead of setStore or updateStore to set initial sttore, so the store won't be reset on browser page reload.
export const AuthorizationStore = () => initStore(STORE_AUTHORIZATION, {
  loggedIn: false
});

export const logout = () => updateStore(STORE_AUTHORIZATION, {
  loggedIn: false
});

export const submitLogin = (credentials) => updateStore(STORE_AUTHORIZATION, {
  loggedIn: true
});
