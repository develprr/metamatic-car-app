import {handleEvent, initStore, updateStore} from 'metamatic';
import {STORE_AUTHORIZATION} from './AuthorizationStore';
import {STORE_CAR_MODEL_ITEM} from './CarModelStore';

export const STORE_NAVIGATION = 'STORE_NAVIGATION';

export const NavigationState = () => {
  initStore(STORE_AUTHORIZATION, {
    backButtonEnabled: false
  });
  handleEvent(STORE_CAR_MODEL_ITEM, (carModelState) => updateHomeButtonState(carModelState.activeCarModelId));
}

const updateHomeButtonState = (activeCarModelId) => updateStore(STORE_NAVIGATION, {
  showHomeButton: activeCarModelId ? true : false
});
