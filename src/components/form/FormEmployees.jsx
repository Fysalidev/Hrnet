import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
/* import { Action } from "@remix-run/router"; */

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Ce champ est obligatoire"),
  lastName: Yup.string().required("Ce champ est obligatoire"),
  birthDate: Yup.string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      "DD/MM/YYYY required"
    )
    .required("Ce champ est obligatoire"),
  startDate: Yup.string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      "DD/MM/YYYY required"
    )
    .required("Ce champ est obligatoire"),
  street: Yup.string().required("Ce champ est obligatoire"),
  city: Yup.string().required("Ce champ est obligatoire"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
  street: "",
  city: "",
};

function FormEmployees() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      {({ handleReset }) => (
        <StyledForm>
          <FormTitle>Create Employee</FormTitle>
          <Entries>
            <StyledLegend>Employee</StyledLegend>

            <Entrie>
              <StyledLabel htmlFor="firstName">First Name :</StyledLabel>
              <StyledField type="text" id="firstName" name="firstName" />
              <StyledValidation>
                <ErrorMessage name="firstName" />
              </StyledValidation>
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="lastName">Last Name :</StyledLabel>
              <StyledField type="text" id="lastName" name="lastName" />
              <StyledValidation>
                <ErrorMessage name="lastName" />
              </StyledValidation>
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="birthDate">Date of Birth :</StyledLabel>
              <StyledField type="text" id="birthDate" name="birthDate" />
              <StyledValidation>
                <ErrorMessage name="birthDate" />
              </StyledValidation>
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="startDate">Start Date :</StyledLabel>
              <StyledField type="text" id="startDate" name="startDate" />
              <StyledValidation>
                <ErrorMessage name="startDate" />
              </StyledValidation>
            </Entrie>
          </Entries>
          <Entries>
            <StyledLegend>Address</StyledLegend>
            <Entrie>
              <StyledLabel htmlFor="street">Street :</StyledLabel>
              <StyledField type="text" id="street" name="street" />
              <StyledValidation>
                <ErrorMessage name="street" />
              </StyledValidation>
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="city">City :</StyledLabel>
              <StyledField type="text" id="city" name="city" />
              <StyledValidation>
                <ErrorMessage name="city" />
              </StyledValidation>
            </Entrie>
          </Entries>
          <Entries>
            <StyledLegend>Company</StyledLegend>
          </Entries>
          <Buttons>
            <FormButton type="submit">Save</FormButton>
            <FormButton type="reset" onClick={handleReset}>
              Cancel
            </FormButton>
          </Buttons>
        </StyledForm>
      )}
    </Formik>
  );
}

export default FormEmployees;

const StyledForm = styled(Form)`
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  gap: 2rem;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin: 0;
`;

const Entries = styled.fieldset`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLegend = styled.legend`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0 0.5rem 0 0.5rem;
  text-align: start;
`;

const Entrie = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const StyledField = styled(Field)`
  color: orange;
  background: transparent;
  border-radius: 5rem;
  border: solid 2px white;
  font-size: 1rem;
  font-weight: bold;
  height: 2rem;
  text-align: center;
  width: 100%;

  &&:focus {
    border: solid 2px orange;
    opacity: 0.9;
    outline: none;
  }
`;

const StyledValidation = styled.p`
  color: orange;
  text-align: center;
  width: 100%;
  margin: 0;
`;

const Buttons = styled.div``;

const FormButton = styled.button`
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  width: 10rem;
  background: transparent;
  border: solid 1px white;
  border-radius: 1rem;
  color: white;
  z-index: 1;
  position: relative;
  margin: 1rem;

  &&:hover {
    background: purple;
  }
`;
