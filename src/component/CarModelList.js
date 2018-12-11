import React from 'react';
import {ATTR_FILTERED_CAR_MODELS, selectCarModel, STORE_CAR_MODEL_LIST} from '../stores/CarModelStore';
import withRouter from 'react-router-dom/es/withRouter';
import {connectToStore, disconnectFromStores} from 'metamatic';

class CarModelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_CAR_MODEL_LIST, (store) => this.setState(store));

  componentWillUnmount = () => disconnectFromStores(this);

  getCarModels = () => this.state[ATTR_FILTERED_CAR_MODELS] || [];

  selectCarModel = (event) => {
    const carModelId = event.target.getAttribute('data-id');
    this.props.history.push(`/cars/${carModelId}`);
    selectCarModel(carModelId);
  }

  getCarList = () => this.getCarModels().map((item) =>
    <li className="list-group-item" data-id={item.id} onClick={this.selectCarModel} key={item.model.toString()}>
      {item.model}
    </li>
  );

  render = () => <ul className="list-group car-list-group">{this.getCarList()}</ul>;

}

export default withRouter(CarModelList);
