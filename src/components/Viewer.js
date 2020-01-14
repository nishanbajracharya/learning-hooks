import React from 'react';

import content from '../constants/content';

console.log(content);

function Viewer(props) {
  return <div>
    <div>
      {content[props.path]}
    </div>
    {props.children}
  </div>;
}

export default Viewer;