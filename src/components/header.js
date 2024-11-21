import React from 'react';
import Search from './search';

const Header = ({ title, setQuery }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>

        <div className="d-flex">
          <Search setQuery={setQuery} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
