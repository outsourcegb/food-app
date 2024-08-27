import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to={'/user-profile'}
        className='flex hover:text-red-500 items-center font-bold'
      >
        Profile
      </Link>

      <Button
        className='flex flex-1 font-bold bg-red-500'
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
