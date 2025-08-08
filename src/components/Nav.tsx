import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Film, Pin, Book, Wallet, User, Search, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils'; //cn() is a function for conditioning, combining, and cleaning CSS classes, especially useful when using Tailwind CSS in projects with shadcn/ui and React.

const Nav = () => {
  const linkClass = () => {
    return cn('text-sm lg:text-lg font-medium transition-colors hover:text-primary text-white ');
  };
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center w-[900px]">
        <NavigationMenu className="max-w-full nav-list z-11">
          <Button className="hidden lg:block lg:w-[50px] lg:bg-gray-60 lg:mr-14">
            <Search />
          </Button>
          <NavigationMenuList className="flex-1 justify-around w-full lg:justify-between lg:gap-8">
            <NavigationMenuItem className="flex flex-col ">
              <Button className="bg-transparent lg:hidden">
                <Film className="w-5 h-5 mr-2" />
              </Button>
              <Link to="/" className={linkClass()}>
                Movies
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex flex-col">
              <Button className="bg-transparent lg:hidden">
                <Pin className="w-5 h-5 mr-2" />
              </Button>
              <Link to="/peliculas" className={linkClass()}>
                Cinemas
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex flex-col">
              <Button className="bg-transparent lg:hidden">
                <Book className="w-5 h-5 mr-2" />
              </Button>
              <Link to="/streaming" className={linkClass()}>
                Club
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex flex-col">
              <Button className="bg-transparent lg:hidden">
                <Wallet className="w-5 h-5 mr-2" />
              </Button>
              <Link to="/contacto" className={cn(linkClass(), 'block lg:hidden')}>
                Wallet
              </Link>
              <Link to="/contacto" className={cn(linkClass(), 'hidden lg:block')}>
                Subscription
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex flex-col">
              <Button className="bg-transparent lg:hidden">
                <User />
              </Button>
              <Link to="/contacto" className={linkClass()}>
                Acount
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center">
        <div className="px-4">
          <Link to="" className={cn(linkClass(), 'hidden lg:block text-white')}>
            Create an account
          </Link>
        </div>
        <Button className="hidden lg:block lg:w-[50px] lg:bg-gray-60 lg:mr-4">
          <User />
        </Button>
        <Button className="hidden lg:flex lg:w-[50px] lg:bg-gray-60 lg:mr-4">
          EN
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
