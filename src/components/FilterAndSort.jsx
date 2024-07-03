import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
`;

const FilterAndSort = ({ onFilterChange, onSortChange }) => {
  return (
    <Container>
      <input onChange={(e) => onFilterChange(e.target.value)}>
      </input>
      <Select onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort by</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </Container>
  );
};

export default FilterAndSort;
