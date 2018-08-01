import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {AppTitle} from './component/AppTitle.js';
import {Management} from './component/Management.js';
import {Login} from './component/Login.js';

import {attach, detach, initMetaStore, LOGIN_STATE_CHANGE} from './store/MetaStore';

export class App extends React.Component {

  constructor(props) {
    super(props);
    initMetaStore();
    this.state = {};
  }
  componentDidMount() {
    attach(this, LOGIN_STATE_CHANGE, (loggedIn) => {
      this.setState({loggedIn});
    })
  }

  componentWillUnmount() {
    detach(this, LOGIN_STATE_CHANGE);
  }

  createViewComponent() {
    if (this.state.loggedIn) {
      return <Management/>;
    } else {
      return <Login/>;
    }
  }

  render() {
    let viewComponent = this.createViewComponent();
    return (
        <div className="container-fluid">
          <AppTitle name="Cars"/>
          {viewComponent}
        </div>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
