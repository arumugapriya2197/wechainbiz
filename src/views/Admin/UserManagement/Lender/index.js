import React from "react";
import { lenderdata } from "./data.json";
import Dashboard from "../../Dashboard";

const Lender = () => {
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
        jsonData={lenderdata}
        userManagement={false}
        btnName="Add New Funder"
      />
    </>
  );
};
export default Lender;
