import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="app-footer">
      <Container className="py-4">
        <Row>
          <Col sm={3}>
            <img
              src={"./assets/images/logo-inverse.png"}
              alt=""
              className="mb-3"
            />
            <h4 className="title">Conatct Us</h4>
            <p>
              <i className="fas fa-phone mr-2"></i> +65 8827 5140
            </p>
            <p>
              <i className="far fa-envelope mr-2"></i> enquiry@wechainbiz.com
            </p>
          </Col>
          <Col sm={3}>
            <h4 className="title">Lender Enquiries</h4>
            <p>lenderqueries@wechainbiz.com</p>
            <p>Become a Lender</p>
            <p>Lender Login</p>
          </Col>
          <Col sm={3}>
            <h4 className="title">Broker Enquiries</h4>
            <p>brokerqueries@wechainbiz.com</p>
            <p>Become a Lender</p>
            <p>Become a Broker</p>
          </Col>
          <Col sm={3}>
            <h4 className="title">Quick Links</h4>
            <p>About us</p>
            <p>How it Works</p>
            <p>FAQ</p>
            <p>Terms & Conditions</p>
            <p>Privacy policy</p>
          </Col>
        </Row>
      </Container>
      <div className="copyrights">
        <Container>
          Copyrights © 2020. All rights reserved by WECHAINBIZ
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
