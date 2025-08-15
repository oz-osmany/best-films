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

interface Results {
  showing: Result[];
}

const Carousels = ({showing }: Results) => {

  
  return (
    <Carousel className="w-full h-[250px] carousel">
      <CarouselContent className="">
        {showing?.map( item => (
          <CarouselItem key={item.id} className="basis-1/2 md:basis-auto pl-2">
            <Cards {...item} />
            <div className='cards__name w-[150px] h-[42px] overflow-hidden'> {item.title || item.name} </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carousels;
