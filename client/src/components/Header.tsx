import { Link } from 'react-router-dom';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <div className='border-b-2 border-b-red-100 p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to={'/'}
          className='text-2xl font-bold text-gray-800 tracking-tight'
        >
          Food App
        </Link>

        <div className='md:hidden'>
          <MobileNav />
        </div>

        <div className='hidden md:block'>
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
