//replace this with real axios for server-enabled environments
import {axios} from '../server/fakeAxios';

import {getState, setStore, updateStore} from 'metamatic';
import {CAR_DATA_URL} from '../config/constants';

export const STORE_CAR_MODEL_LIST = 'STORE_CAR_MODEL_LIST';
export const STORE_CAR_MODEL_ITEM = 'STORE_CAR_MODEL_ITEM';

export const ATTR_ALL_CAR_MODELS = 'allCarModels';
export const ATTR_FILTERED_CAR_MODELS = 'filteredCarModels';
export const ATTR_ACTIVE_CAR_MODEL_ID = 'activeCarModelId';
export const ATTR_CAR_MODEL_DETAILS = 'carModelDetails';

export const CarModelStore = () => loadCarModelList();

const getAllModels = () => getState(STORE_CAR_MODEL_LIST, ATTR_ALL_CAR_MODELS);

export const filterCarModels = (filter) => {
  const allCarModels = getAllModels();
  const filteredModels = filterByModel(allCarModels, filter);
  updateStore(STORE_CAR_MODEL_LIST, {
    [ATTR_FILTERED_CAR_MODELS]: filteredModels
  });
};

export const clearCarModelSelection = () => setStore(STORE_CAR_MODEL_ITEM, {});

export const selectCarModel  = (activeCarModelId) => {
  updateStore(STORE_CAR_MODEL_ITEM, {
    [ATTR_ACTIVE_CAR_MODEL_ID] : activeCarModelId
  });
  loadCarModelDetails(activeCarModelId)
}

export const loadCarModelList = () => axios.get(`${CAR_DATA_URL}`).then((response) => updateCarModelList(response.data));

const updateCarModelList = (allCarModels) => updateStore(STORE_CAR_MODEL_LIST, {
    [ATTR_ALL_CAR_MODELS]: allCarModels,
    [ATTR_FILTERED_CAR_MODELS]: allCarModels
});

export const loadCarModelDetails = (carModelId) => {
  axios.get(`${CAR_DATA_URL}/${carModelId}`)
  .then((response) => setCarModelDetails(response.data));
};

const setCarModelDetails = (carModelDetails) => updateStore(STORE_CAR_MODEL_ITEM, {
  [ATTR_CAR_MODEL_DETAILS]: carModelDetails
});

const filterByModel = (models, keyword) => Object.values(models).filter(
    (carModel) => carModel.model.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
