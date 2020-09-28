import React, { Fragment } from 'react';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

function Counter(props) {
  const formatValue = () => {
    return props.counter.value === 0 ? 'Zero' : props.counter.value;
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-1'>
            <span className={getBadgeClasses()}>{formatValue()}</span>
          </div>
          <div className='col'>
            <button
              className='btn btn-sm btn-secondary mx-2'
              onClick={() => props.onIncrement(props.counter)}
            >
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <button
              className='btn btn-sm btn-secondary mr-2'
              onClick={() => props.onDecrement(props.counter)}
              disabled={props.counter.value === 0 ? true : false}
            >
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>

            <button
              className='btn btn-sm btn-danger'
              onClick={() => props.onDelete(props.counter.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Counter;
