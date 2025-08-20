import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Cards from './Cards';
import { CinemaWithMovies } from '@/types/typeCinema';

interface Results {
  showing: CinemaWithMovies;
}

const Carousels = ({ showing }: Results) => {
  return (
    <Carousel className="w-full h-[250px] carousel">
      <CarouselContent className="">
        {showing?.movies.map((item) => (
          <CarouselItem key={item.id} className="basis-1/2 md:basis-auto pl-2">
            <Cards {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carousels;
