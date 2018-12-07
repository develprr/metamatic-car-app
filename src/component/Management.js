import React from 'react';
import {CarFilterList} from './CarFilterList.js';
import {Navigation} from './layout/header/Navigation.js';
import {CarDetails} from './CarDetails';
import {STORE_AUTHORIZATION, STORE_CAR_MODEL_ITEM} from '../config/states';
import {ATTR_CAR_MODEL_DETAILS} from '../stores/CarModelStore';
import {connectToStores, disconnectFromStores} from 'metamatic';

export class Management extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  componentDidMount = () => connectToStores(this, {
    [STORE_AUTHORIZATION]: (state) => this.setState({...this.state, ...state}),
    [STORE_CAR_MODEL_ITEM]: (state) => this.setState({...this.state, ...state}),
  });

  componentWillUnmount = () => disconnectFromStores(this);

  getViewComponent = () => this.state[ATTR_CAR_MODEL_DETAILS] ? <CarDetails/> : <CarFilterList/>;

  isBackButtonEnabled = () => this.state[ATTR_CAR_MODEL_DETAILS] !== null;

  render = () => this.isBackButtonEnabled ? (
    <div className="App">
      <Navigation backButtonEnabled={this.isBackButtonEnabled()}/>
      {this.getViewComponent()}
    </div>
  ) : null;

}
