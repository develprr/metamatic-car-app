import React from 'react';
import CarModelList from './CarModelList.js';
import {connectToStore, disconnectFromStores} from 'metamatic';

import {filterCarModels, STORE_CAR_MODEL_LIST} from '../stores/CarModelStore';

export class CarFilterList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_CAR_MODEL_LIST, (store) => this.setState(store));

  componentWillUnmount = () => disconnectFromStores(this);

  handleSearchPhraseChange = (event) => filterCarModels(event.target.value);

  render = () => (
    <div className="form-group container-fluid">
      <div className="row">
        <input className="form-control" type="text" placeholder="Search" onChange={this.handleSearchPhraseChange}/>
      </div>
      <div className="row">
        <CarModelList items={this.state.carModels}/>
      </div>
    </div>
  );

}
