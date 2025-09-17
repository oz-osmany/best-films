import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router';
import Nav from './Nav';
import { Button } from '@/components/ui/button';
import {  Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useIdiom } from '@/store/idiom';

const Layout = () => {

    const { selectIdiom } = useIdiom();
    const { t, i18n } = useTranslation("home");

    useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const change = (e: any) => {
    i18n.changeLanguage(e.target.value);
    selectIdiom(e.target.value)
  }

  
  const linkClass = () => {
    return cn('text-sm lg:text-lg font-medium transition-colors hover:text-primary text-white ');
  };

  return (
    <div className="min-h-screen h-screen bg-[linear-gradient(to_bottom,_#121212_0%,_#1a1a1a_500px,_#000_100%)]">
      <header className="absolute z-20 top-0 left-0 right-0 flex justify-between items-center md:bottom-full md:p-0 w-full h-[50px] lg:h-[80px]  ">
        <div className="w-full lg:w-[60px] h-auto">
          <div className="w-[40px] md:w-[60px] ml-[16px]">
            <img src="/assets/branch.png" alt="branch Oz" />
          </div>
          <Nav />
        </div>
        <nav className="flex mr-[16px] z-40">
          <div className="hidden md:flex items-center md:justify-end md:w-[650px] md:h-[50px]">
            <div className="px-4">
              <Link to="" className={cn(linkClass(), 'hidden md:block text-white')}>
                {t("account")}
              </Link>
            </div>
            <Button className="hidden md:flex lg:w-[50px] btn md:mr-2">
              <User />
            </Button>
            {/* <Button className="hidden md:flex lg:w-[50px] btn md:mr-2">
              EN
              <ChevronDown />
            </Button> */}
            <select
              className="btn !py-[6px] lg:py-[12px] md:mr-2"
              value={i18n.language }
              onChange={(e) =>change(e)}
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
            <Button className="btn lg:w-[50px] lg:bg-gray-60 mr-[10px] lg:mr-14">
              <Search />
            </Button>
          </div>
          <div className="flex md:hidden">
            <Button className="btn lg:w-[50px] lg:bg-gray-60 mr-[10px] lg:mr-14">
              <Search />
            </Button>
            <Button className="btn bg-transparent lg:hidden">
              <User />
            </Button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
