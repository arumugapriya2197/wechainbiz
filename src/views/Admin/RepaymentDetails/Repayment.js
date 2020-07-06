import React from "react";
import Dashboard from "../Dashboard";
import moment from "moment";
import { repaymentdata } from "../RepaymentDetails/data.json";

const Repayment = () => {
  const columnsData = [
    {
      Header: "Loan ID",
      accessor: "loanId",
    },
    {
      Header: "Application Date",
      accessor: "applicationDate",
      Cell: ({ value }) => {
        return moment(value).format("DD/MM/YYYY");
      },
    },
    {
      Header: "Lender",
      accessor: "lender",
    },
    {
      Header: "Product",
      accessor: "product",
    },
    {
      Header: "Company Name",
      accessor: "companyname",
    },
    {
      Header: "Loan Amount($)",
      accessor: "loanAmount",
    },
    {
      Header: "Remaining Amount($)",
      accessor: "remainingAmount",
    },
    {
      Header: "Due Date",
      accessor: "duedate",
      Cell: ({ value }) => {
        return moment(value).format("DD/MM/YYYY");
      },
    },
    {
      Header: "Amount to be paid($)",
      accessor: "amounttobepaid",
    },
    {
      Header: "(D-5)th day",
      accessor: "d5thday",
    },
    {
      Header: "(D-2)th day",
      accessor: "d2thday",
    },
    {
      Header: "Payment Status",
      accessor: "paymentstatus",
    },

    {
      Header: "Action",
      accessor: "action",
      Cell: (columnProps) => {
        return <div>A</div>;
      },
    },
  ];

  return (
    <>
      <Dashboard
        titlespan="Repayment"
        title="- Details"
        columnsData={columnsData}
        jsonData={repaymentdata}
        userManagement={true}
      />
    </>
  );
};
export default Repayment;
