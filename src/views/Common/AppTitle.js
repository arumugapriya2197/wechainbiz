import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router";

const AppTitle = (props) => {
  const [apptitleDetails, setApptitleDetails] = useState({});
  useEffect(() => {
    if (props) {
      setApptitleDetails({
        title: props.title,
        titlespan: props.titlespan,
        backNavigation: props.navigateTo,
      });
    }
  }, []);
  const history = useHistory();
  const goBack = () => {
    history.push(apptitleDetails.backNavigation);
  };
  return (
    <>
      <div className="d-flex align-items-center  mb-3 app-title-forms">
        <Button className="mr-2 button-size" onClick={goBack}>
          <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
        </Button>
        <h6 className="app-title m-0">
          <span>{apptitleDetails.titlespan}</span> {apptitleDetails.title}
        </h6>
      </div>
    </>
  );
};
export default AppTitle;
