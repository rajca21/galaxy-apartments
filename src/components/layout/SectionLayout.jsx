import React from 'react';

const SectionLayout = ({ children }) => {
  return (
    <div className='px-[20px] sm:px-[40px] lg:px-[100px] 2xl:px-[250px] py-[100px]'>
      {children}
    </div>
  );
};

export default SectionLayout;
