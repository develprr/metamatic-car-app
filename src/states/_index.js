import {CarModelState} from './CarModelState';
import {AccessState} from './AccessState';
import {NavigationState} from './NavigationState';

export const initStates = () => {
  AccessState();
  CarModelState();
  NavigationState();
}