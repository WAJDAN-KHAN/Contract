import React from 'react';
import coin from '../assets1/coin.png';

export const ContractExplorer = () => {
  return (
    <div className=" h-[400px] py-[40px]    bg-effec">
      <div className="px-[15px]   container  h-full flex items-center w-full   mx-auto xl:max-w-[1320px]  ">
        <div className=" w-full">
          <div className="text-white text-center md:text-start ">
            <h1 className="font-bold text-[24px] md:text-[40px]">Contract Internal Transactions</h1>
            <p className="text-gray-200">Excluded Uncles as a result oF “Chain Reorganizations”</p>
          </div>
          <div className="text-white  ">
            <div className="flex items-center justify-end md:mt-5 mt-4  md:text-start">
              <p className="text-[14px] flex gap-2 items-center  ">
                <strong>Featured:</strong>
                <img src="/assets/green-dot.png" alt="" className="mx-1" />
                <div className="flex flex-col md:flex-row ">
                  <span className="text-gray-200 mr-2">
                    Trade 30+ Crypto - BTC, ETH, SOL, MOG, WIF. 1,000x leverage, instant execution!
                  </span>
                  <a href="#" className="text-[#46DB78]  underline">
                    Trade Now!
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
