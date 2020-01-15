import React from 'react';

import UseEffect from './useEffect';
import routes from 'constants/routes';
import Viewer from 'components/Viewer';

function UseEffectComponent() {
  return (
    <Viewer path={routes.paths.USE_EFFECT}>
      <UseEffect />
    </Viewer>
  );
}

export default UseEffectComponent;
