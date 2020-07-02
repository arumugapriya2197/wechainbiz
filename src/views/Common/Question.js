import React, { useState, useEffect } from "react";
import { Row, CustomInput } from "reactstrap";

const Question = (props) => {
  const [questionDetails, setQuestionDetails] = useState({});
  useEffect(() => {
    if (props) {
      setQuestionDetails({
        ...questionDetails,
        question: props.question,
        options: props.options,
      });
    }
  }, []);

  return (
    <div>
      {questionDetails.question}
      <Row className="m-2 align-center">
        {questionDetails.options &&
          questionDetails.options.map((each) => {
            return (
              <CustomInput
                type="checkbox"
                id={each}
                label={each}
                className="mr-2"
              />
            );
          })}
      </Row>
    </div>
  );
};
export default Question;
