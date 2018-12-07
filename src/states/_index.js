import {CarModelStore} from './CarModelStore';
import {AuthorizationStore} from './AuthorizationStore';
import {NavigationState} from './NavigationStore';

export const initStores = () => {
  AuthorizationStore();
  CarModelStore();
  NavigationState();
}
