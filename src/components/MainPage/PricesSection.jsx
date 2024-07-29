import React from 'react';

export const PricesSection = () => {
  return (
    <div className=" ">
      <div
        className="card py-5  mb-4 mt-[-3rem] rounded-[0.75rem] bg-white"
        style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
      >
        <div className="grid grid-cols-12 gap-4 md:gap-0">
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px]">
            <div className="flex">
              <div className="text-center me-3 w-[20px]">
                <img src="/assets/ethereum-original.svg" className="mx-auto max-w-full h-auto" alt="" />
              </div>
              <div className="flex-grow">
                <div class="text-cap mb-[1px]">Ether Price</div>
                <a
                  class="text-[#081d35] hover:text-[#066a9c] text-[.9375rem]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $3,450.91<span class="text-[#6c757d]"> @ 0.051567 BTC</span>
                  <span class="text-[#dc3545] text-[.875em]"> (-1.93%)</span>
                </a>
              </div>
            </div>
            <hr class="my-5" />
            <div className="flex">
              <div className="text-center me-3 w-[20px]">
                <img src="/assets/world.png" className="mx-auto max-w-full h-auto" alt="" />
              </div>
              <div className="flex-grow">
                <div class="text-cap mb-[1px]">MARKET CAP</div>
                <a
                  class="text-[#081d35] hover:text-[#066a9c] text-[.9375rem]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $416,842,701,688.00
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div className="flex">
              <div className="text-center me-3 w-[20px]">
                <img src="/assets/ethereum-original.svg" className="mx-auto max-w-full h-auto" alt="" />
              </div>
              <div className="flex-grow">
                <div class="text-cap mb-[1px]">TRANSACTIONS</div>
                <a
                  class="text-[#081d35] hover:text-[#066a9c] text-[.9375rem]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  2,449.39 M<span class="text-[#6c757d]"> (14.5 TPS)</span>
                </a>
              </div>
              <div className="text-end">
                <div class="text-cap mb-[1px]">MED GAS PRICE</div>
                <a
                  class="text-[#081d35] hover:text-[#066a9c] text-[.9375rem]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  5 Gwei <span class="text-[#6c757d]"> ($0.36)</span>
                </a>
              </div>
            </div>
            <hr class="my-5" />
            <div className="flex">
              <div className="text-center me-3 w-[20px]">
                <img src="/assets/world.png" className="mx-auto max-w-full h-auto" alt="" />
              </div>
              <div className="flex-grow">
                <div class="text-cap mb-[1px]">LAST FINALIZED BLOCK</div>
                <a
                  class="text-[#081d35] hover:text-[#066a9c] text-[.9375rem]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  20363522
                </a>
              </div>
              <div className="text-end">
                <div class="text-cap mb-[1px]">LAST SAFE BLOCK</div>
                <a
                  class="text-[#081d35] hover:text-[#066a9c] text-[.9375rem]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  20363553
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div class="text-cap mb-[1px]">TRANSACTION HISTORY IN 14 DAYS</div>
            <div className="w-100 pt-2 h-[105px]">
              <img src="/assets/svgexport-9.svg" className="max-w-full h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
