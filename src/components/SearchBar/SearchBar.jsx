/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; */

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
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
{/*         <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button> */}
      </form>
    </header>
  );
};
export default SearchBar;
