import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideNav from "./modules/common/side-nav/SideNav";
import { routes } from "./modules/routes";

import './App.scss';
import AppHeader from "./modules/common/app-header/AppHeader";

function App() {
  return (
    <Router>
      <div className="app">
        <SideNav />
        <div className="app-content">
          <AppHeader />
          <Switch>
            {routes.map(route => 
              <Route component={route.component} path={route.path} />
            )}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
