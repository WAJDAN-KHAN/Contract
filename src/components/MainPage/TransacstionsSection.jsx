import React from 'react';

export const TransacstionsSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-4 lg: ">
        <div className="lg:col-span-6 col-span-12 mb-4 ">
          <div
            className="h-full flex flex-col border border-[#e9ecef] rounded-[0.75rem]"
            style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
          >
            <div
              className="p-[1rem] border-b border-[#e9ecef] flex justify-between items-center"
              style={{ borderRadius: 'cal(0.75rem - (1px)) cal(0.75rem - (1px)) 0 0' }}
            >
              <h2 className="roboto text-[.9375rem] mb-0 font-medium">Latest Blocks</h2>
              <button class="bg-white text-[12.5625px] flex items-center hover:bg-gray-100 text-gray-800 font-semibold py-[0.25rem] px-[0.25rem] border border-[#e9ecef] rounded-[0.375rem] shadow">
                <img src="/assets/menu.png" className="  h-auto w-full me-1" alt="" />
                Customize
              </button>
            </div>
            <div className="p-[1rem]" style={{ flex: '1 1 auto' }}>
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/cube.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden flex-row items-center gap-1">
                      <span className="text-[14.4992px] font-normal">Block</span>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        Fee Recipient
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          beaverbuild
                        </a>
                      </div>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        187 txns
                      </a>
                      <span class="text-[.875em] text-[#6c757d] mx-2">in 12 secs</span>
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/cube.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden flex-row items-center gap-1">
                      <span className="text-[14.4992px] font-normal">Block</span>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        Fee Recipient
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          Titan Builder
                        </a>
                      </div>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        187 txns
                      </a>
                      <span class="text-[.875em] text-[#6c757d] mx-2">in 12 secs</span>
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>03195 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/cube.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden flex-row items-center gap-1">
                      <span className="text-[14.4992px] font-normal">Block</span>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        Fee Recipient
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          beaverbuild
                        </a>
                      </div>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        187 txns
                      </a>
                      <span class="text-[.875em] text-[#6c757d] mx-2">in 12 secs</span>
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/cube.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden flex-row items-center gap-1">
                      <span className="text-[14.4992px] font-normal">Block</span>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        Fee Recipient
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          Titan Builder
                        </a>
                      </div>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        187 txns
                      </a>
                      <span class="text-[.875em] text-[#6c757d] mx-2">in 12 secs</span>
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>03195 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/cube.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden  md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden flex-row items-center gap-1">
                      <span className="text-[14.4992px] font-normal">Block</span>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        20363599
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        Fee Recipient
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          Titan Builder
                        </a>
                      </div>
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                        187 txns
                      </a>
                      <span class="text-[.875em] text-[#6c757d] mx-2">in 12 secs</span>
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>03195 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href=""
              className="text-[#6c757d] text-center flex justify-center gap-2 text-cap font-medium bg-[#f8f9fa] w-full p-[1rem] border-t border-[#e9ecef]"
              style={{ borderRadius: ' 0 0 cal(0.75rem - (1px)) cal(0.75rem - (1px)) ' }}
            >
              View all blocks
              <img src="/assets/right-arrow.png" className="max-w-[12px] h-auto w-full object-contain" alt="" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 mb-4 ">
          <div
            className="h-full flex flex-col border border-[#e9ecef] rounded-[0.75rem]"
            style={{ boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)' }}
          >
            <div
              className="p-[1rem] border-b border-[#e9ecef] flex justify-between items-center"
              style={{ borderRadius: 'cal(0.75rem - (1px)) cal(0.75rem - (1px)) 0 0' }}
            >
              <h2 className="roboto text-[.9375rem] mb-0 font-medium">Latest Blocks</h2>
              <button class="bg-white text-[12.5625px] flex items-center hover:bg-gray-100 text-gray-800 font-semibold py-[0.25rem] px-[0.25rem] border border-[#e9ecef] rounded-[0.375rem] shadow">
                <img src="/assets/menu.png" className="  h-auto w-full me-1" alt="" />
                Customize
              </button>
            </div>
            <div className="p-[1rem]" style={{ flex: '1 1 auto' }}>
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/notes.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto max-w-[7rem]">
                        0x48862adeb51bef8588ed36fa587f1dc09d9595a57e94326c2c2e0a81d83e5b67
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden   gap-1 roboto text-[14.4992px]">
                      TX#
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] max-w-[7rem] roboto">
                        0x887379018737c3b676f5a1d9ce2ea71205263229259890b46dffc08999d37216
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        From
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0xa83114A4...9F37fCCcb
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        To
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0x2f777e9f...6b448C711
                        </a>
                        <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                          0 Eth
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>04002 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/notes.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto max-w-[7rem]">
                        0x48862adeb51bef8588ed36fa587f1dc09d9595a57e94326c2c2e0a81d83e5b67
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden   gap-1 roboto text-[14.4992px]">
                      TX#
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] max-w-[7rem] roboto">
                        0x887379018737c3b676f5a1d9ce2ea71205263229259890b46dffc08999d37216
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        From
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0xa83114A4...9F37fCCcb
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        To
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0x2f777e9f...6b448C711
                        </a>
                        <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                          0<b>.</b>03195 Eth
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0<b>.</b>03195 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/notes.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto max-w-[7rem]">
                        0x48862adeb51bef8588ed36fa587f1dc09d9595a57e94326c2c2e0a81d83e5b67
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden   gap-1 roboto text-[14.4992px]">
                      TX#
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] max-w-[7rem] roboto">
                        0x887379018737c3b676f5a1d9ce2ea71205263229259890b46dffc08999d37216
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        From
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0xa83114A4...9F37fCCcb
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        To
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0x2f777e9f...6b448C711
                        </a>
                        <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                          0 04002 Eth
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0 04002 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/notes.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto max-w-[7rem]">
                        0x48862adeb51bef8588ed36fa587f1dc09d9595a57e94326c2c2e0a81d83e5b67
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden   gap-1 roboto text-[14.4992px]">
                      TX#
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] max-w-[7rem] roboto">
                        0x887379018737c3b676f5a1d9ce2ea71205263229259890b46dffc08999d37216
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        From
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0xa83114A4...9F37fCCcb
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        To
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0x2f777e9f...6b448C711
                        </a>
                        <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                          0 Eth
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mt-3.5 mb-3.5" />
              <div className="grid grid-cols-12  ">
                <div className="sm:col-span-4 col-span-12">
                  <div className="flex items-center gap-2">
                    <div className="hidden sm:flex p-3 rounded-[0.5rem] bg-[#f8f9fa] h-[3rem] w-[3rem] text-[#6c757d]">
                      <img src="/assets/notes.png" className="max-w-[48px] h-auto w-full" alt="" />
                    </div>
                    <div className="hidden md:flex flex-col items-center sm:items-start gap-1 sm:gap-0">
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto max-w-[7rem]">
                        0x48862adeb51bef8588ed36fa587f1dc09d9595a57e94326c2c2e0a81d83e5b67
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                    <div className="flex md:hidden   gap-1 roboto text-[14.4992px]">
                      TX#
                      <a href="" className="truncate text-[#0784c3] text-[14.4992px] max-w-[7rem] roboto">
                        0x887379018737c3b676f5a1d9ce2ea71205263229259890b46dffc08999d37216
                      </a>
                      <div className="text-[#6c757d] text-[.875em]">12 secs ago</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-8 col-span-12">
                  <div className="flex sm:justify-between items-end sm:items-center   relative">
                    <div className="pe-0 sm:pe-2">
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        From
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0xa83114A4...9F37fCCcb
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-1 roboto text-[14.4992px]">
                        To
                        <a href="" className="truncate text-[#0784c3] text-[14.4992px] roboto">
                          0x2f777e9f...6b448C711
                        </a>
                        <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                          0 Eth
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:block text-end ms-2 sm:ms-0">
                      <span className="badge text-black py-1.5 px-2 font-medium roboto border border-[#e9ecef] rounded-[0.375rem] text-[10.8744px]">
                        0 Eth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href=""
              className="text-[#6c757d] flex justify-center gap-2 text-center text-cap font-medium bg-[#f8f9fa] w-full p-[1rem] border-t border-[#e9ecef]"
              style={{ borderRadius: ' 0 0 cal(0.75rem - (1px)) cal(0.75rem - (1px)) ' }}
            >
              View all blocks
              <img src="/assets/right-arrow.png" className="max-w-[12px] h-auto w-full object-contain" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
