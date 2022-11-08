import React from "react";
import styled from "styled-components";

function FormEmployees() {
  return (
    <FormWrapper>
      <FormTitle>Create Employee</FormTitle>
      <EntriesWrapper>
        <EntriesLegend>Employee</EntriesLegend>
      </EntriesWrapper>
      <EntriesWrapper>
        <EntriesLegend>Address</EntriesLegend>
      </EntriesWrapper>
      <SaveButton>Save</SaveButton>
    </FormWrapper>
  );
}

export default FormEmployees;

const FormWrapper = styled.form`
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

const EntriesWrapper = styled.fieldset`
  border-radius: 0.4rem;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-family: "Comfortaa", cursive;
`;

const EntriesLegend = styled.legend`
  text-align: start;
  padding: 0 0.5rem 0 0.5rem;
`;

const SaveButton = styled.button`
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  width: 10rem;
  background: transparent;
  border: solid 1px white;
  border-radius: 1rem;
  color: white;
  z-index: 1;
  position: relative;
  
  &&:hover {
    background: purple;
  }
`;
