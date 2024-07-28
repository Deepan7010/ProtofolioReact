import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaDownload } from "react-icons/fa6";
import img from "../assert/tools/img.png";
import img1 from "../assert/tools/img2.png";
import img2 from "../assert/tools/img1.png";
import web from "../assert/web.png";
import web2 from "../assert/back.png";
import web3 from "../assert/full.png";

const About = () => {
  const pic = [img, img1, img2];
  const dev = [
    {
      img: web,
      title: "Web Development",
      text: `I have experience in developing websites using HTML5, CSS3, JavaScript, and frameworks like ReactJS.`,
    },
    {
      img: web2,
      title: "Backend Development",
      text: "I have experience in Java, Spring Boot, Postman, Sql",
    },
    {
      img: web3,
      title: "Full Stack Development",
      text: "I can develop a complete application with front and back end using JavaScript, ReactJS, Java, Spring boot, Sql.",
    },
  ];
  return (
    <Container className="g-5">
      <h1 className="text-center mt-5 pt-3 text-muted">
        About <span className="text-danger">Me</span>
      </h1>
      <Row>
        <Col xl={1}></Col>
        <Col xl={5} lg="12" md="12" sm="12">
          <h5 className="text-muted mt-5">I'm Deepan</h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            fugit nihil quod natus facilis maiores in voluptate. Esse et placeat
            sed recusandae ipsa reiciendis consequatur soluta inventore dolores
            ab laboriosam deleniti voluptates commodi, accusamus accusantium
            sequi ad asperiores. Reiciendis nostrum at nam ipsa quibusdam
            repudiandae. Atque maxime beatae dicta hic. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Officia, odio!
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a
            neque consequuntur non dignissimos eligendi qui! Perspiciatis labore
            deserunt amet?
          </p>
          <button className="down">
            Download CV <FaDownload className="py-2 px-1 fs-1 icon-down" />
          </button>
        </Col>
        <Col
          className="d-flex mt-5 h-100 flex-sm-nowrap flex-wrap"
          xl="6"
          lg="12"
          md="12"
          sm="12"
        >
          <div className="border h-100 w-100 d-flex flex-column justify-content-center ps-4 rounded me-4 mb-3">
            <h1 style={{ color: "brown" }}>2+</h1>
            <p className="text-muted">Year Experiance</p>
          </div>
          <div className="border w-100 h-100 d-flex flex-column justify-content-center ps-4 rounded me-4 mb-3cd">
            <h1 style={{ color: "brown" }}>10+</h1>
            <p className="text-muted">Complete Projects</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center my-5  text-muted">
            Work <span className="text-danger">Tools</span>
          </h1>
          <div className="w-100 d-flex justify-content-evenly mx-2 px-2 mb-5">
            {pic.map((item, id) => (
              <img
                src={item}
                alt="images"
                style={{ width: "100px", height: "100px" }}
                key={id}
              />
            ))}
          </div>
        </Col>
        <Row>
          <h1 className="text-muted text-center mt-3 mb-5">
            What I <span className="text-danger">Offer</span>
          </h1>
          {dev.map((item, id) => (
            <Col className="mb-5" key={id} xxl="4" xl="4" md="6" sm="12">
              <Card>
                <Card.Body className="text-muted card-alt">
                  <img src={item.img} alt="" style={{ width: "60px" }} className="card-im" />
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default About;
