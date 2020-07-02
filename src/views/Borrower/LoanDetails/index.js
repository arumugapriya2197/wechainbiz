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

const LoanDetails = () => {
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
        <Container fluid>
          <div className="d-flex align-items-center  mb-3">
            <Button className="mr-2 button-size" onClick={goBack}>
              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
            </Button>
            <h6 className="app-title m-0">
              <span>New Loan Application</span> - Invoice Financing
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
                <FormField label="Name" {...fieldProps("name")} />
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
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="How have you heard about us?"
                  type="select"
                  {...fieldProps("how_you_heard_this")}
                >
                  <option>Select</option>
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

export default LoanDetails;
