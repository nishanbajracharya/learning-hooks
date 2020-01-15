export default {
  '/use-effect': `import React, { useState, useEffect } from 'react';

import * as api from 'services/api';
import Button from 'components/Button';
import Person from 'components/Person';

function UseEffect() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function fetchPrevious() {
    if (page === 1) return;

    setPage(page - 1);
  }

  function fetchNext() {
    setPage(page + 1);
  }

  useEffect(() => {
    setLoading(true);

    api.fetchUsers(page).then(res => {
      setLoading(false);

      if (res.length === 0) {
        setPage(page - 1);
        return;
      }
      setData(res);
    });
  }, [page]);

  return (
    <div className="p-4">
      <ul>
        {data.map((item, i) => (
          <Person key={i} {...item} />
        ))}
      </ul>
      <Button onClick={fetchPrevious}>Previous</Button>{' '}
      <span className="mr-2">{page}</span>{' '}
      <Button onClick={fetchNext}>Next</Button>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default UseEffect;

`,
  '/use-state': `import React, { useState } from 'react';

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
`,
};
