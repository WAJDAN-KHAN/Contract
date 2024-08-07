import React from 'react'
import TransactionHero from './TransactionHero';
import TransactionPriceSection from './TransactionPriceSection';

const TransactionMain = () => {
  return (
    <>
        <TransactionHero />
      <div className="pb-20 2xl:container md:px-[20px] mx-auto px-[15px]">
        <TransactionPriceSection />
      </div>
    </>
  );
}

export default TransactionMain
