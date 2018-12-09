import React, {Component} from 'react';
import withRouter from 'react-router-dom/withRouter';
import {logout} from '../../../stores/AuthorizationStore';
import {connectToStore} from 'metamatic';
import {clearCarModelSelection} from '../../../stores/CarModelStore';
import {STORE_NAVIGATION} from '../../../stores/NavigationStore';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => connectToStore(this, STORE_NAVIGATION, (navigationState) => this.setState(navigationState));

  onHomeButtonClicked = () => {
    clearCarModelSelection();
    this.props.history.push('/cars');
  }

  onExitButtonClicked = () => logout();

  isHomeButtonEnabled = () => this.state.showHomeButton;

  getBackButton = () => this.isHomeButtonEnabled() ? (
      <button id="back-button" type="button" className="btn btn-default btn-lg pull-left" onClick={this.onHomeButtonClicked}>
        <span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home
      </button>
  ) : null;

  render = () => (
      <div id="navigation-div" className="row navigation-div">
        <div className="col-xs-12">
          {this.getBackButton()}
          <button id="exit-button" type="button" className="btn btn-default btn-lg pull-right" onClick={this.onExitButtonClicked}>
            <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Exit
          </button>
        </div>

      </div>
  )
}

export default withRouter(Navigation);
