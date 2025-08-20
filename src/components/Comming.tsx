import React, { useEffect, useState } from 'react';
import { InfoPeli, Result, Resultados } from '@/types/type';
import { Pelis, Trailer } from '@/api/api';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardHeader } from './ui/card';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export interface InfoPeliWithTrailers extends InfoPeli {
  movieTrailers: Resultados[];
}
const Comming = () => {
  // const [showing, setShowing] = useState<Result[]>([]);

  const [movies, setMovies] = useState<InfoPeliWithTrailers[]>([]);

  useEffect(() => {
    const Escenas = async () => {
      const films: InfoPeli = await Pelis();
      const videos = Object.values(films).map(async (item) => {
        const videosRes: Resultados = await Trailer(item.id);
        const now = new Date();
        const week = new Date();
        week.setDate(now.getDate() - 60);

        const movieTrailers = videosRes?.filter((video) => {
          const release_date = video.published_at && new Date(video.published_at);
          return (
            video.type === 'Trailer' &&
            video.site === 'YouTube' &&
            release_date >= week &&
            release_date <= now
          );
        });
        if (movieTrailers.length === 0) return null;
        return {
          ...item,
          movieTrailers,
        };
      });
      const moviesWithTrailers = await Promise.all(videos);
      const filtered = moviesWithTrailers.filter(
        (movie): movie is InfoPeliWithTrailers => movie !== null
      );

      setMovies(filtered);
    };
    Escenas();
  }, []);

  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[5px]">Comming soon</h1>
      {/* <Carousels showing={showing} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">
          All upcoming movies
        </Button>
      </div> */}
      <Carousel className="w-full h-[250px] carousel">
        <CarouselContent className="">
          {movies?.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2 md:basis-auto pl-2">
              <Card className="w-[150px] xl:w-[200px] xl:h-[250px]">
                <CardHeader className="p-0">
                  <Link to={`/movies/${item.id} `}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt=""
                      className="rounded-[0.75rem] w-full h-[200px] xl:h-[250px]"
                    />
                  </Link>
                </CardHeader>
              </Card>
              <div className="cards__name w-[150px] h-[42px] overflow-hidden"> {item.title} </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">All specials</Button>
      </div>
    </div>
  );
};

export default Comming;
