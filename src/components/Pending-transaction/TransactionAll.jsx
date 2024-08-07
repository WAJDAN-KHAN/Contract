import React, { useState } from 'react';
import Table from '../ui/Table';
import { Pagination } from '../ui/Pagination';

const tableHeading = [
  {
    id: 1,
    name: 'Transaction Hash',
    color: 'white',
  },
  {
    id: 2,
    name: 'Method',
    color: 'white',
    img: '/assets/tabler-icon-info-circle.svg',
  },
  {
    id: 3,
    name: 'Nonce',
    color: 'white',
  },
  {
    id: 4,
    name: 'Last Seen',
    color: 'white',
  },
  {
    id: 5,
    name: 'Gas Limit',
    color: '#46DB78',
  },
  {
    id: 6,
    name: 'Gas Price',
    color: '#46DB78',
    img: '/assets/tabler-icon-info-circle.svg',
  },
  {
    id: 7,
    name: 'From',
    color: 'white',
  },
  {
    id: 8,
    name: 'To',
    color: 'white',
  },
  {
    id: 9,
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
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
    },
    {
      col1: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col2: 'Transfer',
      col3: '8',
      col4: '2 secs ago',
      col5: '21000',
      col6: '0.02 Gwei',
      col7: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },

      col8: {
        value: '0x5ca348623be...',
        img: '/assets/tabler-icon-files.svg',
        color: '#46DB78',
      },
      col9: '0.00038325 Algo',
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
            <h1 className="text-white font-semibold text-[20px]">A total of 114,429 pending txns found</h1>
            <p className="text-[#A5A5AB] font-normal text-[16px] mt-2">Showing the last 10000 records</p>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-[#FF0F0F]  flex items-center gap-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-[20px] py-[10px]   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <img src="/assets/file-download.png" alt="" />
              Download Page Data
            </button>
          </div>
        </div>
        <div className="overflow-hidden overflow-x-auto">
          <Table tableHeading={tableHeading} data={data} />
        </div>
        <div className="py-3 px-5 flex justify-between items-center flex-col md:flex-row ">
          <Pagination />
          <div className="flex items-center gap-3 ">
            <div>
              <p className="text-sm text-white">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
