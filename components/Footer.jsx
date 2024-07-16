const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-blue-700 py-4'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0 text-white'>
          <a href='mailto:dev.aungkyawhtwe@gmail.com'>Contact</a>
        </div>

        <div>
          <p className='text-sm text-white mt-2 md:mt-0'>
            {currentYear} Ounch &copy;  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
