import {initStore, updateStore} from 'metamatic'
import {STORE_AUTHORIZATION} from '../config/states';

//use initState instead of setState or updateState to set initial state, so the state state won't be reset on browser page reload.
export const AuthorizationStore = () => initStore(STORE_AUTHORIZATION, {
  loggedIn: false
});

export const logout = () => updateStore(STORE_AUTHORIZATION, {
  loggedIn: false
});

export const submitLogin = (credentials) => updateStore(STORE_AUTHORIZATION, {
  loggedIn: true
});
