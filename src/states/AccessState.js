import {store, update} from 'metamatic'
import {ACCESS_STATE} from '../config/states';


export const AccessState = () => store(ACCESS_STATE, {
  loggedIn: false
})

export const logout = () => update(ACCESS_STATE, {
  loggedIn: false
});

export const submitLogin = (credentials) => update(ACCESS_STATE, {
  loggedIn: true
});
