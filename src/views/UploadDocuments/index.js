import React, { useState, useEffect } from "react";
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
import { LoanApplicationData } from "../../../APIService";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { SET_TABLE_DETAILS } from "../../../constants";

const UploadDocuments = ({ userDetails, dispatch }) => {
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
      uen_number: userDetails ? userDetails.uen_no : "",
      company_name: "",
      number_of_employees: userDetails ? userDetails.number_of_employees : "",
      business_type: "",
      product: localStorage.getItem("product")
        ? localStorage.getItem("product")
        : "",
      preffered_terror: "",
      expected_loan_amount: "",
      collaterals: "",
      industry_type: "",
      avg_monthly_balance: "",
      business_characteristics: "",
      directors_anual_income: "",
      year: "",
      revenue: "",
      profit: "",
      financier: "",
      faculty_type: "",
      amount_limit: "",
      outstanding_amount: "",
      monthly_installment: "",
      terror: "",
      start_date: "",
      end_date: "",
      security: "",
      latest_security_value: "",
      customer_type: "",
      incorporation_date: "",
      lender_wishlist: "",
      how_you_heard_this: "",
      pending_status: "3 days",
      status: "submitted",
    },
    onSubmit: (values, { resetForm }) => {
      LoanApplicationData.applyloan(values)
        .then((res) => {
          console.log({ res });
          if (res.status == "200") {
            LoanApplicationData.loanapplicationlist()
              .then((res) => {
                dispatch({
                  type: SET_TABLE_DETAILS,
                  payload: res.data,
                });
              })
              .catch((err) => {
                console.log(err);
              });

            resetForm();
            history.push("/new-loan");
          } else {
          }
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
        <Container fluid>
          <div className="d-flex align-items-center  mb-3">
            <Button className="mr-2 button-size" onClick={goBack}>
              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
            </Button>
            <h6 className="app-title m-0">
              <span>New Loan Application</span> -{" "}
              {localStorage.getItem("product")
                ? localStorage.getItem("product")
                : "Invoice Financing"}
            </h6>
          </div>
          <Form
            className="px-5 py-3 shadow rounded bg-white"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
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
              <Col sm={4}>
                <FormField
                  label="Name"
                  {...fieldProps("name")}
                  value={userDetails ? userDetails.first_name : ""}
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
            <div className="p-2 mx-n3">
              <p className="m-1">Latest 2 years Financial Reports</p>
            </div>
            <div>
              <Row className="add-finance-reports">
                <Col sm={3}>
                  <FormField label="Year" {...fieldProps("year")} />
                </Col>
                <Col sm={3}>
                  <FormField label="Revenue" {...fieldProps("revenue")} />
                </Col>
                <Col sm={3}>
                  <FormField label="Profit" {...fieldProps("profit")} />
                </Col>

                <Col sm={3}>
                  <label>Upload Financial Reports</label>
                  <Button className="mr-2 upload-file" onClick={addinput}>
                    Choose File
                    <i class="fa fa-upload" aria-hidden="true"></i>
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="p-2 mx-n3">
              <p className="m-1">Existing Loans(If Any)</p>
            </div>
            <div>
              <Row className=" mb-3">
                <Col sm={10}>
                  <Row className="add-existing-loans">
                    <Row>
                      <Col sm={3}>
                        <FormField
                          label="Financier"
                          {...fieldProps("financier")}
                        />
                      </Col>
                      <Col sm={3}>
                        <FormField
                          label="Facility Type"
                          {...fieldProps("faculty_type")}
                        />
                      </Col>
                      <Col sm={3}>
                        <FormField
                          label="Limit"
                          {...fieldProps("amount_limit")}
                        />
                      </Col>

                      <Col sm={3}>
                        <FormField
                          label="Outstanding Amount"
                          {...fieldProps("outstanding_amount")}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={3}>
                        <FormField
                          label="Monthly Installment"
                          {...fieldProps("monthly_installment")}
                        />
                      </Col>
                      <Col sm={3}>
                        <FormField label="Tenor" {...fieldProps("terror")} />
                      </Col>
                      <Col sm={3}>
                        <FormField
                          label="Start Date"
                          {...fieldProps("start_date")}
                        />
                      </Col>

                      <Col sm={3}>
                        <FormField
                          label="End Date"
                          {...fieldProps("end_date")}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={5}>
                        <FormField
                          label="Security"
                          {...fieldProps("security")}
                        />
                      </Col>
                      <Col sm={5}>
                        <FormField
                          label="Latest Value of security"
                          {...fieldProps("latest_security_value")}
                        />
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col sm={2} className="add-button">
                  <Button color="success add-button-size">
                    Add <i className="fas fa-plus-circle"></i>
                  </Button>
                </Col>
              </Row>
            </div>

            <Row>
              <Col sm={4}>
                <FormField
                  label="Customer Types"
                  type="select"
                  {...fieldProps("customer_type")}
                >
                  <option>Select</option>
                  <option>Finance</option>
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
                  label="Lender Wishlist"
                  type="select"
                  {...fieldProps("lender_wishlist")}
                >
                  <option>Select</option>
                  <option>yes</option>
                  <option>No</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="How have you heard about us?"
                  type="select"
                  {...fieldProps("how_you_heard_this")}
                >
                  <option>Select</option>
                  <option>social</option>
                </FormField>
              </Col>
            </Row>
            <Row className="terms ml-1 mt-2">
              <CustomInput
                type="checkbox"
                id="privacy-policy"
                label="I agree with Privacy policy and terms & conditions"
              />
              <div className="text-right">
                <Button
                  color="danger button-size"
                  className="mr-3"
                  type="reset"
                >
                  Cancel <i className="fas fa-times-circle ml-2"></i>
                </Button>
                <Button
                  color="success button-size"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </Row>
          </Form>
        </Container>
      </section>
    </React.Fragment>
  );
};
const mapStateToProps = ({ Application }) => ({
  userDetails: Application.userDetails,
});

export default connect(mapStateToProps)(UploadDocuments);
