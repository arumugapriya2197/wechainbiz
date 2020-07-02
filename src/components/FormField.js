import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const FormField = props => {
    let { label = "", labelProps = {}, formGroupProps = {}, isError, isTouched, ...restProps } = props;
    return (
        <FormGroup {...formGroupProps}>
            {label && <Label {...labelProps}>{label}</Label>}
            <Input {...restProps} invalid={Boolean(isError && isTouched)} />
            {isError && isTouched && <FormFeedback valid={false} >{isError}</FormFeedback>}
        </FormGroup>
    )

}

export default FormField