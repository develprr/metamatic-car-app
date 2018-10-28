import {CarModelState} from './CarModelState';
import {AuthorizationState} from './AuthorizationState';
import {NavigationState} from './NavigationState';

export const initStates = () => {
  AuthorizationState();
  CarModelState();
  NavigationState();
}
