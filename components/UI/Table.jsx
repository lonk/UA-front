import React from 'react';
import PropTypes from 'prop-types';

import './Table.css';

/**
 * Displays a data table
 */
const Table = ({ columns, dataSource }) => {
  const columnsList = columns.map((column) => column.key);
  return (
    <div id="table">
      <table>
        <thead>
          <tr id="table-header">
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
          <tr id="divider">
            <td colSpan={columnsList.length}>
              <div className="divider" />
            </td>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row) => (
            <tr key={row.key}>
              {columnsList.map((column) => (
                <td key={row.key + row[column]}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  /**
   * Title and key of each column
   */
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.any.isRequired,
  })).isRequired,
  /**
   * Data for each row, must follow the key of each column
   */
  dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;