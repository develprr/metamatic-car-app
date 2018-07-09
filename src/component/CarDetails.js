import React from 'react';
import {dispatch, handle} from 'synchronous-dispatcher';

export class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    dispatch('REQUEST-CAR-DATA');
  }

  componentDidMount() {
    handle('CAR-DATA-CHANGE', (carDetails) => this.setState({carDetails}));
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
