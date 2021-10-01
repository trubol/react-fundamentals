import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import cardOneImg from "../assets/images/Objective_Photo.jpg";
import aerialImg from "../assets/images/Info1.png";
import groundImg from "../assets/images/Info2.png";
import subterraneanImg from "../assets/images/Info3.png";
import goalImg from "../assets/images/Goal_Photo.jpg";

const Objectives = () => {
  return (
    <>
      <Container>
        <Row>
          <h1 className="pageHeadingFont">Objective</h1>
        </Row>
      </Container>
      <Container>
        <Card style={{ width: "75rem" }}>
          <Card.Body>
            <Card.Title>Location</Card.Title>
           <Row>
            <Col md={6}>
              <Card.Text>
                Undisclosed Desert
                <br />
                Aerial- 7,500,000 (km2)
                <br />
                Ground - 8,000,000 (km2) <br />
                Subterranean - 5,000,000 (km2) <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                bibendum ipsum fringilla velit rutrum, ac maximus dui porttitor.
                Vestibulum varius pellentesque odio eu laoreet. Proin est metus,
                egestas id accumsan eu, semper ac urna. Nam ac auctor eros. Sed
                vestibulum libero ut tincidunt ornare. Donec fermentum lectus
                leo, tincidunt gravida augue laoreet ut. Pellentesque sed libero
                vehicula, euismod nisl ac, vehicula lectus. Cras in ex laoreet,
                lacinia orci lobortis, varius dolor. Praesent ut metus semper,
                lacinia velit et, cursus diam. Nullam eu elit nec diam vehicula
                pretium. Vestibulum vel elit sed arcu tristique mollis vitae
                vehicula quam.
              </Card.Text>
            </Col>
            <Col md={6}>
              <img
                className="pageImg"
                src={cardOneImg}
                alt="Martian Landscape"
              ></img>
            </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <h1 className="pageHeadingFont">Task Choices</h1>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={aerialImg} alt="Aerial Robot" />
            <Card.Body>
              <Card.Title>Aerial</Card.Title>
              <Card.Text>
                Clear Drones <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                quis lacus commodo, volutpat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={groundImg} alt="Aerial Robot" />
            <Card.Body>
              <Card.Title>Ground</Card.Title>
              <Card.Text>
                Remove Stone Barriers
                <br />
                Odio vel, pulvinar turpis. Vestibulum at efficitur elit. Morbi
                mattis erat vel auctor rutrum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={subterraneanImg}
              alt="Underground Robot"
            />
            <Card.Body>
              <Card.Title>Subterranean</Card.Title>
              <Card.Text>
                Tunnel to Checkpoint
                <br />
                Donec quis lacus commodo, volutpat odio vel, pulvinar turpis.
                Morbi mattis erat vel auctor rutrum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <Container>
        <Card style={{ width: "75rem" }}>
          <Card.Body>
            <Card.Title>Goal</Card.Title>
            <Col sm={6}>
              <img
                className="pageImg"
                src={goalImg}
                alt="Cloudy Landscape"
              ></img>
            </Col>
            <Col sm={6}>
              <Card.Text>
                You must clear all obstacles in your task list. Vestibulum
                varius pellentesque odio eu laoreet. Proin est metus, egestas id
                accumsan eu, semper ac urna. Nam ac auctor eros. Sed vestibulum
                libero ut tincidunt ornare. Donec fermentum lectus leo,
                tincidunt gravida augue laoreet ut. Pellentesque sed libero
                vehicula, euismod nisl ac, vehicula lectus. Cras in ex laoreet,
                lacinia orci lobortis, varius dolor. Praesent ut metus semper,
                lacinia velit et, cursus diam. Nullam eu elit nec diam vehicula
                pretium. Vestibulum vel elit sed arcu tristique mollis vitae
                vehicula quam.
              </Card.Text>
            </Col>
          </Card.Body>
        </Card>
        <Link to="/hangar">
          <p>Proceed to Hanger</p>
          </Link>
      </Container>
    </>
  );
};
export default Objectives;
