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

const Rejectionreason = (props) => {
  const [details, setDetails] = useState({
    data: [
      "Missing Documents",
      "Not Approved",
      "Missing Information",
      "Borrower Cancel Application",
      "Others",
    ],
    description: {
      "Missing Documents":
        "Invoice Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "Not Approved":
        "Buisness OverDraft is a way for buisness to borrow money against the amounts due from customers.",
      "Missing Information":
        "Term Loans is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      "Borrower Cancel Application":
        "PO Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
      Others:
        "Special Financing is a way for buisness to borrow money against the amounts due from customers. Invoice financing helps buisness improve cash flow, Pay employees and suplliers, and reinvest in operations and grow earlier than they would if they had to wait until their customers paid their balances in full",
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
        Rejection Reasons
      </ModalHeader>
      <ModalBody className="m-1">
        <FormGroup className="font-label">
          {/* <Label className="font-label">Choose Financing Product</Label>
          <Input /> */}
          <FormField label="Subject" type="select" onChange={handleChange}>
            <option>Select</option>
            {details.data.map((each) => {
              return <option value={each}>{each}</option>;
            })}
          </FormField>
        </FormGroup>
        <FormGroup className="font-label new-loan-text-area">
          <Label className="font-label">Description</Label>

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
          Submit <i className="fas fa-edit ml-2"></i>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Rejectionreason;
