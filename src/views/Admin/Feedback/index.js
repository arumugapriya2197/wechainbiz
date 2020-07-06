import React from "react";
import { feedbackdata } from "./data.json";
import Dashboard from "../Dashboard";

const Feedback = () => {
  const columnsData = [
    {
      Header: "S.No",
      accessor: "sno",
    },
    {
      Header: "Loan Id",
      accessor: "loanId",
    },
    {
      Header: "Borrower",
      accessor: "borrower",
    },
    {
      Header: "Lender",
      accessor: "lender",
    },
    {
      Header: "Rating",
      accessor: "rating",
    },
    {
      Header: "Remarks",
      accessor: "remarks",
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
        titlespan="Feedback-"
        title="Rating"
        columnsData={columnsData}
        jsonData={feedbackdata}
        userManagement="feedback"
      />
    </>
  );
};
export default Feedback;
