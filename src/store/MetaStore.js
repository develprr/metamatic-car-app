import {dispatch, handle} from 'synchronous-dispatcher'
import axios from 'axios';
import {CAR_DATA_URL} from '../constants';

const metaStore = {
  carData: null,
  ownerData: null
};

export const initMetaStore = () => {

  handle('REQUEST-CAR-DATA', () => {
    if (metaStore.carData) {
      return dispatch('CAR-DATA-CHANGE', metaStore.carData)
    }
    dispatch('LOAD-CAR-DATA');
  });

  handle('LOAD-CAR-DATA', () => {
    axios.get(`${CAR_DATA_URL}`)
    .then(response => {
      dispatch('LOAD-CAR-DATA-SUCCESS', response.data)
    }).catch(error => dispatch("LOAD-CAR-DATA-ERROR", error));
  });

  handle('LOAD-CAR-DATA-SUCCESS', (data) => {
    metaStore.carData = data;
    dispatch('CAR-DATA-CHANGE', {...data});
  });

}
