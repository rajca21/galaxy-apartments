const PageFirstSectionLayout = ({ children, bgColor }) => {
  return (
    <div
      className={`${bgColor} px-[20px] sm:px-[40px] lg:px-[100px] 2xl:px-[250px] py-[20px] md:pt-[65px] md:pb-[100px]`}
    >
      {children}
    </div>
  );
};

export default PageFirstSectionLayout;
