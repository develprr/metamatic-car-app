import React, {Component} from 'react';
import {connectToStore, disconnectFromStores} from 'metamatic';
import {STORE_CAR_MODEL_ITEM} from '../stores/CarModelStore';
import withRouter from 'react-router-dom/withRouter';
import {setExpressDelivery, updateAddress, updateName, updatePhone} from '../stores/CarOrderStore';

class OrderView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_CAR_MODEL_ITEM, (store) => this.setState({...this.state, ...store}));

  componentWillUmount = () => disconnectFromStores(this);

  getCarModelDetails = () => this.state.carModelDetails || {};

  getCarModelId = () => this.getCarModelDetails().id;

  onNameChange = (event) => updateName(event.target.value);

  onAddressChange = (event) => updateAddress(event.target.value);

  onPhoneChange = (event) => updatePhone(event.target.value);

  getName = () => this.state.name;

  getAddress = () => this.state.address;

  getPhone = () => this.state.phone;

  confirmOrder = () =>  this.props.history.push(`/cars/${this.getCarModelId()}/confirmation`);

  onExpressDeliveryChange = (event) =>  setExpressDelivery(event.target.checked);

  isExpressDelivery = () => this.state.expressDelivery;

  render = () => {
    const carDetails = this.getCarModelDetails();
    return carDetails ? (
      <form>
        <h1>Car Order: {carDetails.model}</h1>
        <div className="form-group">
          <label htmlFor="name">Enter your name</label>
          <input type="text" className="form-control" id="email" placeholder={"Just type anything here or leave empty"} value={this.getN} onChange={this.onNameChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Enter your home address for car delivery</label>
          <input type="text" className="form-control" id="addres" placeholder={"Just type anything here or leave empty"} value={this.getAddress()} onChange={this.onAddressChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your phone number we shall call when we arrive</label>
          <input type="text" className="form-control" id="phone" placeholder={"Just type anything here or leave empty"} value={this.getPhone()} onChange={this.onPhoneChange}/>
        </div>
        <div className="checkbox">
          <label><input type="checkbox" checked={this.isExpressDelivery()} onChange={this.onExpressDeliveryChange}/>Please deliver the car within 5 minutes from now.</label>
        </div>
        <button type="submit" className="btn btn-default pull-right" onClick={this.confirmOrder}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Proceed to payment
        </button>
      </form>
    ) : null;

  }
}
export default withRouter(OrderView);
