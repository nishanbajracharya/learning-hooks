import React, { useState, useEffect } from 'react';

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
      {data && data.length > 0 && (
        <ul className="border mb-4">
          {data.map((item, i) => (
            <Person key={i} {...item} />
          ))}
        </ul>
      )}
      <div>
        <Button onClick={fetchPrevious}>Previous</Button>
        Page:
        <strong>
          <span className="mr-2 ml-1">{page}</span>
        </strong>
        <Button onClick={fetchNext}>Next</Button>
        {loading && <span>Loading...</span>}
      </div>
    </div>
  );
}

export default UseEffect;
