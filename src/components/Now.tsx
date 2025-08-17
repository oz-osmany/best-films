import { showing } from '@/api/movies';
import Carousels from './Carousels';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

import { Result } from '@/api/type';
import { Pelis } from '@/api/api';
import { assignMoviesToCinemas } from '@/helpers/mixer';
import { cinema, CinemaWithMovies } from '@/api/typeCinema';
import { cinemas } from '@/api/cinemas';
import { useCinemaStore } from '@/store/cinemaSotre';


const Now = () => {
  const [showing, setShowing] = useState<CinemaWithMovies[]>([]);
  const { selectedCinema} = useCinemaStore();
  useEffect(() => {
    const chargeMovies = async() =>{
      const resp = await Pelis();
      const mixer = assignMoviesToCinemas(resp);
      setShowing(mixer);
    }

    chargeMovies();
  }, [])
  
  
  return (
    <div className="pt-[20px]">
      <h1 className="title ">Now showing</h1>
      <p className='movie__sub text-[15px] text-gray-500 font-medium'>in {selectedCinema?.name} </p>
      <Carousels showing={showing[0]} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">
          All films now schowing
        </Button>
      </div>
    </div>
  );
};

export default Now;
