import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { UnionTypes } from '@/types/Information';
import { useCinemaStore } from '@/store/cinemaStore';

import { PelisId } from '@/api/api';
import InfoAccordion from './InfoAccordion';
import InfoTicket from './InfoTicket';
import { useSchedule } from '@/store/schedule';

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

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <aside className="relative lg:w-[20%] z-0 h-full">
        <div>
          <div className="relative z-0 h-[50%] md:h-[400px] lg:h-[700px] w-full overflow-hidden">
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
              <div>
                <h1>
                  <strong>{film?.title} </strong>{' '}
                </h1>
              </div>
              <div>
                <h2> {selectedCinema?.name} </h2>
              </div>
              <div className="btn mt-3">Change film</div>
            </div>
          </div>
          {location.pathname.startsWith('/booking/ticket') ? (
            <InfoTicket day={day} time={time} />
          ) : (
            <InfoAccordion />
          )}
        </div>
      </aside>

      <main
        className={`${seat ? 'relative z-40 w-full lg:w-[80%] bg-white rounded-[10px]' : 'hidden'} `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutBooking;
