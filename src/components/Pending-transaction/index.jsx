import React from 'react';
import { TransacstionsSection } from '../MainPage/TransacstionsSection';
import { PendingExplorer } from './PendingExplorer';
import { TransactionPool } from './TransactionPool';
import { TransactionAll } from './TransactionAll';

export const PendingTransaction = () => {
  return (
    <>
      <div className=" ">
        {/* <Header /> */}
        <PendingExplorer />
        <div className="pb-20 px-[15px] container  mx-auto xl:max-w-[1320px]  ">
          <TransactionPool />
          <TransactionAll />
        </div>
      </div>
    </>
  );
};
