import logo from './logo.svg';
import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col, Button, Form }from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import TermsOfUse from './pages/terms';
import Objectives from './pages/objectives';
import Hangar from  './pages/hangar';


function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Terms of Use
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="#home">Objective</Nav.Link>
      <Nav.Link href="#features">Hangar</Nav.Link>
      <Nav.Link href="#pricing">Deployment</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
<Container>

<TermsOfUse />

</Container>
<Container>

<Objectives />


</Container>

<Container>

<Hangar />

</Container>

</>

  );
}

export default App;
