import React from 'react';
import './App.css';
import {Management} from './component/Management.js';
import Login from './component/Login.js';
import {connect, disconnect} from 'metamatic';
import {ACCESS_STATE} from './config/states';
import {CarFilterList} from './component/CarFilterList';
import {CarDetails} from './component/CarDetails';
import {Route} from 'react-router-dom';
import {Header} from './component/layout/header/Header';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connect(this, ACCESS_STATE, (state) => this.setState(state));

  componentWillUnmount = () => disconnect(this);

  getViewComponent = () => this.state.loggedIn ? <Management/> : <Login/>;

  isLoggedIn = () => this.state.loggedIn === true;

  render = () => this.isLoggedIn() ? (
    <div className="container-fluid">
      <Route path='/' component={Header}/>
      <Route exact path='/cars' component={CarFilterList}/>
      <Route exact path='/cars/:carId' component={CarDetails}/>
    </div>
  ) : (
      <div className="container-fluid">
        <Route path='/' component={Header}/>
        <Login/>
      </div>
  );
}

