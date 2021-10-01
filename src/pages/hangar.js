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

import robotBackgroundimg from "../assets/images/Background.jpg";

const Hangar = () => {
  let pilotClick = (event) => {
    event.preventDefault();
    let PilotName = document.getElementById("pilotNameField").value;
    let PilotID = document.getElementById("pilotIDField").value;
    let AnonymousValue = document.getElementById("formGridCheckbox").checked;
    let SkillsValue = document.getElementById("skillsField").value;
  };

  return (
    <>
      <Container>
        <Row>
          <h1 className="pageHeadingFont">Hangar</h1>
        </Row>
        <Card style={{ width: "75rem" }}>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              bibendum ipsum fringilla velit rutrum, ac maximus dui porttitor.
              Vestibulum varius pellentesque odio eu laoreet. Proin est metus,
              egestas id accumsan eu, semper ac urna. Nam ac auctor eros. Sed
              vestibulum libero ut tincidunt ornare. Donec fermentum lectus leo,
              tincidunt gravida augue laoreet ut. Pellentesque sed libero
              vehicula, euismod nisl ac, vehicula lectus. Cras in ex laoreet,
              lacinia orci lobortis, varius dolor. Praesent ut metus semper,
              lacinia velit et, cursus diam. Nullam eu elit nec diam vehicula
              pretium. Vestibulum vel elit sed arcu tristique mollis vitae
              vehicula quam.
            </Card.Text>
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
                    <Form.Control
                      type="text"
                      id="pilotNameField"
                      placeholder="Pilot Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Pilot ID</Form.Label>
                    <Form.Control
                      type="text"
                      id="pilotIDField"
                      placeholder="Pilot ID"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="formGridCheckbox"
                        label="Keep anonymous in report"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Form.Label>List skills and credentials</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2">
                      <Form.Control
                        as="textarea"
                        style={{ height: "100px" }}
                        id="skillsField"
                      />
                    </FloatingLabel>
                  </Col>

                  <Col sm={6}>
                    <Form.Label>
                      Choose Desired Maps (Select at least 2)
                    </Form.Label>
                    <FloatingLabel controlId="floatingTextarea2">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        id="mapsField"
                        style={{ height: "100px" }}
                        value={
                          "Cloudy Dusk - Aerial \nDunes - Ground \nStone Caves - Subterranean \nAbove the Trees - Aerial \nCanyon - Ground \nBelow the Oasis - Subterranean"
                        }
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  id="pilotRequestBtn"
                  type="submit"
                  onClick={pilotClick}
                >
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
              <Row>
                <Col>
                  <img
                    className="pageImg"
                    src={robotBackgroundimg}
                    alt="Robot Warehouse"
                  ></img>
                </Col>
                <Col>
                  <Form>
                    <ButtonGroup vertical>
                      <Form.Label>Select Body</Form.Label>
                      <Button id="bodyOneID">Body One</Button>
                      <Button id="bodyTwoID">Body Two</Button>
                      <Button id="bodyThreeID">Body Three</Button>
                      <Button id="bodyFourID">Body Four</Button>
                    </ButtonGroup>

                    <ButtonGroup vertical>
                      <Form.Label>Select Arms</Form.Label>
                      <Button>Arms One</Button>
                      <Button>Arms Two</Button>
                      <Button>Arms Three</Button>
                      <Button>Arms Four</Button>
                    </ButtonGroup>
                  </Form>
                </Col>
              </Row>
              <Button variant="primary" id="robotSubmitBtn" type="submit">
                Save Your Robot
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};
export default Hangar;
