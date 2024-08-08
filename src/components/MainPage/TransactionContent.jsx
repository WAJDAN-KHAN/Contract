import React from 'react';
import document from '../assets1/document.svg';
import navIcon from '../assets1/nav-green-icon.svg';
import box from '../assets1/box.svg';

export const TransactionContent = ({ latestBlocks }) => {
  return (
    <div className="p-[1rem]" style={{ flex: '1 1 auto' }}>
      {/* 0 block */}
      {latestBlocks.map((block, index) => {
        return (
          <>
            <div
              key={index}
              className={`grid grid-cols-12 rounded-[6px] p-4 ${block.id % 2 !== 0 ? 'bg-[]' : 'bg-[#1B1B1B]'}`}
            >
              <div className="sm:col-span-4 col-span-12">
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex p-2 rounded-[0.5rem] bg-[#252525] h-[3rem] w-[3rem] text-[#6c757d]">
                    <img src={box} className="max-w-[48px] h-auto w-full" alt="" />
                  </div>
                  <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                    <a href="" className="truncate text-[#46DB78] text-[12px] roboto">
                      {block.tokens}
                    </a>
                    <div className="text-[#A5A5AB] text-[12px]">{block.beforeTime} secs ago</div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-8 col-span-12">
                <div className="flex sm:justify-between items-end sm:items-center   relative">
                  <div className="pe-0 sm:pe-2">
                    <div className="flex flex-wrap gap-1 roboto text-[12px] text-[#D2D2D5]">
                      Fee Recipient
                      <a href="" className="truncate text-[#46DB78] text-[12px] roboto">
                        {block.dummyValue}
                      </a>
                    </div>
                    <a href="" className="truncate text-[#46DB78] text-[12px] roboto">
                      {block.txns} txns
                    </a>
                    <span class="text-[12px] text-[#6c757d] mx-2">in 12 secs</span>
                  </div>
                  <div className="hidden border items-center border-[#323B49] rounded-[0.375rem] sm:flex gap-1 py-1 px-1 text-end ms-2 sm:ms-0">
                    <span
                      className="badge text-white font-normal roboto 
                       text-[10.8744px]"
                    >
                      0.0127 Algo
                    </span>
                    <img src={navIcon} className="w-[22px] h-[22px]" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* <hr class="mt-3.5 mb-3.5" /> */}
          </>
        );
      })}
    </div>
  );
};
