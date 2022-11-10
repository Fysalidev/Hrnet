import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Ce champ est obligatoire"),
  lastName: Yup.string().required("Ce champ est obligatoire"),
  birthDate: Yup.string().required("Ce champ est obligatoire"),
  startDate: Yup.string().required("Ce champ est obligatoire"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  birthDate: "",
  startDate: "",
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
          </Entries>
          <Entries>
            <StyledLegend>Address</StyledLegend>
          </Entries>
          <FormButton type="submit">Save</FormButton>
          <FormButton onclick={resetForm}>Cancel</FormButton>
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
  text-align: center;
`;

const Entries = styled.fieldset`
  border-radius: 0.4rem;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-family: "Comfortaa", cursive;
`;

const StyledLegend = styled.legend`
  text-align: start;
  padding: 0 0.5rem 0 0.5rem;
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
