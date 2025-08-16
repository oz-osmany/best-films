import { showing } from '@/api/movies';
import Carousels from './Carousels';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

import { Result } from '@/api/type';
import { Pelis } from '@/api/api';

const Now = () => {
  const [showing, setShowing] = useState<Result[]>([]);

  useEffect(() => {
    const chargeMovies = async() =>{
      const resp = await Pelis();
      setShowing(resp);
    }

    chargeMovies();
  }, [])
  
  return (
    <div className="pt-[20px]">
      <h1 className="title mb-[5px]">Now showing</h1>
      <Carousels showing={showing} />
      <div>
        <Button className="w-full h-[48px] mb-[50px] bg-[#bdabab42] lg:hidden">
          All films now schowing
        </Button>
      </div>
    </div>
  );
};

export default Now;
