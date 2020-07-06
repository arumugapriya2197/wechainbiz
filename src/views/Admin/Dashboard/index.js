import React, { useState, useMemo, useEffect } from "react";
import PageHeader from "../../../layout/PageHeader";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";
import SidebarNavigation from "../../../layout/SidebarNavigation";
import NewLoanModal from "./NewLoanModal";
import { useTable } from "react-table";
import moment from "moment";
import { LoanApplicationService } from "../../../APIService";
import { repaymentdata } from "../RepaymentDetails/data.json";
import editIcon from "../../../assets/svg/edit.png";
import loanapplied from "../../../assets/png/1_loan_applied.png";
import loan2 from "../../../assets/png/2_loan.png";
import loan3 from "../../../assets/png/3_loan.png";
import loan4 from "../../../assets/png/4_loan.png";
import loan5 from "../../../assets/png/5_loan.png";
import amount6 from "../../../assets/png/6_amount.png";
import amount7 from "../../../assets/png/7_amount.png";
import amount8 from "../../../assets/png/8_amount.png";
import amount9 from "../../../assets/png/9_amount.png";
import amount10 from "../../../assets/png/10_amount.png";
import { useHistory } from "react-router";
import TableComponent from "../TableComponent";
import Adminsidebar from "../Adminsidebar";

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    LoanApplicationService.list().then((res) => {
      console.log(res);
    });
  }, []);
  const history = useHistory();

  const [dashboard, setdashboard] = useState({
    dataset1: [
      {
        icon: loanapplied,
        tag: "Number Of Loans Applied.",
        number: "14",
      },
      {
        icon: loan2,
        tag: "Number Of Loans  processing.",
        number: "02",
      },
      {
        icon: loan3,
        tag: "Number Of Loans Approved.",
        number: "01",
      },
      {
        icon: loan4,
        tag: "Number Of Loans Rejected.",
        number: "01",
      },
      {
        icon: loan5,
        tag: "Number Of Loans in Arrears.",
        number: "03",
      },
    ],
    dataset2: [
      {
        icon: amount6,
        tag: "Number Of Loans Applied.",
        number: "2090",
      },
      {
        icon: amount7,
        tag: "Number Of Loans  processing.",
        number: "10k",
      },
      {
        icon: amount8,
        tag: "Number Of Loans Approved.",
        number: "20k",
      },
      {
        icon: amount9,
        tag: "Number Of Loans Rejected.",
        number: "12k",
      },
      {
        icon: amount10,
        tag: "Number Of Loans in Arrears.",
        number: "15k",
      },
    ],
  });

  const viewDetails = () => {
    history.push("/newloandetails");
  };

  return (
    <React.Fragment>
      <section className="container datum dashboard-screen">
        <div className="row mb-3">
          {dashboard.dataset1.map((each) => {
            return (
              <div className="col-2 dasboard-div">
                <img src={each.icon} className="mt-1" />
                <h3>{each.number}</h3>
                <span className="mb-2">{each.tag}</span>
              </div>
            );
          })}
        </div>
        <div className="row">
          {dashboard.dataset2.map((each) => {
            return (
              <div className="col-2 dasboard-div">
                <img src={each.icon} className="mt-1" />
                <h3>{each.number}</h3>
                <span className="mb-2">{each.tag}</span>
              </div>
            );
          })}
        </div>
      </section>
      <PageHeader />

      <section className="py-5 animate-fadeInUp new-loan-model">
        <Container fluid>
          <h4 className="dashboard-title mb-4">
            <span>{props.titlespan}</span> {props.title}
          </h4>
          <Row>
            <Col sm={3}>
              <Adminsidebar />
            </Col>
            <Col sm={9} style={{ paddingLeft: 0 }}>
              <div className="shadow-sm bg-white rounded h-100 p-3">
                {props.userManagement === "feedback" ? (
                  ""
                ) : props.userManagement ? (
                  <Row className="loan-app-btn">
                    <div>
                      <InputGroup size="sm" className="input-search">
                        <Input placeholder="Search" className="search" />
                        <InputGroupAddon addonType="append">
                          <i className="fa fa-search"></i>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div className="text-right mb-3">
                      <Button
                        color="success button-size"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Export To Excel
                        <i className="fas fa-plus-circle ml-2"></i>
                      </Button>
                    </div>
                  </Row>
                ) : (
                  <Row className="loan-app-btn">
                    <div className="d-flex">
                      {props.loanType &&
                        props.loanType.map((each) => {
                          return (
                            <div className="mr-3" style={{ fontWeight: "500" }}>
                              {each}
                            </div>
                          );
                        })}
                    </div>
                    <div className="text-right mb-3">
                      <Button
                        color="success button-size"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {props.btnName}
                        {props.icon}
                      </Button>
                    </div>
                  </Row>
                )}

                <TableComponent
                  columnsData={props.columnsData}
                  jsonData={props.jsonData}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewLoanModal
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
        size="md"
      />
    </React.Fragment>
  );
};

export default Dashboard;
