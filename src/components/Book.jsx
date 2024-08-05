import React from 'react';
import styled from 'styled-components';

const BookContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
const CenteredSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
`

const Book = ({ book, onDelete }) => {
  return (
    <BookContainer>
      <CenteredSpan>{book.title}</CenteredSpan>
      <button onClick={onDelete}>Delete</button>
    </BookContainer>
  );
};

export default Book;