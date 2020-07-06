import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import { repaymentdata } from "../RepaymentDetails/data.json";
import editIcon from "../../../assets/svg/edit.png";
import moment from "moment";
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
const TableComponent = (props) => {
  const data = useMemo(() => [], []);
  const [tableDetails, setTableDetails] = useState({ value: [] });

  useEffect(() => {
    if (props.columnsData) {
      setTableDetails({ ...tableDetails, value: props.columnsData });
    }
  }, []);

  const columns = useMemo(
    () => props.columnsData,

    []
  );
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

  console.log(props.jsonData);
  return (
    <>
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
                          column.render("Header") == "Action" ? "" : " ml-2"
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
                    <>
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    </>
                  );
                })}
              </tr>
            );
          })}
          {props.jsonData.length === 0 ? (
            <tr>
              <td colSpan="9">
                <div className="no-data">No Records Found</div>
              </td>
            </tr>
          ) : (
            props.jsonData.map((each) => {
              return (
                <tr>
                  {/* <td>
                    <input type="checkbox" />
                  </td> */}
                  {Object.values(each).map((data) => {
                    return <td>{data}</td>;
                  })}
                  <td>
                    <Row>
                      <button className="view mr-1">
                        <i class="fas fa-eye" aria-hidden="true"></i>
                      </button>
                      <button className="edit">
                        <img className="svg-icon" src={editIcon} />
                      </button>
                    </Row>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
};
export default TableComponent;
