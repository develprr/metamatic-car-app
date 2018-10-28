import {STATE_AUTHORIZATION, STATE_CAR_MODEL_ITEM, STATE_NAVIGATION} from '../config/states';
import {initState, updateState, handleEvent} from 'metamatic';

export const NavigationState = () => {
  initState(STATE_AUTHORIZATION, {
    backButtonEnabled: false
  });
  handleEvent(STATE_CAR_MODEL_ITEM, (carModelState) => updateHomeButtonState(carModelState.activeCarModelId));
}

const updateHomeButtonState = (activeCarModelId) => updateState(STATE_NAVIGATION, {
  showHomeButton: activeCarModelId ? true : false
});
