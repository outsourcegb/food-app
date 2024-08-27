import { Separator } from '@/components/ui/separator';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CircleUserRound, MenuIcon } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import MobileNavLinks from './MobileNavLinks';

const MobileNav = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='w-6 h-6 text-red-500' />
      </SheetTrigger>
      <SheetContent className='space-y-4'>
        <SheetTitle>
          {isAuthenticated ? (
            <span className='flex items-center font-bold gap-2'>
              <CircleUserRound className='w-6 h-6 text-red-500' />

              {user?.email}
            </span>
          ) : (
            <span>Welcome to Food App</span>
          )}
        </SheetTitle>

        <Separator />

        <SheetDescription className='flex flex-col gap-4'>
          {isAuthenticated ? (
            <>
              <MobileNavLinks />
            </>
          ) : (
            <Button
              variant={'ghost'}
              className='flex flex-1 font-bold bg-red-500 text-white 
            hover:bg-white hover:text-red-500 hover:border-red-500 border border-red-500'
              onClick={async () => await loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
