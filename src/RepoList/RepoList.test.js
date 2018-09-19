import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RepoList from './RepoList';

Enzyme.configure({ adapter: new Adapter() });

describe('<RepoList>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const list = [];
    ReactDOM.render(<RepoList list={list} actionButton={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders action button properly', () => {
    const div = document.createElement('div');
    const list = [{ id: 1, name: 'a', language: 'b', latestTag: 'c' }];
    const repoList = shallow(
      <RepoList list={list} actionButton={() => <div className="action" />} />
    );
    expect(repoList.contains(<div className="action" />)).toBe(true);
  });
});
