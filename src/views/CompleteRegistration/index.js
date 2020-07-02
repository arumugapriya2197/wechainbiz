import React from "react";
import PageHeader from "../../layout/PageHeader";
import {
  Container,
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import useFocusError from "../../utils/useFocusError";
import FormField from "../../components/FormField";
import { ProfileService } from "../../APIService";
import Swal from "sweetalert2";
import {
  numberOfEmployees,
  annualTurnover,
} from "../../constants/DefaultOptions";

const CompleteRegistration = () => {
  const validationSchema = yup.object({
    director_first_name: yup
      .string()
      .required("Director First Name is a required field"),
    director_last_name: yup
      .string()
      .required("Director Last Name is a required field"),
    uen_number: yup.string().required("Uen Number is a required field"),
    industry_isic_code: yup
      .string()
      .required("Industry Isic Code is a required field"),
    number_of_employees: yup
      .string()
      .required("Number Of Employees is a required field"),
    annual_tun_over: yup
      .string()
      .required("Annual Tun Over is a required field"),
    is_singapore_reg_company: yup
      .string()
      .required("Is Singapore Reg Company is a required field"),
    load_shareholding: yup
      .string()
      .required("Load Shareholding is a required field"),
    history: yup.string().required("History is a required field"),
    company_description: yup
      .string()
      .required("Company Description is a required field"),
    business_description: yup
      .string()
      .required("Business Description is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Enter valid email address"),
    mobile_number: yup.string().required("Mobile Number is a required field"),
    website: yup
      .string()
      .required("Website is a required field")
      .url("Ener valid url address"),
  });

  const {
    errors,
    touched,
    getFieldProps,
    isSubmitting,
    isValidating,
    handleSubmit,
    handleReset,
    setFieldValue,
  } = useFormik({
    initialValues: {
      director_first_name: "",
      director_last_name: "",
      uen_number: "",
      industry_isic_code: "",
      number_of_employees: "",
      annual_tun_over: "",
      is_singapore_reg_company: "1",
      load_shareholding: "1",
      history: "1",
      company_description: "",
      business_description: "",
      email: "",
      mobile_number: "",
      website: "",
    },
    onSubmit: (values, { resetForm }) => {
      ProfileService.create(values).then((res) => {
        console.log(res);
        Swal.fire("Done!", res.message, "success");
        resetForm();
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

  return (
    <React.Fragment>
      <PageHeader />
      <section className="p-5 animate-fadeInUp">
        <Container fluid>
          <div className="d-flex align-items-center  mb-3">
            <Button className="mr-2">
              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
            </Button>
            <h4 className="app-title m-0">
              <span>Complete</span> Registration
            </h4>
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
                <FormField
                  label="Directors First Name"
                  {...fieldProps("director_first_name")}
                />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Directors Last Name"
                  {...fieldProps("director_last_name")}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormField label="UEN Number" {...fieldProps("uen_number")} />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Industry-ISIC code"
                  type="select"
                  {...fieldProps("industry_isic_code")}
                >
                  <option>Select</option>
                  <option value="5318654">5318654</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Number of Employees"
                  type="select"
                  {...fieldProps("number_of_employees")}
                >
                  <option>Select</option>
                  {numberOfEmployees.map((option, inx) => {
                    return (
                      <option value={option} key={inx}>
                        {option}
                      </option>
                    );
                  })}
                </FormField>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Annual Turnover"
                  type="select"
                  {...fieldProps("annual_tun_over")}
                >
                  <option>Select</option>
                  {annualTurnover.map((option, inx) => {
                    return (
                      <option value={option} key={inx}>
                        {option}
                      </option>
                    );
                  })}
                </FormField>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormGroup>
                  <Label>Is Singapore Registered Company? </Label>
                  <div
                    className={`d-flex ${
                      Boolean(errors.mobile_number && touched.mobile_number)
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <CustomInput
                      className="mr-2"
                      type="checkbox"
                      id="is-singapore-yes"
                      label="Yes"
                      name="is_singapore_reg_company"
                      checked={
                        getFieldProps("is_singapore_reg_company").value === "1"
                      }
                      onChange={() =>
                        setFieldValue("is_singapore_reg_company", "1")
                      }
                    />
                    <CustomInput
                      type="checkbox"
                      id="is-singapore-no"
                      label="No"
                      name="is_singapore_reg_company"
                      checked={
                        getFieldProps("is_singapore_reg_company").value === "0"
                      }
                      onChange={() =>
                        setFieldValue("is_singapore_reg_company", "0")
                      }
                    />
                  </div>
                  {errors.is_singapore_reg_company &&
                    touched.is_singapore_reg_company && (
                      <FormFeedback valid={false}>
                        {errors.is_singapore_reg_company}
                      </FormFeedback>
                    )}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <Label>Whether Company have 30% local Shareholding?</Label>
                  <div
                    className={`d-flex ${
                      Boolean(
                        errors.load_shareholding && touched.load_shareholding
                      )
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <CustomInput
                      className="mr-2"
                      type="checkbox"
                      id="load-shareholding-yes"
                      label="Yes"
                      name="load_shareholding"
                      checked={getFieldProps("load_shareholding").value === "1"}
                      onChange={() => setFieldValue("load_shareholding", "1")}
                    />
                    <CustomInput
                      type="checkbox"
                      id="load-shareholding-no"
                      label="No"
                      name="load_shareholding"
                      checked={getFieldProps("load_shareholding").value === "0"}
                      onChange={() => setFieldValue("load_shareholding", "0")}
                    />
                  </div>
                  {errors.load_shareholding && touched.load_shareholding && (
                    <FormFeedback valid={false}>
                      {errors.load_shareholding}
                    </FormFeedback>
                  )}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <Label>History Of Bankruptcy? </Label>
                  <div
                    className={`d-flex ${
                      Boolean(errors.history && touched.history)
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <CustomInput
                      className="mr-2"
                      type="checkbox"
                      id="history-yes"
                      label="Yes"
                      name="history"
                      checked={getFieldProps("history").value === "1"}
                      onChange={() => setFieldValue("history", "1")}
                    />
                    <CustomInput
                      type="checkbox"
                      id="history-no"
                      label="No"
                      name="history"
                      checked={getFieldProps("history").value === "0"}
                      onChange={() => setFieldValue("history", "0")}
                    />
                  </div>
                  {errors.history && touched.history && (
                    <FormFeedback valid={false}>{errors.history}</FormFeedback>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <FormField
                  label="Company Description"
                  type="textarea"
                  rows="6"
                  placeholder="Enter Description"
                  {...fieldProps("company_description")}
                />
              </Col>
              <Col sm={8}>
                <FormField
                  label="Business Description"
                  type="textarea"
                  rows="6"
                  placeholder="Enter Description"
                  {...fieldProps("business_description")}
                />
              </Col>
            </Row>
            <div className="p-2 bg-light mb-3 mx-n3">
              <h6 className="m-0">Contact Information </h6>
            </div>
            <Row>
              <Col sm={4}>
                <FormField
                  label="Email"
                  type="email"
                  {...fieldProps("email")}
                />
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <InputGroup
                    className={
                      Boolean(errors.mobile_number && touched.mobile_number)
                        ? "is-invalid border-danger"
                        : ""
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>+91</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      {...getFieldProps("mobile_number")}
                      invalid={Boolean(
                        errors.mobile_number && touched.mobile_number
                      )}
                    />
                  </InputGroup>
                  {errors.mobile_number && touched.mobile_number && (
                    <FormFeedback valid={false}>
                      {errors.mobile_number}
                    </FormFeedback>
                  )}
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormField
                  label="Website"
                  placeholder="Enter URL"
                  {...fieldProps("website")}
                />
              </Col>
            </Row>
            <div className="text-right">
              <Button color="danger" className="mr-3" type="reset">
                cancel <i className="fas fa-times-circle ml-2"></i>
              </Button>
              <Button color="success" type="submit">
                save <i className="far fa-save ml-2"></i>
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompleteRegistration;
