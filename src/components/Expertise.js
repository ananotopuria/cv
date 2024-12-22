import React, { forwardRef } from 'react';

const Expertise = forwardRef(({ data }, ref) => {
  return (
    <div className="expertise mt-10" ref={ref}>
      <ul className="expertise-list">
        {data.map((item, index) => (
          <li key={index} className="mb-10 flex items-start">
            <div className="mr-4 w-40 text-[#222935]">
              <div className="mb-2 text-lg font-semibold">
                {item.info.company}
              </div>
              <span className="text-base text-[#667081]">{item.date}</span>
            </div>
            <div className="expertise-info">
              <div className="text-md font-bold text-[#222935]">{item.info.job}</div>
              <p className="text-[#222935]" style={{ fontSize: '14px' }}>{item.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Expertise;

