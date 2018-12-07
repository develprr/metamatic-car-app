import {STORE_AUTHORIZATION, STORE_CAR_MODEL_ITEM, STORE_NAVIGATION} from '../config/states';
import {handleEvent, initStore, updateStore} from 'metamatic';

export const NavigationState = () => {
  initStore(STORE_AUTHORIZATION, {
    backButtonEnabled: false
  });
  handleEvent(STORE_CAR_MODEL_ITEM, (carModelState) => updateHomeButtonState(carModelState.activeCarModelId));
}

const updateHomeButtonState = (activeCarModelId) => updateStore(STORE_NAVIGATION, {
  showHomeButton: activeCarModelId ? true : false
});
