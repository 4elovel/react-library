import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookList = ({ books, onDelete }) => {
  return (
    <List>
      {books.map((book,index) => (
        <Book key={index} book={book} onDelete={() => onDelete(index)} />
      ))}
    </List>
  );
};

export default BookList;
