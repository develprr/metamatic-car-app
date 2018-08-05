import React from 'react';
import {dispatch, connect, disconnect} from 'metamatic';
import {REQUEST_CAR_ENTRY, CAR_ENTRY_CHANGE, attach, detach} from '../store/MetaStore';
import {} from '../constants';

export class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    dispatch(REQUEST_CAR_ENTRY);
  }

  componentDidMount() {
    connect(this, CAR_ENTRY_CHANGE, (carDetails) => this.setState({carDetails}));
  }

  componentWillUnmount() {
    disconnect(this);
  }

  render() {
    let carDetails = this.state.carDetails;
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
