import React, { useState } from "react";
import { useHistory } from "react-router";
import PageHeader from "../../../layout/PageHeader";
import FormField from "../../../components/FormField";
import { useFormik } from "formik";
import * as yup from "yup";
import useFocusError from "../../../utils/useFocusError";
import { LoanApplicationService } from "../../../APIService";
import Swal from "sweetalert2";
import Rating from "react-rating";
import emptystar from "../../../assets/png/empty.png";
import fullstar from "../../../assets/png/full-star.png";
import halfstar from "../../../assets/png/star.png";
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

const Feedback = () => {
  const validationSchema = yup.object({
    borrower_name: yup.string().required("Borrower Name is a required field"),
    lender_name: yup.string().required("Lender Name is a required field"),
    remarks: yup.string().required("Remarks is a required field"),
  });
  const history = useHistory();
  const [rating, setRating] = useState({
    initialRating: 0,
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
      lender_name: "",
      borrower_name: "",
      remarks: "",
      rating: rating.initialRating,
    },
    onSubmit: (values, { resetForm }) => {
      values.rating = rating.initialRating;
      console.log(values);
      history.push("/new-loan");
      LoanApplicationService.feedback(values)
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
  const ratingval = (e) => {
    console.log(e);
    setRating({
      ...rating,
      initialRating: e,
    });
  };

  return (
    <React.Fragment>
      <PageHeader />
      <section className="pt-4 animate-fadeInUp feedback mb-4">
        <Container fluid>
          <div className="d-flex align-items-center  mb-3">
            <Button className="mr-2 button-size" onClick={goBack}>
              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
            </Button>
            <h6 className="app-title m-0">
              <span>New</span> Feedback/Rating
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
                <FormField
                  label="Borrower Name"
                  {...fieldProps("borrower_name")}
                />
              </Col>
              <Col sm={4}>
                <FormField
                  label="Lender Name"
                  type="select"
                  {...fieldProps("lender_name")}
                >
                  <option>Select</option>
                  <option value="Validus Capital">Validus Capital</option>
                  <option value="Invoice Interchange">
                    Invoice Interchange
                  </option>
                  <option value="eFundSME">eFundSME</option>
                  <option value="Culum">Culum</option>
                  <option value="Moolahsense">Moolahsense</option>
                  <option value="FundTier">FundTier</option>
                </FormField>
              </Col>
              <Col sm={4}>
                <label>Rating</label>
                <div>
                  <Rating
                    onChange={ratingval}
                    initialRating={rating.initialRating}
                    placeholderRating={3.5}
                    emptySymbol={<img src={emptystar} className="icon" />}
                    placeholderSymbol={<img src={emptystar} className="icon" />}
                    fullSymbol={<img src={fullstar} className="icon" />}
                    fractions={2}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <FormField
                  label="Remarks"
                  type="textarea"
                  rows={6}
                  placeholder="Enter Remarks"
                  {...fieldProps("remarks")}
                />
              </Col>
            </Row>
            <div className="text-right">
              <Button color="danger button-size" className="mr-3" type="reset">
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
          </Form>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default Feedback;
