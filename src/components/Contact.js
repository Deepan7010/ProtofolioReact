import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <Container>
      <Row>
        <h1 className="text-muted text-center mt-5 pt-3">
          Contact <span className="text-danger">Me</span>
        </h1>
        <Col xl="3" lg="2" md="1"></Col>
        <Col>
          <Form>
            <Form.Group className="mb-3 mt-4">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                placeholder="Your Number"
                className="mt-3"
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>
            <button className="button">
              Send <RiSendPlaneFill className="py-2 px-1 fs-1 icon-down" />
            </button>
          </Form>
        </Col>
        <Col xl="3" lg="2" md="1"></Col>
      </Row>
    </Container>
  );
};

export default Contact;
