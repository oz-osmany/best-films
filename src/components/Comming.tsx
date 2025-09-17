import React, { useEffect, useState } from 'react';
import { InfoPeli, OficialResult } from '@/types/type';
import { Pelis, Trailer } from '@/api/api';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardHeader } from './ui/card';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export interface InfoPeliWithTrailers extends InfoPeli {
  movieTrailers: OficialResult[];
}
const Comming = () => {
  const [movies, setMovies] = useState<InfoPeliWithTrailers[]>([]);
  const { t } = useTranslation("home"); 
  

  useEffect(() => {
    const Scenes = async () => {
      const films: InfoPeli = await Pelis();
      const videos = Object.values(films).map(async (item) => {
        const videosRes: OficialResult[] = await Trailer(item.id);
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
    Scenes();
  }, []);

  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[20px]">{t("comming")}</h1>
      <Carousel className="w-full h-[250px] carousel">
        <CarouselContent className="">
          {movies?.map((item) => (
            <CarouselItem key={item.id} className="basis-1/2 md:basis-auto pl-2">
              <Card className="w-[150px] xl:w-[200px] xl:h-[250px]">
                <CardHeader className="p-0">
                  <Link to={`/movies/${item.id}`}>
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
        <Button className="w-full h-[48px] my-[25px] bg-[#bdabab42] lg:hidden">{t("all")}</Button>
      </div>
    </div>
  );
};

export default Comming;
