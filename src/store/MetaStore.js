import {dispatch, handle, unhandle} from 'synchronous-dispatcher'
import axios from 'axios';
import {CAR_DATA_URL} from '../constants';
import {CarModelService} from '../service/CarModelService';

export const REQUEST_CAR_LIST = 'REQUEST_CAR_LIST';
export const REQUEST_CAR_ENTRY = 'REQUEST_CAR_ENTRY';
export const CAR_LIST_CHANGE = 'CAR_LIST_CHANGE';
export const CAR_ENTRY_CHANGE = 'CAR_ENTRY_CHANGE';
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
export const FILTER_CAR_MODELS = 'FILTER_CAR_MODELS';

const metaStore = {
  carData: null,
  cars: null,
  loggedIn: false,
  lastCarModel: null,
  activeCarModel: null,
  carModelFilter: ''
};

export const initMetaStore = () => {

  handle(REQUEST_CAR_LIST, () => {
    axios.get(`${CAR_DATA_URL}`)
    .then(response => {
      console.log('MetaStore:REQUEST_CAR_LIST:response')
      metaStore.cars = response.data;
      dispatch(CAR_LIST_CHANGE, {...metaStore.cars})
    }).catch(error => dispatch(LOAD_CAR_DATA_ERROR, error));
  });

  handle(REQUEST_CAR_ENTRY, () => {
    if (metaStore.carData) {
      return dispatch(CAR_ENTRY_CHANGE, metaStore.carData)
    }
    axios.get(`${CAR_DATA_URL}/${metaStore.activeCarModel}`)
    .then(response => {
      metaStore.carDetails = response.data;
      dispatch(CAR_ENTRY_CHANGE, {...metaStore.carDetails});
    }).catch(error => dispatch(LOAD_CAR_DATA_ERROR, error));
  });

  handle(SUBMIT_LOGIN, (credentials) => {
    metaStore.loggedIn = true;
    dispatch(LOGIN_STATE_CHANGE, metaStore.loggedIn);
  });

  handle(NAVIGATE_BACK, () => {
    metaStore.lastCarModel = metaStore.activeCarModel;
    metaStore.activeCarModel = null;
    dispatch(CAR_MODEL_SELECTION_CHANGE, null)
  });

  handle(LOGOUT, () => {
    metaStore.loggedIn = false;
    dispatch(LOGIN_STATE_CHANGE, metaStore.loggedIn);
  });

  handle(CAR_MODEL_SELECTED, (carModelId) => {
    metaStore.activeCarModel = carModelId;
    dispatch(CAR_MODEL_SELECTION_CHANGE, metaStore.activeCarModel);
  });

  handle(FILTER_CAR_MODELS, (filter) => {
    metaStore.carModelFilter = filter;
    const filteredModels = CarModelService.filterByModel(metaStore.cars, filter);
    dispatch(CAR_LIST_CHANGE, filteredModels);
  })

};

export const attach = (component, eventName, action) => {
  handle(eventName, component.constructor.name, action);
}

export const detach = (component, event) => {
  unhandle(event, component.constructor.name);
}