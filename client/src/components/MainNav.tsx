import { Button } from './ui/button';

const MainNav = () => {
  return (
    <Button
      variant={'ghost'}
      className='font-bold text-red-500 border border-red-500 hover:text-white hover:bg-red-500'
    >
      Login
    </Button>
  );
};

export default MainNav;
