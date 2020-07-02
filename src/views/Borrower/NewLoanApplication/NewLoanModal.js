import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  ModalFooter,
  Button,
} from "reactstrap";
import { useHistory } from "react-router";
import FormField from "../../../components/FormField";

const NewLoanModal = (props) => {
  const [details, setDetails] = useState({
    data: [
      "Invoice Finance",
      "Buisness OverDraft",
      "Term Loans",
      "PO Financing",
      "Special Financing",
      "Revolve Loan",
      "AB Financing",
    ],
    description: {
      "Invoice Finance":
        "Invoice Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "Buisness OverDraft":
        "Buisness OverDraft is a way for buisness to borrow money against the amounts due from customers.",
      "Term Loans":
        "Term Loans is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "PO Financing":
        "PO Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "Special Financing":
        "Special Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "Revolve Loan":
        "Revolve Loan is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "AB Financing":
        "AB Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
    },
    selected_type: "",
  });
  const history = useHistory();

  const loanDetails = () => {
    history.push("/newloandetails");
  };
  const handleChange = (e) => {
    let myval = e.target.value;
    let val = Object.keys(details.description).filter((a) => {
      return a == myval ? a : "";
    });
    let mydat = details.description[val[0]];
    setDetails({
      ...details,
      selected_type: mydat,
    });
  };

  return (
    <Modal {...props} centered>
      <ModalHeader
        toggle={props.toggle}
        className="bg-primary text-white new-loan-modal"
      >
        New Loan Application
      </ModalHeader>
      <ModalBody className="m-1">
        <FormGroup className="font-label">
          {/* <Label className="font-label">Choose Financing Product</Label>
          <Input /> */}
          <FormField
            label="Choose Financing Product"
            type="select"
            onChange={handleChange}
          >
            <option>Select</option>
            {details.data.map((each) => {
              return <option value={each}>{each}</option>;
            })}
          </FormField>
        </FormGroup>
        <FormGroup className="font-label new-loan-text-area">
          <Label className="font-label">Invoice Financing </Label>

          <Input
            type="textarea"
            className="text-area"
            value={details.selected_type}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="danger button-size" className="mr-2">
          Cancel <i className="fas fa-times-circle ml-2"></i>
        </Button>
        <Button color="success button-size" onClick={loanDetails}>
          Select <i className="fas fa-edit ml-2"></i>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewLoanModal;
