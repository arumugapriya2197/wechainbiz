import React from "react";
import {
  Modal,
  ModalBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { BorrowerService } from "../../APIService";
import { connect } from "react-redux";
import { SET_USER_DETAILS } from "../../constants";
import useFocusError from "../../utils/useFocusError";
import Swal from "sweetalert2";
import FormField from "../../components/FormField";

const BorrowerSignup = (props) => {
  const { isOpen, toggle, dispatch } = props;

  const validationSchema = yup.object({
    first_name: yup.string().required("First Name is a required field"),
    last_name: yup.string().required("Last Name is a required field"),
    uen_no: yup.string().required("Uen Number is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .email("Enter valid email"),
    mobile_no: yup.string().required("Phone No is a required field"),
    password: yup.string().required("Password is required"),
    // confirm_password: yup.string().required("Confirm Password is required"),
  });

  const {
    errors,
    touched,
    isSubmitting,
    getFieldProps,
    handleSubmit,
    handleReset,
    isValidating,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      ifsc_code: "345987",
      number_of_employees: "200",
      annual_tunover: "2000000",
      broker_code: "20",
    },

    onSubmit: (values, { resetForm }) => {
      BorrowerService.signup(values)
        .then((res) => {
          resetForm();

          if (res.success === 1) {
            // dispatch({
            //   type: SET_USER_DETAILS,
            //   payload: res.data,
            // });
          } else {
            Swal.fire("Sorry!", res.data, "error");
          }
        })
        .catch((err) => {});
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
    <Modal
      className="singin-modal"
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >
      <ModalBody {...props} className="p-0">
        <Row noGutters className="align-items-center">
          <Col sm={4}>
            <div className="banner">
              <h2>Borrower Signup</h2>
              <img src="./assets/images/logo-lg-inverse.png" alt="" />
            </div>
          </Col>
          <Col sm={8}>
            <Form
              className="px-4 m-2"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <Row>
                <Col sm={6}>
                  {/* <FormGroup>
                    <Input
                      type="text"
                      placeholder="First Name"
                      {...fieldProps("first_name")}
                      invalid={Boolean(touched.first_name && errors.first_name)}
                    />
                  </FormGroup> */}
                  <FormField
                    placeholder="First Name"
                    {...fieldProps("first_name")}
                  />
                </Col>
                <Col sm={6}>
                  {/* <FormGroup>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      {...fieldProps("last_name")}
                      invalid={Boolean(touched.last_name && errors.last_name)}
                    />
                  </FormGroup> */}
                  <FormField
                    placeholder="Last Name"
                    {...fieldProps("last_name")}
                  />
                </Col>
                <Col sm={6}>
                  {/* <FormGroup>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...fieldProps("email")}
                      invalid={Boolean(touched.email && errors.email)}
                    />
                  </FormGroup> */}
                  <FormField
                    type="email"
                    placeholder="Enter Email Address"
                    {...fieldProps("email")}
                  />
                </Col>
                <Col sm={6} className="phone-number">
                  {/* <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>+91</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        {...fieldProps("mobile_no")}
                        invalid={Boolean(touched.mobile_no && errors.mobile_no)}
                      />
                    </InputGroup>
                  </FormGroup> */}
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
                <Col sm={6}>
                  {/* <FormGroup>
                    <Input
                      type="password"
                      placeholder="password"
                      {...fieldProps("password")}
                      invalid={Boolean(touched.password && errors.password)}
                    />
                  </FormGroup> */}
                  <FormField
                    type="password"
                    placeholder="Password"
                    {...fieldProps("password")}
                  />
                </Col>
                <Col sm={6}>
                  {/* <FormGroup>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      // {...fieldProps("confirm_password")}
                      // invalid={Boolean(
                      //   touched.confirm_password && errors.confirm_password
                      // )}
                    />
                  </FormGroup> */}
                  <FormField
                    type="password"
                    placeholder="Confirm password"
                    // {...fieldProps("confirm_password")}
                  />
                </Col>
                <Col sm={12}>
                  {/* <FormGroup>
                    <Input
                      placeholder="UEN Number - Registered Name of the Company"
                      {...fieldProps("uen_no")}
                      invalid={Boolean(touched.uen_no && errors.uen_no)}
                    />
                  </FormGroup> */}
                  <FormField
                    placeholder="UEN Number - Registered Name of the Company"
                    {...fieldProps("uen_no")}
                  />
                </Col>
                {/* <Col sm={6}>
                  <FormGroup>
                    <Input type="select">
                      <option>Industry - ISIC code</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input type="select">
                      <option>Number of Employees</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input type="select">
                      <option>Annual Turnover</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm={6}>
                  <FormGroup>
                    <Input placeholder="Have a Broker Code? If Yes Enter" />
                  </FormGroup>
                </Col>
              */}
              </Row>
              <div className="text-center">
                <Button color="light" className="mr-2 button-size" type="reset">
                  Cancel <i className="fas fa-times-circle ml-2"></i>
                </Button>
                <Button className="button-size">
                  Signup <i className="fas fa-edit ml-2"></i>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default BorrowerSignup;
