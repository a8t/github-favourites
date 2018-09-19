import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('handles state changes properly', () => {
    const app = shallow(<App />);
    const appInstance = app.instance();
    const result = {
      id: 1,
      name: 'a',
      language: 'b',
      latestTag: 'c',
    };
    appInstance.setResults([result]);
    expect(app.state()).toEqual({ results: [result], favourites: [] });
    appInstance.clearResults();
    expect(app.state()).toEqual({ results: [], favourites: [] });
    appInstance.setResults([result]);
    appInstance.addFavourite(result);
    expect(app.state()).toEqual({ results: [result], favourites: [result] });
    appInstance.removeFavourite(result.id);
    expect(app.state()).toEqual({ results: [result], favourites: [] });
  });
});
