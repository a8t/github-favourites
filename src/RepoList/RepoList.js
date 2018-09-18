import React from 'react';
import './RepoList.css';

const RepoList = props => {
  const rows = props.results.map(each => (
    <tr className="repo-list--row">
      <td>{each.name}</td>
      <td>{each.language}</td>
      <td>{each.latestTag}</td>
      <td className="action-text">Add</td>
    </tr>
  ));
  return (
    <table className="repo-list">
      <tbody>
        <tr className="repo-list--header">
          <th>Name</th>
          <th>Language</th>
          <th>Latest Tag</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export default RepoList;
