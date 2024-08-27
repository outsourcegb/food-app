import { Separator } from '@/components/ui/separator';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className='w-6 h-6 text-red-500' />
      </SheetTrigger>
      <SheetContent className='space-y-4'>
        <SheetTitle>
          <span>Welcome to Food App</span>
        </SheetTitle>

        <Separator />

        <SheetDescription className='flex flex-col gap-4'>
          <Button
            variant={'ghost'}
            className='flex flex-1 font-bold bg-red-500 text-white 
            hover:bg-white hover:text-red-500 hover:border-red-500 border border-red-500'
          >
            Login
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
