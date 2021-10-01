import logo from "../logo.svg";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  FloatingLabel,
  Modal,
  openModal,
  closeModal,
} from "react-bootstrap";

import Objectives from "../pages/objectives";

const TermsOfUse = () => {
  
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =() => setShow(true);
  
    return (
    <>




      <Container>
        <Row>
          <p>Logo Here</p>
        </Row>
        <Row>
          <p>Image Here</p>
        </Row>
      </Container>
      <Container>
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
            <Col>
            <Button variant="primary" onClick={handleShow}>Accept</Button>
            </Col>
          </Card.Body>
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're agreeing to a lot here.</Modal.Body>
        <Modal.Footer>
            <Link to="/objectives">
          <Button variant="secondary" onClick={handleClose}>
            Agree
          </Button>
          </Link>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TermsOfUse;
