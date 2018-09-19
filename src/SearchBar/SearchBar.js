import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = props => {
  const { handleSearch, handleClear } = props;

  const submitSearch = async e => {
    e.preventDefault();
    const response = await fetch(
      `https://api.github.com/search/repositories?q="${e.target.previousSibling.value}"`
    );
    const jsonResponse = await response.json();
    const results = await Promise.all(
      jsonResponse.items.slice(0, 10).map(async each => {
        const tagsUrl = each.tags_url;
        const tagsResponse = await fetch(tagsUrl);
        const tagsJson = await tagsResponse.json();
        const latestTag = (await tagsJson[0]) ? tagsJson[0].name : '';
        return {
          id: each.id,
          name: each.full_name,
          language: each.language,
          latestTag: latestTag,
        };
      })
    );
    handleSearch(await results);
  };

  return (
    <form className="search-bar">
      <input
        onChange={e => {
          if (e.target.value.length === 0) {
            handleClear();
          }
        }}
        className="search-bar--input"
        type="text"
        placeholder="Search"
      />
      <button className="search-bar--button" onClick={submitSearch}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
