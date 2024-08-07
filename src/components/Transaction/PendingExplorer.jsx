import React from 'react';
import coin from '../assets1/coin.png';

export const PendingExplorer = () => {
  return (
    <div className="bg-[#081d35] h-[400px] py-[40px]    bg-effec">
      <div className="px-[15px]   container  mx-auto xl:max-w-[1320px]  ">
        <div className="grid grid-cols-12 lg:py-[40px]">
          <div className="text-white col-span-12 md:col-span-4">
            <h1 className="font-bold text-[40px]">Transactions</h1>
            <p className="text-gray-200">Excluded Uncles as a result oF “Chain Reorganizations”</p>
          </div>
          <div className="text-white  col-span-12 md:col-span-8">
            <div className="flex items-center mt-20">
              <p className="text-[14px] flex items-center flex-wrap">
                <strong>Featured:</strong>
                <img src="/assets/green-dot.png" alt="" className="mx-1" />
                <span className="text-gray-200 mr-2">
                  Trade 30+ Crypto - BTC, ETH, SOL, MOG, WIF. 1,000x leverage, instant execution!
                </span>
                <a href="#" className="text-[#46DB78]  underline">
                  Trade Now!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
