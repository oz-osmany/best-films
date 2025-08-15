import { cinemas } from '../api/cinemas';
import { showing } from '@/api/movies';
import { Cinema, cinema, DayName } from '@/api/typeCinema';
import BookNow from '@/components/BookNow';
import Footer from '@/components/Footer';
import NoFilms from '@/components/NoFilms';
import Search from '@/components/Search';
import { Button } from '@/components/ui/button';
import { Filter, ListTodo, SlidersHorizontal, ThumbsUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../api/info';
import { Result } from '@/api/type';
import { PelisId } from '@/api/api';
import { Todo } from '@/api/Information';

type DayNames = keyof typeof cinema.list;
const Movies = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState<string | null>(null);
      const [film, setFilm] = useState<Todo>()


  useEffect(() => {
    const detailMovie = async () =>{
      if(id){
        const resp = await PelisId(parseInt(id));
        setFilm(resp);

      }
    }
    detailMovie();
  }, [])
  


  const checkDay = (cinemaId: string, day: DayNames) => {
    const found = cinemas.find((c) => c.id === cinemaId);
    return found?.list ? found.list[day] : [];
  };

  const days: DayName[] = ['today', 'tomorrow', 'day1', 'day2', 'day3', 'day4', 'day5', 'day6'];
  const filterMovie = showing.find((item) => item.id === id);

  return (
    <div className="relative z-0 h-[56%] md:h-[400px] lg:h-[580px] w-full">
      <div
        className="absolute right-0 w-full lg:w-[65%] h-[300px] lg:h-[600px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${film?.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="gradient"></div>
      <div className="movie lg:mx-0">
        <div className="mb-4">
          <h1 className="title">{filterMovie?.title}</h1>
        </div>
        <div className="flex justify-between lg:justify-start w-full">
          <button className="movie__btn lg:mr-2">
            <ListTodo className="mr-2 w-[20px]" />
            <span className="text-[16px] lg:text-[16px] font-bold"> My watchlist</span>
          </button>
          <button className="movie__btn">
            <ThumbsUp className="mr-2 w-[20px]" />
            <span className="text-[16px] lg:text-[16px] font-bold">Rate</span>
          </button>
        </div>
        <div className="flex flex-col items-start w-full">
          <div>
            <p>Informaciones como like</p>
          </div>
          <div>
            <p>Release day: {filterMovie?.release_day} </p>
            <p> {filterMovie?.description} </p>
            <p>Infos, trailers & details</p>
          </div>
        </div>
      </div>
      <div className="separador top-[170px] lg:bottom-[-290px] lg:top-[470px]"></div>
      <div>
        {/* Search */}
        <div className="content  mb-4">
          <Search />
        </div>
        <div className="content relative block md:hidden">
          <BookNow plus={false} />
        </div>
        {/* Schedule */}
        <div className="content flex items-center w-[720px] gap-[12px] p-3 ">
          <div className="flex items-center btn h-[40px] px-4">
            <SlidersHorizontal />
          </div>
          <div className="relative flex flex-1 items-center overflow-x-auto no-scrollbar scroll-smooth h-[50px]">
            <div className="flex flex-nowrap gap-[1px] items-center transition-transform duration-300 ease-out">
              {days.map((item) => {
                return (
                  <Button
                    className={
                      selected === item ? 'btn movie__selected movie_setting' : 'btn movie__setting'
                    }
                    onClick={() => checkDay('Filmpalast Berlin', item)}
                  >
                    {' '}
                    {item}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Screen on this day */}
      <section className="relative block">
        {days}
        <NoFilms />
      </section>
      <section className="w-full h-auto">
        <Footer />
      </section>
    </div>
  );
};

export default Movies;
