import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

describe('<SearchBar>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar handleClear={() => {}} handleSearch={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
