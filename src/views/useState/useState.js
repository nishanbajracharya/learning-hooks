import React, { useState } from 'react';

import Button from 'components/Button';

function UseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-4">
      <p className="mb-4">
        Counter: <strong>{counter}</strong>
      </p>
      <div>
        <Button onClick={() => setCounter(counter - 1)}>Decrease</Button>
        <Button onClick={() => setCounter(counter + 1)}>Increase</Button>
        <Button onClick={() => setCounter(0)}>Reset</Button>
      </div>
    </div>
  );
}

export default UseState;
