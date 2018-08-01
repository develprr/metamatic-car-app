import React from 'react';
import { CarModelList} from './CarModelList.js';
import { CarModelService } from '../service/CarModelService.js';
export class CarFilterList extends React.Component {

	constructor(props) {
		super(props);
		let carModels = CarModelService.findAll();
		this.state = { carModels: carModels, initialCarModels: carModels };
	}

	handleSearchPhraseChange =(event) => {
		var searchPhrase = event.target.value;
		var filteredModels = CarModelService.filterByName(searchPhrase);
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
