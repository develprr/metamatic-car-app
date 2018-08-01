import React from 'react';
import {CarFilterList} from './CarFilterList.js';
import {Navigation} from './Navigation.js';
import {hand} from 'synchronous-dispatcher';
import {CarDetails} from './CarDetails';
import {CAR_MODEL_SELECTION_CHANGE, LOGIN_STATE_CHANGE, attach, detach} from '../store/MetaStore';

export class Management extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: true};
    attach(this, LOGIN_STATE_CHANGE, (loggedIn) => this.setState({loggedIn}));
    attach(this, CAR_MODEL_SELECTION_CHANGE, (selectedCarModel) => this.setState({selectedCarModel}));
  }

  componentWillUnmount() {
    detach(this, LOGIN_STATE_CHANGE);
    detach(this, CAR_MODEL_SELECTION_CHANGE);
  }

  createViewComponent() {
    return this.state.selectedCarModel ? <CarDetails/> : <CarFilterList/>;
  }

  render() {
    var viewComponent = this.createViewComponent();
    let backButtonEnabled = this.state.selectedCarModel ? true : false;
    return (
        <div className="App">
          <Navigation backButtonEnabled={backButtonEnabled}/>
          {viewComponent}
        </div>
    );
  }
}
