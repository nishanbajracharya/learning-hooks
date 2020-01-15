import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import routes from 'constants/routes';
import UseState from 'views/useState';
import UseEffect from 'views/useEffect';

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="flex bg-gray-100">
        <div className="w-1/6 border-r border-gray-300 h-screen">
          <nav>
            <ul>
              {routes.links.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.to}
                    className="block p-4 hover:bg-gray-300 font-medium text-gray-700"
                    activeClassName="bg-gray-400"
                    exact
                  >
                    {route.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-5/6">
          <Switch>
            <Route path={routes.paths.USE_STATE}>
              <UseState />
            </Route>
            <Route path={routes.paths.USE_EFFECT}>
              <UseEffect />
            </Route>
            <Route path={routes.paths.HOME}>
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
