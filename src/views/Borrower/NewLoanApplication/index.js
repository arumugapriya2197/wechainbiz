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
import {
  LoanApplicationService,
  LoanApplicationData,
} from "../../../APIService";
import { loandata } from "./data.json";
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
import { connect } from "react-redux";

const NewLoanApplication = ({ tableDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loanTableDetails, setloanTableDetails] = useState({ loanlist: [] });

  console.log(loanTableDetails, tableDetails);
  useEffect(() => {
    if (tableDetails) {
      setloanTableDetails({ loanlist: tableDetails });
    }
    LoanApplicationData.loanapplicationlist()
      .then((res) => {
        console.log(res);
        if (localStorage.getItem("product")) {
          setloanTableDetails({ loanlist: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const history = useHistory();

  const columns = useMemo(
    () => [
      {
        Header: "Loan ID",
        accessor: "id",
      },
      {
        Header: "Application Date",
        accessor: "create_date",
        Cell: ({ value }) => {
          return moment(value).format("DD/MM/YYYY");
        },
      },
      {
        Header: "Product",
        accessor: "product",
      },
      {
        Header: "Lender Name",
        accessor: "financier",
      },
      {
        Header: "Loan Amount($)",
        accessor: "expected_loan_amount",
      },
      {
        Header: "Loan Tenor",
        accessor: "preffered_tennor",
      },
      {
        Header: "Pending Status",
        accessor: "pending_status",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        // accessor: 'action',
        Cell: (columnProps) => {
          return <div>A</div>;
        },
      },
    ],
    []
  );
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

  const data = useMemo(() => [], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <React.Fragment>
      <section className="container datum">
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
          <h4 className="loan-app-title mb-4">
            <span>New Loan</span> Application
          </h4>
          <Row>
            <Col sm={3}>
              <SidebarNavigation />
            </Col>
            <Col sm={9} style={{ paddingLeft: 0 }}>
              <div className="shadow-sm bg-white rounded h-100 p-3">
                <Row className="loan-app-btn">
                  <div>
                    <InputGroup size="sm" className="input-search">
                      <Input placeholder="Search by ID" className="search" />
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
                      New Loan Application{" "}
                      <i className="fas fa-plus-circle ml-2"></i>
                    </Button>
                  </div>
                </Row>
                <Table className="app-table" {...getTableProps()}>
                  <thead>
                    {headerGroups.map((headerGroup) => {
                      return (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => {
                            return (
                              <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                                <span
                                  className={
                                    column.render("Header") == "Action"
                                      ? ""
                                      : " ml-2"
                                  }
                                ></span>
                              </th>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td {...cell.getCellProps()}>
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}

                    {loanTableDetails &&
                    loanTableDetails.loanlist.length === 0 ? (
                      <tr>
                        <td colSpan="9">
                          <div className="no-data">No Records Found</div>
                        </td>
                      </tr>
                    ) : (
                      loanTableDetails &&
                      loanTableDetails.loanlist.map((each) => {
                        return (
                          <tr>
                            {Object.values(each).map((data, id) => {
                              return (
                                <td>
                                  {id === 0
                                    ? "L001"
                                    : id === 1
                                    ? moment(data).format("DD-MM-YYYY")
                                    : data}
                                </td>
                              );
                            })}
                            <td>
                              <Row>
                                <button
                                  className="view mr-1"
                                  onClick={viewDetails}
                                >
                                  <i class="fas fa-eye" aria-hidden="true"></i>
                                </button>
                                <button className="edit">
                                  <img className="svg-icon" src={editIcon} />
                                  {/* <i class="fas fa-edit" aria-hidden="true"></i> */}
                                </button>
                              </Row>
                            </td>
                          </tr>
                        );
                      })
                    )}
                    {/* {rows.length === 0 && (
                      <tr>
                        <td colSpan="9">
                          <div className="no-data">No Records Found</div>
                        </td>
                      </tr>
                    )} */}
                  </tbody>
                </Table>
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
const mapStateToProps = ({ Application }) => ({
  tableDetails: Application.tableDetails,
});

export default connect(mapStateToProps)(NewLoanApplication);
