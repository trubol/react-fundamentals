import logo from "../logo.svg";
import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  FloatingLabel,
} from "react-bootstrap";

const TermsOfUse = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
          <Row>
              <p>Logo Here</p>
          </Row>
          <Row>
              <p>Image Here</p>
          </Row>
      </Container>
      <Container>
      <Card style={{ width: '75rem' }}>
  <Card.Body>
    <Card.Title>Deployment Contract</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Card.Text>
    <Button href="#">Accept</Button>
  </Card.Body>
</Card>
      </Container>
    </>
  );
};
export default TermsOfUse;
