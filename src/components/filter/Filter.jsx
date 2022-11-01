import PropTypes from 'prop-types';

export const Filter = ({ onFilterChange, filterValue }) => {
  return (
    <label>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
};
