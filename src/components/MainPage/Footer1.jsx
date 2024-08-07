import React from 'react'
import logo from "../assets1/logo.png"

const Footer1 = () => {
    const links = [
      { text: "Home" },
      { text: "About Us" },
      { text: "Bandwidth Miners" },
      {
        text: "Contact Addresses",
      },
      {
        text:"Brand Assets",
      },
    ];
        const links2 = [
          { text: "FAQ" },
          { text: "Careers" }
    ];
        const links3 = [
          { text: "Terms & Conditions" },
          { text: "Privacy Policy" },
          { text: "Return Policy" },
          {
            text: "Digital Item Policy",
          },
          {
            text: "Warranty Policy",
          },
          {
            text: "Affiliate Terms & Conditions",
          },
          {
            text: "Bought With Crypto Policy",
          },
        ];
  return (
    <div className="  2xl:container md:px-[20px] mx-auto px-[15px] bg-[#121212]">
      <div className="py-8 lg:py-10">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
          {/* first peace */}
          <div className=" md:col-span-4 col-span-2 flex flex-col md:gap-4 gap-3 ">
            <div className="flex items-center mb-3">
              <img src={logo} className=" h-auto me-2" alt="" />
            </div>
            <p class="text-[16px] text-[white] font-normal max-w-[300px]">
              Building a Decentralized Network of Decentralized Networks
            </p>
            <div className="">
              <p className="text-[18px] text-white font-semibold">
                Join The <span className="text-[#FF0F0F]">Evolution</span>
              </p>
              <form action="" className="mb-3 mt-1 -ml-4">
                <div className="rounded p-1.5 gap-0 flex items-center justify-center w-[19rem] max-w-[30rem]">
                  <div className="">
                    <input
                      type="text"
                      class="px-5 py-3 rounded-tl-lg rounded-bl-lg text-[.9375rem] border-0 outline-none"
                      autocomplete="off"
                      spellcheck="false"
                      placeholder="Enter Email Address"
                      aria-describedby="button-header-search"
                      name="q"
                      maxlength="68"
                    />
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="text-white bg-[#FF0F0F]  focus:ring-4 focus:ring-blue-300 font-medium rounded-tr-lg rounded-br-lg text-sm px-5 py-4   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <img src="/assets/search.png" alt="" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-1 md:col-span-5 col-span-3 sm:mr-8 mr-0 ">
            {/* company */}
            <div className="mb-5 md:mb-0">
              <h4 class="text-[24px] text-[#FFFFFF] font-semibold mb-3 ">
                Quick Links
              </h4>
              <ul className="list-none space-y-2 text-sm mb-0">
                {links.map((link, index) => (
                  <li key={index} className="relative mb-[.75rem]">
                    <a
                      href=""
                      className="text-[#FFFFFF] text-[15px] font-light hover:text-[#066a9c]"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" mb-5 md:mb-0">
              <h4 class="text-[24px] text-[#FFFFFF] font-semibold mb-3">
                Resources
              </h4>
              <ul className="list-none space-y-2 text-sm mb-0">
                {links2.map((links2, index) => (
                  <li key={index} className="relative mb-[.75rem]">
                    <a
                      href=""
                      className="text-[#FFFFFF] text-[15px] font-light hover:text-[#066a9c]"
                    >
                      {links2.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="  mb-5 md:mb-0">
              <h4 class="text-[24px] text-[#FFFFFF] font-semibold mb-3">
                Legal
              </h4>
              <ul className="list-none space-y-2 text-sm mb-0">
                {links3.map((links3, index) => (
                  <li key={index} className="relative mb-[.75rem]">
                    <a
                      href=""
                      className="text-[#FFFFFF] text-[15px] font-light hover:text-[#066a9c]"
                    >
                      {links3.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" flex flex-col col-span-2 gap-2.5 mb-10 md:mb-0">
            <h1 className="text-white text-[24px] font-semibold">
              FOLLOW US ON
            </h1>
            {/* social media links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[white]"
              >
                <img
                  src="/assets/facebook.svg"
                  className="max-w-[13px] w-full h-auto object-contain"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#292929]"
              >
                <img
                  src="/assets/instagram.png"
                  className="max-w-[13px] w-full h-auto object-contain"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#292929]"
              >
                <img
                  src="/assets/Frame1.svg"
                  className="max-w-[13px] w-full h-auto object-contain"
                  alt=""
                />
              </a>
              <a
                href="#"
                className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#292929]"
              >
                <img
                  src="/assets/Frame2.svg"
                  className="max-w-[13px] w-full h-auto object-contain"
                  alt=""
                />
              </a>
            </div>
            {/* social media links */}
          </div>
        </div>
      </div>
      {/* last */}
      <div className="py-4 border-t border-[#e9ecef]">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <p className="text-[#FDFFFC] text-center text-[16px] font-light">
            © Fry Networks LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer1
