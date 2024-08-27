const Footer = () => {
  return (
    <div className='bg-red-500 py-10'>
      <div>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-col gap-y-1'>
            <h1 className='text-2xl font-bold text-white'>Food App</h1>
            <p className='text-white text-sm'>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <a href='#' className='text-white'>
              Terms of Service
            </a>
            <a href='#' className='text-white'>
              Privacy Policy
            </a>
          </div>
        </div>
        <div className='container mx-auto mt-4 text-center'></div>
      </div>
    </div>
  );
};

export default Footer;
