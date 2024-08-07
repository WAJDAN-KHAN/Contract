import React, { useState } from 'react';
import sortAsc from '../assets1/Vector.png';
import sortDesc from '../assets1/Vector.png';

const Table = ({ tableHeading, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-transparent">
        <thead>
          <tr className="w-full bg-[#262626]">
            {tableHeading.map((header, index) => (
              <th
                key={index}
                className={`py-6 px-4 bg-[#262626] border-none text-left text-[14px] font-medium cursor-pointer`}
                style={{ color: header.color }}
                onClick={() => requestSort(`col${index + 1}`)}
              >
                <div className="flex items-center">
                  {header.img && header.name == 'Transaction Hash' ? (
                    <img src={header.img} alt="" className="ml-1" />
                  ) : (
                    ''
                  )}
                  {header.name}
                  {header.img && header.name == 'Method' ? <img src={header.img} alt="" className="ml-1" /> : ''}
                  <img
                    src={
                      sortConfig.key === `col${index + 1}`
                        ? sortConfig.direction === 'ascending'
                          ? sortAsc
                          : sortDesc
                        : sortAsc
                    }
                    alt="Sort Icon"
                    className="ml-2 w-[7px] h-[9px] object-contain"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} className="hover:bg-[#262626]">
              <td className="py-5 px-4 border-none text-white text-sm flex items-center gap-1">
                <span style={{ color: row.col1.color }}>{row.col1.value}</span>
                <img src={row.col1.img} alt="" className="cursor-pointer" />
              </td>
              <td className="py-5 px-4 border-none text-white text-sm">
                {row.col2 == 'Transfer' && (
                  <button className="bg-[#171717] border border-gray-500 rounded-[4px] text-white text-[12px] px-[15px] py-[5px]">
                    {row.col2}
                  </button>
                )}
              </td>
              <td className="py-5 px-4 border-none text-[#46DB78] text-sm">{row.col3}</td>
              <td className="py-5 px-4 border-none text-white text-sm">{row.col4}</td>
              <td className="py-5 px-4 border-none text-[#46DB78] text-sm">{row.col5}</td>
              <td className="py-5 px-4 border-none text-white text-sm">{row.col6}</td>

              <td className="py-5 px-4 border-none text-white text-sm">{row.col7}</td>
              <td className="py-5 px-4 border-none text-white text-sm">{row.col8}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
