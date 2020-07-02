import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import useFocusError from "../../utils/useFocusError";

const FooterButtons = (props) => {
  const [footerButton, setFooterButton] = useState({});

  useEffect(() => {
    if (props) {
      setFooterButton({
        ...footerButton,
        submitting: props.disabled,
        label: props.successLabel,
        icon: props.icon,
        required: props.required,
        initialValues: props.initialValues,
      });
    }
  }, []);

  const validationSchema = yup.object(
    footerButton.required &&
      footerButton.required.map((each) => {
        return { [each]: yup.string().required(`${each} is a required field`) };
      })
  );
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
    initialValues: footerButton.initialValues ? footerButton.initialValues : {},
    onSubmit: (values, { resetForm }) => {
      history.push("/new-loan");
      // LoanApplicationService.applyloan(values)
      //   .then((res) => {
      //     console.log({ res });
      //     Swal.fire("Done!", res.message, "success");
      //     resetForm();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
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
  console.log(validationSchema);
  return (
    <div>
      <Button color="danger" className="mr-3 button-size" type="reset">
        Cancel <i className="fas fa-times-circle ml-2"></i>
      </Button>

      <Button
        color="success"
        className="button-size"
        type="submit"
        disabled={footerButton.isSubmitting}
      >
        {footerButton.label}
        {footerButton.icon}
      </Button>
    </div>
  );
};
export default FooterButtons;
