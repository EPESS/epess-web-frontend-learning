'use client';

import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignOutButton } from '@clerk/nextjs';
import { useMe, useMeStore } from '@/hooks/use-me';

export function UserNav() {
  const { user } = useMe();
  const setUser = useMeStore((state) => state.setUser);

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='relative h-8 w-8 rounded-full'
              >
                <Avatar className='h-8 w-8 bg-slate-50'>
                  <AvatarImage src={user?.avatarUrl} alt='Avatar' />
                  <AvatarFallback className='bg-transparent'></AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='bottom'>Profile</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none mb-1.5'>
              {user?.name}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Button
          asChild
          onClick={handleSignOut}
          className='w-full'
          variant='outline'
        >
          <SignOutButton redirectUrl='/auth/sign-in'>
            <DropdownMenuItem className='hover:cursor-pointer'>
              <p className='flex items-center gap-2'>
                <LogOut className='w-4 h-4 text-muted-foreground' />
                <span>Sign out</span>
              </p>
            </DropdownMenuItem>
          </SignOutButton>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
