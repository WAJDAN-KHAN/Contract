import React from 'react';

export const Pagination = () => {
  return (
    <div className="flex items-center justify-between  gap-3  bg-transparent px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 gap-3 sm:items-center sm:justify-between">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex gap-3 -space-x-px rounded-md shadow-sm">
            <a
              href="#"
              className="relative border border-gray-500 hover:border hover:border-transparent inline-flex items-center  rounded-[10px]  px-2 py-2 text-gray-400     hover:bg-[#FC0000]  "
            >
              {/* <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" /> */}
              <img src="/assets/chevron-left.svg" alt="" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-white     hover:bg-[#FC0000] focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex border-none rounded-[10px] items-center bg-[#FC0000]  px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex border-none items-center rounded-[10px] px-4 py-2 text-sm font-semibold text-white     hover:bg-[#FC0000]  "
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 rounded-[10px] py-2 text-sm font-semibold text-white     hover:bg-[#FC0000]   md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex border-none items-center rounded-[10px] px-4 py-2 text-sm font-semibold text-gray-700     focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 rounded-[10px] text-sm font-semibold text-white     hover:bg-[#FC0000]   md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex border-none items-center px-4  rounded-[10px]  py-2 text-sm font-semibold text-white     hover:bg-[#FC0000]  "
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex border-none items-center px-4 rounded-[10px] py-2 text-sm font-semibold text-white     hover:bg-[#FC0000]  "
            >
              10
            </a>
            <a
              href="#"
              className="relative border border-gray-500 inline-flex  hover:border-none items-center rounded-[10px] px-2 py-2 text-gray-400     hover:bg-[#FC0000]  "
            >
              <span className="sr-only">Next</span>
              {/* <ChevronRightIcon aria-hidden="true" className="h-5 w-5" /> */}
              <img src="/assets/chevron-right.svg" alt="" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
