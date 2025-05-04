import { Field } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export default function WrapperInput({ label, name, isPassword, isDefault, isPhone }) {

    return (
        <div className="wrapper_input">
            <label htmlFor={name}>{label}</label>
            {isDefault && <Field name={name} />}
            {isPassword && <Field name={name} type="password" />}
            {isPhone && (
                <Field name={name}>{({ field, form }) => <PhoneInput country="US" defaultCountry="EG" international name={name} {...field} onChange={(value) => form.setFieldValue(name,value)} />}</Field>
            )}
        </div>
    );
}
