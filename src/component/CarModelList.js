import React from 'react';
import {connect, disconnect} from 'metamatic';
import {CAR_MODEL_LIST_STATE} from '../config/states';
import {ATTR_FILTERED_CAR_MODELS, selectCarModel} from '../states/CarModelState';

export class CarModelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connect(this, CAR_MODEL_LIST_STATE, (state) => this.setState(state));

  componentWillUnmount = () => disconnect(this);

  getCarModels = () => this.state[ATTR_FILTERED_CAR_MODELS] || [];

  selectCarModel = (event) => selectCarModel(event.target.getAttribute('data-id'));

  getCarList = () => this.getCarModels().map((item) =>
      <li className="list-group-item" data-id={item.id} onClick={this.selectCarModel} key={item.model.toString()}>
      {item.model}
    </li>
  );

  render = () => <ul className="list-group">{this.getCarList()}</ul>;

}
