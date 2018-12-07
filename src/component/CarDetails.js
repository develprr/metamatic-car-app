import React from 'react';
import {connectToStore, disconnectFromStores} from 'metamatic';
import {STATE_CAR_MODEL_ITEM} from '../config/states';

export class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STATE_CAR_MODEL_ITEM, (state) => this.setState(state));

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
