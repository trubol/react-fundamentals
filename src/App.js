import logo from "./logo.svg";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
  className,
} from "react-bootstrap";
import NavBarImage from "./assets/images/Logo_Small.png";

import "bootstrap/dist/css/bootstrap.min.css";
import TermsOfUse from "./pages/terms";
import Objectives from "./pages/objectives";
import Hangar from "./pages/hangar";
import Deployment from "./pages/deployment";

function App() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/">
            <Navbar.Brand>
              <img
                alt="Globe icon"
                src={NavBarImage}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            </Link>
            <Nav className="me-auto">
              <Link to="/objectives" className="navStyleObjective px-auto">
                Objective
              </Link>
              <Link to="/hangar" className="navStyleObjective px-auto">
                Hangar
              </Link>
              <Link to="/deployment" className="navStyleObjective px-auto">
                Deployment
              </Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/objectives">
            <Objectives />
          </Route>
          <Route path="/hangar">
            <Hangar />
          </Route>
          <Route path="/deployment">
            <Deployment />
          </Route>
          <Route path="/">
            <TermsOfUse />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
