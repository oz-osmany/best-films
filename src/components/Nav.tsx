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
    return cn(
      'text-sm md:text-[18px] lg:text-lg font-medium transition-colors hover:text-primary text-white '
    );
  };
  return (
    <div
      className="fixed lg:absolute bottom-0 lg:top-0 flex w-full md:h-[80px] bg-gradient-to-t from-gray-900 to-gray-700
                        lg:bg-black/10 lg:bg-none lg:from-none lg:to-none"
    >
      <NavigationMenu className="nav__menu w-full nav-list z-11 !max-w-full">
        <NavigationMenuList className="flex-1 justify-around w-full lg:justify-center lg:gap-8">
          <NavigationMenuItem className="flex flex-col ">
            <Button className="bg-transparent lg:hidden">
              <Film size={32} />
            </Button>
            <Link to="/" className={cn(linkClass(), 'block')}>
              Movies
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex flex-col">
            <Button className="bg-transparent lg:hidden">
              <Pin className="w-5 h-5 mr-2" />
            </Button>
            <Link to="/peliculas" className={cn(linkClass(), 'block')}>
              Cinemas
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex flex-col">
            <Button className="bg-transparent lg:hidden">
              <Book className="w-5 h-5 mr-2" />
            </Button>
            <Link to="/streaming" className={cn(linkClass(), 'block')}>
              Club
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex flex-col">
            <Button className="bg-transparent lg:hidden">
              <Wallet className="w-5 h-5 mr-2" />
            </Button>
            <div className="block lg:flex gap-8">
              <Link to="/contacto" className={cn(linkClass(), 'block')}>
                Wallet
              </Link>
              <Link to="/contacto" className={cn(linkClass(), 'hidden lg:block lg:block')}>
                Subscriptions
              </Link>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
