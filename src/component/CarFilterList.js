import React from 'react';
import {CarModelList} from './CarModelList.js';
import {dispatch} from 'synchronous-dispatcher';
import {CAR_LIST_CHANGE, FILTER_CAR_MODELS, REQUEST_CAR_LIST, attach, detach} from '../store/MetaStore';

export class CarFilterList extends React.Component {

	constructor(props) {
		super(props);
    this.state = {
      carModels: [],
      initialCarModels: []
    };
    attach(this, CAR_LIST_CHANGE, (carModels) => {
      carModels = Object.values(carModels);
      this.setState({carModels: carModels, initialCarModels: carModels});
    });
  }

  componentDidMount() {
    dispatch(REQUEST_CAR_LIST);
  }

  componentWillUnmount() {
		detach(this, CAR_LIST_CHANGE);
	}

	handleSearchPhraseChange =(event) => {
    const searchPhrase = event.target.value;
    dispatch(FILTER_CAR_MODELS, searchPhrase);
	}

	render() {
		return (
        <div className="form-group container-fluid">.
				<div className="row">
						<input className="form-control" type="text" placeholder="Search" onChange={this.handleSearchPhraseChange}/>
				</div>
        <div className="row">
          <CarModelList items={this.state.carModels}/>
        </div>
			</div>
		);
 	 }
}
