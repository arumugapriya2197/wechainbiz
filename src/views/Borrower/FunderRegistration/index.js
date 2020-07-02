import React, { useState, useMemo } from "react";
import PageHeader from "../../../layout/PageHeader";
import {
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  CustomInput,
  FormFeedback,
} from "reactstrap";
import { useTable } from "react-table";
import { useFormik } from "formik";
import * as yup from "yup";
import useFocusError from "../../../utils/useFocusError";
import FormField from "../../../components/FormField";
import { LoanApplicationService } from "../../../APIService";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import moment from "moment";
import FooterButtons from "../../Common/FooterButtons";
import props from "prop-types";
import AppTitle from "../../Common/AppTitle";
import Question from "../../Common/Question";

const FunderRegistration = () => {
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
      //   uen_number: "234567",
      //   company_name: "ABC finance",
      //   number_of_employees: "20",
      //   business_type: "finance",
      //   product: "invoice",
      //   preffered_terror: "yes",
      //   expected_loan_amount: "200000",
      //   collaterals: "yes",
      //   industry_type: "finance",
      //   avg_monthly_balance: "30000",
      //   business_characteristics: "jhwddjhwf",
      //   directors_anual_income: "2000000",
      //   year: "2019",
      //   revenue: "3000",
      //   profit: "20000",
      //   financier: "xyz",
      //   faculty_type: "owner",
      //   amount_limit: "20",
      //   outstanding_amount: "200",
      //   monthly_installment: "400",
      //   terror: "true",
      //   start_date: "20-01-2019",
      //   end_date: "20-01-2020",
      //   security: "yes",
      //   latest_security_value: "40000",
      //   customer_type: "working",
      //   incorporation_date: "20-07-2019",
      //   lender_wishlist: "yes",
      //   how_you_heard_this: "social",
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

  const options = ["Yes", "No"];
  const required = ["UEN number", "description", "block"];
  const initialValues = {
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
  };
  return (
    <React.Fragment>
      <PageHeader />
      <section className="pt-4 animate-fadeInUp loandetails mb-3">
        <Container fluid>
          <AppTitle
            navigateTo="/new-loan"
            titlespan="Funder"
            title="Registration"
          />

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
                <FormField
                  label="Name / Organisation"
                  {...fieldProps("name-organisation")}
                />
              </Col>
              <Col sm={4}>
                <FormField label="Logo" {...fieldProps("logo")} />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <FormField
                  label="Description"
                  type="textarea"
                  rows={6}
                  placeholder=""
                  {...fieldProps("description")}
                />
              </Col>
            </Row>
            <div className="p-2 bg-light mb-3 mx-n3">
              <h6 className="m-0">Contact Information </h6>
            </div>
            <Row className="align-items-end">
              <Col sm={4}>
                <FormField
                  label="Email"
                  type="email"
                  placeholder="Enter Email Address"
                  {...fieldProps("email")}
                />
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <InputGroup
                    className={
                      Boolean(errors.mobile_no && touched.mobile_no)
                        ? "is-invalid border-danger"
                        : ""
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>+91</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone Number"
                      {...getFieldProps("mobile_no")}
                      invalid={Boolean(errors.mobile_no && touched.mobile_no)}
                    />
                  </InputGroup>
                  {errors.mobile_no && touched.mobile_no && (
                    <FormFeedback valid={false}>
                      {errors.mobile_no}
                    </FormFeedback>
                  )}
                </FormGroup>
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
              <h6 className="m-0">Funding Information </h6>
            </div>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Funding Domain"
                  {...fieldProps("funding_domain")}
                />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Minimum Rate of Interest(%)"
                  {...fieldProps("min_rate_of_interest")}
                />
              </Col>
              <Col sm={4} className="add-button-funder">
                <Button color="success add-button-size">
                  Add <i className="fas fa-plus-circle"></i>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Minimum Funding Amount($)"
                  {...fieldProps("minimum_funding_amount")}
                />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Maximum Funding Amount($)"
                  {...fieldProps("maximum_funding_amount")}
                />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Maximum Tenor(Days)"
                  {...fieldProps("maximum_tenor")}
                />
              </Col>
            </Row>

            <Row className="d-flex justify-content-between align-items-end ml-1 mt-2">
              <Question question="Is Special Funder?" options={options} />

              <FooterButtons
                {...props}
                disabled={isSubmitting}
                successLabel={"create"}
                icon={<i className="fas fa-arrow-right ml-2"></i>}
                required={required}
                initialValues={initialValues}
              />
            </Row>
          </Form>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default FunderRegistration;
