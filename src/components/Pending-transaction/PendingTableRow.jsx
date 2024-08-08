import React from 'react';

export const PendingTableRow = ({ sortedData }) => {
  return (
    <>
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
          <td className="py-5 px-4 border-none text-white text-sm flex items-center gap-1">
            <span style={{ color: row.col7.color }}>{row.col7.value}</span>
            <img src={row.col7.img} alt="" className="cursor-pointer" />
            <img src="/assets/tabler-icon-filter.svg" alt="" className="cursor-pointer" />
          </td>
          <td className="py-5 px-4 border-none">
            <div className="  text-white text-sm flex items-center gap-1">
              <span style={{ color: row.col8.color }}>{row.col8.value}</span>
              <img src={row.col8.img} alt="" className="cursor-pointer" />
              <img src="/assets/tabler-icon-filter.svg" alt="" className="cursor-pointer" />
            </div>
          </td>
          <td className="py-5 px-4 border-none text-white text-sm">{row.col9}</td>
        </tr>
      ))}
    </>
  );
};
