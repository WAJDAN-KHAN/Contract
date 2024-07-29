import React from 'react';

export const Explorer = () => {
  return (
    <div className="bg-[#081d35] pt-14 pb-20 bg-effec">
      <div className="2xl:container md:px-[20px] mx-auto px-[15px]">
        <div className="grid grid-cols-12  items-center">
          <div className="md:col-span-9 lg:col-span-7 col-span-12 mb-5">
            <h1 className="text-white text-[1.23046875rem] font-medium roboto mb-3">
              The Ethereum Blockchain Explorer
            </h1>
            <form action="" className="mb-3">
              <div className="rounded bg-white p-1.5 gap-2 flex items-center">
                <div className="hidden sm:block">
                  <select name="" className=" form-select outline-none text-[.9375rem] border-0" id="">
                    <option selected="" value="0">
                      All Filters
                    </option>
                    <option value="1">Addresses</option>
                    <option value="2">Tokens</option>
                    <option value="3">Name Tags</option>
                    <option value="6">Domain Names</option>
                    <option value="4">Labels</option>
                    <option value="5">Websites</option>
                  </select>
                </div>
                <div className="flex-grow-[1] relative">
                  <input
                    id="search-panel"
                    type="text"
                    class="form-control text-[.9375rem] border-0 pe-8 outline-none"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                    aria-describedby="button-header-search"
                    name="q"
                    maxlength="68"
                  />
                </div>
                <div className="">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <img src="/assets/search.png" alt="" />
                  </button>
                </div>
              </div>
            </form>
            <p className="text-white text-opacity-75 text-[14.4992px] mb-0 noindex-section inline-block">
              <span className="inline">
                <b>Sponsored:</b>&nbsp;
                <img src="/assets/rollbit_20.png" className="align-middle inline " alt="Rollbit logo" /> <b>Rollbit</b>:
                Sweet Bonanza 1000 now available 🍬 Instant deposits &amp; withdrawals!&nbsp;
                <a
                  href="#"
                  target="_blank"
                  rel="nofollow"
                  className="text-[#0784c3]"
                  title="Links to an External Advertiser site"
                >
                  <b>Play Now!</b>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
