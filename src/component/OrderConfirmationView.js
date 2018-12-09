import React, {Component} from 'react';
import {connectToStore, disconnectFromStores} from 'metamatic';
import {STORE_CAR_MODEL_ITEM} from '../stores/CarModelStore';
import withRouter from 'react-router-dom/withRouter';
import {setExpressDelivery, updateAddress, updateName, updatePhone} from '../stores/CarOrderStore';

class OrderConfirmationView extends Component {

  render = () => <h3>Fantastic. Your brand new car is already on the way! See you in 5 minutes!</h3>

}
export default OrderConfirmationView
