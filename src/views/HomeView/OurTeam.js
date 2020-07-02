import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import downloadData from "../../assets/download.jpg";

const teamList = [
  {
    img: "./assets/images/team/member-01.jpg",
    name: "Teo Joo Howe",
    postion: "CEO",
  },
  {
    img: "./assets/images/team/member-02.jpg",
    name: "Terry Fong",
    postion: "CCO",
  },
  {
    img: "./assets/images/team/member-03.jpg",
    name: "Hwee Han",
    postion: "CCO",
  },
  {
    img: "./assets/images/team/member-04.jpg",
    name: "Chiu Jackal",
    postion: "CTO",
  },
];

const OurTeam = () => {
  return (
    <section className="our-team">
      <Container>
        <h1 className="app-title text-center">
          <span>Our</span> Team
        </h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </p>
        <Row>
          {teamList.map((item, inx) => {
            return (
              <Col sm={3} key={inx}>
                <div className="team-member">
                  <div className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <img src={item.img} className="member-img" alt={item.name} />
                  <h5>{item.name}</h5>
                  <p>{item.postion}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="text-center">
          <Button color="secondary button-size">
            <a href={downloadData} download>
              Download Brouchure
            </a>{" "}
            <i className="fas fa-download"></i>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
