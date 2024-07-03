import React, { useState } from 'react';
import styled from 'styled-components';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import FilterAndSort from './components/FilterAndSort';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
`;

const App = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSortChange = (sort) => {
    setSort(sort);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sort === 'asc') {
      return a.title.localeCompare(b.title);
    } else if (sort === 'desc') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <Container>
      <h1>Book Library</h1>
      <AddBookForm onAdd={addBook} />
      <FilterAndSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <BookList books={sortedBooks} onDelete={deleteBook} />
    </Container>
  );
};

export default App;