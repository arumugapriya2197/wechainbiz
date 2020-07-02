import React from "react";
import { Container, Row, Col } from "reactstrap";

const AboutUs = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="app-title">
              <span>About</span> Us
            </h1>
            <p>
              A Fintech platformthat provids a one-stop finacing marketplace for
              SME to get finacing from multiple lenders. WeChainBiz is connected
              to the top P2P crowsfunding platforms in Singapore.
            </p>
            <p>
              Supported by Enterprise Signapore and Invested by the National
              University of Signgapore Enterprise (NUS Enterprise)
            </p>
            <p>
              We manage all aspects of the business from buisness development,
              funding, hiring and tech development.
            </p>
          </Col>
          <Col sm={6}>
            <img
              src="./assets/images/about-us-01.png"
              className="img-fluid"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
