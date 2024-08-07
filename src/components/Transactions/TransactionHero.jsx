import React from 'react'
import coin from "../assets1/coin.png";


const TransactionHero = () => {
  return (
    <div className="bg-[#081d35] pt-14 pb-20 bg-effec">
      <div className="2xl:container md:px-[20px] mx-auto px-[15px]">
        <div className="">
          <div className="mb-5 flex flex-col gap-0">
            <h1 className="text-white md:text-start text-center sm:text-[32px] text-[40px] font-semibold roboto mb-1 ">
              Transactions
            </h1>
            <p className="text-[16px] md:text-start text-center text-[#A5A5AB] font-normal mb-5">
              Excluded Uncles as a result oF “Chain Reorganizations”
            </p>
          </div>
        </div>
        <p className="text-white text-opacity-75 sm:text-[14.4992px] text-[12px] text-center sm:text-end mb-0 ">
          <span className="inline">
            <b>Featured:</b>&nbsp;
            <img
              src={coin}
              className="align-middle inline "
              alt="Rollbit logo"
            />
            <b> Trade</b> 30+ Crypto - BTC, ETH, SOL, MOG, WIF. 1,000x leverage,
            instant execution!{" "}
            <a href="#" className="text-[#46DB78] underline">
              Trade Now!
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default TransactionHero
