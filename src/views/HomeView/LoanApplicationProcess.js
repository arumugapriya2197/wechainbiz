import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const LoanApplicationProcess = () => {
  return (
    <section className="loan-application-process">
      <Container>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6}>
            <div className="margin-left">
              <h2 className="app-title">
                <span>Simple Loan</span> Application Process
              </h2>
              <p className="first-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,{" "}
              </p>
              <Button color="secondary button-size">Know More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoanApplicationProcess;
