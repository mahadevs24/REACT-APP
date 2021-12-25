import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { columns, raiseSort, sortColumn, data } = props;
  console.log("hiii");
  console.log("hiii", columns);
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        raiseSort={raiseSort}
        sortColumn={sortColumn}
      />

      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
