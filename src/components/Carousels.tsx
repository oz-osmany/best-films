import { Movie } from '../api/info';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Cards from './Cards';

interface Props {
  data: Movie[];
}

const Carousels = ({ data }: Props) => {
  return (
    <Carousel className="w-full h-[250px] carousel">
      <CarouselContent className="">
        {data.map((item) => (
          <CarouselItem key={item.id} className="basis-1/2 md:basis-auto pl-2">
            <Cards {...item} />
            <div> {item.title} </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carousels;
