/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useTable, useFilters } from "react-table";

function Table() {
  const [filterInput, setFilterInput] = useState("");

  const data = React.useMemo(
    () => [
      {
        col1: "Big Mac + Fries",
        col2: "$20",
      },
      {
        col1: "Spicy McCrispy + Fries",
        col2: "$25",
      },
      {
        col1: "Cheese Burger + Fries",
        col2: "$22",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Deals",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Price",
        accessor: "col2",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters);

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("col1", value);
    setFilterInput(value);
  };

  return (
    <div className="w-1/2 float-left p-10">
      <div>
        <input
          className="mb-5 border pl-2"
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="Search Deals"
        />
        <table
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...getTableProps()}
          className="w-full border border-black shadow-lg"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...column.getHeaderProps()}
                    className="p-3 border border-black bg-black text-white"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="p-2 border border-white bg-red-700 text-white"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
