import React from 'react';
import './SearchBar.css';

const delet = e => {
  e.preventDefault();
  console.log(e.target.previousSibling.value);
};

const SearchBar = props => (
  <form className="search-bar">
    <input className="search-bar--input" type="text" placeholder="Search" />
    <button className="search-bar--button" onClick={delet}>
      Search
    </button>
  </form>
);

export default SearchBar;
