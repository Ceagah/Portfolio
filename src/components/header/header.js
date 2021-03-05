import React from "react";
import { Navbar, Row } from "react-materialize";
import { NavLink } from "react-router-dom";

const Header = () => (
  <Row>
    <Navbar className="blue accent-4">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contato</NavLink>
      </li>
      <li>
        <NavLink to="links">Links</NavLink>
      </li>
    </Navbar>
  </Row>
);

export default Header;
