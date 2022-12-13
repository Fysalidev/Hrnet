import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../components/searchBar/SearchBar";
import EnhancedTable from "../components/table/EnhancedTable";

function Employees() {
  const employees = useSelector((state) => state.employees.employees);
  const [searchResults, setSearchResults] = useState([...employees]);

  return (
    <EmployeesWrapper>
      <EmployeesHeader>
        <EmployeesTitle>Current Employees</EmployeesTitle>
      </EmployeesHeader>
      <EmployeesMain>
        <SearchBar employees={employees} setSearchResults={setSearchResults} />
        <EnhancedTable data={searchResults} />
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
  padding: 1rem;
  text-align: center;
`;

const EmployeesTitle = styled.h1`
  color: white;
  font-family: "Comfortaa", cursive;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const EmployeesMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
`;

const EmployeesFooter = styled.footer`
  text-align: center;
  & a {
    color: rgb(45, 49, 12);
    font-family: "Comfortaa", cursive;
    font-size: 16px;
    text-decoration: none;
  }
  & a:hover {
    color: rgb(21, 22, 6);
    font-weight: bold;
  }
`;
