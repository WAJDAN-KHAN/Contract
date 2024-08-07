import React, { useRef, useEffect, useState } from 'react';

const Dropdown = ({ label, items, isOpen, toggleDropdown }) => {
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({});

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const { bottom, height } = dropdownRef.current.getBoundingClientRect();
      const position = {};

      // Check if the dropdown is cutting off at the bottom
      if (bottom + height > window.innerHeight) {
        position.bottom = '100%'; // Open upwards
        position.top = 'auto';
      } else {
        position.top = '100%'; // Open downwards
        position.bottom = 'auto';
      }

      setDropdownPosition(position);
    }
  }, [isOpen]);

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="flex gap-[.25rem] cursor-pointer items-center py-[.25rem] text-[14px] rounded-[0.375rem] transition-all text-[#ADADAD] hover:text-white"
      >
        {label} <img src="/assets/down-arrow.png" alt="" />
      </div>
      {isOpen && (
        <div
          className="min-w-[18rem] z-[99] right-0 bg-white absolute md:mt-3 mt-[-20px] text-[.78515625rem] p-4 rounded-[0.5rem]"
          style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)', ...dropdownPosition }}
        >
          <div className="text-end text-[10.05px] text-[#6c757d] mt-n2 mb-1">Sponsored</div>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[#6c757d]">
                <a href="#" className="text-dark">
                  <div className="inline-flex items-center gap-2 mt-2">
                    <img width="24" src={item.imgSrc} alt="ads" />
                    <span className="text-[.9062rem] font-medium">{item.title}</span>
                  </div>
                  <div className="text-[#0784c3] font-medium mb-2 inline-block">
                    {item.description}
                    <span className="rounded-[50rem] py-1 px-2 text-[9.42188px] border border-[#e9ecef] text-[#0784c3] bg-opacity-10 bg-[#0784c31a]">
                      {item.cta}
                    </span>
                  </div>
                  <p className="mb-0 text-[12.5625px] font-normal">{item.details}</p>
                </a>
              </span>
              {index < items.length - 1 && <hr className="hr-space" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
