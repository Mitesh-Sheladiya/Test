import React, { useState } from 'react';
import './counter.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counter">
        <div>
          <span onClick={increment} className="btn">
            <AddIcon />
          </span>
        </div>
        <div>{count}</div>
        <div>
          <span onClick={decrement} className="btn">
            <RemoveIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Counter;
