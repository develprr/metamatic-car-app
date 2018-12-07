import React from 'react';
import {connectToStore, disconnectFromStores} from 'metamatic';
import {STORE_CAR_MODEL_ITEM} from '../stores/CarModelStore';

export class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_CAR_MODEL_ITEM, (store) => this.setState(store));

  componentWillUnmount = () => disconnectFromStores(this);

  render() {
    let carDetails = this.state.carModelDetails;
    return carDetails ? (
        <ul className="list-group">
          <li className="list-group-item"><h3>{carDetails.model}</h3></li>
          <li className="list-group-item">Top Speed: {carDetails.speed}</li>
          <li className="list-group-item">Color: {carDetails.color}</li>
          <li className="list-group-item">Price: €{carDetails.price}</li>
        </ul>
    ) : null;

  }
}
