import React from 'react';

export const BlocksTableRow = ({ sortedData }) => {
  return (
    <>
      {sortedData.map((row, index) => (
        <tr key={index} className="hover:bg-[#262626]">
          <td className="py-5 px-4 border-none text-white text-sm flex items-center gap-1">
            <span style={{ color: row.col1.color }}>{row.col1.value}</span>
            <img src={row.col1.img} alt="" className="cursor-pointer" />
          </td>
          <td className="py-5 px-4 border-none text-[#46DB78] text-sm">{row.col2}</td>
          <td className="py-5 px-4 border-none text-[#fff] gap-2 text-sm flex items-center">
            <img src="/assets/tabler-icon-info-circle.svg" alt="" />
            {row.col3}
          </td>
          <td className="py-5 px-4 border-none text-[#46DB78] text-sm">{row.col4}</td>

          <td className="py-5 px-4 border-none text-white text-sm flex items-center gap-1">
            <span style={{ color: row.col5.color }}>{row.col5.value}</span>
            <img src={row.col5.img} alt="" className="cursor-pointer" />
          </td>
          <td className="border-none py-5 px-4">
            <div className=" border-none text-white text-sm flex items-center gap-1">
              <span style={{ color: row.col6.color }}>{row.col6.value}</span>
              <img src={row.col6.img} alt="" className="cursor-pointer" />
            </div>
          </td>
          <td className="py-5 px-4 border-none text-white text-sm">{row.col7}</td>
        </tr>
      ))}
    </>
  );
};
