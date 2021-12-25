import React, { Component } from "react";
class TableHeader extends React.Component {
  renderSortIcon = (column) => {
    if (this.props.sortColumn.path !== column.path) return null;
    else if (this.props.sortColumn.sort === "asc")
      return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path}
              onClick={() => this.props.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
