import React from 'react';
import {dispatch} from 'synchronous-dispatcher';
import {LOGOUT, NAVIGATE_BACK} from '../store/MetaStore';

export class Navigation extends React.Component {

  constructor(props) {
    super(props);
  }

  onBackButtonClicked() {
    dispatch(NAVIGATE_BACK);
  }

  onExitButtonClicked = () => {
    dispatch(LOGOUT);
  }

  createBackButton() {
    let {backButtonEnabled} = this.props;
    if (!backButtonEnabled) {
      return null;
    }
    return (
        <button id="back-button" type="button" className="btn btn-default btn-lg pull-left" onClick={this.onBackButtonClicked}>
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back
        </button>
    );
  }

  render() {
    let backButton = this.createBackButton();
    return (
        <div id="navigation-div" className="row">
          <div className="col-xs-12">
            {backButton}
            <button id="exit-button" type="button" className="btn btn-default btn-lg pull-right" onClick={this.onExitButtonClicked}>
              <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Exit
            </button>
          </div>
        </div>
    );
  }

}
