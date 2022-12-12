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
        <FormLabel htmlFor="search">Search : </FormLabel>
        <FormInput
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
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-family: "Comfortaa", cursive;
  font-size: 1rem;
  color: white;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  font-size: 14px;
  margin-bottom: 0.5rem;
`;
