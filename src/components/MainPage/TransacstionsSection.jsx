import React from 'react';
import customIcon from '../assets1/customIcon.svg';
import { BlockContent } from './BlockContent';
import { TransactionContent } from './TransactionContent';

const latestBlocks = [
  {
    id: 1,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: 'Oxlf9090aa...8e676c326',
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id: 2,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: 'Oxlf9090aa...8e676c326',
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id: 3,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: 'Oxlf9090aa...8e676c326',
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id: 4,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: 'Oxlf9090aa...8e676c326',
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
  {
    id: 5,
    tokens: 23453674,
    beforeTime: 4,
    dummyValue: 'Oxlf9090aa...8e676c326',
    txns: 164,
    inTime: 12,
    algo: 0.0127,
  },
];
const latestTransaction = [
  {
    id: 1,
    dummyCode: 'Oxeabfcb0114b... ',
    beforeTime: 4,
    fromDummyValue: 'oxl f9090aa...8e676c326',
    toDummyValue: ' OxD6E4aA93...da06F9cEf',
    algo: 0.0127,
  },
  {
    id: 2,
    dummyCode: 'Oxeabfcb0114b... ',
    beforeTime: 4,
    fromDummyValue: 'oxl f9090aa...8e676c326',
    toDummyValue: ' OxD6E4aA93...da06F9cEf',
    algo: 0.0127,
  },
  {
    id: 3,
    dummyCode: 'Oxeabfcb0114b... ',
    beforeTime: 4,
    fromDummyValue: 'oxl f9090aa...8e676c326',
    toDummyValue: ' OxD6E4aA93...da06F9cEf',
    algo: 0.0127,
  },
  {
    id: 4,
    dummyCode: 'Oxeabfcb0114b... ',
    beforeTime: 4,
    fromDummyValue: 'oxl f9090aa...8e676c326',
    toDummyValue: ' OxD6E4aA93...da06F9cEf',
    algo: 0.0127,
  },
  {
    id: 5,
    dummyCode: 'Oxeabfcb0114b... ',
    beforeTime: 4,
    fromDummyValue: 'oxl f9090aa...8e676c326',
    toDummyValue: ' OxD6E4aA93...da06F9cEf',
    algo: 0.0127,
  },
];
export const TransacstionsSection = () => {
  return (
    <div className="bg-[#000] mt-10">
      <div className="grid grid-cols-12 gap-4  lg: ">
        {/* left side */}
        <div className="lg:col-span-6 col-span-12 mb-4 bg-[#000]">
          <div className="h-full flex flex-col bg-[#101010] rounded-[0.75rem] border-[#262626]">
            {/* title */}
            <div
              className="p-[16px]   bg-[#262626] flex justify-between items-center"
              style={{
                borderRadius: '18px 18px 0 0',
              }}
            >
              <h2 className="roboto text-[18px] text-[white] mb-0 font-medium">Latest Blocks</h2>
              <a href="/home">
                <button class="bg-[#FF0F0F] text-[14px] text-[white] flex items-center font-normal py-[0.25rem] px-[0.35rem] rounded-[0.375rem] shadow">
                  <img src={customIcon} className=" h-auto w-full me-1" alt="" />
                  Customize
                </button>
              </a>
            </div>

            {/*end of title */}
            <TransactionContent latestBlocks={latestBlocks} />
            <a
              href=""
              className="text-[14px] text-[#FAFAFA] font-normal flex justify-center gap-2 text-center py-[0.8rem] px-[1.6rem] border-[0.5px] border-[#262626] mx-auto mb-6 rounded-md"
            >
              View all blocks
              <img src="/assets/right-arrow.png" className="max-w-[12px] h-auto w-full object-contain" alt="" />
            </a>
          </div>
        </div>
        {/* end of left side */}
        {/* right side */}
        <div className="lg:col-span-6 col-span-12 mb-4 bg-[#000]">
          <div className="h-full flex flex-col border-[#262626] bg-[#101010]  rounded-[0.75rem]">
            {/* title */}
            <div
              className="p-[16px]   bg-[#262626] flex justify-between items-center"
              style={{
                borderRadius: '18px 18px 0 0',
              }}
            >
              <h2 className="roboto text-[18px] text-[white] mb-0 font-medium">Latest Transaction</h2>
              <a href="/home">
                <button class="bg-[#FF0F0F] text-[14px] text-[white] flex items-center font-normal py-[0.25rem] px-[0.35rem] rounded-[0.375rem] shadow">
                  <img src={customIcon} className=" h-auto w-full me-1" alt="" />
                  Customize
                </button>
              </a>
            </div>
            {/* end of title */}

            <BlockContent latestTransaction={latestTransaction} />
            <a
              href=""
              className="text-[14px] text-[#FAFAFA] font-normal flex justify-center gap-2 text-center py-[0.8rem] px-[1.6rem] border-[0.5px] border-[#262626] mx-auto mb-6 rounded-md"
            >
              View all blocks
              <img src="/assets/right-arrow.png" className="max-w-[12px] h-auto w-full object-contain" alt="" />
            </a>
          </div>
        </div>
        {/* end of */}
      </div>
    </div>
  );
};
