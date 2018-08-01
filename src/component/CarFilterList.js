import React from 'react';
import {CarModelList} from './CarModelList.js';
import {CarModelService} from '../service/CarModelService.js';
import {dispatch, handle, unhandle} from 'synchronous-dispatcher';
import {CAR_LIST_CHANGE, REQUEST_CAR_LIST} from '../store/MetaStore';

export class CarFilterList extends React.Component {

	constructor(props) {
		super(props);
    this.state = {
      carModels: [],
      initialCarModels: []
    };
    handle(CAR_LIST_CHANGE, this.constructor.name, (carModels) => {
      carModels = Object.values(carModels);
      this.setState({carModels: carModels, carModels: carModels});
    });
  }

  componentDidMount() {
    dispatch(REQUEST_CAR_LIST);
  }

  componentWillUnmount() {
		unhandle(CAR_LIST_CHANGE, this.constructor.name);
	}

	handleSearchPhraseChange =(event) => {
    const searchPhrase = event.target.value;
    const filteredModels = CarModelService.filterByName(searchPhrase);
		this.setState({carModels: filteredModels});
	}

	render() {
		return (
			<div className="form-group container-fluid">
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