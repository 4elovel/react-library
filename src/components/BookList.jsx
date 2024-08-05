import React, { useEffect } from "react";
import styled from "styled-components";
import Book from "./Book";

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookList = ({ books, onDelete, addInitialBooks }) => {
  useEffect(() => {
    addInitialBooks([
      { title: "Test1" },
      { title: "Test2" },
      { title: "Test3" },
      { title: "Test4" },
      { title: "Test5" },
    ]);
  }, []);
  return (
    <List>
      {books.map((book, index) => (
        <Book key={index} book={book} onDelete={() => onDelete(index)} />
      ))}
    </List>
  );
};
export default BookList;
