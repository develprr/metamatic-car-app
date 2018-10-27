import React, {Component} from 'react';
import {AppTitle} from './AppTitle';
import {Navigation} from './Navigation';
import {connect} from 'metamatic';
import {ACCESS_STATE} from '../../../config/states';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connect(this, ACCESS_STATE, (state) => this.setState(state));

  isLoggedIn = () => this.state.loggedIn === true;

  renderNavigation = () => this.isLoggedIn() ? <Navigation/> : null;

  render = () => (
      <div className={"navigation-div"}>
        <AppTitle/>
        {this.renderNavigation()}
      </div>
  )

}
