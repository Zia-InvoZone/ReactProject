import React, { useState } from 'react';
import { useTable, useFilters } from 'react-table';

function Table() {
  const [filterInput, setFilterInput] = useState('');
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('col1', value);
    setFilterInput(value);
  };

  const data = React.useMemo(
    () => [
      {
        col1: 'Big Mac + Fries',
        col2: '$20',
      },
      {
        col1: 'Spicy McCrispy + Fries',
        col2: '$25',
      },
      {
        col1: 'Cheese Burger + Fries',
        col2: '$22',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Deals',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
        accessor: 'col2',
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
  console.log('table instance', useTable({ columns, data }));
  return (
    <div>
      <input
        className="mb-5 border pl-2"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search Deals'}
      />
      <table
        {...getTableProps()}
        className="w-full border border-black shadow-lg"
      >
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  key={i}
                  {...column.getHeaderProps()}
                  className="p-3 border border-black bg-black text-white"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      key={i}
                      {...cell.getCellProps()}
                      className="p-2 border border-white bg-red-700 text-white"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
