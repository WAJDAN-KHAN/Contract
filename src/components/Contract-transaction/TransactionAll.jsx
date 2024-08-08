import React, { useState } from 'react';
import Table from './Table';
import { Pagination } from './Pagination';

const tableHeading = [
  {
    id: 1,
    name: 'Block',
    color: 'white',
  },
  {
    id: 2,
    name: 'Age',
    color: 'white',
  },
  {
    id: 3,
    name: 'Parent Transaction Hash',
    color: 'white',
  },
  {
    id: 4,
    name: 'Type',
    color: '#ffff',
  },
  {
    id: 5,
    name: 'From',
    color: '#ffff',
  },
  {
    id: 6,
    name: 'To',
    color: '#ffff',
  },
  {
    id: 7,
    name: 'Amount',
    color: '#46DB78',
  },
];

export const TransactionAll = () => {
  const [data, setData] = useState([
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: '8',
      col3: '2 secs ago',
      col4: '2100',
      col5: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col6: {
        value: '0x9Dd44195...DFa2Ddd15',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col7: '2 secs ago',
    },
    // Add more rows as needed
  ]);
  return (
    <div className="mt-10 ">
      <div
        className="card py-5    mb-4   rounded-[0.75rem] bg-[#121212]"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="p-5 flex items-center justify-center md:justify-between md:flex-row flex-col gap-4 text-center md:text-start">
          <div>
            <h1 className="text-white font-semibold text-[20px]">A total of 114,474 pending txns found</h1>
            <p className="text-[#A5A5AB] font-normal text-[16px] mt-2">Showing the last 10000 records</p>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-[#FF0F0F]  flex items-center gap-1    font-medium rounded-lg text-sm px-[20px] py-[10px]    "
            >
              <img src="/assets/file-download.png" alt="" />
              Download Page Data
            </button>
          </div>
        </div>
        <div className="overflow-hidden overflow-x-auto">
          <Table tableHeading={tableHeading} data={data} />
        </div>
        <div className="py-3 px-5 flex justify-between items-center   flex-col-reverse  md:flex-row ">
          <Pagination />
          <div className="flex items-center gap-3 flex-col-reverse md:flex-row ">
            <div>
              <p className="text-sm text-white">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div className="p-[10px] cursor-pointer flex gap-2 bg-transparent border border-gray-500 rounded-[10px] text-white text-[14px] ">
              Show page 1 of 888{' '}
              <span>
                <img src="/assets/chevron-up.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
