import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <div className="flex bg-gray-100">
        <div className="w-1/5 bg-gray-200 border-solid border-r border-gray-300 h-screen">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-4/5">
          <Switch>
            <Route path="/about">
              <div>About</div>
            </Route>
            <Route path="/users">
              <div>Users</div>
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
