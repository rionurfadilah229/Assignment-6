import React, { useState } from 'react';

const Search = ({ setQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="search"
        className="form-control me-2"
        placeholder="Search movies..."
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-outline-light" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;