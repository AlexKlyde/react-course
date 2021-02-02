import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, setState] = useState(true);

  const handleClick = () => {
    return setState(!isVisible);
  };

  return (
    <>
      <button onClick={handleClick}>Toggle</button>
      {isVisible && <Clock location="Kyiv" offset={2} />}
      {isVisible && <Clock location="New York" offset={-5} />}
      {isVisible && <Clock location="London" offset={0} />}
    </>
  );
}

export default App;