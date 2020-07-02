import React, { useState } from "react";
import PageHeader from "../../../layout/PageHeader";
import { Container, Row, Col, Button, Collapse } from "reactstrap";
import SidebarNavigation from "../../../layout/SidebarNavigation";
import tempData from "./tempData";
import "./directors-information.scss";
import { Link } from "react-router-dom";

const DirectorsInformation = () => {
  const [directorList, setDirectorList] = useState(
    tempData.map((i) => ({ ...i, expand: false }))
  );

  const toggleCollapse = (inx) => {
    directorList[inx]["expand"] = !directorList[inx]["expand"];
    setDirectorList([...directorList]);
  };
  return (
    <React.Fragment>
      <PageHeader />
      <section className="py-5 animate-fadeInUp directors-information">
        <Container fluid>
          <h4 className="directors-app-title mb-4">
            <span>Directors</span> Information
          </h4>
          <Row>
            <Col sm={3}>
              <SidebarNavigation />
            </Col>
            <Col sm={9}>
              <div className="shadow-sm bg-white rounded h-100 p-3">
                <div className="text-right mb-3">
                  <Button color="success button-size">
                    Add Director <i className="fas fa-plus-circle ml-2"></i>
                  </Button>
                </div>
                <div className="director-list-wrapper">
                  {directorList.map((item, inx) => {
                    let {
                      expand,
                      firstName,
                      lastName,
                      role,
                      mobileNumber,
                      email,
                      dateOfBirth,
                    } = item;
                    return (
                      <div className="director-list-item">
                        <div className="head" key={inx}>
                          <div
                            className="icon"
                            onClick={() => toggleCollapse(inx)}
                          >
                            <i
                              className={`fas ${
                                expand ? "fa-chevron-down" : "fa-chevron-right"
                              }`}
                            ></i>
                          </div>
                          <div className="name">
                            {firstName} {lastName}
                          </div>
                          <div className="role">{role}</div>
                          <div className="phone">{mobileNumber}</div>
                          <div className="action">
                            <Button
                              color="primary"
                              className="rounded ml-2"
                              size="sm"
                            >
                              <i className="far fa-edit"></i>
                            </Button>
                            <Button
                              color="danger"
                              className="rounded ml-2"
                              size="sm"
                            >
                              <i className="far fa-trash-alt"></i>
                            </Button>
                          </div>
                        </div>
                        <Collapse isOpen={expand}>
                          <div className="content">
                            <Row>
                              <Col>
                                <p>
                                  First Name:{" "}
                                  <span className="text-black">
                                    {firstName}
                                  </span>
                                </p>
                                <p>
                                  Mobile Number:{" "}
                                  <span className="text-black">
                                    {mobileNumber}
                                  </span>
                                </p>
                                <p>
                                  Creadit Bureau Report :{" "}
                                  <Link
                                    to="/directors-information"
                                    className="text-secondary"
                                  >
                                    Report
                                  </Link>{" "}
                                </p>
                              </Col>
                              <Col>
                                <p>
                                  Last Name:{" "}
                                  <span className="text-black">{lastName}</span>
                                </p>
                                <p>
                                  Email:{" "}
                                  <span className="text-black">{email}</span>
                                </p>
                              </Col>
                              <Col>
                                <p>
                                  Role:{" "}
                                  <span className="text-black">{role}</span>
                                </p>
                                <p>
                                  Date of Birth:{" "}
                                  <span className="text-black">
                                    {dateOfBirth}
                                  </span>
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Collapse>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default DirectorsInformation;
