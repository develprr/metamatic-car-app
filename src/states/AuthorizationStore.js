import {initStore, updateStore} from 'metamatic'
import {STATE_AUTHORIZATION} from '../config/states';

//use initState instead of setState or updateState to set initial state, so the state state won't be reset on browser page reload.
export const AuthorizationStore = () => initStore(STATE_AUTHORIZATION, {
  loggedIn: false
});

export const logout = () => updateStore(STATE_AUTHORIZATION, {
  loggedIn: false
});

export const submitLogin = (credentials) => updateStore(STATE_AUTHORIZATION, {
  loggedIn: true
});
