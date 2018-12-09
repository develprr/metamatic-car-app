import {initStore, updateStore} from 'metamatic';

export const STORE_CAR_ORDER = 'STORE_CAR_ORDER';

export const CarOrderStore = () => initStore(STORE_CAR_ORDER, getInitialState());

const getInitialState = () => ({
  expressDelivery: true
});

export const updateName = (name) => updateStore(STORE_CAR_ORDER, {
  name
});

export const updateAddress = (address) => updateStore(STORE_CAR_ORDER, {
  address
});

export const updatePhone = (phone) => updateStore(STORE_CAR_ORDER, {
  phone
});

export const setExpressDelivery = (expressDeliveryFlag) => updateStore(STORE_CAR_ORDER, {
  expressDelivery: expressDeliveryFlag
})
