import React, { useState } from "react";
import PageHeader from "../../../layout/PageHeader";
import {
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  CustomInput,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import useFocusError from "../../../utils/useFocusError";
import FormField from "../../../components/FormField";
import { LoanApplicationService } from "../../../APIService";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Rejectionreason from "./Rejectionreason";
import TableComponent from "../TableComponent";

const AssignLender = () => {
  const [isOpen, setIsOpen] = useState(false);
  const validationSchema = yup.object({
    uen_number: yup.string().required("Uen Number is a required field"),
    company_name: yup.string().required("Company Name is a required field"),
    number_of_employees: yup
      .string()
      .required("Number of employees is a required field"),
    business_type: yup.string().required("Buisness Type is a required field"),
    product: yup.string().required("Product is a required field"),
    preffered_terror: yup
      .string()
      .required("Preffered Tenor is a required field"),
    expected_loan_amount: yup
      .string()
      .required("Expected Loan Amount is a required field"),
    collaterals: yup.string().required("Collaterals is a required field"),
    industry_type: yup.string().required("Industry is a required field"),
    avg_monthly_balance: yup
      .string()
      .required("Average Monthly Salary is a required field"),
    business_characteristics: yup
      .string()
      .required("Buisness characteristics is a required field"),
    directors_anual_income: yup
      .string()
      .required("Annual Income is a required field"),
    year: yup.string().required("Year is a required field"),
    revenue: yup.string().required("Revenue is a required field"),
    profit: yup.string().required("Profit is a required field"),
    financier: yup.string().required("Financier is a required field"),
    faculty_type: yup.string().required("Faculty Type is a required field"),
    amount_limit: yup.string().required("Amount Limit is a required field"),
    outstanding_amount: yup
      .string()
      .required("Outstanding amount is a required field"),
    monthly_installment: yup
      .string()
      .required("Monthly Installment is a required field"),
    terror: yup.string().required("Tenor is a required field"),
    start_date: yup.string().required("Start Date is a required field"),
    end_date: yup.string().required("End Date is a required field"),
    security: yup.string().required("Security is a required field"),
    latest_security_value: yup
      .string()
      .required("Latest Security Value is a required field"),
    customer_type: yup.string().required("customer_type is a required field"),
    incorporation_date: yup
      .string()
      .required("Incorporation Date is a required field"),
    lender_wishlist: yup
      .string()
      .required("Lender wishlist is a required field"),
    how_you_heard_this: yup
      .string()
      .required("how you heard this is a required field"),
  });
  const history = useHistory();
  const [loandetails, setLoandetails] = useState({
    inputs: ["input-0"],
  });

  const {
    errors,
    touched,
    getFieldProps,
    handleSubmit,
    isSubmitting,
    handleReset,
    isValidating,
  } = useFormik({
    initialValues: {
      uen_number: "234567",
      company_name: "ABC finance",
      number_of_employees: "20",
      business_type: "finance",
      product: "invoice",
      preffered_terror: "yes",
      expected_loan_amount: "200000",
      collaterals: "yes",
      industry_type: "finance",
      avg_monthly_balance: "30000",
      business_characteristics: "jhwddjhwf",
      directors_anual_income: "2000000",
      year: "2019",
      revenue: "3000",
      profit: "20000",
      financier: "xyz",
      faculty_type: "owner",
      amount_limit: "20",
      outstanding_amount: "200",
      monthly_installment: "400",
      terror: "true",
      start_date: "20-01-2019",
      end_date: "20-01-2020",
      security: "yes",
      latest_security_value: "40000",
      customer_type: "working",
      incorporation_date: "20-07-2019",
      lender_wishlist: "yes",
      how_you_heard_this: "social",
    },
    onSubmit: (values, { resetForm }) => {
      history.push("/new-loan");
      LoanApplicationService.applyloan(values)
        .then((res) => {
          console.log({ res });
          Swal.fire("Done!", res.message, "success");
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema,
  });

  useFocusError(errors, isSubmitting, isValidating);

  const fieldProps = (name) => {
    const isError = errors[name];
    const isTouched = touched[name];
    return {
      ...getFieldProps(name),
      isError,
      isTouched,
    };
  };
  const goBack = () => {
    history.push("/new-loan");
  };
  const addinput = () => {};

  return (
    <React.Fragment>
      <PageHeader />
      <section className="pt-4 animate-fadeInUp loandetails mb-3">
        <TableComponent />
        <Container fluid>
          <div className="d-flex align-items-center  mb-3">
            <Button className="mr-2 button-size" onClick={goBack}>
              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
            </Button>
            <h6 className="app-title m-0">
              <span>Assign</span> Lender-002
            </h6>
          </div>
          <Form
            className="px-5 py-3 shadow rounded bg-white"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <Row>
              <Col sm={4}>
                Reassign to Sub Admin?
                <Row className="m-2">
                  <CustomInput
                    type="checkbox"
                    id="yes"
                    label="Yes"
                    className="mr-2"
                  />
                  <CustomInput type="checkbox" id="no" label="No" />
                </Row>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Sub-Admin"
                  type="select"
                  {...fieldProps("number_of_employees")}
                >
                  <option>Select</option>
                  <option value="400">400</option>
                </FormField>
              </Col>
            </Row>
            <div className="p-2 bg-light mb-3 mx-n3">
              <h6 className="m-0">General Information</h6>
            </div>

            <Row>
              <Col sm={4}>
                <FormField label="UEN Number" {...fieldProps("uen_number")} />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Company Name"
                  {...fieldProps("company_name")}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Total Number Of Employees"
                  type="select"
                  {...fieldProps("number_of_employees")}
                >
                  <option>Select</option>
                  <option value="400">400</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Buisness Type"
                  type="select"
                  {...fieldProps("business_type")}
                >
                  <option>Select</option>
                  <option value="finance">finance</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField label="Product" {...fieldProps("product")} />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Preffered Tenor"
                  type="select"
                  {...fieldProps("preffered_terror")}
                >
                  <option>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Expected Loan Amount($)"
                  type="select"
                  {...fieldProps("expected_loan_amount")}
                >
                  <option>Select</option>
                  <option value="multi-national">200000</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Collaterals"
                  type="select"
                  {...fieldProps("collaterals")}
                >
                  <option>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </FormField>
              </Col>
            </Row>
            <div className="p-2 bg-light mb-3 mx-n3">
              <h6 className="m-0">Organisation Information </h6>
            </div>
            <Row className="align-items-end">
              <Col sm={4}>
                <FormField
                  label="Industry Type"
                  type="select"
                  {...fieldProps("industry_type")}
                >
                  <option>Select</option>
                  <option value="finance">finance</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Average Monthly Balance($)"
                  {...fieldProps("avg_monthly_balance")}
                />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Buisness Characteristics"
                  type="select"
                  {...fieldProps("business_characteristics")}
                >
                  <option>Select</option>
                  <option value="data">data</option>
                </FormField>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Directors Total Annual Income($)"
                  {...fieldProps("directors_anual_income")}
                />
              </Col>
            </Row>
            <div className="p-2 bg-light mb-3 mx-n3">
              <h6 className="m-0">Financial Information</h6>
            </div>
            <div className="p-2 mx-n3">
              <p className="m-1">Latest 2 years Financial Reports</p>
            </div>
            <div>
              <Row className="add-finance-reports">
                <Col sm={8}>
                  <Row>
                    <Col sm={4}>
                      <FormField label="Year" {...fieldProps("year")} />
                    </Col>
                    <Col sm={4}>
                      <FormField label="Revenue" {...fieldProps("revenue")} />
                    </Col>
                    <Col sm={4}>
                      <FormField label="Profit" {...fieldProps("profit")} />
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col sm={4}>
                      <FormField label="Year" {...fieldProps("year")} />
                    </Col>
                    <Col sm={4}>
                      <FormField label="Revenue" {...fieldProps("revenue")} />
                    </Col>
                    <Col sm={4}>
                      <FormField label="Profit" {...fieldProps("profit")} />
                    </Col>
                  </Row>
                </Col>
                <Col sm={1} className="place-center">
                  (or)
                </Col>

                <Col sm={3} className="place-center dotted-line">
                  <label>Download Financial Reports</label>
                  <Button className="mr-2 download-btn">
                    Click Here to Download &nbsp;
                    <i class="fa fa-download" aria-hidden="true"></i>
                  </Button>
                </Col>
              </Row>
            </div>
            <Row className="mt-4">
              <Col sm={4}>
                <FormField
                  label="Customer Types"
                  type="select"
                  {...fieldProps("customer_type")}
                >
                  <option>Select</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Incorporation Date"
                  {...fieldProps("incorporation_date")}
                />
              </Col>
            </Row>
            <Row className="bold-text">
              <Col sm={4}>
                <FormField
                  label="Lender"
                  type="select"
                  {...fieldProps("lender_wishlist")}
                >
                  <option>Select</option>
                </FormField>
              </Col>
            </Row>
            <Row className="terms-btn ml-1 mt-2">
              <div>
                <Button
                  color="danger"
                  className="mr-3 button-size"
                  type="reset"
                >
                  Cancel <i className="fas fa-times-circle ml-2"></i>
                </Button>
                <Button
                  className="mr-3 button-size "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Reject <i className="fas fa-times-circle ml-2"></i>
                </Button>
                <Button className="mr-3 button-size hold-btn">
                  Hold <i className="fas fa-times-circle ml-2"></i>
                </Button>
                <Button
                  color="success"
                  className="button-size"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Approve <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </Row>
          </Form>
        </Container>
      </section>
      <Rejectionreason
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
        size="md"
      />
    </React.Fragment>
  );
};

export default AssignLender;
