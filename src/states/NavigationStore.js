import {STATE_AUTHORIZATION, STATE_CAR_MODEL_ITEM, STATE_NAVIGATION} from '../config/states';
import {handleEvent, initStore, updateStore} from 'metamatic';

export const NavigationState = () => {
  initStore(STATE_AUTHORIZATION, {
    backButtonEnabled: false
  });
  handleEvent(STATE_CAR_MODEL_ITEM, (carModelState) => updateHomeButtonState(carModelState.activeCarModelId));
}

const updateHomeButtonState = (activeCarModelId) => updateStore(STATE_NAVIGATION, {
  showHomeButton: activeCarModelId ? true : false
});
