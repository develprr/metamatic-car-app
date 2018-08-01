import React from 'react';
import {CarFilterList} from './CarFilterList.js';
import {Navigation} from './Navigation.js';
import {handle, unhandle} from 'synchronous-dispatcher';
import {CarDetails} from './CarDetails';
import {CAR_MODEL_SELECTION_CHANGE, LOGIN_STATE_CHANGE} from '../store/MetaStore';

export class Management extends React.Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: true};
    handle(LOGIN_STATE_CHANGE, this.constructor.name, (loggedIn) => this.setState({loggedIn}));
    handle(CAR_MODEL_SELECTION_CHANGE, this.constructor.name, (selectedCarModel) => this.setState({selectedCarModel}));
  }

  componentWillUnmount() {
    unhandle(this.constructor.name);
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
