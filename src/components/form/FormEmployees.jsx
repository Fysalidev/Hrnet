import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Ce champ est obligatoire"),
  lastName: Yup.string().required("Ce champ est obligatoire"),
  birthDate: Yup.string().required("Ce champ est obligatoire"),
  startDate: Yup.string().required("Ce champ est obligatoire"),
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

const handleSubmit = (values) => {
  console.log(values);
};

function FormEmployees() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ resetForm }) => (
        <StyledForm>
          <FormTitle>Create Employee</FormTitle>
          <Entries>
            <StyledLegend>Employee</StyledLegend>
            <Entrie>
              <StyledLabel htmlFor="firstName">First Name</StyledLabel>
              <StyledField type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" />
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <StyledField type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" />
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="birthDate">Date of Birth</StyledLabel>
              <StyledField type="text" id="birthDate" name="birthDate" />
              <ErrorMessage name="birthDate" />
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="startDate">Start Date</StyledLabel>
              <StyledField type="text" id="startDate" name="startDate" />
              <ErrorMessage name="startDate" />
            </Entrie>
          </Entries>
          <Entries>
            <StyledLegend>Address</StyledLegend>
            <Entrie>
              <StyledLabel htmlFor="street">Street :</StyledLabel>
              <StyledField type="text" id="street" name="street" />
              <ErrorMessage name="startDate" />
            </Entrie>
            <Entrie>
              <StyledLabel htmlFor="city">City</StyledLabel>
              <StyledField type="text" id="city" name="city" />
              <ErrorMessage name="city" />
            </Entrie>
          </Entries>
          <FormButton type="submit">Save</FormButton>
          <FormButton type="button" onclick={()=> {resetForm}}>Cancel</FormButton>
        </StyledForm>
      )}
    </Formik>
  );
}

export default FormEmployees;

const StyledForm = styled(Form)`
  width: 30rem;
  background: white;
  border-radius: 0.4rem;
  text-align: center;
  backdrop-filter: blur(0) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

const FormTitle = styled.h2`
  color: white;
  font-family: "Comfortaa", cursive;
  font-weight: bold;
  text-align: center;
`;

const Entries = styled.fieldset`
  border-radius: 0.4rem;
  /* margin: 1rem; */
  /* padding: 1rem; */
  color: purple;
  font-family: "Comfortaa", cursive;
  display: flex;
  flex-direction: column;
  gap:0.5rem;
`;

const StyledLegend = styled.legend`
  text-align: start;
  padding: 0 0.5rem 0 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
  color: white;
`;

const Entrie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  color: white;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
`;

const StyledField = styled(Field)`
  width: 100%;
  height: 2rem;
  border-radius: 5rem;
  border: solid 2px white;
  background: transparent;
  font-family: "Comfortaa", cursive;
  font-size: 1rem;
  color: orange;
  font-weight: bold;
  text-align: center;

  &&:focus {
    outline: none;
    border: solid 2px purple;
    background: white;
    opacity: 0.9;
  }
`;

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
