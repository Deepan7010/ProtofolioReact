import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../App.css";
import Home from "./Home";
import About from "./About";
import Protofolio from "./Protofolio";
import Contact from "./Contact";
const Appbar = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xl="2" lg="3" md="12" className="px-0">
            <nav
              style={{
                backgroundColor: "brown",
              }}
              className="position-fixed nav-full"
            >
              <Navbar
                expand="lg"
                className="text-light d-flex flex-row flex-lg-column px-3 "
              >
                <Navbar.Brand className="text-light" as={Link} to="/">
                  Protofolio
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="bg-light"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="d-flex flex-column justify-content-around align-items-center navs">
                    <Nav.Link as={Link} className="text-light" to="/">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} className="text-light" to="/about">
                      About
                    </Nav.Link>
                    <Nav.Link as={Link} className="text-light" to="/protofolio">
                      Protofolio
                    </Nav.Link>
                    <Nav.Link as={Link} className="text-light" to="/contact">
                      Contact
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </nav>
          </Col>
          <Col className="px-0">
            {" "}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="/protofolio" element={<Protofolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Appbar;
