import React from 'react';
import {connect, disconnect} from 'metamatic';
import {CAR_MODEL_ITEM_STATE} from '../config/states';

export class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connect(this, CAR_MODEL_ITEM_STATE, (state) => this.setState(state));

  componentWillUnmount = () => disconnect(this);

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
