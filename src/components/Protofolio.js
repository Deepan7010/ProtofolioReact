import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import pr1 from "../assert/project.jpg";
import pr2 from "../assert/project2.jpg";
import pr3 from "../assert/project3.jpg";
import pr4 from "../assert/profolio.jpg"
import Carousel from "react-bootstrap/Carousel";

const Protofolio = () => {
  const project = [
    {
      img: pr1,
      title: "Project-1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptates iure",
    },
    {
      img: pr2,
      title: "Project-2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptates iure",
    },
    {
      img: pr3,
      title: "Project-3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae voluptates iure",
    },
  ];
  return (
    <Container>
      <Row>
        <h1 className="text-center mt-5 pt-3 mb-5">
          Resent <span className="text-danger">Work</span>
        </h1>
        {project.map((item, id) => (
          <Col key={id} xl="4" lg="6" md="6" sm="12">
            <Card className="px-4 py-4 ms-2 mb-3 card-alt">
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <a href="#">Github Link</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <h1 className="text-center text-danger mt-5 mb-5">Testmonials</h1>
        <Col xl="1"></Col>
        <Col>
          <Carousel fade>
            <Carousel.Item
              className="d-flex flex-column justify-content-center align-items-center mb-5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.227)" }}
            >
              <Image src={pr4} className="img-ful mt-4 mb-3" />
              <div className="text-center">
                <h3 className="text-muted">Siva</h3>
                <p className="text-muted">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item
              className="d-flex flex-column justify-content-center align-items-center mb-5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.227)" }}
            >
              <Image src={pr2} className="img-ful mt-4 mb-3" />
              <div className="text-center">
                <h3 className="text-muted">Deepan</h3>
                <p className="text-muted">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item
              className="d-flex flex-column justify-content-center align-items-center mb-5 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.227)" }}
            >
              <Image src={pr1} className="img-ful mt-4 mb-3" />
              <div className="text-center">
                <h3 className="text-muted">Sakthi</h3>
                <p className="text-muted">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xl="1"></Col>
      </Row>
    </Container>
  );
};

export default Protofolio;
