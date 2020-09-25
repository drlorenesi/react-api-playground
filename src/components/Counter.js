import React, { Fragment, useState } from 'react';
// Fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function Counter() {
  // const initialCount = 0;
  const [count, setCount] = useState(0);
  const items = ['item1'];

  const formatCount = () => {
    return count === 0 ? 'Zero' : count;
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += count === 0 ? 'warning' : 'secondary';
    return classes;
  };

  const renderTags = () => {
    if (items.length === 0) return null;
    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  const handleIncrement = (num) => {
    setCount(count + num);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Fragment>
      <h1>Test Counter</h1>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className='btn btn-danger mr-2' onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinusCircle} />
      </button>
      <button className='btn btn-primary' onClick={() => handleIncrement(5)}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      {items.length === 0 && <p>Please add some items.</p>}
      {renderTags()}
    </Fragment>
  );
}

export default Counter;
