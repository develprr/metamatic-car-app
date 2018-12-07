import React, {Component} from 'react';
import {AppTitle} from './AppTitle';
import Navigation from './Navigation';
import {connectToStore} from 'metamatic';
import {STATE_AUTHORIZATION} from '../../../config/states';

export class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STATE_AUTHORIZATION, (state) => this.setState(state));

  isLoggedIn = () => this.state.loggedIn === true;

  renderNavigation = () => this.isLoggedIn() ? <Navigation/> : null;

  render = () => (
      <div className={"navigation-div"}>
        <AppTitle/>
        {this.renderNavigation()}
      </div>
  )

}
