import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {AppTitle} from './component/AppTitle.js';
import {Management} from './component/Management.js';
import {Login} from './component/Login.js';
import {connect, disconnect} from 'metamatic';
import {ACCESS_STATE} from './config/states';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connect(this, ACCESS_STATE, (state) => this.setState(state));

  componentWillUnmount = () => disconnect(this);

  getViewComponent = () => this.state.loggedIn ? <Management/> : <Login/>;

  render = () => (
    <div className="container-fluid">
      <AppTitle name="Cars"/>
      {this.getViewComponent()}
    </div>
  );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
