import {CAR_MODEL_ITEM_STATE} from '../config/states';
import {updateState} from 'metamatic';
import {ATTR_ACTIVE_CAR_MODEL_ID, ATTR_CAR_MODEL_DETAILS} from './CarModelState';

export const NavigationState = () => {
};

export const navigateBack = () => updateState(CAR_MODEL_ITEM_STATE, {
  [ATTR_ACTIVE_CAR_MODEL_ID]: null,
  [ATTR_CAR_MODEL_DETAILS]: null
});