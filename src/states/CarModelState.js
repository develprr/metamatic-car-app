import axios from 'axios';
import {getState, updateState} from 'metamatic';
import {CAR_DATA_URL} from '../config/constants';
import {CAR_MODEL_ITEM_STATE, CAR_MODEL_LIST_STATE} from '../config/states';

export const ATTR_ALL_CAR_MODELS = 'allCarModels';
export const ATTR_FILTERED_CAR_MODELS = 'filteredCarModels';
export const ATTR_ACTIVE_CAR_MODEL_ID = 'activeCarModelId';
export const ATTR_CAR_MODEL_DETAILS = 'carModelDetails';

export const CarModelState = () => loadCarModelList();

const getAllModels = () => getState(CAR_MODEL_LIST_STATE, ATTR_ALL_CAR_MODELS);

export const filterCarModels = (filter) => {
  const allCarModels = getAllModels();
  const filteredModels = filterByModel(allCarModels, filter);
  updateState(CAR_MODEL_LIST_STATE, {
    [ATTR_FILTERED_CAR_MODELS]: filteredModels
  });
};

export const selectCarModel = (activeCarModelId) => {
  console.log('CarModelState:selectCarModel', activeCarModelId);
  updateState(CAR_MODEL_ITEM_STATE, {
    [ATTR_ACTIVE_CAR_MODEL_ID] : activeCarModelId
  });
  loadCarModelDetails(activeCarModelId)
}

export const loadCarModelList = () => axios.get(`${CAR_DATA_URL}`).then((response) => updateCarModelList(response.data));

const updateCarModelList = (allCarModels) => updateState(CAR_MODEL_LIST_STATE, {
    [ATTR_ALL_CAR_MODELS]: allCarModels,
    [ATTR_FILTERED_CAR_MODELS]: allCarModels
  });

export const loadCarModelDetails = (carModelId) => {
  axios.get(`${CAR_DATA_URL}/${carModelId}`)
  .then((response) => setCarModelDetails(response.data));
};

const setCarModelDetails = (carModelDetails) => updateState(CAR_MODEL_ITEM_STATE, {
  [ATTR_CAR_MODEL_DETAILS]: carModelDetails
});

const filterByModel = (models, keyword) => Object.values(models).filter(
    (carModel) => carModel.model.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
