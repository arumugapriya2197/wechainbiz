import React from "react";
import "./our-products.scss";
import PageHeader from "../../layout/PageHeader";
import OurProductsOfferings from "./OurProductsOfferings";
import { Container, Row, Col, Button } from "reactstrap";
import { useHistory } from "react-router";

const OurProducts = () => {
  const history = useHistory();
  const gotoenquiries = () => {
    history.push("/enquiries");
  };
  return (
    <React.Fragment>
      <PageHeader />
      <OurProductsOfferings />
      <section className="pb-5">
        <Container>
          <Row>
            <Col sm={6}>
              <h3 className="app-title">
                <span>Invoice</span> Finacing
              </h3>
              <ul className="app-list">
                <li>Fast draw-down with line facilities.</li>
                <li>Early repayment feature at no additional cost </li>
                <li> Up to 80% of the invoice value </li>
              </ul>
              <h4 className="text-black">Loan Amount</h4>
              <p className="pl-3"> Upto $ 3 Million </p>
              <h4 className="text-black">Tenure Range</h4>
              <p className="pl-3"> Upto $ 3 Million </p>
              <h4 className="text-black">Funders</h4>
              <div className="d-flex pl-3">
                <img
                  src="./assets/images/funders/funders-01.jpg"
                  className="p-2 bg-white mr-2 shadow-sm"
                  alt=""
                />
                <img
                  src="./assets/images/funders/funders-02.jpg"
                  className="p-2 bg-white mr-2 shadow-sm"
                  alt=""
                />
                <img
                  src="./assets/images/funders/funders-03.jpg"
                  className="p-2 bg-white mr-2 shadow-sm"
                  alt=""
                />
              </div>
            </Col>
            <Col sm={6}>
              <img
                src="./assets/images/our-products-img-01.jpg"
                className="img-fluid"
                alt=""
              />
            </Col>
          </Row>
          <div className="pt-5 text-center">
            <Button className="button-size" onClick={gotoenquiries}>
              Check Eligibilty <i className="far fa-check-square ml-2"></i>
            </Button>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default OurProducts;
