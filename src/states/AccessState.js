import {setState, updateState} from 'metamatic'
import {ACCESS_STATE} from '../config/states';


export const AccessState = () => setState(ACCESS_STATE, {
  loggedIn: false
})

export const logout = () => updateState(ACCESS_STATE, {
  loggedIn: false
});

export const submitLogin = (credentials) => updateState(ACCESS_STATE, {
  loggedIn: true
});
