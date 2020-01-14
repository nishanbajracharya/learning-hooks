export default {
  '/use-effect': `
import React from 'react';

function UseEffect() {
  return <div>useEffect</div>;
}

export default UseEffect;

`,
  '/use-state': `
import React, { useState } from 'react';

function UseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-4">
      <p className="mb-4">
        Counter: <strong>{counter}</strong>
      </p>
      <div>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseState;

`,
};
