import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar"
/* import Table from "../components/Table/Table" */
import EnhancedTable from "../components/Table/EnhancedTable";

function Employees() {
  const employees = useSelector((state) => state.employees.employees);
  const [searchResults, setSearchResults] = useState([...employees])

  return (
    <EmployeesWrapper>
      <EmployeesHeader>
        <EmployeesTitle>Current Employees</EmployeesTitle>
      </EmployeesHeader>
      <EmployeesMain>
        <SearchBar employees={employees} setSearchResults={setSearchResults}/>
        <EnhancedTable data={searchResults}/>
      </EmployeesMain>
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
const EmployeesMain = styled.main`
color:white;
`;
