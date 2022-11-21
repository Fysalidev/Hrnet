import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table/Table";

function Employees() {
  return (
    <EmployeesWrapper>
      <EmployeesHeader>
        <EmployeesTitle>Current Employees</EmployeesTitle>
      </EmployeesHeader>
      <Table/>
      <EmployeesFooter>
        <Link to="/">Home</Link>
      </EmployeesFooter>
    </EmployeesWrapper>
  );
}

export default Employees;

const EmployeesWrapper = styled.div`
  height: 100vh;
  width: 100vm;
`;

const EmployeesHeader = styled.header`
  font-family: "Roboto Flex", sans-serif;
  padding: 1rem;
  text-align: center;
`;

const EmployeesTitle = styled.h1`
  color: white;
  font-family: "Comfortaa", cursive;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

const EmployeesFooter = styled.footer`
  text-align: center;
  & a {
    color: white;
    font-family: "Comfortaa", cursive;
    font-size: 1rem;
    text-decoration: none;
  }
  & a:hover {
    color: purple;
    font-weight: bold;
  }
`;
