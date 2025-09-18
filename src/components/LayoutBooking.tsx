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
import { ArrowBigLeft, ArrowLeft, ChevronDown, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIdiom } from '@/store/idiom';
import { useTranslation } from 'react-i18next';

const LayoutBooking = () => {
  const location = useLocation();
  const { id } = useParams();
  const [film, setFilm] = useState<UnionTypes>();
  const { selectedCinema } = useCinemaStore();
  const [seat, setSeat] = useState(true);
  const { selectedDay, time } = useSchedule();
  const { selectedIdiom } = useIdiom();
  const { t } = useTranslation("movie");

  useEffect(() => {
    const detailMovie = async () => {
      if (id) {
        const resp = await PelisId(parseInt(id),selectedIdiom);
        setFilm(resp);
      }
    };
    detailMovie();
  }, []);
  const linkClass = () => {
      return cn('text-sm lg:text-lg font-medium transition-colors hover:text-primary text-white ');
    };
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[884px] h-full overflow-y-auto pt-[218px]">
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
          <Link to="/" className="absolute left-4 top-3 z-40 p-2 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/60">
            <ArrowLeft  className=' cursor:pointer'/>
          </Link>
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
              <div className="btn mt-3">{t("change")}</div>
            </Link>
          </div>
        </div>
        {location.pathname.startsWith('/booking/ticket') ? (
          <InfoTicket selectedDay={selectedDay} time={time} />
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
