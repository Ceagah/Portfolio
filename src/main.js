import React from "react";

import { Container } from "react-materialize";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Contact from "./components/contact/contact";
import Links from "./components/links/links";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/links" component={Links} />
      </Switch>
    </Container>
  </main>
);

export default Main;
