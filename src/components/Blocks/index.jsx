import React from 'react';
import { BlocksExplorer } from './BlocksExplorer';
import { TransactionAll } from './TransactionAll';
import TransactionPriceSection from './TransactionPool';

export const Blocks = () => {
  return (
    <>
      <div className=" ">
        {/* <Header /> */}
        <BlocksExplorer />
        <div className="pb-20 px-[15px] container  mx-auto xl:max-w-[1320px]  ">
          <TransactionAll />
        </div>
      </div>
    </>
  );
};
