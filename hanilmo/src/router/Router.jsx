import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "../page/Home";
import { About } from "../page/About";
import { Contact } from "../page/Contact";
import { Gallary } from "../page/Gallary";
import { BeforeAfter } from "../page/BeforeAfter";

const home = [{
  path: "/",
  name: "한일모",
  component: <Home />,
},]

const routes = [
  {
    path: "/about",
    name: "업체소개",
    component: <About />,
  },
  {
    path: "/before-after",
    name: "착용전후",
    component: <BeforeAfter />,
  },
  {
    path: "/contact",
    name: "오시는길",
    component: <Contact />,
  },
  {
    path: "/gallary",
    name: "매장사진",
    component: <Gallary />,
  },
];

export const Router = () => {
  return (
    <>
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home img</Link>
            </li>
            {
              routes.map((route) => (
                <li className="list-none">
              <Link to={route.path}>{route.name}</Link>
            </li>
              ))
            }
          </ul>
        </nav>
        <Switch>
          {[...home, ...routes].map(route => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
};
