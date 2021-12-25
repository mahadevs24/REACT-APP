import React, { Component } from "react";
import _ from "lodash";

class TableBody extends React.Component {
  rederCell(currentItem, column) {
    if (column.content) return column.content(currentItem);
    return _.get(currentItem, column.path);
  }

  createKey(item, column) {
    console.log("hiii", item._id + (column.path || column.key));
    return item._id + (column.path || column.key);
  }

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {" "}
                {this.rederCell(item, column)}{" "}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
