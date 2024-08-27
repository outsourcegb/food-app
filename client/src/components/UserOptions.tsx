import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth0 } from '@auth0/auth0-react';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const UserOptions = () => {
  const { logout, user } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-red-500 gap-2'>
        <CircleUserRound className='w-6 h-6 text-red-500' />

        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48'>
        <DropdownMenuItem>
          <Link to={'/user-profile'} className='hover:text-red-500'>
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button
            className='flex flex-1 font-bold bg-red-500'
            onClick={() => logout()}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserOptions;
