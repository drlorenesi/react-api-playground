import React, { Fragment } from 'react';
import Counter from './Counter';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Counters(props) {
  return (
    <Fragment>
      <h1>
        Counters <br />
        <button className='btn btn-sm btn-secondary ml-2' onClick={props.onAdd}>
          Add Item <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <button
          className='btn btn-sm btn-secondary ml-2'
          onClick={props.onReset}
        >
          Reset Items <FontAwesomeIcon icon={faUndo} />
        </button>
      </h1>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          counter={counter}
        />
      ))}
    </Fragment>
  );
}

export default Counters;
