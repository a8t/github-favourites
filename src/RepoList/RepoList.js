import React from 'react';
import PropTypes from 'prop-types';
import './RepoList.css';

const RepoList = props => {
  const { list, actionButton } = props;
  const rows = list.map(each => (
    <tr key={each.id} className="repo-list--row">
      <td>{each.name}</td>
      <td>{each.language}</td>
      <td>{each.latestTag}</td>
      {actionButton(each)}
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

RepoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      latestTag: PropTypes.string.isRequired,
    })
  ).isRequired,
  actionButton: PropTypes.func.isRequired,
};

export default RepoList;
