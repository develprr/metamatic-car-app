import {initState, updateState} from 'metamatic'
import {ACCESS_STATE} from '../config/states';

//use initState instead of setState or updateState to set initial state, so the state state won't be reset on browser page reload.
export const AccessState = () => initState(ACCESS_STATE, {
  loggedIn: false
});

export const logout = () => updateState(ACCESS_STATE, {
  loggedIn: false
});

export const submitLogin = (credentials) => updateState(ACCESS_STATE, {
  loggedIn: true
});
