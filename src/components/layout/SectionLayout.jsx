const SectionLayout = ({ children, bgColor, smPy = '100px' }) => {
  return (
    <div
      className={`${bgColor} px-[20px] sm:px-[40px] lg:px-[100px] 2xl:px-[250px] sm:py-[100px]`}
      style={{ paddingTop: smPy, paddingBottom: smPy }}
    >
      {children}
    </div>
  );
};

export default SectionLayout;
