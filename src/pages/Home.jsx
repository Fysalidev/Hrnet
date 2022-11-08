import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EmployeesForm from "../components/form/FormEmployees";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader>
        <HeaderTitle>HRNet</HeaderTitle>
        <HeaderNav>
          <Link to="/employees">View Current Employees</Link>
        </HeaderNav>
      </HomeHeader>
      <HomeMain>
        <EmployeesForm />
      </HomeMain>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vm;
  & h1 {
    color: white;
    font-family: "Comfortaa", cursive;
    font-size: 3rem;
    font-weight: bold;
  }
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

const HomeHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Roboto Flex", sans-serif;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderNav = styled.nav`
  padding: 1rem;
`;

const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
