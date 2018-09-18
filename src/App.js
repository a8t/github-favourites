import React, { Component } from 'react';
import RepoList from './RepoList/RepoList';
import SearchBar from './SearchBar/SearchBar';
import './App.css';

class App extends Component {
  state = {
    results: [{ name: 'hi', language: 'haskell', latestTag: 'goodbye' }],
  };

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favourites</h1>
        </header>
        <main>
          <section className="App-search">
            <SearchBar />
            <RepoList results={results} itemAction={1} />
          </section>
          <section className="App-favourites">
            <RepoList results={results} itemAction={1} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
