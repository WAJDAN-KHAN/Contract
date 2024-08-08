import React from 'react';
import { ContractExplorer } from './ContractExplorer';
import { TransactionAll } from './TransactionAll';
import TransactionPriceSection from './TransactionPool';

export const ContractTransaction = () => {
  return (
    <>
      <div className=" ">
        {/* <Header /> */}
        <ContractExplorer />
        <div className="pb-20 px-[15px] container  mx-auto xl:max-w-[1320px]  ">
          <TransactionAll />
        </div>
      </div>
    </>
  );
};
