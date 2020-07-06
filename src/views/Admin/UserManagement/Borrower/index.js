import React from "react";
import { borrowerdata } from "./data.json";
import Dashboard from "../../Dashboard";

const Borrower = () => {
  const columnsData = [
    {
      Header: "S.No",
      accessor: "sno",
    },
    {
      Header: "Funder Name",
      accessor: "fundername",
    },
    {
      Header: "E-mail ID",
      accessor: "email-id",
    },
    {
      Header: "Mobile",
      accessor: "mobile",
    },
    {
      Header: "Create Date",
      accessor: "createDate",
    },
    {
      Header: "Invoice Financing",
      accessor: "invoicefinancing",
    },
    {
      Header: "Account Receivables Financing",
      accessor: "accountreceivables",
    },
    {
      Header: "Buisness Overdraft",
      accessor: "buisnessoverdraft",
    },
    {
      Header: "Buisness Term Loan",
      accessor: "buisnesstermloan",
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
        titlespan="User"
        title="Management - Lender"
        columnsData={columnsData}
        jsonData={borrowerdata}
        userManagement={false}
        loanType={["Platinum", "Gold", "Normal", "Blacklisted"]}
        btnName="Export To Excel"
        icon={<i className="fas fa-plus-circle ml-2"></i>}
      />
    </>
  );
};
export default Borrower;
