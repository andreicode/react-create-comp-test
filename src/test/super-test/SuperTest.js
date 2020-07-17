import React, { useState } from 'react';
import './style.scss';

const SuperTest = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p>SuperTest</p>
      <p id="count">{count}</p>
      <button onClick={() => setCount(count+1)}>PressMe</button>
    </div>
  );
};

export default SuperTest;
