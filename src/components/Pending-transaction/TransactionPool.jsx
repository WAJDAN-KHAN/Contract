import React from 'react';

export const TransactionPool = () => {
  return (
    <div className=" ">
      <div
        className="card py-10 px-5  mb-4 mt-[-3rem] rounded-[0.75rem] bg-[#121212]"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="flex items-center gap-4  justify-center md:justify-between lg:flex-row flex-col ">
          <div className="md:max-w-[244px] max-w-full ">
            <img src="/assets/contain.svg" className="max-w-full  w-full h-auto" alt="" />
          </div>
          <div className="md:max-w-[637px] w-full max-w-full ml-auto">
            <div className="w-full relative gap-3 bg-[#171717] rounded-[8px] p-[15px] flex items-center">
              <div className="w-[40px] cursor-pointer h-[40px] hidden md:flex rounded-[4px]  justify-center bg-[#202020] items-center">
                <img src="/assets/Icon.png" alt="" />
              </div>
              <input
                type="text"
                className="w-full bg-transparent outline-none text-white text-[14px] placeholder:text-[#757575]"
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              />
              <button
                type="button"
                className="text-white bg-[#FF0F0F]  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm h-[40px] w-[59px]   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
