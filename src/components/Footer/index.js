import React from "react";
// import Link from "react-router-dom/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// xxl ≥ 1400px - it does'n work
// xl  ≥ 1200px
// lg  ≥ 992px
// md  ≥ 768px -
// sm  ≥ 576px
// xs  < 576px

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
          {/* <Col md sm={6} xs={6}>
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link
                  to="#"
                  className="nav-link p-0 text-muted"
                >
                  Cool stuff
                </Link>    
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Random feature
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Team feature
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Stuff for developers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Another one
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Last time
                </Link>
              </li>
            </ul>
          </Col>
          <Col md sm={6} xs={6}>
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="#" className="text-muted">
                  Resource
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Resource name
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Another resource
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Final resource
                </Link>
              </li>
            </ul>
          </Col>
          <Col md sm={6} xs={6}>
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="#" className="text-muted">
                  Team
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted">
                  Terms
                </Link>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
