import { Movie } from '../api/info';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Cards from './Cards';
import { InfoPeli, Result } from '@/api/type';
import { showing } from '../api/movies';
import { CinemaWithMovies } from '@/api/typeCinema';

interface Results {
  showing: CinemaWithMovies;
}

const Carousels = ({ showing }: Results) => {
  return (
    <Carousel className="w-full h-[250px] carousel">
      <CarouselContent className="">
        {showing?.movies.map( item => (
          <CarouselItem key={item.id} className="basis-1/2 md:basis-auto pl-2">
            <Cards {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carousels;
