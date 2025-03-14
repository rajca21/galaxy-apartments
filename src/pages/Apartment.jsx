const Apartment = () => {
  return (
    <div className='h-[calc(100vh-80px)] bg-primary w-full flex flex-col gap-2 items-center justify-center'>
      <img src={images.build} alt='building' className='size-40' />
      <p className='font-montserrat-semibold text-gray-text'>In process...</p>
    </div>
  );
};

export default Apartment;
