import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { UnionTypes } from '@/types/Information';
import { useCinemaStore } from '@/store/cinemaStore';

import { PelisId } from '@/api/api';
import InfoAccordion from './InfoAccordion';
import InfoTicket from './InfoTicket';
import { useSchedule } from '@/store/schedule';
import Nav from './Nav';
import { Button } from './ui/button';
import { ChevronDown, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const LayoutBooking = () => {
  const location = useLocation();
  const { id } = useParams();
  const [film, setFilm] = useState<UnionTypes>();
  const { selectedCinema } = useCinemaStore();
  const [seat, setSeat] = useState(true);
  const { day, time } = useSchedule();

  useEffect(() => {
    const detailMovie = async () => {
      if (id) {
        const resp = await PelisId(parseInt(id));
        setFilm(resp);
      }
    };
    detailMovie();
  }, []);
  const linkClass = () => {
      return cn('text-sm lg:text-lg font-medium transition-colors hover:text-primary text-white ');
    };
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[884px] h-full overflow-y-auto">
      <header className="absolute z-20 top-0 left-0 right-0 flex justify-between items-center md:bottom-full md:p-0 w-full h-[50px] lg:h-[80px]  ">
        <div className="w-full lg:w-[60px] h-auto">
          <div className="w-[40px] md:w-[60px] ml-[16px]">
            <img src="/assets/branch.png" alt="branch Oz" />
          </div>
          <Nav />
        </div>
        <nav className="flex mr-[16px]">
          <div className="hidden md:flex items-center md:justify-end md:w-[650px] md:h-[50px]">
            <div className="px-4">
              <Link to="" className={cn(linkClass(), 'hidden md:block text-white')}>
                Create an account
              </Link>
            </div>
            <Button className="hidden md:flex lg:w-[50px] btn md:mr-2">
              <User />
            </Button>
            <Button className="hidden md:flex lg:w-[50px] btn md:mr-2">
              EN
              <ChevronDown />
            </Button>
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
      <aside className="h-full lg:w-[25%]">
        <div className="relative z-0 h-[400px] lg:h-[57%] w-full overflow-hidden">
          {/* <div className="relative z-0 h-[400px] lg:h-[473px] w-full overflow-hidden"> */}
          <div
            className="absolute inset-0 w-full h-full lg:h-full"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${film?.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="absolute w-full h-full bg-[#40405a57]"></div>
          <div className="banner__title flex-col">
            <div className="w-[35%] h-[200px] ">
              <img
                src={`https://image.tmdb.org/t/p/original${film?.poster_path}`}
                alt={`Film ${film?.original_title}`}
                className="rounded-[10px]"
              />
            </div>
            <div className="px-3 text-center">
              <h1>
                <strong>{film?.title} </strong>{' '}
              </h1>
            </div>
            <Link to={'/'}>
              <div className="btn mt-3">Change film</div>
            </Link>
          </div>
        </div>
        {location.pathname.startsWith('/booking/ticket') ? (
          <InfoTicket day={day} time={time} />
        ) : (
          <InfoAccordion />
        )}
      </aside>

      <main
        className={`${seat ? 'relative w-full lg:w-[75%] bg-white rounded-t-[10px] lg:rounded-none pb-[200px]' : 'hidden'} `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutBooking;
