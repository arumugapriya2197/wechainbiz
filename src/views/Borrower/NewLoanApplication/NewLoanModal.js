import React, { useState, useEffect } from "react";
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
import { LoanApplicationData } from "../../../APIService";
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
    description: "",
    selectdetails: [],
    selected_type: "Invoice Financing",
  });
  useEffect(() => {
    LoanApplicationData.newloanmodallist()
      .then((res) => {
        if (res.status == "200") {
          setDetails({
            ...details,
            selectdetails: res.data,
          });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const history = useHistory();

  const loanDetails = () => {
    localStorage.setItem("product", details.selected_type);
    history.push("/newloandetails");
  };
  const handleChange = (e) => {
    // let myval = e.target.value;
    // let val = Object.keys(details.description).filter((a) => {
    //   return a == myval ? a : "";
    // });
    // let mydat = details.description[val[0]];
    // setDetails({
    //   ...details,
    //   selected_type: mydat,
    // });
    let selectedId = e.target.options[e.target.selectedIndex].id;
    let selectedProduct = e.target.value;
    LoanApplicationData.selectProductById(selectedId)
      .then((res) => {
        if (res.status == "200") {
          setDetails({
            ...details,
            selected_type: selectedProduct,
            description: res.data.description,
          });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
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
            {details.selectdetails.map((each) => {
              return (
                <option id={each.id} value={each.product}>
                  {each.product}
                </option>
              );
            })}
          </FormField>
        </FormGroup>
        <FormGroup className="font-label new-loan-text-area">
          <Label className="font-label">{details.selected_type} </Label>

          <Input
            type="textarea"
            className="text-area"
            value={details.description}
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
