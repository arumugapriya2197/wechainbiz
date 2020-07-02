import React from "react";
import { Container, Button } from "reactstrap";

const RegisterNow = () => {
  return (
    <section className="register-now">
      <Container>
        <div className="d-flex align-items-center justify-content-center">
          <div className="text">
            Register with Wechainbiz to know more information
          </div>
          <Button color="secondary button-size" className="ml-5">
            Register Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default RegisterNow;
