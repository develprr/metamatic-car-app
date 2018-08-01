import React from 'react';
import {dispatch} from 'synchronous-dispatcher';
import {CAR_MODEL_SELECTED} from '../store/MetaStore';

export class CarModelList extends React.Component {
  render() {
    var itemMap = this.props.items.map((item) =>
      <li className="list-group-item" data-id={item.id} onClick={() => {dispatch(CAR_MODEL_SELECTED, item.id)}} key={item.name.toString()}>
        {item.name}
      </li>
    );
    return (
        <ul className="list-group">{itemMap}</ul>
    );
  }

}
