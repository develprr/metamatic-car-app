import React from 'react';
import {CarFilterList} from './CarFilterList.js';
import {Navigation} from './layout/header/Navigation.js';
import {connectAll, disconnect} from 'metamatic';
import {CarDetails} from './CarDetails';
import {STATE_AUTHORIZATION, STATE_CAR_MODEL_ITEM} from '../config/states';
import {ATTR_CAR_MODEL_DETAILS} from '../states/CarModelState';

export class Management extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  componentDidMount = () => connectAll(this, {
    [STATE_AUTHORIZATION]: (state) => this.setState({...this.state, ...state}),
    [STATE_CAR_MODEL_ITEM]: (state) => this.setState({...this.state, ...state}),
  });

  componentWillUnmount = () => disconnect(this);

  getViewComponent = () => this.state[ATTR_CAR_MODEL_DETAILS] ? <CarDetails/> : <CarFilterList/>;

  isBackButtonEnabled = () => this.state[ATTR_CAR_MODEL_DETAILS] !== null;

  render = () => this.isBackButtonEnabled ? (
    <div className="App">
      <Navigation backButtonEnabled={this.isBackButtonEnabled()}/>
      {this.getViewComponent()}
    </div>
  ) : null;

}
