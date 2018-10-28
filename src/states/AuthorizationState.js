import {initState, updateState} from 'metamatic'
import {STATE_AUTHORIZATION} from '../config/states';

//use initState instead of setState or updateState to set initial state, so the state state won't be reset on browser page reload.
export const AccessState = () => initState(STATE_AUTHORIZATION, {
  loggedIn: false
});

export const logout = () => updateState(STATE_AUTHORIZATION, {
  loggedIn: false
});

export const submitLogin = (credentials) => updateState(STATE_AUTHORIZATION, {
  loggedIn: true
});
