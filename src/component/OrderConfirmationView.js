import React, {Component} from 'react';
import {connectToStates} from 'metamatic';
import {STORE_CAR_MODEL_ITEM} from '../stores/CarModelStore';

class OrderConfirmationView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStates(this, STORE_CAR_MODEL_ITEM, {
    'carModelDetails.model': (model) => this.setState({...this.state, model}),
    'carModelDetails.speed': (speed) => this.setState({...this.state, speed}),
  });

  getModel = () => this.state.model;

  getSpeed = () => this.state.speed;

  render = () => (
      <h3>
        Fantastic. Your brand new <b>{this.getModel()}</b> is already on the way! See you in 5 minutes.
        We'll arrive at <b>{this.getSpeed()}</b> km/h!
      </h3>
  )
}
export default OrderConfirmationView
