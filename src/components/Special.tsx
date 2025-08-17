import React, { useEffect, useState } from 'react';
import Carousels from './Carousels';
import { showing } from '@/api/movies';
import { Button } from './ui/button';
import { specials } from '../api/movies';
import { Result } from '@/api/type';
import { Pelis, Trend } from '@/api/api';
import { CinemaWithMovies } from '@/api/typeCinema';
import { assignMoviesToCinemas } from '@/helpers/mixer';
import { useCinemaStore } from '@/store/cinemaSotre';

const Special = () => {
  const [showing, setShowing] = useState<CinemaWithMovies[]>([]);
    const { selectedCinema} = useCinemaStore();
  
    useEffect(() => {
      const chargeMovies = async() =>{
        const resp = await Trend();
        const mixer = assignMoviesToCinemas(resp);
        setShowing(mixer);
      }
  
      chargeMovies();
    }, [])
  return (
    <div className="border-t-2 border-[#31292942] pt-[20px]">
      <h1 className="title mb-[5px]">Special&Events</h1>
      <p className='movie__sub text-[15px] text-gray-500 font-medium'>in {selectedCinema?.name} </p>

      <Carousels showing={showing[0]} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">All specials</Button>
      </div>
    </div>
  );
};

export default Special;
