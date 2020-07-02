import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Header = () => {
  const [windowLoaded, setWindowLoaded] = useState(false);
  useEffect(() => {
    setWindowLoaded(true);
  }, []);
  return (
    <header className="app-header">
      <Container>
        <Row>
          <Col sm={8} className="app-content">
            <div className="content">
              <div className={`animate ${windowLoaded ? "active" : ""}`}>
                <h1 className="p-0">
                  <span>One-stop solution for all</span>
                </h1>
              </div>
              <div className={`animate ${windowLoaded ? "active" : ""}`}>
                <h1 style={{ transitionDelay: "200ms" }}>
                  your business financing needs
                </h1>
              </div>
              <div className={`animate ${windowLoaded ? "active" : ""}`}>
                <p style={{ transitionDelay: "400ms" }}>
                  Real-time SME trade finance & loan marketplace
                </p>
              </div>
              <div className={`animate ${windowLoaded ? "active" : ""}`}>
                <div style={{ transitionDelay: "600ms" }}>
                  <Button color="secondary button-size">
                    Learn More Now !
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
