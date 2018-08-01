import React from 'react';
import {dispatch} from 'synchronous-dispatcher';
import {SUBMIT_LOGIN} from '../store/MetaStore';

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  updateEmail = (event) => this.setState(...this.state, {email: event.target.value});

  updatePassword = (event) => this.setState(...this.state, {password: event.target.value});

  handleSubmit = (event) => dispatch(SUBMIT_LOGIN, this.state);

  render = () => (
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" onChange={this.updateEmail}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" onChange={this.updatePassword}/>
        </div>
        <div className="checkbox">
          <label><input type="checkbox"/> Remember me</label>
        </div>
        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
      </form>
  );
}
