import React from 'react';

import UseState from './useState';
import routes from '../../constants/routes';
import Viewer from '../../components/Viewer';

function UseStateComponent() {
  return (
    <Viewer path={routes.paths.USE_STATE}>
      <UseState />
    </Viewer>
  );
}

export default UseStateComponent;
