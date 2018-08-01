import {dispatch, handle} from 'synchronous-dispatcher'
import axios from 'axios';
import {CAR_DATA_URL, LOGIN_URL} from '../constants';

export const REQUEST_CAR_DATA = 'REQUEST_CAR_DATA';
export const CAR_DATA_CHANGE = 'CAR_DATA_CHANGE';
export const LOAD_CAR_DATA = 'CAR_DATA_CHANGE';
export const LOAD_CAR_DATA_SUCCESS = 'LOAD_CAR_DATA_SUCCESS';
export const LOAD_CAR_DATA_ERROR = 'LOAD_CAR_DATA_ERROR';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const NAVIGATE_BACK = 'NAVIGATE_BACK'
export const LOGIN_STATE_CHANGE = 'LOGIN_STATE_CHANGE';
export const CAR_MODEL_SELECTED = 'CAR_MODEL_SELECTED';
export const CAR_MODEL_SELECTION_CHANGE = 'CAR_MODEL_SELECTION_CHANGE';


const metaStore = {
  carDetails: null,
  loggedIn: false,
  lastCarModel: null,
  activeCarModel: null
};

export const initMetaStore = () => {

  handle(REQUEST_CAR_DATA, () => {
    if (metaStore.carData) {
      return dispatch(CAR_DATA_CHANGE, metaStore.carData)
    }
    dispatch(LOAD_CAR_DATA);
  });

  handle(LOAD_CAR_DATA, () => {
    axios.get(`${CAR_DATA_URL}`)
    .then(response => {
      dispatch(LOAD_CAR_DATA_SUCCESS, response.data)
    }).catch(error => dispatch(LOAD_CAR_DATA_ERROR, error));
  });

  handle(LOAD_CAR_DATA_SUCCESS, (data) => {
    metaStore.carDetails = data;
    dispatch(CAR_DATA_CHANGE, {...metaStore.carDetails});
  });

  handle(SUBMIT_LOGIN, (credentials) => {
    metaStore.loggedIn = true;
    dispatch(LOGIN_STATE_CHANGE, metaStore.loggedIn);
  });

  handle(NAVIGATE_BACK, () => {
    metaStore.lastCarModel = metaStore.activeCarModel;
    metaStore.activeCarModel = null;
    dispatch(CAR_MODEL_SELECTION_CHANGE)
  });

  handle(LOGOUT, () => {
    console.log('MetaStore:LOGOUT');
    metaStore.loggedIn = false;
    dispatch(LOGIN_STATE_CHANGE, metaStore.loggedIn);
  });

  handle(CAR_MODEL_SELECTED, (carModelId) => {
    metaStore.activeCarModel = carModelId;
    dispatch(CAR_MODEL_SELECTION_CHANGE, metaStore.activeCarModel);
  });

};