import styled from "styled-components";

const SearchBar = ({ employees, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const search = e.target.value;
    if (!search) return setSearchResults(employees);

    const resultsArray = employees.filter(
      (employee) =>
        employee.firstName.includes(search) ||
        employee.lastName.includes(search) ||
        employee.birthDate.includes(search) ||
        employee.startDate.includes(search) ||
        employee.street.includes(search) ||
        employee.city.includes(search) ||
        employee.state.includes(search) ||
        employee.zipCode.includes(search) ||
        employee.department.includes(search)
    );

    setSearchResults(resultsArray);
  };

  return (
    <Wrapper>
      <Form className="search" onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="search">Search :</label>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
      </Form>
    </Wrapper>
  );
};
export default SearchBar;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const Form = styled.form`
max-width: 300px;
`;

