import React from 'react';
import './App.css';
import Login from './component/Login.js';
import {connectToStore, disconnectFromStores} from 'metamatic';
import {CarFilterList} from './component/CarFilterList';
import CarDetails from './component/CarDetails';
import {Route} from 'react-router-dom';
import {Header} from './component/layout/header/Header';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import {STORE_AUTHORIZATION} from './stores/AuthorizationStore';
import OrderView from './component/OrderView';
import OrderConfirmationView from './component/OrderConfirmationView';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_AUTHORIZATION, (store) => this.setState(store));

  componentWillUnmount = () => disconnectFromStores(this);

  isLoggedIn = () => this.state.loggedIn === true;

  renderAuthorizedContent = () => (
      <div className="container-fluid">
        <Route path='/' component={Header}/>
        <Route exact path='/cars' component={CarFilterList}/>
        <Route exact path='/cars/:carId' component={CarDetails}/>
        <Route exact path='/cars/:carId/order' component={OrderView}/>
        <Route exact path='/confirmation' component={OrderConfirmationView}/>
      </div>
  )

  renderUnauthorizedContent = () => (
      <div className="container-fluid">
        <Route path='/' component={Header}/>
        <Login/>
      </div>
  )

  renderContent = () => this.isLoggedIn() ? this.renderAuthorizedContent() : this.renderUnauthorizedContent();

  render = () => (
      <BrowserRouter>
        {this.renderContent()}
      </BrowserRouter>
  )
}
