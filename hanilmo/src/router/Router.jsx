import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../page/Home";

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
];

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}
          <Route>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
