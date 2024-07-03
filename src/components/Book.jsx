import React from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Book = ({ book, onDelete }) => {
  return (
    <BookContainer>
      <span>{book.title}</span>
      <button onClick={onDelete}>Delete</button>
    </BookContainer>
  );
};

export default Book;