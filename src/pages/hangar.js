import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  Image,
  Form,
  FloatingLabel,
  Accordion,
} from "react-bootstrap";

const Hangar = () => {
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
          <h1>Hangar</h1>
        </Row>
        <Card style={{ width: "75rem" }}>
          <Card.Body>
            <Card.Title>Deployment Contract</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Card style={{ width: "75rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Col sm={6}>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Col>
            <Col sm={6}>
              <Image src="holder.js/171x180" thumbnail />
            </Col>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pilot Information & Map Request</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Pilot Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Pilot ID</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Keep anonymous in report"
                  />
                </Form.Group>

                <Form.Label>List skills and credentials</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Form.Label>Choose Desired Maps (Select at least 2)</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Button variant="primary" type="submit">
                  Save Request Form
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Customize Your Robot</Accordion.Header>
            <Accordion.Body>

<Form>
              
              <ButtonGroup vertical>
              <Form.Label>Select Body</Form.Label>
                <Button>Body One</Button>
                <Button>Body Two</Button>
                <Button>Body Three</Button>
                <Button>Body Four</Button>
              </ButtonGroup>

              <ButtonGroup vertical>
              <Form.Label>Select Arms</Form.Label>
                <Button>Arms One</Button>
                <Button>Arms Two</Button>
                <Button>Arms Three</Button>
                <Button>Arms Four</Button>
              </ButtonGroup>
</Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};
export default Hangar;
