import React from 'react';
import {connectToStore, disconnectFromStores} from 'metamatic';
import {STORE_CAR_MODEL_ITEM} from '../stores/CarModelStore';
import withRouter from 'react-router-dom/withRouter';

class CarDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_CAR_MODEL_ITEM, (store) => this.setState(store));

  componentWillUnmount = () => disconnectFromStores(this);

  getCarModelDetails = () => this.state.carModelDetails;

  onOrderButtonClicked = () => {
    const details = this.getCarModelDetails();
    const carModelId = details.id;
    this.props.history.push(`/cars/${carModelId}/order`);
  }

  render() {
    const carDetails = this.getCarModelDetails();
    return carDetails ? (
      <form>
        <ul className="list-group">
          <li className="list-group-item"><h3>{carDetails.model}</h3></li>
          <li className="list-group-item">Top Speed: {carDetails.speed}</li>
          <li className="list-group-item">Color: {carDetails.color}</li>
          <li className="list-group-item">Price: €{carDetails.price}</li>
        </ul>
        <button id="order-button" type="button" className="btn btn-default btn-lg pull-right" onClick={this.onOrderButtonClicked}>
          <span className="glyphicon glyphicon-eur" aria-hidden="true"></span> Order now
        </button>
      </form>
    ) : null;

  }
}
export default withRouter(CarDetails);
