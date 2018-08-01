import React from 'react';
import {dispatch, handle} from 'synchronous-dispatcher';
import {CAR_LIST_CHANGE, CAR_MODEL_SELECTED, REQUEST_CAR_LIST} from '../store/MetaStore';

export class CarModelList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
    handle(CAR_LIST_CHANGE, this.constructor.name, (cars) => {
      this.setState({cars: Object.values(cars)});
    });
  }

  componentDidMount() {
    dispatch(REQUEST_CAR_LIST);
  }

  render() {
    const cars = this.state.cars;
    const itemMap = cars.map((item) =>
      <li className="list-group-item" data-id={item.id} onClick={() => {dispatch(CAR_MODEL_SELECTED, item.id)}} key={item.model.toString()}>
        {item.model}
      </li>
    );
    return (
        <ul className="list-group">{itemMap}</ul>
    );
  }

}
