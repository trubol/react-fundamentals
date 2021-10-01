import React, { Component } from "react";
import {
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
import PageImage from "../public/assets/images/Logo_Full.png";

const Deployment = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="pageHeadingFont">Deployment</h1>
        </Row>
        <Card style={{ width: "75rem" }}>
          <Card.Body>
            <Card.Text className="pageBodyFont">
              You have successfully completed your Information Form and Robot
              Customization. Your Simulation ID is #15676. Report to the Desert
              Quadrant Hangar on 09/12/68 for further training. Your official
              simulation date will be 9/15/68.
            </Card.Text>
          </Card.Body>
        </Card>
        <Col>
          <img className="pageImg" src={PageImage} alt="Global Logo"></img>
          </Col>
      </Container>
    </>
  );
};
export default Deployment;
