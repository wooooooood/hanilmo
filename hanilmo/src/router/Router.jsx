import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "../page/Home";
import { About } from "../page/About";
import { Contact } from "../page/Contact";
import { Gallary } from "../page/Gallary";
import { BeforeAfter } from "../page/BeforeAfter";
import styled from "styled-components";
import Header from "../component/Header";

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
            <Link to="/"><Header /></Link>
            {
              routes.map((route, index) => (
              <Link key={index} to={route.path} style={{textDecoration: 'none'}}><MenuItem>{route.name}</MenuItem></Link>
              ))
            }
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

const MenuItem = styled.div`
  &@media (max-width: 480px){
    font-size: 15px;
  }
    font-size: 18px;
  color: #525252;
  display: inline-flex;
  margin: auto 10px;
`;
