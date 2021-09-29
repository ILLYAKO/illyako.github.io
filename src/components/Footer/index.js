import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light border-top">
      <Container>
        <Row>
          <Col md>
            <Image
              className="mb-2"
              src={require("../../assets/full-stack-dev-icon.png").default.toString()}
              alt="Fullstack development icon"
              width="24"
              height="24"
            />
            <small className="d-block  text-muted">&copy; 2021 ILLYA</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
