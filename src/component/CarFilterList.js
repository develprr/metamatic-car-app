import React from 'react';
import CarModelList from './CarModelList.js';
import {connect, disconnect} from 'metamatic';

import {STATE_CAR_MODEL_LIST} from '../config/states';
import {filterCarModels} from '../states/CarModelState';

export class CarFilterList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connect(this, STATE_CAR_MODEL_LIST, (carModelListState) => this.setState(carModelListState));

  componentWillUnmount = () => disconnect(this);

  handleSearchPhraseChange = (event) => filterCarModels(event.target.value);

  render = () => (
      <div className="form-group container-fluid">.
        <div className="row">
          <input className="form-control" type="text" placeholder="Search" onChange={this.handleSearchPhraseChange}/>
        </div>
        <div className="row">
          <CarModelList items={this.state.carModels}/>
        </div>
      </div>
  );

}
