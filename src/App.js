import React, { Component } from 'react';
import RepoList from './RepoList/RepoList';
import SearchBar from './SearchBar/SearchBar';
import './App.css';

class App extends Component {
  state = {
    results: [],
    favourites: [],
  };

  setResults = resultsList => {
    this.setState({
      results: resultsList,
    });
  };

  clearResults = () => {
    this.setState({
      results: [],
    });
  };

  addFavourite = repo => {
    this.setState(prevState => {
      const { favourites } = prevState;
      return {
        favourites: [...favourites, repo],
      };
    });
  };

  removeFavourite = id => {
    this.setState(prevState => {
      const { favourites } = prevState;
      return {
        favourites: favourites.filter(each => each.id !== id),
      };
    });
  };

  render() {
    const { results, favourites } = this.state;
    const ids = favourites.map(each => each.id);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favourites</h1>
        </header>
        <main>
          <section className="App-search">
            <SearchBar handleClear={this.clearResults} handleSearch={this.setResults} />
            <RepoList
              list={results}
              actionButton={row => {
                const handleClick = () => {
                  this.addFavourite(row);
                };
                return (
                  !ids.includes(row.id) && (
                    <td className="action-text" onClick={handleClick}>
                      Add
                    </td>
                  )
                );
              }}
            />
          </section>
          <section className="App-favourites">
            <RepoList
              list={favourites}
              actionButton={row => {
                const handleClick = () => {
                  this.removeFavourite(row.id);
                };
                return (
                  <td className="action-text" onClick={handleClick}>
                    Remove
                  </td>
                );
              }}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
