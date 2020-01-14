import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ROUTES from './constants/routes';
import UseState from './views/useState';
import UseEffect from './views/useEffect';

function Router() {
  return (
    <BrowserRouter>
      <div className="flex bg-gray-100">
        <div className="w-1/5 bg-gray-200 border-solid border-r border-gray-300 h-screen">
          <nav>
            <ul>
              {ROUTES.links.map((route, index) => (
                <li key={index}>
                  <Link to={route.to}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-4/5">
          <Switch>
            <Route path={ROUTES.paths.USE_STATE}>
              <UseState />
            </Route>
            <Route path={ROUTES.paths.USE_EFFECT}>
              <UseEffect />
            </Route>
            <Route path={ROUTES.paths.HOME}>
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
