import React, { Component } from "react";
import {
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    Button,
    Card,
    Image,
    Form,
    FloatingLabel,
  } from "react-bootstrap";
  
  const Objectives = () => {
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
                <h1>Objective</h1>
            </Row>
            <Row>
                <p>Image Here</p>
            </Row>
        </Container>
        <Container>
        <Card style={{ width: '75rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Col sm={6}>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    </Col>
    <Col sm={6}>
    <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Card.Body>
</Card>
        </Container>
        <Container>
            <h1>Task Choices</h1>
<Col lg={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col lg={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

        </Container>
        <Container>
        <Card style={{ width: '75rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Col sm={6}>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    </Col>
    <Col sm={6}>
    <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Card.Body>
</Card>
        </Container>
      </>
    );
  };
  export default Objectives;