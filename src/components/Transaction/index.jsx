import React from 'react';
import { PendingExplorer } from './PendingExplorer';
import { TransactionAll } from './TransactionAll';
import TransactionPriceSection from '../Contract-transaction/TransactionPool';

export const Transaction = () => {
  return (
    <>
      <div className=" ">
        {/* <Header /> */}
        <PendingExplorer />
        <div className="pb-20 px-[15px] container  mx-auto xl:max-w-[1320px]  ">
          <TransactionPriceSection />
          <TransactionAll />
        </div>
      </div>
    </>
  );
};
