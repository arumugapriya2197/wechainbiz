import React, { useEffect } from "react";
import {
  Modal,
  ModalBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Button,
  CustomInput,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { BorrowerService } from "../../APIService";
import { connect } from "react-redux";
import { SET_USER_DETAILS } from "../../constants";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import barcode from "../../assets/png/barcode.png";

const BorrowerLogin = (props) => {
  const { isOpen, toggle, toggleSingUp, dispatch } = props;

  const history = useHistory();

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter valid email address."),
    password: yup.string().required("Password is required"),
  });
  const {
    errors,
    touched,
    isSubmitting,
    getFieldProps,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      BorrowerService.login(values)
        .then((res) => {
          console.log(res);
          if (res.success === 1) {
            localStorage.setItem("token", res.token);
            history.push("/new-loan");
            dispatch({
              type: SET_USER_DETAILS,
              payload: res.data,
            });
          } else {
            Swal.fire("Sorry!", res.data, "error");
            setSubmitting(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <Modal
      className="singin-modal"
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="lg"
    >
      <ModalBody className="p-0">
        <Row noGutters className="align-items-center">
          <Col sm={6}>
            <div className="banner">
              <h2>Borrower Login</h2>
              <img src="./assets/images/logo-lg-inverse.png" alt="" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="px-4">
              <Form className="m-2" onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    type="email"
                    placeholder="Enter your Email ID"
                    {...getFieldProps("email")}
                    invalid={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormFeedback valid={false}>{errors.email}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup className="mb-4">
                  <Input
                    type="password"
                    placeholder="Enter your Password"
                    {...getFieldProps("password")}
                    invalid={Boolean(touched.password && errors.password)}
                  />
                  {touched.password && errors.password && (
                    <FormFeedback valid={false}>{errors.password}</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup className="d-flex justify-content-between mb-4 borrower-login-form">
                  <CustomInput
                    type="checkbox"
                    id="rememberMe"
                    label="Remember me"
                  />
                  <div>Forgot Password?</div>
                </FormGroup>
                <Button disabled={isSubmitting} block>
                  {isSubmitting ? (
                    <i className="fas fa-spinner fa-pulse"></i>
                  ) : (
                    <React.Fragment>
                      Login{" "}
                      <i className="fas fa-sign-in-alt ml-2 button-size"></i>
                    </React.Fragment>
                  )}
                </Button>
              </Form>
            </div>
            <p className="text-center">Or Login Via Sing Pass</p>
            <div className="barcode">
              <img src={barcode} />
            </div>
            <p className="text-center">
              New to Wechainbiz ?{" "}
              <span
                className="anchor"
                onClick={() => {
                  toggle();
                  toggleSingUp();
                }}
              >
                Sign up
              </span>{" "}
            </p>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default connect()(BorrowerLogin);
